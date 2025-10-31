export const Newsbar = () => {
  return (
    <div className="w-full bg-muted border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="h-10 flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center">
            Free shipping on orders over <span className="text-primary font-semibold">$50</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsbar
