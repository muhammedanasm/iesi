"use client";
import React from "react";

const features = [
  {
    title: "MEP Engineering",
    desc: "Precision-driven Mechanical, Electrical, and Plumbing solutions for modern infrastructure.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
      </svg>
    ),
  },
  {
    title: "HVAC Solutions",
    desc: "High-performance climate control and energy-efficient ventilation systems.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12 4.13 8.13M12 12l7.87-3.87M12 12l-3.87 7.87M12 12l3.87 7.87" />
      </svg>
    ),
  },
  {
    title: "Fire & Safety",
    desc: "Integrated fire protection and monitoring systems built on safety and integrity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "ELV Systems",
    desc: "Smart Low-Voltage solutions for robust security, automation, and connectivity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 6h.01M6 18h.01" />
      </svg>
    ),
  },
];

const FeatureCards = () => {
  return (
    <section className="relative mt-0 z-50 bg-[#F5F4F2] px-6 md:px-12 lg:px-20 pb-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 -mt-20 md:-mt-0">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-xl transition-all duration-500 group min-h-[300px]"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-[#F5F4F2] flex items-center justify-center mb-8 group-hover:bg-[#C69A59] transition-colors duration-500">
                <div className="w-6 h-6 text-[#C69A59] group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-sans font-bold text-[#161616] mb-4">
                {item.title}
              </h3>

              <div className="w-full h-[1px] bg-gray-100 mb-6 group-hover:bg-[#C69A59]/30 transition-all"></div>

              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
