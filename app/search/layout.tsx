import Footer from "components/layout/footer";
import Collections from "components/layout/search/collections";
import FilterItemDropdown from "components/layout/search/filter/dropdown";
import { sorting } from "lib/constants";
import { Suspense } from "react";
import ChildrenWrapper from "./children-wrapper";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <div className="mx-auto flex max-w-(--breakpoint-2xl)">
        {/* Left: Collections sidebar */}
        <div
          className="hidden w-[200px] flex-none px-4 py-8 md:block"
          style={{
            minHeight: "100vh",
            backgroundColor: "var(--surface-container-low)",
            borderRight: "1px solid rgba(42,58,92,0.2)",
          }}
        >
          <Collections />
        </div>

        {/* Middle: Product grid */}
        <div className="flex-1 px-6 py-8">
          <div className="mb-4 block md:hidden">
            <Collections />
          </div>
          <Suspense fallback={null}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Suspense>
        </div>

        {/* Right: Sort column */}
        <div
          className="hidden w-[180px] flex-none px-4 py-8 md:block"
          style={{ borderLeft: "1px solid rgba(42,58,92,0.2)" }}
        >
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--primary)", opacity: 0.6 }}
          >
            Sort by
          </p>
          <Suspense fallback={null}>
            <FilterItemDropdown list={sorting} defaultOpen={true} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}
