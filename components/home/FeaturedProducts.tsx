"use client"

import Link from "next/link"
import { useState } from "react"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Leather Wallet",
      price: 129.99,
      image: "/placeholder-product.jpg",
      badge: "New",
    },
    {
      id: 2,
      name: "Smart Tracking Card",
      price: 89.99,
      image: "/placeholder-product.jpg",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Luxury Card Holder",
      price: 149.99,
      image: "/placeholder-product.jpg",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Minimalist Wallet",
      price: 99.99,
      image: "/placeholder-product.jpg",
      badge: "",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-accent/3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-foreground">Featured Products</h2>
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

function ProductCard({ product }: { product: any }) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          {product.badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square bg-accent/50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg
                className="w-12 h-12 sm:w-14 sm:h-14 text-primary/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <p className="text-xs sm:text-sm">Product Image</p>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onMouseEnter={() => setHoveredIcon("heart")}
            onMouseLeave={() => setHoveredIcon(null)}
            className={`p-2.5 rounded-full transition-all duration-300 shadow-lg ${
              hoveredIcon === "heart"
                ? "bg-yellow-400 text-yellow-900 scale-110"
                : "bg-background/90 backdrop-blur-sm text-foreground hover:bg-yellow-400 hover:text-yellow-900"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill={hoveredIcon === "heart" ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            onMouseEnter={() => setHoveredIcon("eye")}
            onMouseLeave={() => setHoveredIcon(null)}
            className={`p-2.5 rounded-full transition-all duration-300 shadow-lg ${
              hoveredIcon === "eye"
                ? "bg-yellow-400 text-yellow-900 scale-110"
                : "bg-background/90 backdrop-blur-sm text-foreground hover:bg-yellow-400 hover:text-yellow-900"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 sm:p-8">
        <h3 className="font-semibold text-base sm:text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xl sm:text-2xl font-bold text-primary">${product.price}</span>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
