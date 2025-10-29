import Hero from "@/components/home/Hero"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </main>
  )
}
