import RegularPlanCard from './RegularPlanCard'
import MembershipPlanCard from './MembershipPlanCard'

const PlanComparision = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid sm:max-w-xl md:max-w-3xl lg:max-w-5xl grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-center items-stretch">
      <RegularPlanCard />
      <MembershipPlanCard />
    </div>
  )
}

export default PlanComparision