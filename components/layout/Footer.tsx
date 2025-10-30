"use client"

import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Best Sellers", href: "/best-sellers" },
      { name: "Categories", href: "/categories" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faq" },
      { name: "Shipping & Returns", href: "/shipping-returns" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  }

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 15.892c-1.002 1.541-2.885 2.824-5.441 2.824-2.556 0-4.439-1.283-5.441-2.824-.602-.926-.955-2.01-.955-3.176 0-3.59 2.919-6.509 6.396-6.509 3.477 0 6.396 2.919 6.396 6.509 0 1.166-.353 2.25-.955 3.176zm-9.837-7.685c-1.002 0-1.814.812-1.814 1.814s.812 1.814 1.814 1.814 1.814-.812 1.814-1.814-.812-1.814-1.814-1.814zm7.673 0c-1.002 0-1.814.812-1.814 1.814s.812 1.814 1.814 1.814 1.814-.812 1.814-1.814-.812-1.814-1.814-1.814z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.82V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Louvx</span>
            </div>
            <p className="text-sm text-muted-foreground">Premium luxury shopping experience.</p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-foreground">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-foreground">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground text-center md:text-right">
              © {currentYear} Louvx. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
