'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

const memberBenefits = [
  'Save $10 on every pickup',
  'First 20lbs included in every pickup',
  'Priority scheduling & premium support',
  'Exclusive member-only promotions',
  'No commitments - cancel anytime',
]

const MembershipCardHighlight = () => {
  return (
    <section id="membership" className="container py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
        {/* Benefits Side */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Join the Elite <span className="text-primary">Scrub Club</span> Membership
            </h2>
          </div>

          <div className="space-y-6">
            {memberBenefits.map((benefit, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">$9.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Membership unlocks $10 savings on every pickup (just $25 instead of $35).
              Save up to $30+ per month with regular service!
            </p>
          </div>

          <Button size="lg" className="group">
            Join Scrub Club Elite
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Card Side */}
        <div className="flex-1 flex justify-center items-center">
          <Tilt
            className="w-[380px]"
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareBorderRadius="10px"
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={2000}
            scale={1.1}
            transitionSpeed={2000}
          >
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl bg-primary p-6 text-primary-foreground shadow-2xl transition-all duration-500 group">
              {/* Decorative Elements */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary-foreground/10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-x-4 group-hover:translate-y-4" />
              <div className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-primary-foreground/10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-x-4 group-hover:-translate-y-4" />

              {/* Logo and Brand */}
              <div className="relative mb-4 flex items-center gap-3">
                <Image
                  src="/noscrubs-sq.png"
                  alt="Noscrubs.io Logo"
                  width={32}
                  height={32}
                  className="rounded-full ring-2 ring-primary-foreground/20"
                />
                <span className="text-2xl font-bold tracking-wide">Noscrubs.io</span>
              </div>

              {/* Member Info */}
              <div className="relative mt-8 space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Member</div>
                  <div className="text-lg font-medium tracking-wide">John Scrubber</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Member Since</div>
                  <div className="font-signika">January 2024</div>
                </div>
              </div>

              {/* Membership Type */}
              <div className="absolute bottom-6 right-6">
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider opacity-70">Status</div>
                  <div className="text-lg font-semibold tracking-wide">
                    Scrub Club Elite
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default MembershipCardHighlight