import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 flex-shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">L</span>
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Louvx</span>
          <span className="text-xs text-muted-foreground">Premium Store</span>
        </div>
      </div>
    </Link>
  )
}

export default Logo
