"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
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
            {/* <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070')",
              }}
            ></div> */}
            <Image
              src="/images/about.webp" // നിങ്ങളുടെ പുതിയ ഇമേജ് പാത്ത്
              alt="IES Engineering Excellence"
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-110  group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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

        {/* Right Side: Content for Professionals */}
        <div className="lg:col-span-7 lg:pl-12">
          <div className="content-reveal mb-6 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#C69A59]"></div>
            <span className="text-[#C69A59] font-bold text-[10px] tracking-[0.5em] uppercase">
              Integrated MEP Coordination
            </span>
          </div>

          <h2 className="content-reveal text-5xl md:text-7xl font-sans font-bold leading-[1] text-[#161616] mb-10 tracking-tighter">
            Bridging Design & <br />
            <span className=" font-light text-[#C69A59]/80">
              Precision Execution
            </span>
          </h2>

          <div className="mb-12">
            <p className="content-reveal text-gray-500 text-lg leading-relaxed max-w-2xl font-light mb-6">
              Under the{" "}
              <span className="text-black font-semibold">
                18+ years of professional leadership
              </span>{" "}
              of Muhammed Nakash, IES International (Est. 2021) has redefined
              the Sultanate’s electromechanical landscape. We don't just execute
              projects; we offer{" "}
              <span className="text-black font-medium border-b-2 border-[#C69A59]/30">
                Value Engineering
              </span>{" "}
              solutions that optimize costs without compromising technical
              integrity.
            </p>
            <p className="content-reveal text-gray-500 text-lg leading-relaxed max-w-2xl font-light">
              Our USP lies in our **Total Integration Approach**. While many
              handle singular trades, we provide a unified workflow for **MEP,
              HVAC, Fire & Safety, and ELV**, ensuring seamless technical
              compliance and superior project lifecycles.
            </p>
          </div>

          {/* Catchy USP Grid for Tech Professionals */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="content-reveal border-l-2 border-[#C69A59] pl-6 py-2 group cursor-default">
              <h4 className="text-sm font-black uppercase tracking-widest mb-1 text-[#161616]">
                Turnkey Solutions
              </h4>
              <p className="text-[11px] text-gray-400">
                Single-point accountability from design to final commissioning.
              </p>
            </div>
            <div className="content-reveal border-l-2 border-black/10 pl-6 py-2 group cursor-default">
              <h4 className="text-sm font-black uppercase tracking-widest mb-1 text-[#161616]">
                Technical Integrity
              </h4>
              <p className="text-[11px] text-gray-400">
                Strict adherence to International & Oman National Standards.
              </p>
            </div>
          </div>

          <div className="content-reveal">
            <button className="group flex items-center gap-6 cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#161616]">
                <span className="text-xl transition-all group-hover:text-white group-hover:translate-x-1">
                  →
                </span>
              </div>
              <span className="text-xs font-black uppercase tracking-widest">
                Our Engineering Heritage
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
