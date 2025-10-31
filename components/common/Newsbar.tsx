export const Newsbar = () => {
  return (
    <div className="w-full bg-muted border-b border-border/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="h-10 flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center">
            Free shipping on orders over &lt;span className="text-primary font-semibold"&gt;500 EGP&lt;/span&gt;
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsbar
