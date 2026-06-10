import type { Metadata } from "next";
import "./globals.css";
import { SeatProvider } from "@/context/SeatContext";

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Readiology | Premium Study Spaces",
  description: "Curated environments for deep work. Premium reading room and self-study library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif selection:bg-primary/20 selection:text-primary">
        <SeatProvider>
          <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between bg-transparent absolute top-0 z-50">
            <div className="flex items-center">
              <img src="/images/logo_transparent.png" alt="Readiology Logo" className="h-16 w-auto object-contain" />
            </div>
            <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
              <a
                href="#amenities"
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Amenities
              </a>
              <a
                href="#pricing"
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Pricing
              </a>
              <a
                href="#seat-matrix"
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Reserve Space
              </a>
            </nav>
          </header>
          {children}
        </SeatProvider>
      </body>
    </html>
  );
}
