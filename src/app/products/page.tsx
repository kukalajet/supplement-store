// src/app/products/page.tsx
"use client";

import { useState, useMemo } from "react";
import { dummyProducts } from "@/lib/dummy-data";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/ProductCard"; // We will create this

export default function AllProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showBestSellers, setShowBestSellers] = useState(false);
  const [sortBy, setSortBy] = useState("name-asc");

  const filteredAndSortedProducts = useMemo(() => {
    const result = dummyProducts
      .filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((p) => category === "all" || p.category === category)
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter((p) => !showBestSellers || p.isBestSeller);

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "best-sellers":
        result.sort(
          (a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0)
        );
        break;
    }
    return result;
  }, [searchTerm, category, priceRange, showBestSellers, sortBy]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Filters Sidebar */}
      <aside className="w-full md:w-1/4 md:pr-8 space-y-6 mb-6 md:mb-0">
        <h3 className="text-xl font-semibold">Filters</h3>
        <div>
          <Label>Search</Label>
          <Input
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <Label>Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Vitamins">Vitamins</SelectItem>
              <SelectItem value="Minerals">Minerals</SelectItem>
              <SelectItem value="Proteins">Proteins</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-2 block">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Label>
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="best-sellers"
            checked={showBestSellers}
            onCheckedChange={(checked) => setShowBestSellers(Boolean(checked))}
          />
          <Label htmlFor="best-sellers">Show Best Sellers Only</Label>
        </div>
      </aside>

      {/* Products Grid */}
      <main className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            All Products ({filteredAndSortedProducts.length})
          </h2>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Alphabetical</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="best-sellers">Best Sellers</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
