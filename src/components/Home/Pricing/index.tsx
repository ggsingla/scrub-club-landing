import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PlanComparision from './PlanComparision'
import PriceCalculator from './PriceCalculator'

const Pricing = () => {

  return (
    <section id="pricing" className='relative py-24 overflow-hidden'>

      <div className='container relative z-10'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-4xl font-bold sm:text-5xl'>
            Simple <span className="text-primary">Pricing</span>, no hidden fees
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Save more with our membership option and enjoy exclusive benefits designed for your convenience.
          </p>
        </div>

        <Tabs defaultValue="comparison" className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="comparison">Compare Plans</TabsTrigger>
            <TabsTrigger value="calculator">Price Calculator</TabsTrigger>
          </TabsList>

          <TabsContent value="comparison">
            <PlanComparision />
          </TabsContent>
          <TabsContent value="calculator">
            <PriceCalculator />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Pricing
