"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = () => {
  const pathname = usePathname()
  
  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Sale", href: "/sale" },
  ]

  return (
    <nav>
      <ul className="flex items-center space-x-1">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                prefetch={true}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive 
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-accent/50"
                }`}
              >
                {link.name}
                {isActive && (
                  <span 
                    className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-primary -translate-x-1/2 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavLinks
