import { SeatMatrix } from "@/components/SeatMatrix";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Wifi,
  ThermometerSnowflake,
  Coffee,
  Shield,
  Armchair,
  Lamp,
  Sofa,
  Clock,
  Droplets,
  Zap,
  Cctv,
  Wind,
  Refrigerator,
  Utensils,
  MessageSquare,
  MapPin,
  Plane,
  Train,
  TrainFront,
  Bus,
  Car
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* ───── Hero Section ───── */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#F5F3EB] -z-20" />

        {/* Subtle Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none -z-10 overflow-hidden">
          <img
            src="/images/logo_transparent.png"
            alt="Watermark"
            className="w-full max-w-7xl object-contain scale-150"
          />
        </div>

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
            Embraces Excellence
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif tracking-tight text-foreground leading-[1.1]">
            A Sanctuary for <br />
            <span className="italic font-light">Deep Focus.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Premium reading rooms, self-study library, and accommodation designed exclusively for
            students. An environment crafted for absolute concentration.
            .
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            {[
              { icon: Clock, label: "Open 24/7", sub: "365 days a year" },
              { icon: Wifi, label: "High Speed Wi-Fi", sub: "Enterprise network" },
              { icon: Droplets, label: "RO Water Purifier", sub: "Safe & clean" },
              { icon: Zap, label: "Power Back-Up", sub: "Uninterrupted focus" },
              { icon: Cctv, label: "CCTV Surveillance", sub: "24/7 security" },
              { icon: Wind, label: "Air Purifier", sub: "Clean breathing" },
              { icon: ThermometerSnowflake, label: "AC Sections", sub: "Fully equipped" },
              { icon: Refrigerator, label: "Refrigerator", sub: "Store your food" },
              { icon: Utensils, label: "Dining Space", sub: "Comfortable eating" },
              { icon: MessageSquare, label: "Discussion Areas", sub: "Separate & soundproof" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col group items-center text-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center border border-border group-hover:border-primary transition-colors rounded-full bg-[#F5F3EB]">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-serif mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground font-light">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Pricing Tiers ───── */}
      <section id="pricing" className="w-full py-32 px-4 bg-[#FDFBF7] border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium block mb-4">
              Our Spaces
            </span>
            <h2 className="text-4xl font-serif text-foreground">
              Select Your Tier
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Readiology 2.1 */}
            <div className="flex flex-col border border-border bg-white hover:shadow-xl transition-shadow duration-500 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src="/images/brochure_p3_img1.jpeg" alt="Readiology 2.1" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif mb-2">Readiology 2.1</h3>
                  <div className="text-sm text-muted-foreground font-light tracking-wide">
                    Modern Minimalist Aesthetic
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Comfortable seating
                  </li>
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Designed to inspire focus
                  </li>
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Access to all amenities
                  </li>
                </ul>
                <a
                  href="#seat-matrix"
                  className="w-full text-center border border-foreground py-3 text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  Choose 2.1
                </a>
              </div>
            </div>

            {/* Readiology 2.0 */}
            <div className="flex flex-col border border-border bg-white hover:shadow-xl transition-shadow duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-muted text-muted-foreground px-4 py-1 text-[10px] tracking-widest uppercase z-10">
                Standard
              </div>
              <div className="h-48 overflow-hidden">
                <img src="/images/brochure_p4_img1.jpeg" alt="Readiology 2.0" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif mb-2">Readiology 2.0</h3>
                  <div className="text-sm text-muted-foreground font-light tracking-wide">
                    Escape the Noise
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Supportive seating
                  </li>
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Soft lighting
                  </li>
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Maximize productivity
                  </li>
                </ul>
                <a
                  href="#seat-matrix"
                  className="w-full text-center border border-foreground py-3 text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  Choose 2.0
                </a>
              </div>
            </div>

            {/* Readiology Elite */}
            <div className="flex flex-col border border-primary bg-primary/5 hover:shadow-xl transition-shadow duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-[10px] tracking-widest uppercase z-10">
                Premium
              </div>
              <div className="h-48 overflow-hidden">
                <img src="/images/brochure_p5_img1.jpeg" alt="Readiology Elite" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif mb-2">Readiology Elite</h3>
                  <div className="text-sm text-muted-foreground font-light tracking-wide">
                    The Ultimate Focused Experience
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Premium isolation
                  </li>
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Fresh & hygienic environment
                  </li>
                  <li className="text-sm font-light text-foreground/80 flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Cared for down to the smallest detail
                  </li>
                </ul>
                <a
                  href="#seat-matrix"
                  className="w-full text-center bg-primary text-primary-foreground py-3 text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
                >
                  Choose Elite
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Seat Matrix Section ───── */}
      <section id="seat-matrix" className="w-full py-32 px-4 bg-white">
        <SeatMatrix />
      </section>

      {/* ───── Accommodation Section ───── */}
      <section className="w-full py-24 px-4 bg-[#F5F3EB]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium">
              Live the best life
            </span>
            <h2 className="text-4xl font-serif text-foreground">Student Accommodation</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Our student accommodations are meticulously crafted to cater to every aspect of student life, offering a blend of comfort, convenience, and community. Each room is equipped with modern amenities including high-speed internet, study desks, comfortable beds with mattresses, book racks, chairs, and modern washrooms with geysers and ample storage space.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Common areas feature a cozy garden for relaxation and group study sessions. Safety and security are paramount, with 24/7 monitoring and secure access controls throughout the premises.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <span className="px-4 py-2 border border-primary/20 bg-white text-xs tracking-widest uppercase rounded-full">RO Purifier</span>
              <span className="px-4 py-2 border border-primary/20 bg-white text-xs tracking-widest uppercase rounded-full">Refrigerator</span>
              <span className="px-4 py-2 border border-primary/20 bg-white text-xs tracking-widest uppercase rounded-full">CCTV Surveillance</span>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 items-center">
            <img src="/images/brochure_p10_img1.jpeg" alt="Accommodation" className="w-full h-64 object-cover border border-border" />
            <img src="/images/brochure_p10_img2.jpeg" alt="Accommodation Room" className="w-full h-64 object-cover border border-border" />
          </div>
        </div>
      </section>

      {/* ───── Location & Connectivity ───── */}
      <section className="w-full py-24 px-4 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-4">Location & Connectivity</h2>
            <p className="text-muted-foreground font-light">Everything you need is just around the corner - from daily essentials to seamless transport connectivity.</p>
            <p className="text-muted-foreground font-light italic">&quot;Study where life happens.&quot;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="border p-2 bg-muted/20 rounded-xl overflow-hidden w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Readiology+The+Reading+Space,+Nagpur&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                  <MapPin className="text-primary w-6 h-6" /> Address
                </h3>
                <p className="text-lg font-light text-muted-foreground">
                  306, Vishwakarma Nagar,<br />
                  South Of Ridge Road,<br />
                  Nagpur.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-6">Connectivity</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-[#F5F3EB] flex items-center justify-center"><Plane className="w-4 h-4 text-primary" /></div>
                    <span>Airport - <strong className="text-foreground font-medium">7.6 km</strong></span>
                  </li>
                  <li className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-[#F5F3EB] flex items-center justify-center"><TrainFront className="w-4 h-4 text-primary" /></div>
                    <span>Railway Station - <strong className="text-foreground font-medium">2.8 km</strong></span>
                  </li>
                  <li className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-[#F5F3EB] flex items-center justify-center"><Train className="w-4 h-4 text-primary" /></div>
                    <span>Metro Station - <strong className="text-foreground font-medium">2.5 km</strong></span>
                  </li>
                  <li className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-[#F5F3EB] flex items-center justify-center"><Bus className="w-4 h-4 text-primary" /></div>
                    <span>Bus Stop - <strong className="text-foreground font-medium">3.1 km</strong></span>
                  </li>
                  <li className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-[#F5F3EB] flex items-center justify-center"><Car className="w-4 h-4 text-primary" /></div>
                    <span>Auto Stand - <strong className="text-foreground font-medium">100 m</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="w-full bg-foreground text-background py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-6">
              <img
                src="/images/logo_transparent.png"
                alt="Readiology Logo"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-background/60 font-light text-sm max-w-xs leading-relaxed mb-6">
              Embraces Excellence. Library | Accommodation | Cafeteria<br />
              By Ganvir&apos;s Hub
            </p>
            <div className="text-background/80 font-light text-sm space-y-2">
              <p>+91 91588 59594</p>
              <p>+91 99755 81069</p>
              <p>thereadiology@gmail.com</p>
              <p>www.readiology.in</p>
            </div>
          </div>
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-8 text-xs tracking-widest uppercase mb-10 md:mb-0">
              <a href="#amenities" className="hover:text-primary transition-colors">Amenities</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Spaces</a>
              <a href="#seat-matrix" className="hover:text-primary transition-colors">Reserve</a>
            </div>
            <p className="text-background/40 font-light text-xs">
              &copy; {new Date().getFullYear()} Readiology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
