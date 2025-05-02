'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Clock, Star } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-12 lg:py-24">
      <div className="relative w-full h-[300px] md:h-[400px] lg:absolute lg:left-0 lg:w-1/2 lg:h-full lg:top-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero-image.png"
            alt="NoScrubs Laundry Service"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Empty div for spacing on desktop */}
          <div className="hidden lg:block min-h-[500px]" />

          {/* Content */}
          <div className="space-y-8 pt-8 lg:pt-0">
            {/* Featured badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Ready in just 4 hours</span>
            </div>

            {/* Headline and description */}
            <div className="space-y-6">
              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                Save big and join the <span className="text-primary">Scrub Club</span> today!
              </h1>
              <p className="text-lg md:text-xl">
                Get premium laundry service at <span className="font-medium text-primary">$25/pickup</span> with membership
                <span className="font-bold"> (vs. $35 regular price)</span>. Your clothes, back to you in just 4 hours.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="font-medium">Save $10 on every pickup with membership</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="font-medium">20lbs included with every pickup</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="font-medium">4-hour turnaround guaranteed</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 shadow-lg">
                Start Saving Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group hover:bg-secondary">
                Calculate Your Savings
                <ArrowRight className="ml-2 h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Trust signals */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">4.9/5 from 500+ reviews</span>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/50"></span>
                <span>Over 10,000 loads cleaned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 