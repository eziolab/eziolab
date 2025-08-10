import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import ProjectsSection from "@/components/projects-section";
import ProcessSection from "@/components/process-section";
import TestimonialSection from "@/components/testimonial-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
