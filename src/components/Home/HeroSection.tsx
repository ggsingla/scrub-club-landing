'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Check } from 'lucide-react'

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Exclusive Member Benefits</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                Join the Elite <span className="text-primary">Scrub Club</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Get premium laundry service benefits with our exclusive membership. Save $10 on every pickup and enjoy priority service.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-muted-foreground">$25 pickups (Save $10 each time)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-muted-foreground">20lbs included with every pickup</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-muted-foreground">Priority scheduling & premium support</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Join Scrub Club
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Benefits
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 