"use client"

import { useState, useEffect } from "react"
import Logo from "@/components/layout/Header/Logo"
import NavLinks from "@/components/layout/Header/NavLinks"
import SearchBar from "@/components/layout/Header/SearchBar"
import CartIcon from "@/components/layout/Header/CartIcon"
import { MobileMenu } from "@/components/layout/Header/MobileMenu"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm transition-all duration-300 ${
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
            <CartIcon />
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          {/* Top Row */}
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Right: Cart & Menu */}
            <div className="flex items-center gap-2">
              <CartIcon />
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
  )
}

export default Header
