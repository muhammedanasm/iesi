"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Background Grid & Text Reveal
      gsap.from(".bg-grid-line", {
        scaleX: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // 2. Large Background Text Animation (IES)
      gsap.to(".bg-text-floating", {
        x: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });

      // 3. Image Reveal with Masking
      gsap.from(".about-img-mask", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // 4. Content Staggered Reveal
      gsap.from(".content-reveal", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content-trigger",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#F5F4F2] px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* --- WOW FACTOR 1: ARCHITECTURAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="bg-grid-line absolute top-1/4 left-0 w-full h-[1px] bg-black"></div>
        <div className="bg-grid-line absolute top-2/4 left-0 w-full h-[1px] bg-black"></div>
        <div className="bg-grid-line absolute top-3/4 left-0 w-full h-[1px] bg-black"></div>
        <div className="absolute left-1/4 top-0 h-full w-[1px] bg-black"></div>
        <div className="absolute left-2/4 top-0 h-full w-[1px] bg-black"></div>
        <div className="absolute left-3/4 top-0 h-full w-[1px] bg-black"></div>
      </div>

      {/* --- WOW FACTOR 2: FLOATING LARGE BACKGROUND TEXT --- */}
      <div className="bg-text-floating absolute top-1/2 left-[10%] -translate-y-1/2 text-[20rem] font-serif font-bold text-black/[0.02] whitespace-nowrap leading-none select-none">
        IES INTERNATIONAL
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Modern Image Composition (Occupies 5 columns) */}
        <div className="lg:col-span-5 relative group">
          <div className="about-img-mask relative w-full aspect-[4/5] overflow-hidden rounded-tr-[150px] rounded-bl-[150px] shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Floating Experience Badge */}
          <div className="content-reveal absolute -bottom-10 -right-10 bg-[#C69A59] text-white p-10 rounded-full w-48 h-48 flex flex-col justify-center items-center text-center shadow-2xl">
            <span className="text-4xl font-serif font-bold leading-none">
              04+
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold mt-2 leading-tight">
              Years of <br /> Engineering Excellence
            </span>
          </div>
        </div>

        {/* Right Side: Re-imagined Content (Occupies 7 columns) */}
        <div className="lg:col-span-7 lg:pl-12 about-content-trigger">
          <div className="content-reveal mb-6 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#C69A59]"></div>
            <span className="text-[#C69A59] font-bold text-[10px] tracking-[0.5em] uppercase">
              The Sultanate's Preferred Partner
            </span>
          </div>

          <h2 className="content-reveal text-5xl md:text-7xl font-sans leading-[1] text-[#161616] mb-10 tracking-tight">
            Crafting the <br />
            <span className="font-sans font-light text-[#C69A59]/80">
              Soul of Systems
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-12">
              <p className="content-reveal text-gray-500 text-lg leading-relaxed max-w-2xl font-light">
                Established in 2021, IES International combines decades of
                technical heritage with the precision of modern
                electromechanical practices. We don't just install systems; we
                engineer{" "}
                <span className="text-black font-medium underline decoration-[#C69A59]/40 underline-offset-8">
                  seamless environments
                </span>{" "}
                that empower diverse sectors across Oman.
              </p>
            </div>
          </div>

          {/* Key Pillars with Icons/Shapes */}
          <div className="grid grid-cols-2 gap-12 mb-16 about-content-trigger">
            <div className="content-reveal group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#C69A59] group-hover:scale-150 transition-transform"></div>
                <h4 className="text-lg font-sans font-bold">MEP Precision</h4>
              </div>
              <p className="text-xs text-gray-400 tracking-wide leading-relaxed">
                Mechanical, Electrical, and Plumbing solutions tailored for
                premium environments.
              </p>
            </div>
            <div className="content-reveal group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#161616] group-hover:scale-150 transition-transform"></div>
                <h4 className="text-lg font-sans font-bold">HVAC & Safety</h4>
              </div>
              <p className="text-xs text-gray-400 tracking-wide leading-relaxed">
                High-performance climate control and fire safety systems built
                on integrity.
              </p>
            </div>
          </div>

          <div className="content-reveal">
            <button className="group relative flex items-center gap-10 bg-transparent">
              <div className="relative w-16 h-16 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#161616]">
                <span className="text-2xl transition-all duration-500 group-hover:text-white group-hover:translate-x-2">
                  →
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                  Discover
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.1em]">
                  Learn our Legacy
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
