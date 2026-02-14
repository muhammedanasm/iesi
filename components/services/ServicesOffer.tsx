"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offerServices = [
  {
    id: "01.",
    title: "MEP Design & Build",
    desc: "From the first idea to the master plan, we shape layouts that balance innovation.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
  },
  {
    id: "02.",
    title: "Electrical Systems",
    desc: "Comprehensive power distribution and lighting solutions tailored for projects.",
    image:
      "https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=2070",
  },
  {
    id: "03.",
    title: "HVAC Installations",
    desc: "Advanced central AC and industrial cooling systems for maximum efficiency.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
  },
  {
    id: "04.",
    title: "ELV & Security",
    desc: "Intelligent low-voltage systems for security, CCTV, access control, and IT networking.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
  },
  {
    id: "05.",
    title: "Fire & Safety",
    desc: "Integrated fire suppression, detection, and alarm systems for full safety coverage.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070",
  },
  {
    id: "06.",
    title: "Plumbing Systems",
    desc: "Complete water supply, drainage, and sanitary systems for all building types.",
    image:
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2070",
  },
  {
    id: "07.",
    title: "Maintenance (AMC)",
    desc: "Preventive and corrective maintenance for MEP, HVAC, and ELV systems to ensure uptime.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070",
  },
];

const ServicesOffer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-[#F5F4F2] px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen">
      {/* HEADER SECTION */}
      {/* HEADER SECTION - With Marquee Box */}
      <div className="text-center mb-32">
        <div className="mb-8 inline-flex items-center overflow-hidden bg-white border border-black/5 rounded-[10px] py-2 px-6 w-fit mx-auto shadow-sm max-w-[220px]">
          <div className="whitespace-nowrap animate-marquee-offer flex gap-8 text-[9px] tracking-[0.4em] font-bold text-[#C69A59] uppercase">
            <span>Solutions / Our Services</span>
            <span>Solutions / Our Services</span>
          </div>
        </div>
        <h2 className="text-5xl md:text-6xl font-sans text-[#161616] tracking-tight">
          Find Out What We Offer
        </h2>
      </div>

      {/* SERVICE LIST CONTAINER */}
      <div className="max-w-[1500px] mx-auto relative">
        {offerServices.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className="relative h-32 md:h-68 flex items-center cursor-pointer border-b border-black/[0.05] last:border-none"
          >
            {/* THE SLIDING BACKGROUND */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  layoutId="active-pill"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-x-[-30px] top-4 bottom-4 bg-[#C69A59] rounded-[20px] z-0"
                />
              )}
            </AnimatePresence>

            {/* CONTENT GRID */}
            <div
              className={`relative z-10 w-full grid grid-cols-1 md:grid-cols-12 items-center transition-colors duration-500
              ${activeIndex === index ? "text-white" : "text-[#161616]"}
            `}
            >
              {/* 1. ID & TITLE (Split into 2 lines) */}
              <div className="md:col-span-5 flex items-center gap-10">
                <span
                  className={`text-lg md:text-2xl font-serif font-bold transition-colors
                  ${activeIndex === index ? "text-white/60" : "text-[#C69A59]"}`}
                >
                  {service.id}
                </span>
                <h3 className="text-2xl md:text-4xl font-sans font-bold tracking-tighter max-w-[280px] leading-[1.1]">
                  {service.title}
                </h3>
              </div>

              {/* 2. OVERLAPPING FLOATING IMAGE */}
              <div className="md:col-span-3 flex justify-center relative">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 0, y: 20 }}
                      animate={{ opacity: 1, scale: 1, rotate: -8, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 0, y: 20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute top-[-100px] md:top-[-120px] w-64 md:w-[350px] aspect-[16/10] overflow-hidden rounded-[25px] shadow-2xl z-20 pointer-events-none"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. DESC (Always visible) & ARROW */}
              <div className="md:col-span-4 flex items-center justify-end gap-10">
                <motion.p
                  animate={{
                    x: activeIndex === index ? 0 : 5,
                  }}
                  className={`hidden md:block text-sm max-w-[250px] leading-relaxed font-light transition-colors duration-500 
                    ${activeIndex === index ? "text-white/80" : "text-gray-500"}`}
                >
                  {service.desc}
                </motion.p>

                <div
                  className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500
                   ${activeIndex === index ? "bg-white text-[#161616] border-white" : "bg-transparent border-black/10 text-[#161616]"}`}
                >
                  <span
                    className={`text-2xl transform transition-transform duration-500 
                      ${activeIndex === index ? "rotate-0" : "rotate-[-45deg]"}`}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee-offer {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-offer {
          animation: marquee-offer 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesOffer;
