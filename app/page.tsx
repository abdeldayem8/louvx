import Newsbar from "@/components/layout/Newsbar"
import Hero from "@/components/home/Hero"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"
import Collections from "@/components/home/Collections"
import Reviews from "@/components/home/Reviews"
import Testimonials from "@/components/home/Testimonials"

export default function Home() {
  return (
    <>
      <Newsbar />
      <main className="min-h-screen">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Collections />
        <Reviews />
        <Testimonials />
      </main>
    </>
  )
}
