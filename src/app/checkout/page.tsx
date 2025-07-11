// src/app/checkout/page.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useOrderStore } from "@/store/orderStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // Changed import
import { Order } from "@/lib/types";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  address: z.string().min(5, "Address must be at least 5 characters."),
  city: z.string().min(2, "City must be at least 2 characters."),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters."),
});

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();
  const { addOrder } = useOrderStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (cart.length === 0) {
      toast("Your cart is empty!");
      return;
    }
    const newOrder: Order = {
      id: `ord_${Date.now()}`,
      customer: values,
      items: cart,
      total: getCartTotal(),
      status: "Pending",
      date: new Date().toISOString(),
    };

    addOrder(newOrder);
    clearCart();
    toast("Order placed successfully!", {
      description: "Thank you for your purchase.",
    });
    router.push("/");
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  {" "}
                  <FormLabel>Full Name</FormLabel>{" "}
                  <FormControl>
                    <Input {...field} />
                  </FormControl>{" "}
                  <FormMessage />{" "}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {" "}
                  <FormLabel>Email</FormLabel>{" "}
                  <FormControl>
                    <Input {...field} />
                  </FormControl>{" "}
                  <FormMessage />{" "}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  {" "}
                  <FormLabel>Address</FormLabel>{" "}
                  <FormControl>
                    <Input {...field} />
                  </FormControl>{" "}
                  <FormMessage />{" "}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  {" "}
                  <FormLabel>City</FormLabel>{" "}
                  <FormControl>
                    <Input {...field} />
                  </FormControl>{" "}
                  <FormMessage />{" "}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  {" "}
                  <FormLabel>Zip Code</FormLabel>{" "}
                  <FormControl>
                    <Input {...field} />
                  </FormControl>{" "}
                  <FormMessage />{" "}
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg">
              Place Order
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          {cart.map((item) => (
            <div key={item.product.id} className="flex justify-between">
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
