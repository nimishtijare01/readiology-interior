"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Tier = 1 | 2 | 3;

export type SeatStatus = "available" | "occupied" | "maintenance";

export interface Seat {
  id: string;
  seat_number: string;
  tier: Tier;
  status: SeatStatus;
  price: number;
  current_user_id: string | null;
}

interface SeatContextType {
  seats: Seat[];
  bookSeat: (seatId: string, userId: string) => void;
  freeSeat: (seatId: string) => void;
  toggleMaintenance: (seatId: string) => void;
}

const SeatContext = createContext<SeatContextType | undefined>(undefined);

// Deterministic seat generation
const generateMockSeats = (): Seat[] => {
  const seats: Seat[] = [];

  // Tier 1 — Basic (Block A) — 20 seats
  for (let i = 1; i <= 20; i++) {
    seats.push({
      id: `t1-${i}`,
      seat_number: `A${i}`,
      tier: 1,
      status: i % 4 === 0 ? "occupied" : "available",
      price: 1000,
      current_user_id: i % 4 === 0 ? "demo-user" : null,
    });
  }

  // Tier 2 — Standard (Block C) — 16 seats
  for (let i = 1; i <= 16; i++) {
    seats.push({
      id: `t2-${i}`,
      seat_number: `C${i}`,
      tier: 2,
      status: i % 3 === 0 ? "occupied" : "available",
      price: 1500,
      current_user_id: i % 3 === 0 ? "demo-user" : null,
    });
  }

  // Tier 3 — Premium (Block E) — 10 seats
  for (let i = 1; i <= 10; i++) {
    const isMaintenance = i === 5;
    const isOccupied = !isMaintenance && i % 2 === 0;
    seats.push({
      id: `t3-${i}`,
      seat_number: `E${i}`,
      tier: 3,
      status: isMaintenance ? "maintenance" : isOccupied ? "occupied" : "available",
      price: 2500,
      current_user_id: isOccupied ? "demo-user" : null,
    });
  }

  return seats;
};

export const SeatProvider = ({ children }: { children: ReactNode }) => {
  const [seats, setSeats] = useState<Seat[]>(generateMockSeats);

  const bookSeat = (seatId: string, userId: string) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId
          ? { ...seat, status: "occupied" as const, current_user_id: userId }
          : seat
      )
    );
  };

  const freeSeat = (seatId: string) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId
          ? { ...seat, status: "available" as const, current_user_id: null }
          : seat
      )
    );
  };

  const toggleMaintenance = (seatId: string) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          if (seat.status === "maintenance") {
            return { ...seat, status: "available" as const, current_user_id: null };
          } else {
            return { ...seat, status: "maintenance" as const, current_user_id: null };
          }
        }
        return seat;
      })
    );
  };

  return (
    <SeatContext.Provider value={{ seats, bookSeat, freeSeat, toggleMaintenance }}>
      {children}
    </SeatContext.Provider>
  );
};

export const useSeats = () => {
  const context = useContext(SeatContext);
  if (!context) {
    throw new Error("useSeats must be used within a SeatProvider");
  }
  return context;
};
