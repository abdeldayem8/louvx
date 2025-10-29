"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, ShoppingBag, Tag, Sparkles, User, ShoppingCart, Heart, Settings, LogOut, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  const menuItems = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Products", href: "/products", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Categories", href: "/categories", icon: <Tag className="w-5 h-5" /> },
    { name: "New Arrivals", href: "/new-arrivals", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Sale", href: "/sale", icon: <Tag className="w-5 h-5" /> },
  ]

  const accountItems = [
    { name: "My Profile", href: "/profile", icon: <User className="w-5 h-5" /> },
    { name: "My Orders", href: "/orders", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Wishlist", href: "/wishlist", icon: <Heart className="w-5 h-5" /> },
    { name: "Settings", href: "/settings", icon: <Settings className="w-5 h-5" /> },
  ]

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg hover:bg-accent transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} className="text-foreground" />
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 opacity-100 z-[60]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Side Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 max-w-md bg-background border-l border-border shadow-2xl transform transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0 visible z-[70]" : "translate-x-full invisible -z-10"
        }`}
      >
        {/* Header */}
        <div className="relative p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-foreground">Louvx</h2>
              <p className="text-xs text-muted-foreground mt-1">Welcome back! Explore our collection</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-full hover:bg-accent/80 transition-all hover:rotate-90 duration-300"
              aria-label="Close menu"
            >
              <X size={22} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-[calc(100%-140px)] overflow-y-auto">
          {/* Main Navigation */}
          <nav className="p-4 space-y-1">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-3 flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              Explore
            </h3>
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                      : "hover:bg-accent/70 text-foreground hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isActive ? "bg-primary-foreground/20" : "bg-accent group-hover:bg-primary/10"
                    }`}>
                      <span className={isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}>
                        {item.icon}
                      </span>
                    </div>
                    <span className="font-semibold text-sm">{item.name}</span>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transition-all group-hover:translate-x-1 ${
                      isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                    }`} 
                  />
                </Link>
              )
            })}
          </nav>

          {/* Divider */}
          <div className="px-6 my-2">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Account Section */}
          <nav className="p-4 space-y-1">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-3 flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              My Account
            </h3>
            {accountItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                      : "hover:bg-accent/70 text-foreground hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isActive ? "bg-primary-foreground/20" : "bg-accent group-hover:bg-primary/10"
                    }`}>
                      <span className={isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}>
                        {item.icon}
                      </span>
                    </div>
                    <span className="font-semibold text-sm">{item.name}</span>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transition-all group-hover:translate-x-1 ${
                      isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                    }`} 
                  />
                </Link>
              )
            })}
          </nav>

          {/* Footer Actions */}
          <div className="mt-auto p-4 border-t border-border/50 bg-gradient-to-t from-accent/20 to-transparent">
            <button
              className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-destructive/10 to-destructive/5 text-destructive hover:from-destructive/20 hover:to-destructive/10 transition-all font-semibold border border-destructive/20 hover:border-destructive/30 hover:shadow-md"
              onClick={() => {
                // Handle logout
                console.log("Logout clicked")
              }}
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
            <p className="text-center text-xs text-muted-foreground mt-3">© 2025 Louvx. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}
