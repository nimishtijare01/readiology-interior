"use client";

import React, { useState } from "react";
import { useSeats, Seat } from "@/context/SeatContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Armchair,
  Sofa,
  Lamp,
  Shield,
  Zap,
  Coffee,
  Loader2,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const SeatMatrix = () => {
  const { seats, bookSeat } = useSeats();
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSeatClick = (seat: Seat) => {
    if (seat.status !== "available") return;
    setSelectedSeat(seat);
    setIsDialogOpen(true);
  };

  const handlePayment = () => {
    if (!selectedSeat) return;
    setIsProcessing(true);
    // Simulate transaction delay
    setTimeout(() => {
      bookSeat(selectedSeat.id, "user-id");
      setIsProcessing(false);
      setIsDialogOpen(false);
      setSelectedSeat(null);
    }, 1500);
  };

  const renderSeatIcon = (tier: number) => {
    switch (tier) {
      case 3:
        return <Sofa className="w-6 h-6 stroke-[1.5]" />;
      case 2:
        return <Lamp className="w-5 h-5 stroke-[1.5]" />;
      default:
        return <Armchair className="w-4 h-4 stroke-[1.5] opacity-70" />;
    }
  };

  const getTierName = (tier: number) => {
    if (tier === 3) return "Premium Executive";
    if (tier === 2) return "Comfort Focus";
    return "Minimalist Desk";
  };

  // Group by tiers for section headers
  const tier1 = seats.filter((s) => s.tier === 1);
  const tier2 = seats.filter((s) => s.tier === 2);
  const tier3 = seats.filter((s) => s.tier === 3);

  const renderSeatGrid = (
    seatGroup: Seat[],
    tierLabel: string,
    tierPrice: string
  ) => (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between border-b border-border/50 pb-2">
        <h3 className="text-xl font-serif">{tierLabel}</h3>
        <span className="text-sm text-primary font-medium tracking-wide">
          {tierPrice}
        </span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {seatGroup.map((seat, index) => {
          const isAvailable = seat.status === "available";
          const isOccupied = seat.status === "occupied";
          const isMaintenance = seat.status === "maintenance";

          return (
            <motion.button
              key={seat.id}
              disabled={!isAvailable}
              onClick={() => handleSeatClick(seat)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={isAvailable ? { y: -2, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.08)" } : {}}
              whileTap={isAvailable ? { scale: 0.98 } : {}}
              className={cn(
                "relative flex flex-col items-center justify-center p-4 h-28 rounded-none border transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isAvailable && "cursor-pointer",
                isOccupied && "opacity-40 cursor-not-allowed",
                isMaintenance && "opacity-20 cursor-not-allowed grayscale",
                // Available state
                isAvailable &&
                  "border-primary/20 bg-background hover:border-primary hover:bg-primary/5",
                // Occupied state
                isOccupied && "border-border bg-muted/50",
                // Maintenance state
                isMaintenance && "border-border/50 bg-transparent"
              )}
            >
              {/* Top accent line */}
              {isAvailable && (
                <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/30" />
              )}

              <div
                className={cn(
                  "mb-2 transition-colors",
                  isAvailable ? "text-primary" : "text-muted-foreground"
                )}
              >
                {renderSeatIcon(seat.tier)}
              </div>

              <span className="font-serif text-lg tracking-widest text-foreground">
                {seat.seat_number}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header & Legend */}
      <div className="mb-16 flex flex-col items-center text-center space-y-6">
        <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium">
          Select Your Space
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-foreground">
          Floor Plan
        </h2>
        <div className="w-12 h-[1px] bg-primary/40" />
        
        <div className="flex gap-8 text-xs tracking-widest uppercase text-muted-foreground mt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Available
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full border border-border" />
            Occupied
          </div>
        </div>
      </div>

      {/* Seat Grid */}
      <div className="space-y-20">
        {renderSeatGrid(tier1, "Minimalist Desk", "₹1,000/mo")}
        {renderSeatGrid(tier2, "Comfort Focus", "₹1,500/mo")}
        {renderSeatGrid(tier3, "Premium Executive", "₹2,500/mo")}
      </div>

      {/* Booking Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-none border-border">
          <DialogHeader className="mb-4">
            <DialogTitle className="font-serif text-2xl font-normal">Reserve Space</DialogTitle>
            <DialogDescription className="font-sans font-light">
              Review your selection before confirming.
            </DialogDescription>
          </DialogHeader>

          {selectedSeat && (
            <div className="py-6 space-y-8">
              <div className="flex items-center justify-between border-y border-border py-6">
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    {renderSeatIcon(selectedSeat.tier)}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl">
                      Space {selectedSeat.seat_number}
                    </h4>
                    <p className="text-sm text-muted-foreground font-light tracking-wide uppercase mt-1">
                      {getTierName(selectedSeat.tier)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-2xl text-foreground">
                    ₹{selectedSeat.price.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Included Amenities</p>
                <div className="grid grid-cols-2 gap-y-3 text-sm text-foreground/80 font-light">
                  <div className="flex items-center gap-3">
                    <Check className="w-3.5 h-3.5 text-primary" /> High-Speed Wi-Fi
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3.5 h-3.5 text-primary" /> 24/7 Access
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3.5 h-3.5 text-primary" /> Climate Control
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3.5 h-3.5 text-primary" /> Cafe Lounge
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="sm:justify-end gap-4 mt-4">
            <Button
              variant="ghost"
              onClick={() => setIsDialogOpen(false)}
              disabled={isProcessing}
              className="rounded-none font-light tracking-wide"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-8 tracking-widest uppercase text-xs h-10"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm & Pay"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
