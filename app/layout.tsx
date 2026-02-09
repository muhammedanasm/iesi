import type { Metadata } from "next";
import { Jost, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Footer from "@/components/layout/Footer";

// Fonts setup
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const tenor = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumoria | Professional Showcase Website",
  description: "Premium Architecture and Design Showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${tenor.variable} font-sans bg-light text-dark antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          {/* Footer can be added here later */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
