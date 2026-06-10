import { SeatMatrix } from "@/components/SeatMatrix";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Wifi,
  ThermometerSnowflake,
  Coffee,
  Shield,
  ArrowRight,
  Armchair,
  Lamp,
  Sofa,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* ───── Hero Section ───── */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#F5F3EB] -z-20" />
        {/* Subtle decorative grid/texture can go here */}
        <div
          className="absolute inset-0 opacity-[0.03] -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
            Elevate Your Study Experience
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif tracking-tight text-foreground leading-[1.1]">
            A Sanctuary for <br />
            <span className="italic font-light">Deep Focus.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Premium reading rooms and self-study library designed exclusively for
            NEET&nbsp;PG &amp; UPSC aspirants. An environment crafted for absolute concentration.
          </p>

          <div className="pt-8">
            <a
              href="#seat-matrix"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-foreground text-background hover:bg-foreground/90 h-14 px-10 text-xs tracking-widest uppercase rounded-none transition-all duration-300"
              )}
            >
              Reserve Your Space
            </a>
          </div>
        </div>

        {/* Hero image placeholder (using abstract shape instead to fit aesthetic) */}
        <div className="w-full max-w-6xl mx-auto mt-20 h-64 md:h-96 relative bg-muted/30 border border-border flex items-center justify-center overflow-hidden">
           <span className="font-serif italic text-muted-foreground/40 text-2xl tracking-widest">
             Interior Atmosphere
           </span>
        </div>
      </section>

      {/* ───── Amenities Section ───── */}
      <section id="amenities" className="w-full py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium block mb-4">
                The Details
              </span>
              <h2 className="text-4xl font-serif text-foreground leading-tight">
                Curated for <br /> Uninterrupted Study
              </h2>
            </div>
            <p className="text-muted-foreground font-light max-w-md leading-relaxed">
              Every element of Readiology has been intentionally designed to remove distractions, from the lighting down to the ergonomics of our seating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            <div className="flex flex-col group">
              <div className="w-10 h-10 mb-6 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                <Wifi className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-lg font-serif mb-3">Enterprise Wi-Fi</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Zero buffering. Dedicated high-speed networks optimized for video lectures.
              </p>
            </div>
            <div className="flex flex-col group">
              <div className="w-10 h-10 mb-6 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                <ThermometerSnowflake className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-lg font-serif mb-3">Climate Control</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Optimum temperature maintained 24/7 for comfortable long study hours.
              </p>
            </div>
            <div className="flex flex-col group">
              <div className="w-10 h-10 mb-6 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                <Coffee className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-lg font-serif mb-3">Cafe Lounge</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Fresh coffee, tea, and quick snacks available round the clock in a separate acoustic zone.
              </p>
            </div>
            <div className="flex flex-col group">
              <div className="w-10 h-10 mb-6 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-lg font-serif mb-3">Secure Access</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                24/7 CCTV surveillance and secure entry ensuring complete safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Pricing Tiers ───── */}
      <section
        id="pricing"
        className="w-full py-32 px-4 bg-[#FDFBF7] border-t border-border"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium block mb-4">
              Memberships
            </span>
            <h2 className="text-4xl font-serif text-foreground">
              Select Your Tier
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="flex flex-col p-10 border border-border bg-white hover:shadow-xl transition-shadow duration-500">
              <div className="mb-8">
                <Armchair className="w-6 h-6 text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-2">Minimalist</h3>
                <div className="text-sm text-muted-foreground font-light tracking-wide">
                  Standard Desk Space
                </div>
              </div>
              <div className="text-3xl font-serif mb-10">
                ₹1,000<span className="text-sm font-sans font-light text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Basic ergonomic chair
                </li>
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Access to all amenities
                </li>
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Open layout
                </li>
              </ul>
              <a
                href="#seat-matrix"
                className="w-full text-center border border-foreground py-3 text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                Choose Minimalist
              </a>
            </div>

            {/* Tier 2 */}
            <div className="flex flex-col p-10 border border-primary bg-primary/5 hover:shadow-xl transition-shadow duration-500 relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-[10px] tracking-widest uppercase">
                Most Popular
              </div>
              <div className="mb-8">
                <Lamp className="w-6 h-6 text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-2">Comfort</h3>
                <div className="text-sm text-muted-foreground font-light tracking-wide">
                  Wider Desk &amp; Cushion
                </div>
              </div>
              <div className="text-3xl font-serif mb-10">
                ₹1,500<span className="text-sm font-sans font-light text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Cushioned office chair
                </li>
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Extended desk surface
                </li>
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Dedicated power socket
                </li>
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Access to all amenities
                </li>
              </ul>
              <a
                href="#seat-matrix"
                className="w-full text-center bg-primary text-primary-foreground py-3 text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Choose Comfort
              </a>
            </div>

            {/* Tier 3 */}
            <div className="flex flex-col p-10 border border-border bg-white hover:shadow-xl transition-shadow duration-500">
              <div className="mb-8">
                <Sofa className="w-6 h-6 text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-2">Executive</h3>
                <div className="text-sm text-muted-foreground font-light tracking-wide">
                  Premium Cubicle Isolation
                </div>
              </div>
              <div className="text-3xl font-serif mb-10">
                ₹2,500<span className="text-sm font-sans font-light text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> High-back ergonomic chair
                </li>
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Full desk isolation
                </li>
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Personal reading lamp
                </li>
                <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Access to all amenities
                </li>
              </ul>
              <a
                href="#seat-matrix"
                className="w-full text-center border border-foreground py-3 text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                Choose Executive
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Seat Matrix Section ───── */}
      <section id="seat-matrix" className="w-full py-32 px-4 bg-white">
        <SeatMatrix />
      </section>

      {/* ───── Footer ───── */}
      <footer className="w-full bg-foreground text-background py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="font-serif font-semibold text-2xl tracking-widest uppercase mb-6">
              Readiology<span className="text-primary">.</span>
            </div>
            <p className="text-background/60 font-light text-sm max-w-xs leading-relaxed">
              Premium reading rooms and self-study library crafted for absolute focus and dedication.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-8 text-xs tracking-widest uppercase mb-10 md:mb-0">
              <a href="#amenities" className="hover:text-primary transition-colors">Amenities</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#seat-matrix" className="hover:text-primary transition-colors">Reserve</a>
            </div>
            <p className="text-background/40 font-light text-xs">
              &copy; {new Date().getFullYear()} Readiology. Ajni, Nagpur. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
