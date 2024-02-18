import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {

  let products = await fetch(`${process.env.API_PRODUCT_URL}/products/${params.id}`).then(res => res.json());

  return NextResponse.json({
    success: true,
    message: "Data fetch successfully",
    data: products
  }, { status: 200 });
}
