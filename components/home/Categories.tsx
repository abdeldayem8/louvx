"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Categories() {
  const categories = [
    {
      name: "Wallets",
      count: "24 Products",
      href: "/categories/wallets",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 10h18M7 15h10m4-5v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h14a2 2 0 012 2z"
          />
        </svg>
      ),
    },
    {
      name: "Card Holders",
      count: "18 Products",
      href: "/categories/card-holders",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 5v2m-4 0v2m-4 0v2M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Accessories",
      count: "32 Products",
      href: "/categories/accessories",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      name: "Sale Items",
      count: "15 Products",
      href: "/sale",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

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
    <section ref={ref} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-foreground">Shop by Category</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Explore our curated collections
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Link
                href={category.href}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Content */}
                <div className="relative p-8 sm:p-10 flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{category.count}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
