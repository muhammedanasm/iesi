import type { Metadata } from "next";
import { Jost, Tenor_Sans } from "next/font/google";
import "./globals.css";
import MainWrapper from "@/components/layout/MainWrapper";

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
  title: "IESI | Professional Showcase Website",
  description: "Premium Engineering and Design Showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${tenor.variable} font-sans bg-light text-dark antialiased`}
      >
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
