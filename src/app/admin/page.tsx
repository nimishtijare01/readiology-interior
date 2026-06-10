"use client";

import { useSeats, Seat } from "@/context/SeatContext";
import { cn } from "@/lib/utils";
import {
  Armchair,
  Sofa,
  Lamp,
  Wrench,
  CheckCircle2,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const { seats, freeSeat, toggleMaintenance } = useSeats();

  const totalSeats = seats.length;
  const occupiedSeats = seats.filter((s) => s.status === "occupied").length;
  const maintenanceSeats = seats.filter((s) => s.status === "maintenance").length;
  const availableSeats = seats.filter((s) => s.status === "available").length;

  const renderSeatIcon = (tier: number) => {
    switch (tier) {
      case 3:
        return <Sofa className="w-5 h-5 stroke-[1.5]" />;
      case 2:
        return <Lamp className="w-4 h-4 stroke-[1.5]" />;
      default:
        return <Armchair className="w-4 h-4 stroke-[1.5]" />;
    }
  };

  const getTierName = (tier: number) => {
    if (tier === 3) return "Readiology Elite";
    if (tier === 2) return "Readiology 2.0";
    return "Readiology 2.1";
  };

  // Group by tiers
  const tier1 = seats.filter((s) => s.tier === 1);
  const tier2 = seats.filter((s) => s.tier === 2);
  const tier3 = seats.filter((s) => s.tier === 3);

  const renderSeatGrid = (
    seatGroup: Seat[],
    tierLabel: string,
  ) => (
    <div className="space-y-6">
      <div className="border-b border-border/50 pb-2">
        <h3 className="text-xl font-serif text-foreground">{tierLabel}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {seatGroup.map((seat, index) => {
          const isAvailable = seat.status === "available";
          const isOccupied = seat.status === "occupied";
          const isMaintenance = seat.status === "maintenance";

          return (
            <motion.div
              key={seat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className={cn(
                "relative flex flex-col p-4 h-32 rounded-none border transition-all duration-300 group",
                isAvailable && "border-border bg-white hover:border-primary/50",
                isOccupied && "border-primary/20 bg-primary/5",
                isMaintenance && "border-destructive/30 bg-destructive/5"
              )}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-serif text-lg tracking-widest text-foreground">
                  {seat.seat_number}
                </span>
                <div
                  className={cn(
                    "text-muted-foreground",
                    isOccupied && "text-primary",
                    isMaintenance && "text-destructive"
                  )}
                >
                  {renderSeatIcon(seat.tier)}
                </div>
              </div>

              <div className="text-[10px] uppercase tracking-widest mt-auto mb-2 font-medium">
                {isAvailable && <span className="text-muted-foreground">Available</span>}
                {isOccupied && <span className="text-primary">Occupied</span>}
                {isMaintenance && <span className="text-destructive">Maintenance</span>}
              </div>

              {/* Admin Overlay Actions */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2 pointer-events-none group-hover:pointer-events-auto">
                {isOccupied && (
                  <button
                    onClick={() => freeSeat(seat.id)}
                    className="w-full text-[10px] tracking-widest uppercase border border-primary text-primary py-1.5 hover:bg-primary hover:text-white transition-colors"
                  >
                    Clear Seat
                  </button>
                )}
                {!isOccupied && (
                  <button
                    onClick={() => toggleMaintenance(seat.id)}
                    className={cn(
                      "w-full text-[10px] tracking-widest uppercase border py-1.5 transition-colors",
                      isMaintenance
                        ? "border-primary text-primary hover:bg-primary hover:text-white"
                        : "border-destructive text-destructive hover:bg-destructive hover:text-white"
                    )}
                  >
                    {isMaintenance ? "Fix Seat" : "Set Maint."}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
        <div className="bg-white p-6 border border-border flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground mb-4">
            <span className="text-xs tracking-widest uppercase">Total</span>
            <Armchair className="w-4 h-4" />
          </div>
          <div className="text-4xl font-serif text-foreground">{totalSeats}</div>
        </div>
        <div className="bg-white p-6 border border-border flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground mb-4">
            <span className="text-xs tracking-widest uppercase">Available</span>
            <CheckCircle2 className="w-4 h-4 text-green-600/70" />
          </div>
          <div className="text-4xl font-serif text-foreground">{availableSeats}</div>
        </div>
        <div className="bg-primary/5 p-6 border border-primary/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-primary mb-4">
            <span className="text-xs tracking-widest uppercase">Occupied</span>
            <Users className="w-4 h-4" />
          </div>
          <div className="text-4xl font-serif text-primary">{occupiedSeats}</div>
        </div>
        <div className="bg-destructive/5 p-6 border border-destructive/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-destructive mb-4">
            <span className="text-xs tracking-widest uppercase">Maintenance</span>
            <Wrench className="w-4 h-4" />
          </div>
          <div className="text-4xl font-serif text-destructive">{maintenanceSeats}</div>
        </div>
      </div>

      {/* Seat Management */}
      <div className="space-y-16">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-serif text-foreground">Space Management</h2>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Hover to act
          </span>
        </div>
        
        {renderSeatGrid(tier1, "Readiology 2.1")}
        {renderSeatGrid(tier2, "Readiology 2.0")}
        {renderSeatGrid(tier3, "Readiology Elite")}
      </div>
    </div>
  );
}
