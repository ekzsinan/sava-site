import Image from "next/image";
import { type ReactNode } from "react";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  className?: string;
  caption?: ReactNode;
}

export default function BrowserFrame({
  src,
  alt,
  url = "app.sava.company",
  priority = false,
  width = 1280,
  height = 800,
  className = "",
  caption,
}: BrowserFrameProps) {
  return (
    <figure className={className}>
      <div className="browser-frame">
        <div className="browser-bar">
          <span className="browser-dot bg-red-400" />
          <span className="browser-dot bg-yellow-400" />
          <span className="browser-dot bg-green-400" />
          <div className="ml-3 flex-1 bg-white rounded-md h-5 flex items-center px-3 max-w-xs border border-slate-200/60">
            <span className="text-[11px] text-slate-400 select-none truncate">{url}</span>
          </div>
        </div>
        <div className="bg-slate-50">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="text-xs text-slate-500 mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

