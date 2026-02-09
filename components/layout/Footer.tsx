"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F5F4F2] pb-8 md:pb-12">
      {/* 
          MAIN FLOATING FOOTER CARD 
          Added margins (mx) and large rounding to match Hero style
      */}
      <div className="mx-4 md:mx-10 lg:mx-12 bg-[#161616] rounded-[40px] md:rounded-[40px] px-8 md:px-20 pt-20 pb-12 text-white relative overflow-hidden shadow-2xl">
        {/* Subtle Background Illustrator */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 500 L1000 500 M500 0 L500 1000"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="500"
              cy="500"
              r="420"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex flex-col mb-8 group">
              <span className="text-2xl md:text-3xl font-sans tracking-[0.3em] font-bold uppercase leading-none">
                IES INTL
              </span>
              <span className="text-[7px] tracking-[0.5em] uppercase opacity-50 font-bold mt-2">
                Engineering Excellence
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xs font-light">
              IES International is dedicated to transforming visions into
              high-performance engineering realities through precision and
              technical excellence.
            </p>
            {/* Pill Button Style */}
            <button className="flex items-center gap-5 bg-white text-black pl-1.5 pr-8 py-1.5 rounded-full hover:bg-[#C69A59] hover:text-white transition-all duration-500 group shadow-lg">
              <div className="w-10 h-10 rounded-full bg-[#C69A59] group-hover:bg-black flex items-center justify-center text-white transition-all">
                <span className="text-xl">→</span>
              </div>
              <span className="uppercase tracking-[0.2em] text-[10px] font-black">
                Get in Touch
              </span>
            </button>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-lg font-sans font-bold mb-8 tracking-tight border-b border-white/5 pb-2 w-fit pr-10">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-4 text-xs uppercase tracking-widest text-gray-400 font-bold">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#C69A59] transition-colors"
                >
                  Our Legacy
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#C69A59] transition-colors"
                >
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#C69A59] transition-colors"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#C69A59] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#C69A59] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CORE EXPERTISE */}
          <div>
            <h4 className="text-lg font-sans font-bold mb-8 tracking-tight border-b border-white/5 pb-2 w-fit pr-10">
              Core Expertise
            </h4>
            <ul className="flex flex-col gap-5 text-sm text-gray-400 font-light">
              <li className="flex items-center gap-3 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C69A59] group-hover:scale-150 transition-transform"></div>{" "}
                MEP Design & Build
              </li>
              <li className="flex items-center gap-3 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C69A59] group-hover:scale-150 transition-transform"></div>{" "}
                HVAC Installations
              </li>
              <li className="flex items-center gap-3 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C69A59] group-hover:scale-150 transition-transform"></div>{" "}
                Fire & Safety Systems
              </li>
              <li className="flex items-center gap-3 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C69A59] group-hover:scale-150 transition-transform"></div>{" "}
                ELV & Automation
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#C69A59] font-black mb-4 block">
                Call Center
              </span>
              <Link
                href="tel:+96898509838"
                className="text-2xl md:text-3xl font-sans font-bold hover:text-[#C69A59] transition-colors"
              >
                +968 9850 9838
              </Link>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#C69A59] font-black mb-4 block">
                Official Inquiry
              </span>
              <Link
                href="mailto:info@iesioman.com"
                className="text-lg md:text-xl font-sans font-bold hover:text-[#C69A59] transition-colors break-words"
              >
                info@iesioman.com
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-bold">
            © 2026 <span className="text-white">IES INTERNATIONAL LLC</span>.
            All rights reserved.
          </p>

          {/* SOCIAL MEDIA CIRCLES */}
          {/* SOCIAL MEDIA CIRCLES WITH ICONS */}
          <div className="flex items-center gap-4">
            {[
              {
                id: "WA",
                link: "https://wa.me/96898509838",
                icon: (
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 4.7a8.38 8.38 0 0 1 .9 3.8z" />
                ),
              },
              {
                id: "IG",
                link: "#",
                icon: (
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect width="16" height="16" x="4" y="4" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M16.5 7.5v.001" />
                  </g>
                ),
              },
              {
                id: "FB",
                link: "#",
                icon: (
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                ),
              },
              {
                id: "YT",
                link: "#",
                icon: (
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 2.9 2.9 0 0 0-.46-5.33zM9.75 15.02V8.48L15.45 11.75z" />
                ),
              },
            ].map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target="_blank"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-xl group"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 group-hover:scale-110"
                >
                  {social.icon}
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
