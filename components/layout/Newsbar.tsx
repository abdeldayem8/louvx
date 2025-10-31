"use client"

import { motion } from "framer-motion"

export default function Newsbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-primary/5 border-b border-primary/20 py-2"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm text-muted-foreground font-medium">
          ✨ Free shipping over $50 | Limited time offer
        </p>
      </div>
    </motion.div>
  )
}
