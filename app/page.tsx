import Hero from "@/components/home/Hero"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"
import Testimonials from "@/components/home/Testimonials"
import Promotions from "@/components/home/Promotions"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Promotions />
      <Testimonials />
    </main>
  )
}
