"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const CartIcon = () => {
  const cartItemCount = 2 // This should come from your cart state/context

  return (
    <Link 
      href="/cart" 
      className="relative p-2 rounded-lg hover:bg-accent transition-colors group"
      aria-label={`Shopping cart with ${cartItemCount} items`}
    >
      <ShoppingCart 
        size={22} 
        className="text-foreground group-hover:text-primary transition-colors" 
      />
      
      {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow-sm animate-in zoom-in-50">
          {cartItemCount > 9 ? "9+" : cartItemCount}
        </span>
      )}
    </Link>
  )
}

export default CartIcon
