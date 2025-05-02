"use client"

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, ArrowRight } from 'lucide-react'
import React from 'react'

const membershipFeatures = [
  { text: 'Same-day service', available: true },
  { text: '4-hour turnaround', available: true },
  { text: 'Free pickup & delivery', available: true },
  { text: 'First 20lbs included', available: true },
  { text: 'Base price $25/pickup', available: true },
  { text: 'Discounted rate ($10 off)', available: true },
  { text: 'Priority scheduling', available: true },
  { text: 'Premium customer support', available: true },
]

const MembershipPlanCard: React.FC = () => (
  <Card className="h-full flex flex-col border-primary bg-accent/30 min-h-[420px]">
    <CardHeader className="space-y-4 flex-1">
      <div>
        <h3 className="text-2xl font-bold text-primary">Scrub Club Membership</h3>
        <p className="text-sm md:text-base text-muted-foreground mt-1 font-sans">Save up to $40 per month</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-bold">$25</span>
        <span className="text-muted-foreground font-sans">/pickup</span>
        <span className="text-sm ml-2 text-primary font-medium font-sans">+ $9.99/month</span>
      </div>
      <Button className="w-full group mt-2 md:mt-4">
        Join Scrub Club
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardHeader>
    <CardContent className="p-4 sm:p-6 md:p-8">
      <ul className="space-y-3 sm:space-y-4">
        {membershipFeatures.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center rounded-full">
              <Check className="h-4 w-4 text-primary" />
            </Badge>
            <span className="text-sm md:text-base font-sans">{feature.text}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

export default MembershipPlanCard 