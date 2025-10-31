"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden"
    >
      {/* Mobile: aspect ratio, Desktop: full height */}
      <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-[90vh]">
        <Image
          src="/herobanner.webp"
          alt="Hero Banner - Premium Smart Wallets"
          fill
          priority
          className="object-cover"
          quality={100}
          sizes="100vw"
        />
      </div>
    </motion.section>
  )
}
