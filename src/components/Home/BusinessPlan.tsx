'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dumbbell, Sparkles, HandCoins, ArrowRight, CheckCircle, Shirt, Leaf } from "lucide-react"

const BUSINESS_TYPES = [
  {
    icon: Dumbbell,
    title: "Gyms & Studios",
    description: "Keep towels and workout gear fresh for your members. Perfect for fitness centers and yoga studios."
  },
  {
    icon: Sparkles,
    title: "Spas & Salons",
    description: "Premium care for your robes, towels, and linens. Maintain the luxury experience your clients expect."
  },
  {
    icon: Shirt,
    title: "Cafés & Restaurants",
    description: "Fresh, clean uniforms and linens daily. Keep your staff looking sharp and tables pristine."
  },
  {
    icon: Leaf,
    title: "Wellness Centers",
    description: "Eco-friendly cleaning for your therapy linens and wellness equipment covers."
  }
]

const BUSINESS_BENEFITS = [
  {
    text: "Daily pickup & delivery",
    highlight: "Never run out of clean items"
  },
  {
    text: "Flexible billing options",
    highlight: "Pay per item or weight"
  },
  {
    text: "Same-day service",
    highlight: "4-hour turnaround available"
  },
  {
    text: "Eco-friendly cleaning",
    highlight: "Safe for sensitive skin"
  }
]

const BusinessPlan = () => {
  return (
    <section className="container py-24 space-y-12" id="business">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Hassle-free laundry for your business
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let us handle your laundry needs while you focus on growing your business.
          Perfect for gyms, spas, salons, cafés, and more.
        </p>
      </div>

      {/* Business Types Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BUSINESS_TYPES.map((type, index) => {
          const Icon = type.icon
          return (
            <Card key={index} className="p-6 space-y-3 group hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{type.title}</h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </Card>
          )
        })}
      </div>

      {/* CTA Section */}
      <Card className="relative overflow-hidden border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="relative p-8 lg:p-12 grid lg:grid-cols-[1fr_300px] gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Hassle-free laundry for your business</h3>
              <p className="text-muted-foreground">
                Join local businesses that trust us with their daily laundry needs.
                We&apos;ll create a custom plan that fits your schedule and budget.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {BUSINESS_BENEFITS.map((benefit, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {benefit.text}
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">
                    {benefit.highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-primary">
              <HandCoins className="h-4 w-4" />
              Starting at just $99/week for small businesses
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">Limited Time Offer</div>
              <p className="text-4xl font-bold">2 Weeks Free</p>
              <p className="text-sm text-muted-foreground">For new business partners</p>
            </div>
            <div className="space-y-3">
              <Button size="lg" className="w-full gap-2">
                Get Custom Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground">
                No long-term contracts required
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default BusinessPlan 