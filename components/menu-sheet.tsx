import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import SearchInput from "./search-input";

export default async function MenuSheet({
  categories,
}: {
  categories: any[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild className="block md:hidden">
        <Button variant={"outline"} className="relative" size={"icon"}>
          <MenuIcon size={15} />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-2">
        <SheetHeader className="p-2">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className=" my-8 flex flex-col space-y-3">
          <SheetClose asChild>
            <Link href="/">
              <Button className="text-lg" variant="ghost">
                Home
              </Button>
            </Link>
          </SheetClose>
          {categories.map((category, index: number) => (
            <SheetClose asChild key={index}>
              <Link href={`/category/${category}`}>
                <Button className="text-lg" variant="ghost">
                  {category}
                </Button>
              </Link>
            </SheetClose>
          ))}
          {/* <SheetClose asChild>
            <Link href="/about">
              <Button className="text-lg" variant="ghost">
                About Us
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/contact">
              <Button className="text-lg" variant="ghost">
                Contact Us
              </Button>
            </Link>
          </SheetClose> */}

          <SearchInput />
        </div>
      </SheetContent>
    </Sheet>
  );
}
