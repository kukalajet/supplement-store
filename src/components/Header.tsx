// src/components/Header.tsx
"use client";

import Link from "next/link";
// TODO: Should I remove these imports?
// import { ShoppingCart } from "lucide-react";
// import { Button } from "./ui/button";
import CartSheet from "./CartSheet";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-slate-800">
          Supple<span className="text-emerald-500">Fit</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/products"
            className="text-gray-600 hover:text-emerald-500"
          >
            All Products
          </Link>
          <Link
            href="/provider/orders"
            className="text-gray-600 hover:text-emerald-500"
          >
            Provider Portal
          </Link>
          <CartSheet />
        </div>
      </nav>
    </header>
  );
};

export default Header;
