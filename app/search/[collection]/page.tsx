import { getCollection, getCollectionProducts } from "lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductGridItems from "components/layout/product-grid-items";
import { defaultSort, sorting } from "lib/constants";

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });

  const collection = await getCollection(params.collection);

  return (
    <section>
      {collection && (
        <div className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
            Collection
          </p>
          <h1 className="text-4xl font-bold text-white">{collection.title}</h1>
          {collection.description && (
            <p className="mt-2 max-w-2xl text-sm text-neutral-500">
              {collection.description}
            </p>
          )}
        </div>
      )}
      {products.length === 0 ? (
        <p className="text-neutral-500">
          No products found in this collection.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </div>
      )}
    </section>
  );
}
