import PageBanner from "@/components/layout/PageBanner";
import ContactCards from "@/components/contact/ContactCards";
import ContactFormSection from "@/components/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <main className="bg-[#F5F4F2]">
      {/* 1. Hero Banner */}
      <PageBanner
        title="Contact"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
      />

      {/* 2. Info Cards (Overlapping the banner) */}
      <ContactCards />

      {/* 3. Form & Map Section */}
      <ContactFormSection />
    </main>
  );
}
