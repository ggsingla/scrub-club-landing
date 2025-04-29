'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative py-24">
      <div className="absolute left-0 w-1/2 h-full top-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero-image.png"
            alt="NoScrubs Laundry Service"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Empty div for spacing */}
          <div className='min-h-[500px]' />
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                Your Laundry, <span className="text-primary">Delivered</span> in 4 Hours
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Experience hassle-free laundry service with NoScrubs. Schedule a pickup, and we&apos;ll take care of the rest. Fast, reliable, and professional.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Schedule Pickup
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-primary/10"
                  />
                ))}
              </div>
              <div className="text-sm">
                Trusted by <span className="font-semibold text-foreground">2,000+</span> customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 