"use client";
import React, { useState } from "react";

const sectors = [
  {
    title: "Premium Villas",
    desc: "Custom MEP and HVAC engineering for exclusive residences, focusing on luxury and comfort.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    icon: "🏡",
  },
  {
    title: "Retails & Commercial",
    desc: "High-performance systems for malls, hypermarkets, and modern commercial developments.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    icon: "🏢",
  },
  {
    title: "Hospitality & F&B",
    desc: "Specialized engineering for luxury hotels, cafes, and international restaurant chains.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070",
    icon: "🍽️",
  },
  {
    title: "Industrial Facilities",
    desc: "Robust infrastructure solutions for warehouses, factories, and large-scale industrial plants.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
    icon: "🏭",
  },
  {
    title: "Government Outlets",
    desc: "Compliant and precision-driven MEP solutions for public sectors and ministry facilities.",
    image:
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2070",
    icon: "🏛️",
  },
  {
    title: "Technical Environments",
    desc: "Specialized engineering for complex environments requiring high technical accuracy.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    icon: "🛡️",
  },
];

const SectorsGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#F5F4F2] px-6 md:px-12 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        {/* SECTION HEADER - PDF Content Integration */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#C69A59] text-[10px] tracking-[0.4em] font-bold uppercase mb-4 block font-jost">
              Operational Scope
            </span>
            <h2 className="text-4xl md:text-5xl font-sans leading-tight text-[#161616]">
              Sectors We <span className=" font-light opacity-60">Empower</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed pb-2">
            Our expertise spans from multi-storied buildings to specialized
            engineering environments across the Sultanate of Oman.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer overflow-hidden rounded-[40px] bg-white h-[420px] transition-all duration-700 border border-black/5"
            >
              {/* IMAGE BACKGROUND (Visible on Hover) */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-110 
                ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0"}`}
                style={{ backgroundImage: `url(${sector.image})` }}
              >
                <div className="absolute inset-0 bg-[#C69A59]/85 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* CONTENT AREA */}
              <div className="relative z-10 h-full p-10 md:p-12 flex flex-col items-start text-left">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-8 transition-all duration-500
                  ${hoveredIndex === index ? "bg-white/20 text-white" : "bg-[#F5F4F2] text-[#161616]"}`}
                >
                  {sector.icon}
                </div>

                <h3
                  className={`text-2xl md:text-3xl font-sans font-light mb-6 transition-colors duration-500
                  ${hoveredIndex === index ? "text-white" : "text-[#161616]"}`}
                >
                  {sector.title}
                </h3>

                <div
                  className={`w-full h-[1px] mb-8 transition-colors duration-500
                  ${hoveredIndex === index ? "bg-white/30" : "bg-black/5"}`}
                ></div>

                <p
                  className={`text-sm leading-relaxed font-light transition-colors duration-500
                  ${hoveredIndex === index ? "text-white/90" : "text-gray-500"}`}
                >
                  {sector.desc}
                </p>

                <div className="mt-auto flex items-center gap-3">
                  <span
                    className={`text-[10px] uppercase font-black tracking-widest transition-colors duration-500
                    ${hoveredIndex === index ? "text-white" : "text-[#161616]"}`}
                  >
                    View Case Study
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                    ${hoveredIndex === index ? "bg-white text-[#C69A59]" : "bg-[#161616] text-white"}`}
                  >
                    <span
                      className={`text-xl transform transition-transform duration-500 ${hoveredIndex === index ? "rotate-0" : "rotate-[-45deg]"}`}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsGrid;
