import CTASection from "@/components/cta";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import ServicesSection from "@/components/services";
import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
   <PageLayout>
    <Hero />
    <ServicesSection />
    <TestimonialsSection />
    <CTASection />
   </PageLayout>
  );
}
