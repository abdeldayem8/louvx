"use client"

import type React from "react"

import { useState } from "react"

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">Stay Updated</h3>
      <p className="text-sm text-muted-foreground mb-4">Subscribe to get exclusive deals and new arrivals.</p>
      <form onSubmit={handleSubscribe} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2.5 rounded-lg bg-accent/50 text-foreground placeholder:text-muted-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 text-sm whitespace-nowrap"
          >
            {isSubmitted ? "✓ Subscribed" : "Subscribe"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsletterForm
