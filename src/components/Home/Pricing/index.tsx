'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Check, ArrowRight, XCircle, Clock } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'
import { Slider } from '../../ui/slider'
import Image from 'next/image'

const calculateExtraCharge = (extraWeight: number) => {
  const tier1 = Math.min(20, extraWeight)
  const tier2 = Math.min(20, Math.max(0, extraWeight - 20))
  const tier3 = Math.max(0, extraWeight - 40)
  return tier1 * 1 + tier2 * 1.5 + tier3 * 2
}

const ILLUSTRATIONS = [
  { max: 20, image: '/basket-levels/level-1.jpg' },
  { max: 40, image: '/basket-levels/level-2.jpg' },
  { max: 60, image: '/basket-levels/level-3.jpg' },
  { max: 80, image: '/basket-levels/level-4.jpg' },
  { max: 100, image: '/basket-levels/level-5.jpg' },
]

const planFeatures = {
  regular: [
    { text: 'Same-day service', available: true },
    { text: '4-hour turnaround', available: true },
    { text: 'Free pickup & delivery', available: true },
    { text: 'First 20lbs included', available: true },
    { text: 'Base price $35/pickup', available: true },
    { text: 'Discounted rate ($10 off)', available: false },
    { text: 'Priority scheduling', available: false },
    { text: 'Premium customer support', available: false },
  ],
  membership: [
    { text: 'Same-day service', available: true },
    { text: '4-hour turnaround', available: true },
    { text: 'Free pickup & delivery', available: true },
    { text: 'First 20lbs included', available: true },
    { text: 'Base price $25/pickup', available: true },
    { text: 'Discounted rate ($10 off)', available: true },
    { text: 'Priority scheduling', available: true },
    { text: 'Premium customer support', available: true },
  ]
}

