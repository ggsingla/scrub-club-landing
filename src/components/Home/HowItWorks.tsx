'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Schedule',
    description: 'Easily schedule your laundry pickup through our app or website at your preferred time.',
    image: '/process/schedule.png',
    alt: 'Schedule your laundry pickup'
  },
  {
    title: 'Pickup',
    description: 'Our professional team arrives at your doorstep to collect your laundry.',
    image: '/process/pickup.png',
    alt: 'Laundry pickup service'
  },
  {
    title: 'Wash & Fold',
    description: 'We carefully wash, dry, and fold your clothes using premium products and techniques.',
    image: '/process/wash-and-fold.png',
    alt: 'Professional laundry care'
  },
  {
    title: 'Delivery',
    description: 'Your fresh, clean, and neatly folded laundry is delivered back to you.',
    image: '/process/delivery.png',
    alt: 'Fresh laundry delivery'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const HowItWorks = () => {
  return (
    <section className="container py-24 space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold sm:text-4xl">
          How It <span className="text-primary">Works</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Experience hassle-free laundry service in four simple steps. We take care of everything while you focus on what matters most.
        </p>
      </div>

      {/* Steps Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step, index) => (
          <motion.div key={step.title} variants={itemVariants}>
            <Card className="relative group hover:shadow-lg transition-shadow duration-300 border-2 border-border/50">
              <CardContent className="pt-6 space-y-4">
                {/* Step Number */}
                <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>

                {/* Image */}
                <div className="relative h-48 w-full mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 text-center">
                  <h3 className="font-signika text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <div className="text-center text-muted-foreground/80 text-sm">
        <p>All pickups and deliveries are handled by our trusted and verified team members.</p>
      </div>
    </section>
  )
}

export default HowItWorks 