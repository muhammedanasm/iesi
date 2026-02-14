import AboutStats from "@/components/about/AboutStats";
import LeadershipSection from "@/components/about/LeadershipSection";
import MissionVisionAdvanced from "@/components/about/MissionVisionAdvanced";
import SectorExpertise from "@/components/about/SectorExpertise";
import AboutSection from "@/components/home/AboutSection";
import PageBanner from "@/components/layout/PageBanner";

export default function AboutPage() {
  return (
    <main className="bg-[#F5F4F2]">
      <PageBanner
        title="About"
        image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071"
      />

      {/* 1. Header Section */}
      <AboutSection />

      <LeadershipSection />

      {/* 3. Advanced Mission & Vision Section */}
      <MissionVisionAdvanced />

      {/* 4. Specialized Sectors Grid */}
      <SectorExpertise />

      {/* 4. Statistics / Achievement Grid */}

      <AboutStats />
    </main>
  );
}
