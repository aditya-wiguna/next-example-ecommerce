import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  let endpoint = `${process.env.API_PRODUCT_URL}/products`;

  if (request.nextUrl.searchParams.has('category')) {
    endpoint = `${process.env.API_PRODUCT_URL}/products/category/${request.nextUrl.searchParams.get('category')}`;
  }

  if (request.nextUrl.searchParams.has('search')) {
    endpoint = `${process.env.API_PRODUCT_URL}/products/search?q=${request.nextUrl.searchParams.get('search')}`;
  }

  let products = await fetch(endpoint).then(res => res.json());

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
