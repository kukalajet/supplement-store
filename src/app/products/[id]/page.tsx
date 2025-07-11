// src/app/products/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { dummyProducts } from "@/lib/dummy-data";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";

export default function ProductDetailsPage() {
  const params = useParams();
  const { id } = params;
  const { addToCart } = useCart();

  const product = dummyProducts.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <span className="text-sm bg-emerald-100 text-emerald-800 py-1 px-3 rounded-full">
          {product.category}
        </span>
        <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
        <p className="text-lg text-muted-foreground">{product.description}</p>
        {product.isBestSeller && (
          <p className="font-bold text-yellow-500">⭐️ Best Seller</p>
        )}
        <Button size="lg" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
