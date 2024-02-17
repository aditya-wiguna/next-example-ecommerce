import ProductCarousel from "./product-carousel";
import AddToCartButton from "./add-to-cart";
import { Product } from "@/lib/types";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default async function ProductDetailCard({ product }: { product: Product }) {

  return (
    <section className="flex w-full flex-col md:flex-row py-4">
      <ProductCarousel product={product} />
      <div className=" flex w-full flex-col space-y-2 px-0 py-2 md:w-1/2 md:px-4 lg:px-12">
        <h1 className="p-2 text-xl font-bold md:text-2xl">{product.title}</h1>
        <h2 className="p-2 text-xl font-medium text-primary">
          Price: {process.env.currencyIcon} {product.price}
        </h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className=" text-nowrap">Product Code:</TableCell>
              <TableCell>{product.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Brand:</TableCell>
              <TableCell>{product.brand}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Category:</TableCell>
              <TableCell>{product.category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Stock:</TableCell>
              <TableCell>{product.stock}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rating:</TableCell>
              <TableCell>{product.rating}</TableCell>
            </TableRow>
            {product.description == null ? null : (
              <TableRow>
                <TableCell>Description:</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="pt-2">
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}
