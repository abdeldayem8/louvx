"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Sale", href: "/sale" },
  ]

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg
          className={`w-6 h-6 text-foreground transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Backdrop with smooth fade */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu Drawer - Simple & Elegant */}
      <div
        className={`fixed top-32 right-0 w-full sm:w-80 bg-background border-l border-border shadow-lg transform transition-all duration-300 ease-out z-50 lg:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Header with close button */}
        <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
          <div className="flex-1" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-accent/50 rounded-md transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-background font-semibold shadow-sm"
                    : "text-foreground hover:bg-accent/50 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer with elegant divider */}
        <div className="px-6 py-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">Premium Shopping Experience</p>
        </div>
      </div>
    </>
  )
}
