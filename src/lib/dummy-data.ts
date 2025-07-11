// src/lib/dummy-data.ts

import { Product, Order } from "./types";

export const dummyProducts: Product[] = [
  {
    id: "prod_001",
    name: "Vitamin C Boost",
    category: "Vitamins",
    price: 15.99,
    description: "High-potency Vitamin C for immune support.",
    imageUrl: "https://via.placeholder.com/300x300.png?text=Vitamin+C",
    isBestSeller: true,
  },
  {
    id: "prod_002",
    name: "Iron Plus",
    category: "Minerals",
    price: 12.5,
    description: "Essential iron supplement for energy levels.",
    imageUrl: "https://via.placeholder.com/300x300.png?text=Iron+Plus",
    isBestSeller: false,
  },
  {
    id: "prod_003",
    name: "Whey Protein Isolate",
    category: "Proteins",
    price: 45.0,
    description: "Pure whey protein for muscle growth and recovery.",
    imageUrl: "https://via.placeholder.com/300x300.png?text=Whey+Protein",
    isBestSeller: true,
  },
  {
    id: "prod_004",
    name: "Omega-3 Fish Oil",
    category: "Other",
    price: 22.0,
    description: "Supports heart and brain health.",
    imageUrl: "https://via.placeholder.com/300x300.png?text=Omega-3",
    isBestSeller: false,
  },
  {
    id: "prod_005",
    name: "Multivitamin Complex",
    category: "Vitamins",
    price: 25.0,
    description: "A complete daily multivitamin for overall wellness.",
    imageUrl: "https://via.placeholder.com/300x300.png?text=Multivitamin",
    isBestSeller: true,
  },
];

export const dummyOrders: Order[] = [
  {
    id: "ord_101",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Health St",
      city: "Wellnessville",
      zipCode: "12345",
    },
    items: [
      { product: dummyProducts[0], quantity: 2 },
      { product: dummyProducts[2], quantity: 1 },
    ],
    total: 76.98,
    status: "Delivered",
    date: "2023-10-25T14:48:00.000Z",
  },
  {
    id: "ord_102",
    customer: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "456 Fitness Ave",
      city: "Strongtown",
      zipCode: "67890",
    },
    items: [{ product: dummyProducts[3], quantity: 1 }],
    total: 22.0,
    status: "Shipped",
    date: "2023-10-28T10:20:00.000Z",
  },
];
