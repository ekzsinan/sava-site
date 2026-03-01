"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { TourPackage } from "../_data/tours";

export interface CartItem {
  tour: TourPackage;
  quantity: number;
  selectedDate: string;
  travelers: number;
}

interface CartContextValue {
  items: CartItem[];
  add: (tour: TourPackage, date: string, travelers: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = useCallback((tour: TourPackage, date: string, travelers: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.tour.slug === tour.slug);
      if (existing) return prev.map((i) => i.tour.slug === tour.slug ? { ...i, travelers, selectedDate: date } : i);
      return [...prev, { tour, quantity: 1, selectedDate: date, travelers }];
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.tour.slug !== slug));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = items.reduce((s, i) => s + i.tour.price * i.travelers, 0);
  const count = items.reduce((s, i) => s + i.travelers, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
