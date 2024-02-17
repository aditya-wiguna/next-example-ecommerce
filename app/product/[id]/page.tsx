import ProductDetailCard from "@/components/product-detail-card";
import ProductMarquee from "@/components/products-smartphone";
import { Product } from "@/lib/types";
import type { Metadata } from "next";
import { ProductService } from "@/services/productService";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: Product = await ProductService.getProduct(params.id);

  return {
    title: product.title,
    alternates: {
      canonical: `/product/${params.id}`,
    },
    description: product.description,
  };
}

const ProductPage = async ({ params }: Props) => {
  const product: Product = await ProductService.getProduct(params.id);

  const jsonLd = {
    "@context": "https://www.oxabags.com/",
    "@type": "Product",
    name: product.title,
    image: product.thumbnail,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
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
