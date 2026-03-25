"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form
      action="/search"
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <input
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="text-md w-full bg-transparent px-4 py-2 text-sm focus:outline-none"
        style={{
          color: "var(--on-surface)",
          borderBottom: "1px solid rgba(42,58,92,0.4)",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderBottomColor = "var(--primary)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(142,213,255,0.15)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderBottomColor = "rgba(42,58,92,0.4)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full surface-container-low">
      <input
        placeholder="Search for products..."
        className="w-full bg-transparent px-4 py-2 text-sm"
        style={{
          color: "var(--primary)",
          opacity: 0.6,
          borderBottom: "1px solid rgba(42,58,92,0.4)",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}
