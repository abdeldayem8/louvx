"use client"

import Link from "next/link"
import ProductCard from "@/components/common/ProductCard"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Leather Wallet",
      price: 99.99,
      originalPrice: 129.99,
      image: "/placeholder-product.jpg",
      badge: "",
    },
    {
      id: 2,
      name: "Smart Tracking Card",
      price: 69.99,
      originalPrice: 89.99,
      image: "/placeholder-product.jpg",
      badge: "",
    },
    {
      id: 3,
      name: "Luxury Card Holder",
      price: 119.99,
      originalPrice: 149.99,
      image: "/placeholder-product.jpg",
      badge: "",
    },
    {
      id: 4,
      name: "Minimalist Wallet",
      price: 99.99,
      image: "/placeholder-product.jpg",
      badge: "New",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-accent/3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-black">Featured Products</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Discover our handpicked selection of premium smart wallets
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
