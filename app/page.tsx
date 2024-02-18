import Billboard from "@/components/billboard";
import ProductsLaptop from "@/components/products-laptop";
import ProductsSmartphone from "@/components/products-smartphone";

export default function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <ProductsSmartphone />
      <ProductsLaptop />
    </main>
  );
}
