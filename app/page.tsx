import { Carousel } from "components/carousel";
import { EcosystemSolutions } from "components/ecosystem-solutions";
import { ThreeItemGrid } from "components/grid/three-items";
import { Hero } from "components/hero";
import Footer from "components/layout/footer";
import { ProductEcosystem } from "components/product-ecosystem";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <EcosystemSolutions />
      <ProductEcosystem />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
