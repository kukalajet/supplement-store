// src/app/page.tsx
import { dummyProducts } from "@/lib/dummy-data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// TODO: JETON! Uncomment when images are available
// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const bestSellers = dummyProducts.filter((p) => p.isBestSeller);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Fuel Your Greatness
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Premium supplements for peak performance and optimal health.
        </p>
        <Link href="/products">
          <Button className="mt-6">Shop All Products</Button>
        </Link>
      </section>

      {/* Best Sellers Carousel */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Best Sellers
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {bestSellers.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                      {/* TODO: JETON! */}
                      {/* <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="mb-4"
                      /> */}
                      <span className="text-xl font-semibold">
                        {product.name}
                      </span>
                      <p className="text-lg font-bold mt-2">
                        ${product.price.toFixed(2)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are your shipping times?</AccordionTrigger>
            <AccordionContent>
              Orders are typically processed within 1-2 business days and
              shipped via standard ground, arriving in 3-5 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day money-back guarantee on all unopened products.
              Please contact customer support to initiate a return.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Are your products third-party tested?
            </AccordionTrigger>
            <AccordionContent>
              Yes, all of our supplements are rigorously tested by third-party
              labs to ensure purity, potency, and safety.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
