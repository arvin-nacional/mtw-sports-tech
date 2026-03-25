import { Suspense } from "react";

import { getCollections } from "lib/shopify";
import FilterList from "./filter";

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title="Collections" />;
}

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded-sm";

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-highest)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-highest)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-high)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-high)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-high)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-high)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-high)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-high)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-high)" }}
          />
          <div
            className={skeleton}
            style={{ backgroundColor: "var(--surface-container-high)" }}
          />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
