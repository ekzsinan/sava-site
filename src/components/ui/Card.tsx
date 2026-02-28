import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
}

export default function Card({ children, className = "", highlight = false }: CardProps) {
  return (
    <div
      className={`rounded-3xl p-8 bg-white shadow-card border transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
        highlight
          ? "border-brand-400 ring-2 ring-brand-200"
          : "border-neutral-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
