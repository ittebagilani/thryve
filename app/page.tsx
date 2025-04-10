import CTASection from "@/components/cta";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import StackedCardTestimonials from "@/components/ui/stacked-testimonials";
import Services from "@/components/services";


export default function Home() {
  return (
   <PageLayout>
    <Hero />
    <Services />
    {/* <ServicesSection /> */}
    {/* <TestimonialsSection /> */}
    <StackedCardTestimonials />
    {/* <CTASection /> */}
   </PageLayout>
  );
}
