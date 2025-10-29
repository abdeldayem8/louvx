import Link from "next/link"
import { ShoppingCart, Heart, Eye } from "lucide-react"

export default function FeaturedProducts() {
  // Static product data - replace with real data later
  const products = [
    {
      id: 1,
      name: "Premium Leather Wallet",
      price: 129.99,
      image: "/placeholder-product.jpg",
      badge: "New"
    },
    {
      id: 2,
      name: "Smart Tracking Card",
      price: 89.99,
      image: "/placeholder-product.jpg",
      badge: "Popular"
    },
    {
      id: 3,
      name: "Luxury Card Holder",
      price: 149.99,
      image: "/placeholder-product.jpg",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Minimalist Wallet",
      price: 99.99,
      image: "/placeholder-product.jpg",
      badge: ""
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium smart wallets
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {product.badge}
                </div>
              )}

              {/* Image Container */}
              <div className="relative aspect-square bg-accent/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ShoppingCart className="w-12 h-12 text-primary/50" />
                    </div>
                    <p className="text-sm">Product Image</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
