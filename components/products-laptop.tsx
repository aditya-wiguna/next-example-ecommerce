'use client';
import ProductsMarquee from "./products-marquee";
import { ProductService } from "@/services/productService";
import { useState, useEffect } from 'react'

export default async function ProductsLaptop() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await ProductService.getProductsByCategory('laptops');
      setProducts(products);
    }
    fetchData();
  }, []);

  return (
    <section className=" py-4">
      <h2 className="p-2 pt-0 text-lg font-medium md:p-4 md:pt-0 md:text-xl">
        Our Best Laptop
      </h2>
      <ProductsMarquee products={products} />
    </section>
  );
}
