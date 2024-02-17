import Billboard from "@/components/billboard";
import ProductMarquee from "@/components/products-marquee-wrapper";
import Image from "next/image";
import whatsapp from "../public/WhatsAppButtonGreenSmall.svg";
import Link from "next/link";
import CategoryCardSection from "@/components/category-card-section";

export default function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <ProductMarquee />
    </main>
  );
}