const Pricing = () => {
  const [selectedWeight, setSelectedWeight] = useState(20)
  const [memberPrice, setMemberPrice] = useState(0)
  const [regularPrice, setRegularPrice] = useState(0)
  const [activeIllustration, setActiveIllustration] = useState(ILLUSTRATIONS[0])

  useEffect(() => {
    const extraWeight = Math.max(0, selectedWeight - 20)
    const extraCharge = calculateExtraCharge(extraWeight)

    // Calculate regular price (always with base 35)
    const regularBase = 35
    setRegularPrice(regularBase + extraCharge)

    // Calculate member price (always with base 25)
    const memberBase = 25
    setMemberPrice(memberBase + extraCharge)

    // Update active illustration based on weight
    const newIllustration = ILLUSTRATIONS.find(ill => selectedWeight <= ill.max) || ILLUSTRATIONS[ILLUSTRATIONS.length - 1]
    setActiveIllustration(newIllustration)
  }, [selectedWeight])

  // Calculate monthly savings (assuming 4 pickups per month)
  const perPickupSavings = regularPrice - memberPrice
  const monthlySavings = perPickupSavings * 4 // 4 pickups per month
  const netMonthlySavings = monthlySavings - 9.99 // Subtract membership fee

  return (
    <section id="pricing" className='relative py-24 overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className='container relative z-10'>
        {/* Section Header */}
        <div className='text-center space-y-4 mb-16'>
          <Badge variant="secondary" className="px-4 py-2 rounded-full">
            <Clock className="h-4 w-4 mr-2" />
            Simple, transparent pricing
          </Badge>
          <h2 className='text-4xl font-bold sm:text-5xl'>
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Save more with our membership option and enjoy exclusive benefits designed for your convenience.
          </p>
        </div>

        {/* Plan Selection Tabs */}
        <Tabs defaultValue="comparison" className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="comparison">Compare Plans</TabsTrigger>
            <TabsTrigger value="calculator">Price Calculator</TabsTrigger>
          </TabsList>

          {/* Tab 1: Plan Comparison */}
          <TabsContent value="comparison">
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Regular Plan */}
              <Card className="group hover:border-muted-foreground/20 transition-colors">
                <CardHeader className="bg-muted/50 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Regular Service</h3>
                    <p className="text-sm text-muted-foreground mt-1">One-time service with no commitment</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$35</span>
                    <span className="text-muted-foreground">/pickup</span>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary/10">
                    Schedule Pickup
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <h4 className="font-medium text-lg">What&apos;s included:</h4>
                  <ul className="space-y-4">
                    {planFeatures.regular.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.available ? (
                          <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center rounded-full">
                            <Check className="h-4 w-4 text-primary" />
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center rounded-full">
                            <XCircle className="h-4 w-4 text-muted-foreground/50" />
                          </Badge>
                        )}
                        <span className={feature.available ? "text-sm" : "text-sm text-muted-foreground/50"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Membership Plan */}
              <Card className="relative group hover:border-primary/80 transition-colors border-primary">
                <CardHeader className="bg-primary/10 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Scrub Club Membership</h3>
                    <p className="text-sm text-muted-foreground mt-1">Save up to ${netMonthlySavings.toFixed(2)} per month</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$25</span>
                    <span className="text-muted-foreground">/pickup</span>
                    <span className="text-sm ml-2 text-primary font-medium">+ $9.99/month</span>
                  </div>
                  <Button className="w-full group-hover:translate-y-[-2px] transition-all">
                    Join Scrub Club
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <h4 className="font-medium text-lg">Everything in Regular, plus:</h4>
                  <ul className="space-y-4">
                    {planFeatures.membership.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center rounded-full">
                          <Check className="h-4 w-4 text-primary" />
                        </Badge>
                        <span className="text-sm">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Price Calculator */}
          <TabsContent value="calculator">
            <Card className="mt-8 border-muted-foreground/20">
              <CardContent className="p-8 space-y-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="h-full flex flex-col justify-center">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                      <Image
                        src={activeIllustration.image}
                        alt="Laundry load size reference"
                        fill
                        className="object-cover transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </div>

                  {/* Right Column - Calculator */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Estimate Your Cost</h3>
                      <p className="text-muted-foreground">
                        First 20 lbs included in pickup fee. Additional charges apply for heavier loads.
                      </p>
                    </div>

                    {/* Weight Display */}
                    <Card className="bg-primary/5 border-primary">
                      <CardContent className="text-center p-8">
                        <div className="text-5xl font-bold text-primary">{selectedWeight} lbs</div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {selectedWeight <= 20
                            ? 'Within base weight limit'
                            : `${selectedWeight - 20} lbs over base limit`}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Weight Selector */}
                    <div className="space-y-4">
                      <label className="font-medium">Select your laundry weight:</label>
                      <div className="space-y-3">
                        <Slider
                          value={[selectedWeight]}
                          onValueChange={(value) => setSelectedWeight(value[0])}
                          max={100}
                          step={5}
                          className="w-full"
                        />
                        <div className="w-full flex justify-between text-xs text-muted-foreground text-center">
                          <span className='flex flex-col items-center gap-1 w-2'>
                            <p>|</p>
                            <p>0</p>
                          </span>
                          <span className='flex flex-col items-center gap-1 w-2'>
                            <p>|</p>
                            <p>20</p>
                          </span>
                          <span className='flex flex-col items-center gap-1 w-2'>
                            <p>|</p>
                            <p>40</p>
                          </span>
                          <span className='flex flex-col items-center gap-1 w-2'>
                            <p>|</p>
                            <p>60</p>
                          </span>
                          <span className='flex flex-col items-center gap-1 w-2'>
                            <p>|</p>
                            <p>80</p>
                          </span>
                          <span className='flex flex-col items-center gap-1 w-2'>
                            <p>|</p>
                            <p>100</p>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="group hover:border-muted-foreground/30 transition-colors">
                        <CardContent className="p-6 text-center flex flex-col gap-3 h-full">
                          <h4 className="font-medium">Regular Price</h4>
                          <div className="text-3xl font-bold">
                            ${regularPrice.toFixed(2)}
                          </div>
                          <p className="text-sm text-muted-foreground mt-auto">
                            No Savings
                          </p>
                          <Button variant="outline" className="w-full group">
                            Schedule Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-primary bg-primary/5 group hover:bg-primary/10 transition-colors">
                        <CardContent className="p-6 text-center space-y-3">
                          <h4 className="font-medium">Member Price</h4>
                          <div className="text-3xl font-bold text-primary">
                            ${memberPrice.toFixed(2)}
                          </div>
                          <p className="text-sm text-muted-foreground">+ $9.99/month membership fee</p>
                          <p className="text-sm font-medium text-primary">
                            Save ${perPickupSavings.toFixed(2)} per pickup
                          </p>
                          <Button className="w-full group hover:translate-y-[-2px] transition-all">
                            Join & Save
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Pricing
