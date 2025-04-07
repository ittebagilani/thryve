import CTASection from "@/components/cta";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import StackedCardTestimonials from "@/components/ui/stacked-testimonials";
import SwapCards from "@/components/ui/swap-cards";

export default function Home() {
  return (
   <PageLayout>
    <Hero />
    <SwapCards />
    {/* <ServicesSection /> */}
    {/* <TestimonialsSection /> */}
    <StackedCardTestimonials />
    <CTASection />
   </PageLayout>
  );
}
