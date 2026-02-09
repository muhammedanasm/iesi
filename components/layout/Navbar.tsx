"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#F5F4F2] py-6 px-8 md:px-20">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <Link href="/" className="flex flex-col text-[#161616]">
          <span className="text-xl md:text-2xl font-serif tracking-[0.3em] font-bold uppercase leading-none">
            IES INTL
          </span>
          <span className="text-[7px] tracking-[0.5em] uppercase opacity-60 font-bold mt-1">
            Engineering Excellence
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-14 text-[10px] font-bold uppercase tracking-[0.4em] text-[#161616]/70">
          <Link href="/" className="hover:text-[#C69A59] transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#C69A59] transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-[#C69A59] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#C69A59] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#C69A59] transition-colors"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className="bg-[#161616] text-white px-8 py-3.5 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#C69A59] transition-all"
        >
          Get A Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
