"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  image: string;
}

const PageBanner = ({ title, image }: PageBannerProps) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".banner-content", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.4,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full px-4 md:px-10 lg:px-12 pt-32 pb-6 bg-[#F5F4F2]"
    >
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-[40px] md:rounded-[40px] bg-[#1a1a1a] ">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white text-center banner-content px-6">
          <h1 className="text-6xl md:text-8xl font-sans font-medium tracking-tighter mb-6">
            {title}
          </h1>
          <nav className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black opacity-80">
            <Link href="/" className="hover:text-[#C69A59] transition-colors">
              Home
            </Link>
            <span className="opacity-30">/</span>
            <span className="text-[#C69A59]">{title}</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
