import ProductsMarquee from "./products-marquee";
import { ProductService } from "@/app/services/productService";

export default async function ProductsSmartphone() {

  const products = await ProductService.getProductsByCategory('smartphones');

  return (
    <section className=" py-4">
      <h2 className="p-2 pt-0 text-lg font-medium md:p-4 md:pt-0 md:text-xl">
        Our Best Smartphone
      </h2>
      <ProductsMarquee products={products} />
    </section>
  );
}
