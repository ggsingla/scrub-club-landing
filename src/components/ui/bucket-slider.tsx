"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface BucketSliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showSteps?: boolean
  stepLabels?: { value: number; label: string }[]
}

const BucketSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  BucketSliderProps
>(({ className, showSteps = true, stepLabels = [], value = [0], min = 0, max = 100, ...props }, ref) => {
  // Default step labels if none provided
  const defaultStepLabels = [
    { value: 100, label: '100 lbs' },
    { value: 75, label: '75 lbs' },
    { value: 50, label: '50 lbs' },
    { value: 25, label: '25 lbs' },
    { value: 0, label: '0 lbs' },
  ]

  const finalStepLabels = stepLabels.length > 0 ? stepLabels : defaultStepLabels
  const currentValue = value[0] || 0

  return (
    <div className="relative flex items-center h-full w-full">
      {/* Step Indicators */}
      {showSteps && (
        <div className="absolute left-0 h-full py-4 flex flex-col justify-between pointer-events-none z-10">
          {finalStepLabels.map((step, index) => {
            // Special handling for edge cases
            const isPassed = step.value === max
              ? currentValue === max
              : step.value === min
                ? currentValue > min
                : currentValue >= step.value + 1

            return (
              <div key={index} className="flex items-center gap-2">
                <div className={cn(
                  "h-0.5 w-2",
                  isPassed ? "bg-white" : "bg-primary/50"
                )} />
                <span className={cn(
                  "text-xs whitespace-nowrap transition-colors",
                  isPassed ? "text-white" : "text-muted-foreground"
                )}>
                  {step.label}
                </span>
              </div>
            )
          })}
        </div>
      )}

      <SliderPrimitive.Root
        ref={ref}
        orientation="vertical"
        value={value}
        min={min}
        max={max}
        className={cn(
          "relative flex h-full w-full touch-none select-none items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="absolute bottom-0 w-full h-full overflow-hidden">
          <div className="relative h-full w-full bg-gradient-to-b from-primary/20 to-white rounded-xl overflow-hidden">
            <SliderPrimitive.Range className="absolute bottom-0 w-full bg-gradient-to-b from-primary to-primary/70" />
          </div>
        </div>

        {/* Custom Thumb: Pin with circle cap */}
        <SliderPrimitive.Thumb className="relative flex left-16 items-center active:scale-105 transition-all shadow-xl">
          <div className="h-1 w-32 bg-yellow-400 ring-1 ring-yellow-500 rounded-full" /> {/* Pin stem */}
          <div className="absolute -right-2 h-5 w-5 rounded-full ring-1 ring-yellow-500 bg-yellow-400 shadow-md" /> {/* Pin head */}
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  )
})
BucketSlider.displayName = "BucketSlider"

export { BucketSlider }
