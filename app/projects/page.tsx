import ProjectsSection from "@/components/home/ProjectsSection";
import PageBanner from "@/components/layout/PageBanner";
import ProjectExcellence from "@/components/projects/ProjectExcellence";

export default function ProjectsPage() {
  return (
    <main className="bg-[#F5F4F2]">
      {/* Premium Banner with Architectural Image */}
      <PageBanner
        title="Portfolio"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
      />
      <ProjectsSection />

      <ProjectExcellence />
    </main>
  );
}
