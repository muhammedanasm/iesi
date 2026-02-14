"use client";
import React, { useState, useEffect } from "react";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false); // ഡിഫോൾട്ട് ആയി false ആക്കുക
  const [isClient, setIsClient] = useState(false); // ബ്രൗസർ ആണോ എന്ന് ചെക്ക് ചെയ്യാൻ

  useEffect(() => {
    setIsClient(true); // മൗണ്ട് ആയി എന്ന് ഉറപ്പിക്കുന്നു

    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      setIsLoading(true); // ആദ്യമായിട്ടാണെങ്കിൽ മാത്രം true ആക്കുക
    }
  }, []);

  useEffect(() => {
    if (isClient && !isLoading) {
      // ലോഡർ ഇല്ലാത്തപ്പോഴും കണ്ടന്റ് തെളിയാൻ ഇത് സഹായിക്കും
      gsap.to(".main-content", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });

      // സെഷൻ സെറ്റ് ചെയ്യുന്നു
      if (sessionStorage.getItem("hasLoaded") !== "true") {
        sessionStorage.setItem("hasLoaded", "true");
      }

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, [isLoading, isClient]);

  // സെർവർ സൈഡിൽ വെറുതെ കണ്ടന്റ് മാത്രം കാണിക്കുന്നു (Blink ഒഴിവാക്കാൻ)
  if (!isClient) {
    return (
      <div style={{ opacity: 0 }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }

  return (
    <>
      {/* ആദ്യ സന്ദർശനത്തിൽ മാത്രം ലോഡർ വരും */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className="main-content"
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? "hidden" : "visible",
        }}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
