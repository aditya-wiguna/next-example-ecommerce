'use client';
import ProductDetailCard from "@/components/product-detail-card";
import ProductMarquee from "@/components/products-smartphone";
import { Product } from "@/lib/types";
import { ProductService } from "@/services/productService";
import { useState, useEffect } from 'react'

type Props = {
  params: { id: string };
};

const ProductPage = async ({ params }: Props) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchData = async () => {
      const products = await ProductService.getProduct(params.id);
      setProduct(products);
    }
    fetchData();
  })

  const jsonLd = {
    "@context": "https://www.next-example-ecommerce.adityawiguna.com/",
    "@type": "Product",
    name: product?.title,
    image: product?.thumbnail,
    description: product?.description,
    brand: {
      "@type": "Brand",
      name: product?.brand,
    }
  };

  return (
    <div className="px-2">
      <ProductDetailCard product={product} />
      <ProductMarquee />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ProductPage;
