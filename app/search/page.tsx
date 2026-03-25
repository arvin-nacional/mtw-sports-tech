import ProductGridItems from "components/layout/product-grid-items";
import { defaultSort, sorting } from "lib/constants";
import { getProducts } from "lib/shopify";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <>
      <div className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
          {searchValue ? "Search Results" : "All Products"}
        </p>
        <h1 className="text-4xl font-bold text-white">
          {searchValue ? (
            <>
              Showing results for{" "}
              <span className="text-teal-400">&quot;{searchValue}&quot;</span>
            </>
          ) : (
            <>
              Browse <span className="text-teal-400">Everything</span>
            </>
          )}
        </h1>
        {products.length > 0 && (
          <p className="mt-2 text-sm text-neutral-500">
            {products.length} {resultsText} found
          </p>
        )}
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </div>
      ) : (
        <p className="text-neutral-500">No products found.</p>
      )}
    </>
  );
}
