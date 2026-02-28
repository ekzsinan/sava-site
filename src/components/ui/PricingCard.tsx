import Badge from "./Badge";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  items: string[];
  highlight?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  tagline,
  price,
  priceNote,
  items,
  highlight = false,
  ctaLabel = "Teklif Al",
  ctaHref = "/contact",
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col gap-6 border transition-all duration-300 hover:-translate-y-1 ${
        highlight
          ? "bg-brand-600 text-white border-brand-500 shadow-glow"
          : "bg-white text-neutral-800 border-neutral-100 shadow-card"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
          En Çok Tercih Edilen
        </span>
      )}
      <div>
        <p className={`text-sm font-semibold mb-1 ${highlight ? "text-brand-200" : "text-brand-600"}`}>
          {tagline}
        </p>
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      <div>
        <span className="text-4xl font-extrabold">{price}</span>
        {priceNote && (
          <Badge variant={highlight ? "neutral" : "brand"} className="ml-2">
            {priceNote}
          </Badge>
        )}
      </div>
      <ul className="space-y-3 flex-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <span className={`mt-0.5 ${highlight ? "text-brand-200" : "text-brand-500"}`}>✓</span>
            {item}
          </li>
        ))}
      </ul>
      <Button
        href={ctaHref}
        variant={highlight ? "secondary" : "primary"}
        className="w-full"
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
