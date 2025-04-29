import HeroSection from '@/components/Home/HeroSection';
import HowItWorks from '@/components/Home/HowItWorks';
import Pricing from '@/components/Home/Pricing';
import BusinessPlan from '@/components/Home/BusinessPlan';
import FAQ from '@/components/Home/FAQ';
import Footer from '@/components/Home/Footer';
import MembershipCardHighlight from '@/components/Home/MembershipCardHighlight';
export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <HowItWorks />
      <MembershipCardHighlight />
      <Pricing />
      <BusinessPlan />
      <FAQ />
      <Footer />
    </div>
  );
}
