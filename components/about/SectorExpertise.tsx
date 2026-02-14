"use client";
import React from "react";

const sectors = [
  "Multi Storied Buildings",
  "Premium Villas",
  "Retails & Hospitality",
  "Commercial Developments",
  "International Restaurants",
  "Industrial Facilities",
  "Government Outlets",
  "Specialized Environments",
];

const SectorExpertise = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-12 lg:px-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#C69A59] text-[10px] tracking-[0.4em] font-bold uppercase mb-4 block">
              Operational Reach
            </span>
            <h2 className="text-4xl md:text-6xl font-sans leading-tight">
              Sectors We <span className=" font-light opacity-60">Empower</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed pb-2">
            Our team of seasoned engineers brings precision and reliability to
            every specialized engineering environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-100 border border-gray-100 rounded-[30px] overflow-hidden">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white p-10 hover:bg-[#F5F4F2] transition-colors duration-500 group"
            >
              <span className="text-[10px] text-[#C69A59] font-bold block mb-4">
                0{index + 1}
              </span>
              <h4 className="text-lg font-sans font-light text-[#161616] group-hover:translate-x-2 transition-transform duration-500 uppercase tracking-tight">
                {sector}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorExpertise;
