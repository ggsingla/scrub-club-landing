'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

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


const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container py-24 space-y-12">
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
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {steps.map((step, index) => (
          <div key={step.title}>
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-2 border-border/50 pt-8 h-[400px] flex flex-col">
              <CardContent className="flex-1 flex flex-col">
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    {/* Background Circle */}
                    <div className="absolute inset-0 rounded-full bg-primary blur-[2px] scale-110 opacity-50" />
                    {/* Main Circle */}
                    <div className="relative w-12 h-12 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Container - Fixed Height */}
                <div className="h-48 relative mb-6">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content - Will take remaining space */}
                <div className="flex-1 flex flex-col justify-between text-center space-y-4">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center text-muted-foreground/80 text-sm">
        <p>All pickups and deliveries are handled by our trusted and verified team members.</p>
      </div>
    </section >
  )
}

export default HowItWorks 