// src/store/orderStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Order } from "@/lib/types";
import { dummyOrders } from "@/lib/dummy-data";

type OrderState = {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
};

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      orders: dummyOrders, // Initial state with dummy data
      addOrder: (order) =>
        set((state) => ({
          orders: [...state.orders, order],
        })),
      updateOrderStatus: (orderId, status) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId ? { ...order, status } : order
          ),
        })),
    }),
    {
      name: "order-storage", // Name for the localStorage key
    }
  )
);
