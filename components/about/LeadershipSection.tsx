"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeadershipSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Content reveal from side
      gsap.from(".leader-content", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Rotating Badge Animation
      gsap.to(".rotating-badge", {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 bg-white px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* LEFT SIDE: IMAGE WITH PERFECT NOTCH */}
        <div className="lg:col-span-5 relative group">
          <div className="relative overflow-hidden rounded-[40px] md:rounded-[60px] aspect-[3.5/4.5] shadow-2xl bg-[#161616]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              alt="Muhammed Nakash"
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />

            {/* 
                THE PERFECT NOTCH (Bottom Right)
                Using the exact same SVG logic from your Hero to ensure perfection.
            */}
            <div className="absolute bottom-[-1px] right-[-1px] z-20 hidden md:block">
              <div className="relative bg-white w-[120px] h-[90px] rounded-tl-[50px] flex items-center justify-center">
                {/* Top Inverted Curve */}
                <div className="absolute -top-[49px] right-0 w-[50px] h-[50px] text-white">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path
                      d="M50 50V0C50 27.6142 27.6142 50 0 50H50Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {/* Left Inverted Curve */}
                <div className="absolute bottom-0 -left-[49px] w-[50px] h-[50px] text-white">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path
                      d="M50 50H0C27.6142 50 50 27.6142 50 0V50Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ROTATING BADGE */}
          <div className="rotating-badge absolute -top-10 -right-10 w-40 h-40 z-20 pointer-events-none hidden md:block opacity-40">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-[#C69A59]">
              <path
                id="circlePath"
                d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                fill="transparent"
              />
              <text className="text-[14px] font-bold tracking-[0.2em] uppercase">
                <textPath xlinkHref="#circlePath">
                  Visionary Leadership • Decades of Expertise •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* RIGHT SIDE: BIO & EXPERIENCE */}
        <div className="lg:col-span-7 lg:pl-10">
          <div className="leader-content mb-8">
            <span className="text-[#C69A59] font-bold text-[10px] tracking-[0.5em] uppercase block mb-4">
              Leadership
            </span>
            <h2 className="text-5xl md:text-7xl font-sans text-[#161616] leading-none mb-2">
              Muhammed Nakash
            </h2>
            <p className="text-xl font-sans  text-gray-400">
              Managing Director
            </p>
          </div>

          <div className="leader-content space-y-8 max-w-2xl">
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Driven by a team of seasoned engineers, project managers, and
              technical experts,{" "}
              <span className="text-black font-semibold">Muhammed Nakash</span>{" "}
              leads IES International with a vision to bring precision and
              reliability to every project we undertake in Oman.
            </p>

            <div className="p-10 bg-[#F5F4F2] rounded-[40px] border-l-4 border-[#C69A59] relative">
              <p className="text-[#161616] font-medium leading-relaxed italic">
                &ldquo;At IES International, we believe in building long-term
                partnerships through quality craftsmanship, transparent
                communication, and on-time delivery. Safety is not a
                procedure—it is our culture.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-4xl font-sans font-bold text-[#161616]">
                  20+
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-2">
                  Years In Industry
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-sans font-bold text-[#161616]">
                  Global
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-2">
                  Engineering Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
