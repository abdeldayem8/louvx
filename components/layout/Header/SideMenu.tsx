"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
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

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.002 2.879 1.44 1.44 0 01-.002-2.879z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4V9.5c0-.821.821-1.5 1.5-1.5H16V3.5c-.9-.092-1.666-.091-3-1v5.5H9V8z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.498 3.75h-3.998v16.5a1.5 1.5 0 1 1-3 0v-7.087a3 3 0 1 0-4.5-2.693v4.575a6 6 0 1 0 7.5-5.93V3.75z" />
        </svg>
      ),
    },
  ]

  const menuItems = [
    { name: "Home", href: "/", label: "HOME" },
    { name: "Shop", href: "/products", label: "SHOP" },
    { name: "Categories", href: "/categories", label: "CATEGORIES" },
    { name: "New Arrivals", href: "/new-arrivals", label: "NEW ARRIVALS" },
  ]

  const accountItems = [
    { name: "Wishlist", href: "/wishlist", label: "WISHLIST" },
    { name: "My Account", href: "/profile", label: "ACCOUNT" },
    { name: "Contact", href: "/contact", label: "CONTACT" },
  ]

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg hover:bg-accent transition-colors"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 max-w-sm bg-background border-l border-border/30 shadow-2xl z-[70] flex flex-col"
          >
            <div className="relative p-6 border-b border-border/30 bg-gradient-to-r from-primary/8 via-transparent to-transparent">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col"
                >
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">L</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">Premium Wallets</p>
                </motion.div>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-full hover:bg-primary/10 transition-all"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="px-4 pt-4 pb-2"
            >
              <div className="relative group">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-accent/50 border border-border/50 rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-accent/80 transition-all"
                />
              </div>
            </motion.div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Main Navigation */}
              <nav className="p-4 space-y-1.5">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-4 px-3 flex items-center gap-2"
                >
                  <div className="h-0.5 w-2 rounded-full bg-primary/70"></div>
                  Explore
                </motion.h3>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                        pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      <motion.span
                        className="absolute bottom-1 left-4 h-0.5 bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: pathname === item.href ? "calc(100% - 32px)" : 0,
                        }}
                        whileHover={{ width: "calc(100% - 32px)" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Account Section */}
              <nav className="px-4 py-4 border-t border-border/30 space-y-1.5">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-4 px-3 flex items-center gap-2"
                >
                  <div className="h-0.5 w-2 rounded-full bg-primary/70"></div>
                  Account
                </motion.h3>
                {accountItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                        pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      <motion.span
                        className="absolute bottom-1 left-4 h-0.5 bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: pathname === item.href ? "calc(100% - 32px)" : 0,
                        }}
                        whileHover={{ width: "calc(100% - 32px)" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-4 border-t border-border/30 bg-gradient-to-t from-accent/10 to-transparent space-y-4"
            >
              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.name}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                      {social.icon}
                    </motion.div>
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-center text-xs text-muted-foreground/80">© 2025 Louvx. Luxury Wallets.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
