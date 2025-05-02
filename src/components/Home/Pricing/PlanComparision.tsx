import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Check, ArrowRight, XCircle } from 'lucide-react'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'


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

const PlanComparision = () => {
  return (
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
          <Button variant="outline" className="w-full">
            Schedule Pickup
            <ArrowRight className="ml-2 h-4 w-4" />
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
                    <XCircle className="h-4 w-4 text-muted-foreground/70" />
                  </Badge>
                )}
                <span className={feature.available ? "text-sm" : "text-sm text-muted-foreground/70"}>
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
            <p className="text-sm text-muted-foreground mt-1">Save up to $40 per month</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">$25</span>
            <span className="text-muted-foreground">/pickup</span>
            <span className="text-sm ml-2 text-primary font-medium">+ $9.99/month</span>
          </div>
          <Button className="w-full">
            Join Scrub Club
            <ArrowRight className="ml-2 h-4 w-4" />
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
  )
}

export default PlanComparision