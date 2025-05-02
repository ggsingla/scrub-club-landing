"use client"

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, XCircle, ArrowRight } from 'lucide-react'
import React from 'react'

const regularFeatures = [
  { text: 'Same-day service', available: true },
  { text: '4-hour turnaround', available: true },
  { text: 'Free pickup & delivery', available: true },
  { text: 'First 20lbs included', available: true },
  { text: 'Base price $35/pickup', available: true },
  { text: 'Discounted rate ($10 off)', available: false },
  { text: 'Priority scheduling', available: false },
  { text: 'Premium customer support', available: false },
]

const RegularPlanCard: React.FC = () => (
  <Card className="h-full flex flex-col bg-secondary min-h-[420px]">
    <CardHeader className="space-y-4 flex-1">
      <div>
        <h3 className="text-2xl font-bold">Regular Service</h3>
        <p className="text-sm md:text-base text-muted-foreground mt-1 font-sans">One-time service with no commitment</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-bold">$35</span>
        <span className="text-muted-foreground font-sans">/pickup</span>
      </div>
      <Button variant="outline" className="w-full group mt-2 md:mt-4">
        Schedule Pickup
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardHeader>
    <CardContent className="p-4 sm:p-6 md:p-8">
      <ul className="space-y-3 sm:space-y-4">
        {regularFeatures.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.available ? (
              <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center rounded-full">
                <Check className="h-4 w-4 text-primary" />
              </Badge>
            ) : (
              <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center rounded-full">
                <XCircle className="h-4 w-4 text-muted-foreground/70" />
              </Badge>
            )}
            <span className={feature.available ? "text-sm md:text-base font-sans" : "text-sm md:text-base text-muted-foreground/70 font-sans"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

export default RegularPlanCard 