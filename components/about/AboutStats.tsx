"use client";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutStats = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      // 1. Line Drawing Animation
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        },
      );

      // 2. Numbers Counter Logic
      const numbers = gsap.utils.toArray(".count-item");
      numbers.forEach((num: any) => {
        const target = parseInt(num.getAttribute("data-target"));
        gsap.fromTo(
          num,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: num,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // 3. Floating Parallax for individual cards
      gsap.to(".stat-float", {
        y: (i) => (i % 2 === 0 ? -40 : 40),
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 2,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-60 bg-[#F5F4F2] px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* --- BACKGROUND GIANT WATERMARK --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-black/[0.02] select-none pointer-events-none uppercase italic">
        Legacy
      </div>

      <div className="max-w-[1400px] mx-auto relative h-[600px] md:h-[500px]">
        {/* --- DYNAMIC CONNECTING LINE (SVG) --- */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
          preserveAspectRatio="none"
        >
          <path
            ref={lineRef}
            d="M 150 100 C 400 50, 600 450, 950 350"
            stroke="#C69A59"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        </svg>

        {/* --- ASYMMETRIC STATS GRID --- */}

        {/* Stat 1: Established */}
        <div className="stat-float absolute top-[10%] left-[5%] md:left-[10%] z-10">
          <div className="flex flex-col items-start group">
            <span className="text-[10px] tracking-[0.5em] font-black text-[#C69A59] uppercase mb-4">
              Foundation
            </span>
            <div className="flex items-start">
              <span
                className="count-item text-7xl md:text-9xl font-sans font-medium text-[#161616]"
                data-target="2021"
              >
                0
              </span>
            </div>
            <div className="w-12 h-[1px] bg-black/10 mt-6 group-hover:w-24 group-hover:bg-[#C69A59] transition-all duration-700"></div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4">
              Established Year
            </p>
          </div>
        </div>

        {/* Stat 2: Projects (Centered & Lower) */}
        <div className="stat-float absolute top-[40%] left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center group">
            <span className="text-[10px] tracking-[0.5em] font-black text-[#C69A59] uppercase mb-4">
              Milestones
            </span>
            <div className="flex items-start">
              <span
                className="count-item text-7xl md:text-9xl font-sans font-medium text-[#161616]"
                data-target="50"
              >
                0
              </span>
              <span className="text-4xl md:text-6xl font-sans text-[#C69A59]">
                +
              </span>
            </div>
            <div className="w-12 h-[1px] bg-black/10 my-6 group-hover:w-24 group-hover:bg-[#C69A59] transition-all duration-700"></div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
              Successful Projects
            </p>
          </div>
        </div>

        {/* Stat 3: Satisfaction (Right & Higher) */}
        <div className="stat-float absolute top-[15%] right-[5%] md:right-[10%] z-10">
          <div className="flex flex-col items-end group text-right">
            <span className="text-[10px] tracking-[0.5em] font-black text-[#C69A59] uppercase mb-4">
              Trust Factor
            </span>
            <div className="flex items-start justify-end">
              <span
                className="count-item text-7xl md:text-9xl font-sans font-medium text-[#161616]"
                data-target="100"
              >
                0
              </span>
              <span className="text-4xl md:text-6xl font-sans text-[#C69A59]">
                %
              </span>
            </div>
            <div className="w-12 h-[1px] bg-black/10 my-6 group-hover:w-24 group-hover:bg-[#C69A59] transition-all duration-700"></div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* --- TECH DETAILS (Small floating info) --- */}
      <div className="mt-20 flex justify-center opacity-20">
        <div className="flex gap-12 items-center text-[9px] font-black uppercase tracking-[0.3em]">
          <span>Precision Data</span>
          <div className="w-2 h-2 rounded-full bg-[#C69A59]"></div>
          <span>Verified 2026</span>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
