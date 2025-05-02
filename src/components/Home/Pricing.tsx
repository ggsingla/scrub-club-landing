'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Shirt, Sparkles, Clock, Package, Check } from 'lucide-react'
import { BucketSlider } from '../ui/bucket-slider'
import { Button } from '../ui/button'
import Image from 'next/image'

const ILLUSTRATIONS = [
  { max: 20, image: '/basket-levels/level-1.jpg' },
  { max: 40, image: '/basket-levels/level-2.jpg' },
  { max: 60, image: '/basket-levels/level-3.jpg' },
  { max: 80, image: '/basket-levels/level-4.jpg' },
  { max: 100, image: '/basket-levels/level-5.jpg' },
]

const calculateExtraCharge = (extraWeight: number) => {
  const tier1 = Math.min(20, extraWeight)
  const tier2 = Math.min(20, Math.max(0, extraWeight - 20))
  const tier3 = Math.max(0, extraWeight - 40)
  return tier1 * 1 + tier2 * 1.5 + tier3 * 2
}

const Pricing = () => {
  const [selectedWeight, setSelectedWeight] = useState(20)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [memberPrice, setMemberPrice] = useState(0)
  const [regularPrice, setRegularPrice] = useState(0)
  const [imageSrc, setImageSrc] = useState(ILLUSTRATIONS[0].image)

  useEffect(() => {
    const extraWeight = Math.max(0, selectedWeight - 20)
    const extraCharge = calculateExtraCharge(extraWeight)

    // Calculate regular price (always with base 35)
    const regularBase = 35
    setRegularPrice(regularBase + extraCharge)

    // Calculate member price (always with base 25)
    const memberBase = 25
    setMemberPrice(memberBase + extraCharge)

    // Determine image
    const tierImage = ILLUSTRATIONS.find(t => selectedWeight <= t.max)
    setImageSrc(tierImage?.image ?? ILLUSTRATIONS[ILLUSTRATIONS.length - 1].image)
  }, [selectedWeight])

  // Calculate monthly savings (assuming 4 pickups per month)
  const perPickupSavings = regularPrice - memberPrice
  const monthlySavings = perPickupSavings * 4 // 4 pickups per month
  const netMonthlySavings = monthlySavings - 9.99 // Subtract membership fee

  return (
    <section className='container py-24'>
      <div className='text-center space-y-4 mb-12'>
        <h2 className='text-3xl font-bold sm:text-4xl'>
          Simple, Transparent Pricing
        </h2>
        <p className='text-lg text-muted-foreground'>
          First 20 lbs included in pickup fee. Pay only for what you need.
        </p>
      </div>

      <Card className='min-h-[600px] grid grid-cols-[300px_1fr] overflow-hidden'>
        {/* Slider Section - Left */}
        <div className='p-8 border-r h-full flex items-center justify-center bg-background/50'>
          <div className='h-full w-full flex flex-col items-center space-y-4'>

            <BucketSlider
              orientation='vertical'
              value={[selectedWeight]}
              onValueChange={(val) => setSelectedWeight(val[0])}
              min={0}
              max={100}
              step={1}
              stepLabels={[
                { value: 100, label: '100 lbs' },
                { value: 80, label: '80 lbs' },
                { value: 60, label: '60 lbs' },
                { value: 40, label: '40 lbs' },
                { value: 20, label: '20 lbs' },
                { value: 0, label: '0 lbs' },
              ]}
            />
            <span className='text-xs text-muted-foreground text-center font-medium'>
              Select the approximate weight of your laundry basket
            </span>
          </div>
        </div>

        {/* Content Section - Right */}
        <div className='p-8 space-y-8'>
          {/* Price Display */}
          <div className='grid grid-cols-[1fr_auto] gap-8 items-start'>
            <Image
              src={imageSrc}
              alt='Basket Level'
              width={300}
              height={300}
              className='rounded-lg h-full w-full object-cover border shadow-sm'
            />
            <div className='space-y-8 min-w-[300px]'>
              {/* Weight Display */}
              <div className='space-y-1'>
                <div className='flex items-baseline gap-2'>
                  <span className='text-3xl font-bold tracking-tight'>
                    {selectedWeight} lbs
                  </span>
                  <span className='text-sm text-muted-foreground'>selected</span>
                </div>
                <p className='text-sm text-muted-foreground'>
                  {selectedWeight <= 20 ? 'Within base weight limit' : `${selectedWeight - 20} lbs over base limit`}
                </p>
              </div>

              {/* Price Comparison */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2 p-4 rounded-lg border'>
                  <h4 className='text-sm font-medium text-muted-foreground'>Regular Price</h4>
                  <div className='flex items-baseline gap-1'>
                    <span className='text-2xl font-bold'>${regularPrice.toFixed(2)}</span>
                    <span className='text-xs text-muted-foreground'>/pickup</span>
                  </div>
                </div>
                <div className='space-y-2 p-4 rounded-lg border bg-primary/5 relative'>
                  <div className='absolute -top-2 -right-2 bg-primary text-[10px] text-white px-2 py-0.5 rounded-full'>SAVE ${monthlySavings.toFixed(2)}/mo</div>
                  <h4 className='text-sm font-medium text-primary flex items-center gap-1'>
                    <Sparkles className='h-3 w-3' />
                    Member Price
                  </h4>
                  <div className='flex items-baseline gap-1'>
                    <span className='text-2xl font-bold text-primary'>${memberPrice.toFixed(2)}</span>
                    <span className='text-xs text-muted-foreground'>/pickup</span>
                  </div>
                  <div className='text-xs text-muted-foreground mt-2'>
                    Only $9.99/mo for membership
                  </div>
                  <Button
                    className='w-full mt-3'
                    onClick={() => setIsSubscribed(true)}
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? 'Current Plan' : 'Subscribe Now'}
                  </Button>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className='space-y-2 p-4 rounded-lg bg-primary/5 border'>
                <h4 className='font-medium flex items-center gap-2'>
                  <Check className='h-4 w-4 text-primary' />
                  Membership Benefits
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• Save $10 on every pickup</li>
                  <li>• Up to ${netMonthlySavings.toFixed(2)} net monthly savings</li>
                  <li>• Priority scheduling & premium service</li>
                  <li>• Cancel anytime, no commitments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className='pt-8 border-t space-y-4'>
            <h4 className='font-semibold'>Premium Service Includes:</h4>
            <ul className='grid grid-cols-2 gap-4'>
              <li className='flex items-center gap-2 text-sm'>
                <Clock className='h-4 w-4 text-primary' />
                4-hour turnaround
              </li>
              <li className='flex items-center gap-2 text-sm'>
                <Shirt className='h-4 w-4 text-primary' />
                Professional cleaning
              </li>
              <li className='flex items-center gap-2 text-sm'>
                <Package className='h-4 w-4 text-primary' />
                Premium packaging
              </li>
              <li className='flex items-center gap-2 text-sm'>
                <Sparkles className='h-4 w-4 text-primary' />
                Priority service
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default Pricing
