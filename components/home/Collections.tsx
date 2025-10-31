"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Collections() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          {/* Summer Collection */}
          <motion.div
            variants={leftVariants}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 sm:p-12 flex flex-col justify-between min-h-72 group cursor-pointer hover:border-primary/50 transition-all duration-300"
          >
            <div>
              <p className="text-primary font-semibold text-sm mb-3 tracking-wide">LIMITED OFFER</p>
              <h3 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-3">Summer Collection</h3>
              <p className="text-muted-foreground mb-6 text-lg">Get up to 40% off on selected items</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/summer-collection"
                className="w-fit px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold inline-block"
              >
                Shop Now →
              </Link>
            </motion.div>
          </motion.div>

          {/* New Arrivals */}
          <motion.div
            variants={rightVariants}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-background via-card to-card/50 border border-border/50 p-8 sm:p-12 flex flex-col justify-between min-h-72 group cursor-pointer hover:border-primary/50 transition-all duration-300"
          >
            <div>
              <p className="text-primary font-semibold text-sm mb-3 tracking-wide">EXCLUSIVE</p>
              <h3 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-3">New Arrivals</h3>
              <p className="text-muted-foreground mb-6 text-lg">Discover the latest trends first</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/new-arrivals"
                className="w-fit px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold inline-block"
              >
                Explore →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
