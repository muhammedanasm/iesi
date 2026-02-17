"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectFade, Pagination, Autoplay } from "swiper/modules"; // Autoplay ഒഴിവാക്കി
import "swiper/css";
import "swiper/css/effect-fade";
import gsap from "gsap";

// IES International - 3 Premium Engineering Focus Images
const slides = [
  {
    image: "/images/engineering.webp",
    marqueeText: "MECHANICAL • ELECTRICAL • PLUMBING",
    title: "Engineering Excellence,",
    titleSecondary: "Precision Integration",
    desc: "Delivering high-performance MEP solutions with uncompromising safety and technical integrity across the Sultanate of Oman.",
  },
  {
    image: "/images/hvacbanner.webp",
    marqueeText: "ADVANCED HVAC • CLIMATE CONTROL",
    title: "Optimized Cooling,",
    titleSecondary: "Sustainable Comfort",
    desc: "From ducted split to industrial VRF systems, we engineer climate solutions for maximum efficiency and long-term performance.",
  },
  {
    image: "/images/elv.webp",
    marqueeText: "FIRE SAFETY • ELV • AUTOMATION",
    title: "Intelligent Systems,",
    titleSecondary: "Trusted Security",
    desc: "Protecting lives and empowering businesses through robust fire safety and smart low-voltage technical environments.",
  },
];

const Hero = () => {
  const containerRef = useRef(null);

  const onSlideChange = () => {
    gsap.fromTo(
      ".hero-anim",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        overwrite: true,
      },
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#F5F4F2] flex flex-col pt-30 pb-8 mb-10 px-4 md:px-8 lg:px-10"
    >
      {/* 
          MAIN BANNER CONTAINER 
          ഹൈറ്റ് അഡ്ജസ്റ്റ് ചെയ്തു - ഇതിലൂടെ ടോപ്പ് റേഡിയസ് കൃത്യമായി കാണാൻ സാധിക്കും
      */}
      <div className="relative w-full h-[75vh] md:h-[80vh] overflow-hidden rounded-[40px] md:rounded-[80px] bg-[#1a1a1a] shadow-2xl">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]} // Autoplay നീക്കം ചെയ്തു
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChangeTransitionStart={onSlideChange}
          pagination={{ el: ".custom-dots", clickable: true }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              {/* Background Image Container */}
              {/* <div
                className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div> */}
              {/* IMAGE AREA - USING NEXT.JS IMAGE COMPONENT */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill // കണ്ടെയ്നറിൽ ഫുൾ ആയി നിൽക്കാൻ
                  priority={index === 0} // ആദ്യത്തെ ഇമേജ് വേഗത്തിൽ ലോഡ് ആകാൻ
                  className="object-cover animate-slow-zoom" // പണ്ടത്തെ അതേ അനിമേഷൻ ക്ലാസ്
                  sizes="100vw"
                />
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
              </div>

              {/* CONTENT AREA */}
              <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 text-white ">
                <div className="max-w-4xl">
                  {/* MARQUEE PILL BOX */}
                  <div className="hero-anim mb-8 inline-flex items-center overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-2 px-6 w-[210px]">
                    <div className="whitespace-nowrap animate-marquee flex gap-6 text-[9px] tracking-[0.4em] font-bold uppercase">
                      <span>{slide.marqueeText}</span>
                      <span>{slide.marqueeText}</span>
                    </div>
                  </div>

                  <h1 className="hero-anim text-5xl md:text-[85px] font-sans leading-[1.05] mb-8 tracking-tight font-medium">
                    {slide.title} <br />
                    <span className="font-sans font-light opacity-90">
                      {slide.titleSecondary}
                    </span>
                  </h1>

                  <p className="hero-anim max-w-lg text-sm md:text-lg font-light opacity-75 mb-10 leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="hero-anim">
                    <button className="flex items-center gap-5 bg-white text-black pl-2 pr-10 py-2 rounded-full hover:bg-[#C69A59] hover:text-white transition-all duration-500 group shadow-lg cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-[#C69A59] group-hover:bg-black flex items-center justify-center text-white transition-all">
                        <span className="text-xl">→</span>
                      </div>
                      <span className="uppercase tracking-[0.2em] text-[10px] font-bold">
                        Discover More
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 
            LUMORIA NOTCH (Bottom Right)
            SVG logic keeps the curve absolute and clean
        */}
        <div className="absolute bottom-0 right-0 z-30 hidden md:block select-none pointer-events-none">
          <div className="relative bg-[#F5F4F2] w-[150px] h-[110px] rounded-tl-[60px] flex items-center justify-center pt-6 pl-6">
            {/* Clickable Pagination Dots */}
            <div className="custom-dots flex items-center gap-3 pointer-events-auto"></div>

            {/* Inverted Curve Top */}
            <div className="absolute  -top-[59px] right-0 w-[60px] h-[60px] text-[#F5F4F2]">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M60 60V0C60 33.1371 33.1371 60 0 60H60Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Inverted Curve Left */}
            <div className="absolute bottom-0 -left-[59px] w-[60px] h-[60px] text-[#F5F4F2]">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M60 60H0C33.1371 60 60 33.1371 60 0V60Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }

        .custom-dots .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #161616 !important;
          opacity: 0.15;
          margin: 0 !important;
          transition: all 0.4s ease;
          cursor: pointer;
          border-radius: 50% !important;
        }
        .custom-dots .swiper-pagination-bullet-active {
          opacity: 1;
          background: #c69a59 !important;
          transform: scale(1.3);
        }

        @keyframes slow-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
