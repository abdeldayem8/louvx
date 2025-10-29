"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <Image
          src="/herobanner.webp"
          alt="Hero Banner - Premium Smart Wallets"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  )
}
