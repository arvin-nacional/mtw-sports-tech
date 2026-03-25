import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const words = product.title.trim().split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  const tag =
    product.tags?.find((t) => !t.startsWith("nextjs-frontend")) || "Product";

  return (
    <div className="flex flex-col">
      {/* Tag chip */}
      <div className="mb-6">
        <span
          className="rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em]"
          style={{
            backgroundColor: "rgba(142,213,255,0.08)",
            color: "var(--primary)",
            border: "1px solid rgba(142,213,255,0.2)",
          }}
        >
          {tag}
        </span>
      </div>

      {/* Display title — first word on-surface, rest primary */}
      <h1
        className="mb-6 text-5xl font-bold leading-[1.05] lg:text-6xl"
        style={{ color: "var(--on-surface)" }}
      >
        {firstWord}
        {restWords && (
          <>
            {" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), var(--primary-container))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {restWords}
            </span>
          </>
        )}
      </h1>

      {/* Description */}
      {product.descriptionHtml ? (
        <div
          className="mb-8 max-w-lg"
          style={{ color: "var(--on-surface)", opacity: 0.6 }}
        >
          <Prose
            className="text-base leading-relaxed"
            html={product.descriptionHtml}
          />
        </div>
      ) : null}

      {/* Variants */}
      <VariantSelector options={product.options} variants={product.variants} />

      {/* Price + CTA row */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Price badge */}
        <div
          className="rounded-full px-5 py-2.5 text-base font-bold"
          style={{
            backgroundColor: "rgba(255,193,118,0.1)",
            color: "var(--tertiary)",
            border: "1px solid rgba(255,193,118,0.2)",
          }}
        >
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>

        {/* Add to Cart */}
        <div className="flex-1">
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
