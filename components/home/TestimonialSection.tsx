"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Developer",
    image:
      "https://lumoria.wpengine.com/wp-content/uploads/2025/05/Home-1-Testimonila-pro-8.jpg",
    text: "Their architectural insight turned our concept into a sustainable, elegant design. Highly recommended for bespoke projects.",
    stars: 5,
  },
  {
    name: "Ananya Verma",
    role: "Patron",
    image:
      "https://lumoria.wpengine.com/wp-content/uploads/2025/05/Home-1-Testimonila-pro-9.jpg",
    text: "Their team brought creativity and precision to our office design. The result is a space that inspires productivity and innovation daily.",
    stars: 4,
  },
  {
    name: "Daniel Clarke",
    role: "Client",
    image:
      "https://lumoria.wpengine.com/wp-content/uploads/2025/05/Home-1-Testimonila-pro-4.jpg",
    text: "Professional, innovative, and attentive to every detail. The entire process was seamless and enjoyable.",
    stars: 5,
  },
  {
    name: "anas Clarke",
    role: "Cliensdfsdt",
    image:
      "https://lumoria.wpengine.com/wp-content/uploads/2025/05/Home-1-Testimonila-pro-4.jpg",
    text: "Professional, innovative, and attentive to every detail. The entire process was seamless and enjoyable.",
    stars: 5,
  },
];

const marqueeItems = [
  {
    text: "Community Planning",
    img: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=200",
  },
  {
    text: "Educational Architecture",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=200",
  },
  {
    text: "Sustainable Design",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=200",
  },
];

const TestimonialSection = () => {
  const marqueeRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    gsap.fromTo(
      el,
      { x: "0%" },
      {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#F5F4F2] overflow-hidden relative pb-0"
    >
      {/* 1. HEADER */}
      <div className="text-center mb-16 px-6">
        <div className="mb-6 inline-flex items-center bg-white border border-black/5 rounded-full py-1.5 px-5 w-fit mx-auto shadow-sm">
          <span className="text-[9px] tracking-[0.4em] font-bold text-[#C69A59] uppercase">
            Trusted Feedback
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-sans text-[#161616] tracking-tight">
          What Clients Are Saying
        </h2>
      </div>

      {/* 2. PREMIUM SLIDER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none px-4 md:px-0">
          <button className="testi-prev-btn w-11 h-11 rounded-full border border-black/5 flex items-center justify-center cursor-pointer bg-white hover:bg-[#161616] hover:text-white transition-all duration-500 shadow-sm pointer-events-auto">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="testi-next-btn w-11 h-11 rounded-full border border-black/5 flex items-center justify-center cursor-pointer bg-white hover:bg-[#161616] hover:text-white transition-all duration-500 shadow-sm pointer-events-auto">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14m-7 7l7-7-7-7" />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          navigation={{ nextEl: ".testi-next-btn", prevEl: ".testi-prev-btn" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="px-2"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-10 md:p-12 rounded-[45px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col min-h-[400px] relative border border-gray-50 group">
                {/* Gold Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={index < t.stars ? "#C69A59" : "#E2E2E2"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#585858] text-[17px] font-light leading-[1.7] mb-0 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Footer: Name & Avatar */}
                <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-8">
                  <div className="flex flex-col">
                    <span className="text-xl font-sans font-bold text-[#161616] tracking-tight">
                      {t.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-1.5">
                      / {t.role}
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden border-[3px] border-[#F5F4F2] shadow-sm transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* --- WOW FACTOR: BACKGROUND QUOTE MARKS --- */}
                <div className="absolute top-10 right-10 select-none opacity-[0.04] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-500">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="#161616"
                  >
                    <path d="M30 30c-10 0-18 8-18 18v22h22V48H22c0-5.5 4.5-10 10-10V30zm40 0c-10 0-18 8-18 18v22h22V48H62c0-5.5 4.5-10 10-10V30z" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 3. INFINITE CONTINUOUS MARQUEE */}
      <div className="mt-28 border-t border-black/5 pt-20 overflow-hidden select-none relative bg-[#F5F4F2]">
        <div className="flex whitespace-nowrap animate-marquee-infinite">
          {/* CONTENT BLOCK 1 */}
          <div className="flex items-center shrink-0">
            {[
              {
                text: "MEP Engineering",
                img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=200",
              },
              {
                text: "HVAC Solutions",
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=200",
              },
              {
                text: "Industrial Excellence",
                img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=200",
              },
              {
                text: "Electrical Systems",
                img: "https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=200",
              },
              {
                text: "Fire & Safety",
                img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=200",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span
                  className="text-[6rem] md:text-[6rem] font-serif font-bold text-transparent uppercase tracking-tighter px-10"
                  style={{ WebkitTextStroke: "1px rgba(22,22,22,0.1)" }}
                >
                  {item.text}
                </span>
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mx-4 shadow-2xl border-4 border-white rotate-12 flex-shrink-0">
                  <img
                    src={item.img}
                    alt="Marquee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CONTENT BLOCK 2 (Exact Duplicate for Seamless Loop) */}
          <div className="flex items-center shrink-0">
            {[
              {
                text: "MEP Engineering",
                img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=200",
              },
              {
                text: "HVAC Solutions",
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=200",
              },
              {
                text: "Industrial Excellence",
                img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=200",
              },
              {
                text: "Electrical Systems",
                img: "https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=200",
              },
              {
                text: "Fire & Safety",
                img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=200",
              },
            ].map((item, index) => (
              <div key={index + "clone"} className="flex items-center">
                <span
                  className="text-[6rem] md:text-[6rem] font-serif font-bold text-transparent uppercase tracking-tighter px-10"
                  style={{ WebkitTextStroke: "1px rgba(22,22,22,0.1)" }}
                >
                  {item.text}
                </span>
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mx-4 shadow-2xl border-4 border-white rotate-12 flex-shrink-0">
                  <img
                    src={item.img}
                    alt="Marquee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* The Secret to Infinite Loop: Move from 0 to -100% of one block */
        @keyframes marquee-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee-infinite 80s linear infinite;
        }

        /* Speed Control:
            20s = Very Fast
            30s = Normal/Smooth (Recommended)
            40s = Slow/Luxurious
         */
      `}</style>
    </section>
  );
};

export default TestimonialSection;
