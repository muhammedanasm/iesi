"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVisionAdvanced = () => {
  const containerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // സ്ക്രോൾ ദൂരം വർദ്ധിപ്പിച്ചു
          scrub: 1,
          pin: true, // സ്ക്രീൻ ഇവിടെ പിൻ ചെയ്യും
          anticipatePin: 1,
        },
      });

      // 1. Mission Fade Out & Vision Fade In
      tl.to(missionRef.current, {
        opacity: 0,
        y: -100,
        duration: 1,
      }).fromTo(
        visionRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5",
      );

      // 2. Background Progress Text (IES)
      gsap.to(".bg-progress-text", {
        xPercent: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#161616] overflow-hidden flex items-center justify-center"
    >
      {/* BACKGROUND GIANT TEXT (Subtle Wow Factor) */}
      <div className="bg-progress-text absolute bottom-10 left-0 text-[20vw] font-serif font-black text-white/[0.02] whitespace-nowrap leading-none pointer-events-none select-none">
        IES INTERNATIONAL IES INTERNATIONAL
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative w-full h-[400px]">
        {/* SECTION 1: MISSION */}
        <div
          ref={missionRef}
          className="absolute inset-0 flex flex-col items-center text-center justify-center"
        >
          <span className="text-[#C69A59] text-xs tracking-[0.6em] uppercase font-bold mb-8">
            01 / Purpose
          </span>
          <h2 className="text-6xl md:text-[100px] font-sans text-white leading-none tracking-tighter mb-10">
            Our <span className=" font-light opacity-60">Mission</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
            To deliver high-performance MEP & HVAC solutions with uncompromising
            <span className="text-white">
              {" "}
              safety, precision, and technical integrity.
            </span>
          </p>
        </div>

        {/* SECTION 2: VISION (Initially hidden) */}
        <div
          ref={visionRef}
          className="absolute inset-0 flex flex-col items-center text-center justify-center opacity-0"
        >
          <span className="text-[#C69A59] text-xs tracking-[0.6em] uppercase font-bold mb-8">
            02 / Aspiration
          </span>
          <h2 className="text-6xl md:text-[100px] font-sans text-white leading-none tracking-tighter mb-10">
            Our <span className=" font-light opacity-60">Vision</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
            To become Oman’s most trusted engineering partner, setting
            <span className="text-white"> industry-leading standards</span> in
            excellence and innovation.
          </p>
        </div>
      </div>

      {/* FIXED SIDE INDICATOR */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
        <div className="w-[1px] h-20 bg-white/10 relative">
          <div className="scroll-indicator-bar absolute top-0 left-0 w-full bg-[#C69A59] transition-all duration-300"></div>
        </div>
        <span className="text-[10px] text-white/20 vertical-text uppercase tracking-widest">
          Explore Our Spirit
        </span>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default MissionVisionAdvanced;
