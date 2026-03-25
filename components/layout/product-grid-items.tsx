import { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => (
        <Link
          key={product.handle}
          href={`/product/${product.handle}`}
          prefetch={true}
          className="product-card group flex flex-col overflow-hidden rounded-xl"
          style={{ border: "1px solid rgba(42,58,92,0.15)" }}
        >
          {/* Image — no scale, tonal bg */}
          <div
            className="relative aspect-[4/3] w-full overflow-hidden"
            style={{ backgroundColor: "var(--surface-container-low)" }}
          >
            {product.featuredImage?.url ? (
              <Image
                src={product.featuredImage.url}
                alt={product.title}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
            ) : (
              <div
                className="flex h-full items-center justify-center text-xs uppercase tracking-widest"
                style={{ color: "var(--on-surface)", opacity: 0.2 }}
              >
                No image
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            {/* Data label chip */}
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--primary)", opacity: 0.7 }}
            >
              MTW Sports Tech
            </p>
            <h3
              className="font-display mb-2 text-base font-semibold"
              style={{ color: "var(--on-surface)" }}
            >
              {product.title}
            </h3>
            {product.description && (
              <p
                className="mb-4 line-clamp-2 text-sm leading-relaxed"
                style={{ color: "var(--on-surface)", opacity: 0.5 }}
              >
                {product.description}
              </p>
            )}
            <div className="mt-auto flex items-center justify-between">
              {/* Tertiary price — the "Critical Data" point */}
              <span
                className="text-lg font-bold"
                style={{ color: "var(--tertiary)" }}
              >
                {new Intl.NumberFormat("en-PH", {
                  style: "currency",
                  currency: product.priceRange.maxVariantPrice.currencyCode,
                }).format(Number(product.priceRange.minVariantPrice.amount))}
              </span>
              {/* Primary chip */}
              <span
                className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.05em] transition-colors"
                style={{
                  backgroundColor: "var(--surface-container-high)",
                  color: "var(--primary)",
                }}
              >
                View Details
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
