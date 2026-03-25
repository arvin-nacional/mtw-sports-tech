import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div
        className="mb-6 flex flex-col pb-6"
        style={{ borderBottom: "1px solid rgba(42,58,92,0.2)" }}
      >
        <p
          className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--primary)", opacity: 0.7 }}
        >
          Product
        </p>
        <h1
          className="font-display mb-4 text-5xl font-bold"
          style={{ color: "var(--on-surface)" }}
        >
          {product.title}
        </h1>
        <div
          className="mr-auto w-auto rounded-full px-4 py-2 text-sm font-semibold"
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
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <div
          className="mb-6"
          style={{ color: "var(--on-surface)", opacity: 0.6 }}
        >
          <Prose
            className="text-sm leading-relaxed"
            html={product.descriptionHtml}
          />
        </div>
      ) : null}
      <AddToCart product={product} />
    </>
  );
}
