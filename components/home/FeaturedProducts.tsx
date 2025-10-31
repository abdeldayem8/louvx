"use client"

import Link from "next/link"
import { useState } from "react"
import ProductCard from "@/components/common/ProductCard"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("new")

  const products = [
    {
      id: 1,
      name: "Premium Leather Wallet",
      price: 99.99,
      originalPrice: 129.99,
      image: "/placeholder-product.jpg",
      badge: "",
      category: "best-seller",
    },
    {
      id: 2,
      name: "Smart Tracking Card",
      price: 69.99,
      originalPrice: 89.99,
      image: "/placeholder-product.jpg",
      badge: "",
      category: "trending",
    },
    {
      id: 3,
      name: "Luxury Card Holder",
      price: 119.99,
      originalPrice: 149.99,
      image: "/placeholder-product.jpg",
      badge: "",
      category: "best-seller",
    },
    {
      id: 4,
      name: "Minimalist Wallet",
      price: 99.99,
      image: "/placeholder-product.jpg",
      badge: "New",
      category: "new",
    },
    {
      id: 5,
      name: "Designer Billfold",
      price: 149.99,
      originalPrice: 199.99,
      image: "/placeholder-product.jpg",
      badge: "",
      category: "trending",
    },
    {
      id: 6,
      name: "Classic Card Case",
      price: 79.99,
      image: "/placeholder-product.jpg",
      badge: "New",
      category: "new",
    },
  ]

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const filteredProducts = products.filter((p) => {
    if (activeTab === "all") return true
    return p.category === activeTab
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-accent/3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-card-foreground">Featured Products</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Discover our handpicked selection of premium smart wallets
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { id: "all", label: "All" },
            { id: "new", label: "New" },
            { id: "best-seller", label: "Best Seller" },
            { id: "trending", label: "Trending" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border/50 text-card-foreground hover:border-primary/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab} 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

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
