// src/lib/types.ts

export type Product = {
  id: string;
  name: string;
  category: "Vitamins" | "Minerals" | "Proteins" | "Other";
  price: number;
  description: string;
  imageUrl: string;
  isBestSeller: boolean;
};

export type Customer = {
  name: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
};

export type Order = {
  id: string;
  customer: Customer;
  items: CartItem[];
  total: number;
  status: "Pending" | "Shipped" | "Delivered";
  date: string; // ISO 8601 format
};

export type CartItem = {
  product: Product;
  quantity: number;
};
