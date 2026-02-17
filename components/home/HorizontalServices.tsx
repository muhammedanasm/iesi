"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Full Services extracted from your PDF
const services = [
  {
    id: "01",
    title: "MEP Design & Build",
    desc: "Complete engineering and execution of Mechanical, Electrical, and Plumbing systems.",
    image: "/images/mvpdesign.webp",
  },
  {
    id: "02",
    title: "Electrical Systems",
    desc: "Comprehensive LV installations, power distribution, and uninterrupted supply systems.",
    image: "/images/electric.webp",
  },
  {
    id: "03",
    title: "HVAC & Cooling",
    desc: "Advanced central AC, VRF, and industrial cooling solutions for maximum efficiency.",
    image: "/images/hvac.webp",
  },
  {
    id: "04",
    title: "Fire & Safety",
    desc: "Compliant fire suppression, detection, and alarm systems for full safety coverage.",
    image: "/images/fire.webp",
  },
  {
    id: "05",
    title: "ELV & Automation",
    desc: "Intelligent low-voltage systems for security, CCTV, and robust connectivity.",
    image: "/images/automation.webp",
  },
  {
    id: "06",
    title: "Plumbing Installations",
    desc: "Complete water supply, drainage, and sanitary systems for all building types.",
    image: "/images/plumbing.webp",
  },
  {
    id: "07",
    title: "Kitchen Ventilation",
    desc: "Commercial hood exhaust systems and ecology units for industrial kitchens.",
    image: "/images/kitchen.webp",
  },
  {
    id: "08",
    title: "Maintenance (AMC)",
    desc: "Preventive and corrective maintenance for MEP, HVAC, and ELV systems.",
    image: "/images/amc.webp",
  },
];

const HorizontalServices = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const totalCards = services.length;
    // Calculation for smooth movement across all cards
    const xMove = -(100 - 100 / (totalCards / 2.5));

    let ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        xPercent: xMove,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalCards * 400}`, // Dynamic length
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Default highlight for all cards
      gsap.utils.toArray(".service-card").forEach((card: any) => {
        gsap.set(card, { opacity: 1, scale: 1 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#F5F4F2] py-10 overflow-hidden">
      <div
        ref={containerRef}
        className="relative mx-4 md:mx-10 lg:mx-12 min-h-[90vh] bg-[#161616] rounded-[50px] md:rounded-[80px] overflow-hidden flex items-center shadow-2xl"
      >
        {/* BLUEPRINT GRID BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="service-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-grid)" />
          </svg>
        </div>

        <div
          ref={scrollRef}
          className="flex items-center px-[8vw] relative w-max gap-12 md:gap-16"
        >
          {/* INTRO CONTENT CARD */}
          <div className="w-[80vw] md:w-[35vw] flex-shrink-0 pr-10">
            {/* --- WOW FACTOR: MARQUEE HEADER (Like Hero) --- */}
            <div className="mb-8 inline-flex items-center overflow-hidden bg-white/5 border border-white/10 rounded-full py-2 px-6 w-[220px]">
              <div className="whitespace-nowrap animate-marquee-fast flex gap-6 text-[9px] tracking-[0.4em] font-bold text-[#C69A59] uppercase">
                <span>Expertise / Our Functions</span>
                <span>Expertise / Our Functions</span>
              </div>
            </div>

            <h2 className="text-white text-5xl md:text-[90px] font-sans leading-[0.95] tracking-tight">
              Our Path to <br />
              <span className="font-sans font-light text-[#C69A59]/80">
                Engineering <br />
                Greatness
              </span>
            </h2>
            <p className="text-white/40 mt-10 max-w-sm text-sm font-light leading-relaxed">
              Merging decades of technical heritage with the precision of modern
              electromechanical practices.
            </p>
          </div>

          {/* DYNAMIC SERVICE CARDS (All highlighted by default) */}
          {services.map((item, index) => (
            <div
              key={index}
              className="service-card w-[85vw] md:w-[28vw] h-[580px] bg-white rounded-[45px] p-4 flex flex-col group/card transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            >
              <div className="relative h-[60%] w-full overflow-hidden rounded-[35px]">
                {/* <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover/card:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div> */}
                <Image
                  src={item.image}
                  alt={item.title} // SEO-യ്ക്ക് അൾട്ട് ടെക്സ്റ്റ് അത്യാവശ്യമാണ്
                  fill // കണ്ടെയ്നറിന് ഉള്ളിൽ നിറഞ്ഞു നിൽക്കാൻ
                  className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-[10px] font-bold">
                  {item.id}
                </div>
              </div>

              <div className="flex-1 px-8 pt-10 flex flex-col justify-between pb-8">
                <div>
                  <h3 className="text-3xl font-sans font-medium text-[#161616] mb-4 tracking-tight group-hover/card:text-[#C69A59] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="group/btn flex items-center gap-4 cursor-pointer">
                    <span className="uppercase text-[10px] font-black tracking-[0.2em] text-[#161616]">
                      Explore Details
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center text-white group-hover/btn:bg-[#C69A59] transition-all duration-300">
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                  <div className="opacity-10 group-hover/card:opacity-40 transition-opacity">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 100 100"
                      fill="#C69A59"
                    >
                      <path d="M100 100V0C100 55.2285 55.2285 100 0 100H100Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* FINAL CTA */}
          <div className="w-[40vw] flex-shrink-0 flex flex-col items-center justify-center px-10">
            <button className="group relative flex flex-col items-center gap-8 text-center cursor-pointer">
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-700 group-hover:bg-[#C69A59] group-hover:border-[#C69A59] group-hover:scale-110">
                <span className="text-4xl transition-transform duration-500 group-hover:rotate-[-45deg]">
                  →
                </span>
              </div>
              <span className="text-[#C69A59] font-serif italic text-2xl">
                Discover All Services
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-fast {
          animation: marquee-fast 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HorizontalServices;
