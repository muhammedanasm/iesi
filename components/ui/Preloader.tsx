"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const loaderRef = useRef(null);
  const leftPanel = useRef(null);
  const rightPanel = useRef(null);
  const logoRef = useRef(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Initial State: Text hidden
    gsap.set(".loader-text", { y: 40, opacity: 0 });

    // 2. Counter Logic (Runs independently)
    let count = { value: 0 };
    gsap.to(count, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => setPercentage(Math.floor(count.value)),
      onComplete: () => {
        // 3. Exit Animation (Triggers when count hits 100)
        const exitTl = gsap.timeline({
          onComplete: onComplete, // Tell MainWrapper loading is done
          delay: 0.2,
        });

        exitTl
          .to(".loader-content", {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
          })
          .to(
            leftPanel.current,
            {
              xPercent: -100,
              duration: 1.2,
              ease: "expo.inOut",
            },
            "-=0.2",
          )
          .to(
            rightPanel.current,
            {
              xPercent: 100,
              duration: 1.2,
              ease: "expo.inOut",
            },
            "<",
          ) // "<" means start at same time as previous animation
          .set(loaderRef.current, { display: "none" });
      },
    });

    // 4. Logo Intro Animation
    tl.to(".loader-text", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.3,
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex overflow-hidden"
    >
      {/* TWO PANELS FOR SMOOTH SPLIT EXIT */}
      <div
        ref={leftPanel}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#0a0a0a] z-10"
      ></div>
      <div
        ref={rightPanel}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#0a0a0a] z-10"
      ></div>

      {/* LOADER CONTENT */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center loader-content">
        {/* LOGO AREA */}
        <div
          ref={logoRef}
          className="flex flex-col items-center mb-10 overflow-hidden px-10"
        >
          <div className="flex overflow-hidden">
            {"IES INTL".split("").map((char, i) => (
              <span
                key={i}
                className="loader-text text-4xl md:text-7xl font-serif font-bold text-white tracking-widest inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <span className="loader-text text-[9px] md:text-[11px] tracking-[0.6em] uppercase text-[#C69A59] mt-4 font-bold opacity-80">
            Engineering Excellence
          </span>
        </div>

        {/* PROGRESS INFO */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-white font-serif text-3xl md:text-5xl opacity-20">
            {percentage}%
          </div>
          <div className="w-40 md:w-60 h-[1px] bg-white/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-[#C69A59] transition-all duration-100 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/40">
            Technical Initializing
          </span>
        </div>
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-15 pointer-events-none opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
