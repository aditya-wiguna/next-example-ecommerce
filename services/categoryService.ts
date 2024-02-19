export const CategoryService = {
  getAllCategories: async () => {
    const res = await fetch(`${process.env.API_URL}categories`);
    const categories = await res.json();
    return categories.data;
  },
};
