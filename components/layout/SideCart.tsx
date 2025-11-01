"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SideCartProps {
  isOpen: boolean
  onClose: () => void
}

export const SideCart = ({ isOpen, onClose }: SideCartProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  // Navigation links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Account", href: "/account" },
    { label: "Contact", href: "/contact" },
  ]

  // Social icons
  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.519 0 3.975.03 5.404.135 1.429.066 2.271.27 2.805.45.711.275 1.22.635 1.755 1.17.534.534.895 1.045 1.17 1.755.18.534.384 1.376.45 2.805.105 1.429.135 1.885.135 5.404 0 3.519-.03 3.975-.135 5.404-.066 1.429-.27 2.271-.45 2.805-.275.711-.635 1.22-1.17 1.755-.534.534-1.045.895-1.755 1.17-.534.18-1.376.384-2.805.45-1.429.105-1.885.135-5.404.135-3.519 0-3.975-.03-5.404-.135-1.429-.066-2.271-.27-2.805-.45-.711-.275-1.22-.635-1.755-1.17-.534-.534-.895-1.045-1.17-1.755-.18-.534-.384-1.376-.45-2.805-.105-1.429-.135-1.885-.135-5.404 0-3.519.03-3.975.135-5.404.066-1.429.27-2.271.45-2.805.275-.711.635-1.22 1.17-1.755.534-.534 1.045-.895 1.755-1.17.534-.18 1.376-.384 2.805-.45 1.429-.105 1.885-.135 5.404-.135zm0-2.163c-3.585 0-4.032.015-5.466.135-1.433.066-2.413.3-3.268.639-.886.344-1.64.81-2.384 1.554-.744.744-1.21 1.498-1.554 2.384-.339.855-.573 1.835-.639 3.268-.12 1.434-.135 1.88-.135 5.466 0 3.585.015 4.032.135 5.466.066 1.433.3 2.413.639 3.268.344.886.81 1.64 1.554 2.384.744.744 1.498 1.21 2.384 1.554.855.339 1.835.573 3.268.639 1.434.12 1.88.135 5.466.135 3.585 0 4.032-.015 5.466-.135 1.433-.066 2.413-.3 3.268-.639.886-.344 1.64-.81 2.384-1.554.744-.744 1.21-1.498 1.554-2.384.339-.855.573-1.835.639-3.268.12-1.434.135-1.88.135-5.466 0-3.585-.015-4.032-.135-5.466-.066-1.433-.3-2.413-.639-3.268-.344-.886-.81-1.64-1.554-2.384-.744-.744-1.498-1.21-2.384-1.554-.855-.339-1.835-.573-3.268-.639-1.434-.12-1.88-.135-5.466-.135z" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="18.5" cy="5.5" r="1.5" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.66 0q0-.29.05-.57a2.885 2.885 0 0 1 5.75-.18v-3.4a6.26 6.26 0 0 0-5.88 3.75A6.27 6.27 0 0 0 9.02 22a6.27 6.27 0 0 0 5.87-4.33.9.9 0 0 1 .13-.49v-5.3a7.96 7.96 0 0 0 3.86 1.08v-3.4a4.3 4.3 0 0 1-.34-.03z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
          />

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 h-screen w-full sm:w-96 bg-background z-50 flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-lg">L</span>
                </div>
                <span className="text-foreground font-semibold text-sm">LOUVX</span>
              </div>

              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Search Bar */}
            <div className="p-6 border-b border-border/40">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  aria-label="Search products"
                />
                <svg
                  className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground"
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
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="group block px-4 py-3 rounded-lg text-foreground hover:text-primary transition-all duration-200 relative overflow-hidden"
                      onClick={() => {
                        onClose()
                      }}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social Links Footer */}
            <div className="p-6 border-t border-border/40">
              <p className="text-sm text-muted-foreground mb-4">Follow us</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-primary transition-all duration-200 p-2 hover:bg-primary/10 rounded-lg"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SideCart
