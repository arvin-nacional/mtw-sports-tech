"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { ListItem } from ".";
import { FilterItem } from "./item";

export default function FilterItemDropdown({
  list,
  defaultOpen = false,
}: {
  list: ListItem[];
  defaultOpen?: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState("");
  const [openSelect, setOpenSelect] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [defaultOpen]);

  useEffect(() => {
    list.forEach((listItem: ListItem) => {
      if (
        ("path" in listItem && pathname === listItem.path) ||
        ("slug" in listItem && searchParams.get("sort") === listItem.slug)
      ) {
        setActive(listItem.title);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <div className="relative" ref={ref}>
      {!defaultOpen && (
        <div
          onClick={() => setOpenSelect(!openSelect)}
          className="flex w-full items-center justify-between rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 hover:border-teal-500/50"
        >
          <div>{active}</div>
          <ChevronDownIcon className="h-4" />
        </div>
      )}
      {(openSelect || defaultOpen) && (
        <div
          onClick={() => {
            if (!defaultOpen) setOpenSelect(false);
          }}
          className={
            defaultOpen
              ? ""
              : "absolute z-40 w-full rounded-b-md border border-neutral-700 p-4 shadow-xl"
          }
          style={defaultOpen ? {} : { backgroundColor: "#111111" }}
        >
          {list.map((item: ListItem, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
