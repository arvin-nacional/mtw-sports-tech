"use client";

import type { SortFilterItem } from "lib/constants";
import { createUrl } from "lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ListItem, PathFilterItem } from ".";

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? "p" : Link;

  newParams.delete("q");

  return (
    <li className="mb-1" key={item.title}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className="flex w-full items-center rounded-full px-3 py-2 text-sm transition-colors"
        style={
          active
            ? {
                backgroundColor: "rgba(142,213,255,0.12)",
                color: "var(--primary)",
                fontWeight: 600,
              }
            : { color: "var(--on-surface)", opacity: 0.55 }
        }
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sort") === item.slug;
  const q = searchParams.get("q");
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    }),
  );
  const DynamicTag = active ? "p" : Link;

  return (
    <li className="mb-1" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className="flex w-full items-center rounded-full px-3 py-2 text-sm transition-colors"
        style={
          active
            ? {
                backgroundColor: "rgba(142,213,255,0.12)",
                color: "var(--primary)",
                fontWeight: 600,
              }
            : { color: "var(--on-surface)", opacity: 0.55 }
        }
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return "path" in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
}
