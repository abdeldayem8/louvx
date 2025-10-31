"use client"

type CartIconProps = {
  as?: 'button' | 'div';
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'> & 
  React.ComponentPropsWithoutRef<'div'>;

const CartIcon = ({ 
  as: Component = 'button', 
  onClick, 
  className = '',
  ...props 
}: CartIconProps) => {
  const cartItemCount = 2

  return (
    <Component
      onClick={onClick}
      className={`relative p-2 rounded-lg hover:bg-accent transition-colors group ${className}`}
      aria-label={`Shopping cart with ${cartItemCount} items`}
      {...(Component === 'button' ? { type: 'button' } : {})}
      {...props}
    >
      <svg
        className="w-6 h-6 text-foreground group-hover:text-primary transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
          {cartItemCount > 9 ? "9+" : cartItemCount}
        </span>
      )}
    </Component>
  )
}

export default CartIcon
