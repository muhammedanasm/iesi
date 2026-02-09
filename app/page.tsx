import AboutSection from "@/components/home/AboutSection";
import ClientSection from "@/components/home/ClientSection";
import EthosSection from "@/components/home/EthosSection";
import FeatureCards from "@/components/home/FeatureCards";
import Hero from "@/components/home/Hero";
import HorizontalServices from "@/components/home/HorizontalServices";
import IdentitySection from "@/components/home/IdentitySection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* featured card */}
      <FeatureCards />
      {/* About Us Section */}
      <AboutSection />

      {/* services */}
      <HorizontalServices />

      {/* projects */}
      <ProjectsSection />

      {/* testimonial */}
      <TestimonialSection />

      {/* clients */}
      <ClientSection />

      {/* Other sections like About, Services, Projects will come here */}
      {/* <section className="h-screen flex items-center justify-center bg-white rounded-t-[50px] md:rounded-t-[80px] -mt-10 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-serif uppercase tracking-widest text-dark/30">
            Next Section Coming Soon
          </h2>
          <p className="font-sans mt-4 text-gray-500">
            We will build the Project Showcase next.
          </p>
        </div>
      </section> */}
    </main>
  );
}
