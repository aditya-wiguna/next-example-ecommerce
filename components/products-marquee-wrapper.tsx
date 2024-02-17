import { dummyProducts } from "@/lib/dummies";
import ProductsMarquee from "./products-marquee";

export default async function ProductsMarqueeWrapper() {
  const products = dummyProducts();

  return (
    <section className=" py-4">
      <h2 className="p-2 pt-0 text-lg font-medium md:p-4 md:pt-0 md:text-xl">
        Featured Products
      </h2>
      <ProductsMarquee products={products} />
    </section>
  );
}
