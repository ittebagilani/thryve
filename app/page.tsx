import CTASection from "@/components/cta";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import ServicesSection from "@/components/services";
import TestimonialsSection from "@/components/testimonials";
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
