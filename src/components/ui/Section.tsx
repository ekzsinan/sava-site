import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  narrow?: boolean;
}

export default function Section({ children, id, className = "", narrow = false }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className={`mx-auto ${narrow ? "max-w-3xl" : "max-w-6xl"}`}>
        {children}
      </div>
    </section>
  );
}
