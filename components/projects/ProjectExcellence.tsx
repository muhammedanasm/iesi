"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    id: "01",
    title: "58+ Success Stories",
    desc: "From international restaurants like Hakkasan to government outlets, our portfolio is a testament to engineering precision.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  },
  {
    id: "02",
    title: "Sultanate Coverage",
    desc: "Executing complex electromechanical projects across Oman, from Muscat to Salalah with technical integrity.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
  },
  {
    id: "03",
    title: "Technical Standards",
    desc: "Every project, whether a luxury villa or an industrial plant, follows strict international technical standards.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069",
  },
];

const ProjectExcellence = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Giant Watermark Parallax
      gsap.to(".parallax-text", {
        xPercent: -30,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 2. Card Reveal Logic
      const cards = gsap.utils.toArray(".excellence-card");
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#F5F4F2] overflow-hidden"
    >
      {/* GIANT BACKGROUND TEXT */}
      <div className="parallax-text absolute top-40 left-0 text-[20vw] font-serif font-black text-black/[0.03] whitespace-nowrap select-none pointer-events-none uppercase italic">
        Technical Excellence Engineering
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* HEADER */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <span className="text-[#C69A59] font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">
              Our Legacy
            </span>
            <h2 className="text-5xl md:text-7xl font-sans text-[#161616] leading-none tracking-tighter">
              The Standard of <br />{" "}
              <span className=" font-light opacity-60">Excellence</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed">
            Building trust through high-performance engineering solutions and
            long-term partnerships across Oman.
          </p>
        </div>

        {/* STACKED LIST - NOT STICKY (To ensure stability) */}
        <div className="flex flex-col gap-20">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="excellence-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-black/5 pt-20"
            >
              {/* ID & Text */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <span className="text-5xl font-sans font-light text-[#C69A59] mb-8">
                  {item.id}.
                </span>
                <h3 className="text-4xl md:text-5xl font-sans font-medium text-[#161616] mb-8 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                  {item.desc}
                </p>

                {/* Arrow Link like Lumoria */}
                <div className="mt-12 group flex items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#161616] group-hover:text-white transition-all duration-500">
                    <span className="text-xl">→</span>
                  </div>
                  <span className="uppercase text-[10px] font-black tracking-widest">
                    Case Study
                  </span>
                </div>
              </div>

              {/* IMAGE AREA WITH THE PERFECT NOTCH */}
              <div className="lg:col-span-7 relative h-[400px] md:h-[600px] group">
                <div className="relative w-full h-full overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110"
                  />

                  {/* 
        THE PERFECT NOTCH (Bottom Right)
        SVG logic ensures no pixel gaps or broken lines.
    */}
                  <div className="absolute bottom-[-1px] right-[-1px] z-20 hidden md:block select-none pointer-events-none">
                    <div className="relative bg-[#F5F4F2] w-[140px] h-[100px] rounded-tl-[60px] flex items-center justify-center">
                      {/* Top Inverted Curve (SVG) */}
                      <div className="absolute -top-[59px] right-0 w-[60px] h-[60px] text-[#F5F4F2]">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M60 60V0C60 33.1371 33.1371 60 0 60H60Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      {/* Left Inverted Curve (SVG) */}
                      <div className="absolute bottom-0 -left-[59px] w-[60px] h-[60px] text-[#F5F4F2]">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M60 60H0C33.1371 60 60 33.1371 60 0V60Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      {/* Optional: Add a small decorative dot or number inside the notch like Lumoria */}
                      <div className="w-2 h-2 rounded-full bg-[#C69A59] opacity-40"></div>
                    </div>
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

export default ProjectExcellence;
