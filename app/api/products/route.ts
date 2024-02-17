import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  let products = await fetch(`${process.env.API_URL}/products`).then(res => res.json());

  // replace obj products to data
  products = {
    ...products,
    data: products.products
  }

  delete products.products

  return NextResponse.json({
    success: true,
    message: "Data fetch successfully",
    ...products
  }, { status: 200 });
}
