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
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen">
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
