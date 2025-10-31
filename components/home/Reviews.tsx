"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function Reviews() {
  const scrollContainerRef = useRef(null)

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      content: "Louvx has the best collection of premium products. The quality is exceptional!",
      rating: 5,
      image: "S",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      content: "Fast shipping and excellent customer service. Highly recommended!",
      rating: 5,
      image: "M",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Verified Buyer",
      content: "The designs are elegant and the prices are fair. Love shopping here!",
      rating: 5,
      image: "E",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Premium Member",
      content: "Exceptional quality and stunning designs. Best purchase ever!",
      rating: 5,
      image: "J",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-card-foreground">
            What Our Customers Say
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying premium quality
          </p>
        </div>

        <motion.div
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={itemVariants}>
              <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-card-foreground mb-6 leading-relaxed flex-1">{review.content}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {review.image}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Scroll View */}
        <div className="sm:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 min-w-min">
            {reviews.map((review) => (
              <div key={review.id} className="w-72 flex-shrink-0 bg-card rounded-2xl p-6 border border-border/50">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-card-foreground mb-4 text-sm leading-relaxed">{review.content}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-semibold">
                    {review.image}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground text-xs">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See All Reviews Link */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            See All Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
