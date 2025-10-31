"use client"

import { useState, useEffect } from "react"
import Logo from "@/components/layout/Header/Logo"
import NavLinks from "@/components/layout/Header/NavLinks"
import SearchBar from "@/components/layout/Header/SearchBar"
import CartIcon from "@/components/layout/Header/CartIcon"
import { MobileMenu } from "@/components/layout/Header/MobileMenu"
import { SideCart } from "@/components/layout/SideCart"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-10 z-40 w-full bg-background/95 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "shadow-md border-b border-border/40" : "border-b border-border/20"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Desktop Layout */}
          <div className="hidden lg:flex h-20 items-center justify-between gap-6">
            {/* Logo */}
            <Logo />

            {/* Center Navigation */}
            <div className="flex-1 flex justify-center">
              <NavLinks />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <div className="w-64">
                <SearchBar />
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Wishlist">
                  <svg
                    className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Account">
                  <svg
                    className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
              </div>
              <button onClick={() => setIsCartOpen(true)}>
                <CartIcon />
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden">
            {/* Top Row */}
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Logo />

              {/* Right: Actions & Menu */}
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Wishlist">
                  <svg
                    className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Account">
                  <svg
                    className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
                <button onClick={() => setIsCartOpen(true)}>
                  <CartIcon />
                </button>
                <MobileMenu />
              </div>
            </div>

            {/* Search Bar Row */}
            <div className="pb-3">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>

      {isCartOpen && <SideCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </>
  )
}

export default Header
