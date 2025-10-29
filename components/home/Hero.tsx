import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden bg-accent/20">
      <Image
        src="/herobanner.webp"
        alt="Hero Banner"
        fill
        priority
        className="object-cover object-center"
        quality={100}
        sizes="100vw"
      />
    </section>
  )
}
