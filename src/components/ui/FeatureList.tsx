interface FeatureListProps {
  items: string[];
  className?: string;
}

export default function FeatureList({ items, className = "" }: FeatureListProps) {
  return (
    <ul className={`space-y-3 ${className}`} role="list">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-neutral-700">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
