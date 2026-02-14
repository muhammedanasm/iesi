"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import * as z from "zod"; // Zod import ചെയ്തു

// Zod Schema for Validation
const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const handleQuote = () => {
    Swal.fire({
      title: `<div class="modal-header">
                <span class="modal-tag">Get in Touch</span>
                <h2 class="modal-title">Request a Quote</h2>
              </div>`,
      html: `
        <div class="premium-swal-form">
          <div class="input-grid">
            <div class="field">
              <label>Full Name</label>
              <input id="swal-name" placeholder="Ex. John Doe">
            </div>
            <div class="field">
              <label>Email Address</label>
              <input id="swal-email" type="email" placeholder="john@example.com">
            </div>
          </div>
          <div class="input-grid">
            <div class="field">
              <label>Phone Number</label>
              <input id="swal-phone" type="tel" placeholder="+968 0000 0000">
            </div>
            <div class="field">
              <label>Service Type</label>
              <select id="swal-service">
                <option value="">Select Service</option>
                <option value="mep">MEP Design & Build</option>
                <option value="hvac">HVAC Installations</option>
                <option value="fire">Fire & Safety</option>
                <option value="elv">ELV Systems</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label>Your Message</label>
            <textarea id="swal-message" rows="3" placeholder="Tell us about your project requirements..."></textarea>
          </div>
        </div>
      `,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Submit Inquiry <span class="arrow">→</span>',
      customClass: {
        popup: "premium-popup",
        confirmButton: "premium-btn",
        htmlContainer: "premium-html",
      },
      buttonsStyling: false,
      background: "#F5F4F2",
      focusConfirm: false,
      showLoaderOnConfirm: true,

      preConfirm: async () => {
        const data = {
          name: (document.getElementById("swal-name") as HTMLInputElement)
            .value,
          email: (document.getElementById("swal-email") as HTMLInputElement)
            .value,
          phone: (document.getElementById("swal-phone") as HTMLInputElement)
            .value,
          service: (
            document.getElementById("swal-service") as HTMLSelectElement
          ).value,
          message: (
            document.getElementById("swal-message") as HTMLTextAreaElement
          ).value,
        };

        // 1. Zod Validation
        const validation = quoteSchema.safeParse(data);
        if (!validation.success) {
          Swal.showValidationMessage(
            validation.error.issues[0]?.message || "Validation Error",
          );
          return false;
        }

        // 2. Formspree Fetch (സെപ്പറേറ്റ് ലോഡർ ഇല്ലാതെ ഇവിടെ തന്നെ ചെയ്യുന്നു)
        try {
          const response = await fetch("https://formspree.io/f/xlgwjopp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) throw new Error();
          return true; // സക്സസ് ആണെങ്കിൽ true നൽകുന്നു
        } catch (error) {
          Swal.showValidationMessage(`Request failed: Something went wrong`);
          return false;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        // ഫൈനൽ സക്സസ് മെസേജ് മാത്രം
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "We will contact you shortly.",
          confirmButtonColor: "#C69A59",
          timer: 3000, // 3000ms = 3 Seconds

          showConfirmButton: false,
        });
      }
    });
  };
  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#F5F4F2] py-6 px-8 md:px-20 border-b border-black/5">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col text-[#161616]">
          <span className="text-xl md:text-2xl font-serif tracking-[0.3em] font-bold uppercase leading-none">
            IES INTL
          </span>
          <span className="text-[7px] tracking-[0.5em] uppercase opacity-60 font-bold mt-1">
            Engineering Excellence
          </span>
        </Link>

        {/* Dynamic Nav Links with Highlight */}
        <div className="hidden md:flex items-center gap-14 text-[10px] font-bold uppercase tracking-[0.4em]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition-colors duration-300 hover:text-[#C69A59] 
                  ${isActive ? "text-[#C69A59]" : "text-[#161616]/70"}`}
              >
                {link.name}
                {/* Active Dot like Lumoria */}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C69A59] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Quote Button triggers Modal */}
        <button
          onClick={handleQuote}
          className="bg-[#161616] text-white px-8 py-3.5 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#C69A59] transition-all shadow-xl shadow-black/5 cursor-pointer"
        >
          Get A Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
