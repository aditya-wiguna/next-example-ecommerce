import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  let categories = await fetch(`${process.env.API_PRODUCT_URL}/products/categories`).then(res => res.json());

  return NextResponse.json({
    success: true,
    message: "Data fetch successfully",
    data: categories
  }, { status: 200 });
}
