"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    title: "Mail Us 24/7",
    info: "admin@iesioman.com",
    desc: "We're always here to answer your questions. Reach us anytime via email.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Our Location",
    info: "Ghala, Muscat, Oman",
    desc: "Find us in the heart of the city, easy to access from all main routes.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Call Us 24/7",
    info: "+968 9850 9838",
    desc: "Our support team is available day and night to assist you by phone.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const ContactCards = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contact-card-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative z-[60] px-6 md:px-12 lg:px-20 "
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="contact-card-reveal bg-white p-10 md:p-12 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col transition-all duration-700 hover:shadow-xl group min-h-[300px] relative overflow-hidden"
            >
              {/* TOP SECTION: ICON + TITLE + INFO (Aligned horizontally) */}
              <div className="flex items-center gap-6 mb-8 ">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-[#F5F4F2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C69A59] transition-all duration-500">
                  <div className="text-[#C69A59] group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>

                {/* Title and Info next to icon */}
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-[#161616] tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p className="text-[#C69A59] font-bold text-[11px] md:text-[12px] tracking-widest mt-2">
                    {item.info}
                  </p>
                </div>
              </div>

              {/* Seperator Line */}
              <div className="w-full h-[1px] bg-black/[0.05] mb-8"></div>

              {/* BOTTOM SECTION: DESCRIPTION */}
              <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                {item.desc}
              </p>
              {/* --- HOVER GOLDEN CURVE (NOTCH) --- */}
              <div className="absolute bottom-[-1px] right-[-1px] w-[80px] h-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 z-0 pointer-events-none">
                <div className="relative w-full h-full bg-[#c69a59] rounded-tl-[40px]">
                  {/* Top Inverted Curve (Concave) */}
                  <div className="absolute -top-[39px] right-0 w-[40px] h-[40px] text-[#c69a59]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Left Inverted Curve (Concave) */}
                  <div className="absolute bottom-0 -left-[39px] w-[40px] h-[40px] text-[#c69a59]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 40H0C22.0914 40 40 22.0914 40 0V40Z"
                        fill="currentColor"
                      />
                    </svg>
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

export default ContactCards;
