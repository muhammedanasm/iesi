import HorizontalServices from "@/components/home/HorizontalServices";
import PageBanner from "@/components/layout/PageBanner";
import SectorsGrid from "@/components/services/SectorsGrid";
import ServicesOffer from "@/components/services/ServicesOffer";

export default function ServicesPage() {
  return (
    <main className="bg-[#F5F4F2]">
      {/* 
          SERVICE PAGE BANNER 
          Image: High-end Technical/Industrial Architecture
      */}
      <PageBanner
        title="Expertise"
        image="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070"
      />

      {/* NEW: Services Offer List Section */}
      <ServicesOffer />

      <HorizontalServices />

      <SectorsGrid />
    </main>
  );
}
