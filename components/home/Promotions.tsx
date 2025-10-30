export default function Promotions() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Promotion 1 */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-8 sm:p-12 flex flex-col justify-between min-h-64">
            <div>
              <p className="text-primary font-semibold text-sm mb-2">Limited Time Offer</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-2">Summer Collection</h3>
              <p className="text-muted-foreground mb-6">Get up to 40% off on selected items</p>
            </div>
            <button className="w-fit px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Shop Now
            </button>
          </div>

          {/* Promotion 2 */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-8 sm:p-12 flex flex-col justify-between min-h-64">
            <div>
              <p className="text-primary font-semibold text-sm mb-2">Exclusive Deal</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-2">New Arrivals</h3>
              <p className="text-muted-foreground mb-6">Discover the latest trends first</p>
            </div>
            <button className="w-fit px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
