// src/components/ProductCard.tsx
"use client";

// import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Link href={`/products/${product.id}`}>
          {/* <Image
            src={product.imageUrl}
            alt={product.name}
            width={250}
            height={250}
            className="w-full h-auto rounded-t-lg"
          /> */}
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <Link href={`/products/${product.id}`}>
          <CardTitle className="hover:text-emerald-500">
            {product.name}
          </CardTitle>
        </Link>
        <p className="text-muted-foreground mt-2">{product.category}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
