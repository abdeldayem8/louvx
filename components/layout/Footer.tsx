"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, CreditCard, Truck, Shield, HelpCircle, Send } from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Best Sellers", href: "/best-sellers" },
      { name: "Sale", href: "/sale" },
      { name: "Gift Cards", href: "/gift-cards" },
    ],
    customerService: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faq" },
      { name: "Shipping & Returns", href: "/shipping-returns" },
      { name: "Size Guide", href: "/size-guide" },
    ],
    about: [
      { name: "Our Story", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  }

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "On all orders over $50"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Payment",
      description: "100% secure payment"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "2-Year Warranty",
      description: "On all products"
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated support"
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
  ]

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Subscribed with:", email)
    setEmail("")
  }

  return (
    <footer className="bg-background border-t border-border/40">
      {/* Features Section */}
      <div className="border-b border-border/40 bg-accent/20">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="p-4 rounded-full bg-primary/10 mb-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-1 text-sm md:text-base">{feature.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Newsletter Section */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Subscribe to our newsletter and get exclusive deals, new arrivals, and fashion tips delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2.5 rounded-lg bg-background text-foreground border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </form>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    className="p-2.5 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {footerLinks.customerService.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-lg mb-4">About & Contact</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Fashion Street, Style District, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@louvx.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@louvx.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-accent/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="text-center md:text-left">
              © {currentYear} Louvx. All rights reserved. Made with ❤️ for fashion lovers.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
