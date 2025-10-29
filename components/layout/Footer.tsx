"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, CreditCard, Truck, Shield, HelpCircle } from "lucide-react"
import FeatureBar from "./Footer/FeatureBar"
import NewsletterForm from "./Footer/NewsletterForm"
import FooterLinks from "./Footer/FooterLinks"
import ContactInfo from "./Footer/ContactInfo"
import SocialLinks from "./Footer/SocialLinks"

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
      description: "On all orders over $50",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Payment",
      description: "100% secure payment",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "2-Year Warranty",
      description: "On all products",
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated support",
    },
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
      <FeatureBar />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Newsletter & Social Section */}
          <div className="lg:col-span-4 space-y-8">
            <NewsletterForm />
            <SocialLinks />
          </div>

          <div className="lg:col-span-5">
            <FooterLinks />
          </div>

          <div className="lg:col-span-3">
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-accent/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-muted-foreground">
            <p className="text-center md:text-left">© {currentYear} Louvx. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
