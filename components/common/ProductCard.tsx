"use client"

import { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image?: string
  badge?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      {discountPercentage > 0 ? (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
          -{discountPercentage}%
        </div>
      ) : product.badge ? (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          {product.badge}
        </div>
      ) : null}

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

      {/* Product Info - Restructured to flex-col with flex-1 for proper spacing */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h3 className="font-semibold text-base sm:text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-6 mt-auto">
          <span className="text-xl sm:text-2xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm sm:text-base text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>

        <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
