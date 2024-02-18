export const ProductService = {
  getAllProducts: async () => {
    const res = await fetch(`${process.env.API_URL}products`);
    const products = await res.json();
    return products.data;
  },
  getProduct: async (id: string) => {
    const res = await fetch(`${process.env.API_URL}products/${id}`);
    const product = await res.json();
    return product.data;
  },
  getProductsByCategory: async (category: string) => {
    const res = await fetch(`${process.env.API_URL}products?category=${category}`);
    const products = await res.json();
    return products.data;
  },
}
