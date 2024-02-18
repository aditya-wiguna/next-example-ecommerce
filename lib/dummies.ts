export function dummyProducts() {
  const products = [{
      id: 1,
      name: "Product 1",
      slug: {
        current: "product-1"
      },
      images: {},
      size: "M",
      fabric: "Cotton",
      color: "Red",
      weight: "0.5kg",
      price: 25,
      description: "This is a red cotton shirt, medium size.",
      features: "Breathable fabric, vibrant color",
      showOnHomepage: true,
      category: {
        name: "Shirts"
      },
      quantity: 50,
    },
    {
      id: 2,
      name: "Product 2",
      slug: {
        current: "product-2"
      },
      images: {},
      size: "L",
      fabric: "Polyester",
      color: "Blue",
      weight: "0.4kg",
      price: 30,
      description: "This is a blue polyester shirt, large size.",
      features: "Lightweight, quick-dry",
      showOnHomepage: false,
      category: {
        name: "Shirts"
      },
      quantity: 40,
    },
    // Repeat similar structure for products 3 through 10
    {
      id: 3,
      name: "Product 3",
      slug: {
        current: "product-3"
      },
      images: {},
      size: "S",
      fabric: "Wool",
      color: "Green",
      weight: "0.6kg",
      price: 40,
      description: "This is a green wool sweater, small size.",
      features: "Warm, soft touch",
      showOnHomepage: false,
      category: {
        name: "Sweaters"
      },
      quantity: 30,
    },
  ];

  return products;
}

export function dummyCategories(){
  return [
    {
      name: "Shirts",
      slug: {
        current: "shirts"
      }
    },
    {
      name: "Sweaters",
      slug: {
        current: "sweaters"
      }
    }
  ]
}
