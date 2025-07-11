// src/app/provider/orders/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useOrderStore } from "@/store/orderStore";
import { Order } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function OrderDetailsPage() {
  const params = useParams();
  const { id } = params;

  const [isHydrated, setIsHydrated] = useState(false);
  const order = useOrderStore((state) => state.orders.find((o) => o.id === id));
  const updateOrderStatus = useOrderStore((state) => state.updateOrderStatus);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <div>Loading order details...</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }

  const handleStatusChange = (newStatus: Order["status"]) => {
    updateOrderStatus(order.id, newStatus);
    toast("Order status updated!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Order {order.id}</h1>
        <div className="flex items-center gap-2">
          <span>Status:</span>
          <Select value={order.status} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Shipped">Shipped</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Products Ordered</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {order.items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
              <li className="flex justify-between items-center border-t pt-4 mt-4 font-bold text-lg">
                <p>Total</p>
                <p>${order.total.toFixed(2)}</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <strong>Name:</strong> {order.customer.name}
            </p>
            <p>
              <strong>Email:</strong> {order.customer.email}
            </p>
            <p>
              <strong>Address:</strong> {order.customer.address},{" "}
              {order.customer.city}, {order.customer.zipCode}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
