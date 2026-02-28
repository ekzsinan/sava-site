import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "brand" | "neutral" | "success" | "warning" | "demo";
  className?: string;
}

const variants = {
  brand: "bg-brand-100 text-brand-700",
  neutral: "bg-neutral-100 text-neutral-600",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  demo: "bg-amber-400 text-amber-900",
};

export default function Badge({ children, variant = "brand", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
