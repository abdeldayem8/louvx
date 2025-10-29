import Link from "next/link"
import { Wallet, CreditCard, ShoppingBag, Tag } from "lucide-react"

export default function Categories() {
  const categories = [
    {
      name: "Wallets",
      icon: <Wallet className="w-8 h-8" />,
      count: "24 Products",
      href: "/categories/wallets",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: "Card Holders",
      icon: <CreditCard className="w-8 h-8" />,
      count: "18 Products",
      href: "/categories/card-holders",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      name: "Accessories",
      icon: <ShoppingBag className="w-8 h-8" />,
      count: "32 Products",
      href: "/categories/accessories",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      name: "Sale Items",
      icon: <Tag className="w-8 h-8" />,
      count: "15 Products",
      href: "/sale",
      color: "from-red-500/20 to-red-600/20"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our curated collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Content */}
              <div className="relative p-8 flex flex-col items-center text-center">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
