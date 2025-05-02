'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { calculateExtraCharge, ILLUSTRATIONS } from '@/lib/priceCalculatorUtils'

const BASE_PRICE = 35
const MEMBER_PRICE = 25

const PriceCalculator = () => {

  const [selectedWeight, setSelectedWeight] = useState(20)
  const [memberPrice, setMemberPrice] = useState(0)
  const [regularPrice, setRegularPrice] = useState(0)
  const [activeIllustration, setActiveIllustration] = useState(ILLUSTRATIONS[0])

  useEffect(() => {
    const extraWeight = Math.max(0, selectedWeight - 20)
    const extraCharge = calculateExtraCharge(extraWeight)

    setRegularPrice(BASE_PRICE + extraCharge)
    setMemberPrice(MEMBER_PRICE + extraCharge)

    const newIllustration = ILLUSTRATIONS.find(item => selectedWeight <= item.max) || ILLUSTRATIONS[ILLUSTRATIONS.length - 1]
    setActiveIllustration(newIllustration)
  }, [selectedWeight])


  return (
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
                <div className="w-full flex justify-between text-xs text-muted-foreground text-center px-2">
                  <span className='flex flex-col items-center gap-1 w-1'>
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
              <Card className="hover:border-muted-foreground/30 transition-colors">
                <CardContent className="p-6 text-center flex flex-col gap-3 h-full">
                  <h4 className="font-medium">Regular Price</h4>
                  <div className="text-3xl font-bold">
                    ${regularPrice.toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-auto">
                    One-time service
                  </p>
                  <Button variant="outline" className="w-full group">
                    Schedule Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary bg-primary/5 hover:bg-primary/10 transition-colors">
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="font-medium">Member Price</h4>
                  <div className="text-3xl font-bold text-primary">
                    ${memberPrice.toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground">+ $9.99/month</p>
                  <p className="text-sm font-medium text-primary">
                    Save $10 per pickup
                  </p>
                  <Button className="w-full group">
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
  )
}

export default PriceCalculator