import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Product } from "@/lib/types";
import { AspectRatio } from "./ui/aspect-ratio";

function urlForImage(image: any) {
  return image;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="w-full">
      <Card className="flex h-full flex-col justify-around">
        <CardHeader className="flex items-center justify-center p-1">
          <AspectRatio ratio={1 / 1}>
              <Image
                src={urlForImage(product.thumbnail)}
                fill
                sizes="100vw"
                alt={product.title}
                loading="lazy"
                className="rounded-md object-cover"
                placeholder="empty"
              />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <CardTitle className="line-clamp-2 max-w-[200px] text-sm font-medium leading-tight sm:text-base sm:leading-tight">
            {product.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {product.category}
          </CardDescription>
        </CardContent>
        <CardFooter className="w-full p-2 pt-0">
          <p className="font-medium text-primary">{process.env.currencyIcon} {product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
