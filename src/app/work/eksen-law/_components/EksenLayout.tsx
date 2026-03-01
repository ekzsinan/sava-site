"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Badge from "@/components/ui/Badge";

const NAV = [
  { label: "Ana Sayfa", href: "/work/eksen-law" },
  { label: "Hakkımızda", href: "/work/eksen-law/hakkimizda" },
  { label: "Hizmetler", href: "/work/eksen-law/hizmetler" },
  { label: "Ekibimiz", href: "/work/eksen-law/ekibimiz" },
  { label: "İletişim", href: "/work/eksen-law/iletisim" },
];

export default function EksenLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e1117] text-white">
      {/* Demo badge */}
      <div className="fixed top-20 right-4 z-40">
        <Badge variant="brand" className="shadow-lg">Business Demo</Badge>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#0e1117]/95 backdrop-blur border-b border-white/8 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/work/eksen-law" className="flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-black font-black text-sm select-none">E</span>
            <span className="font-extrabold text-lg tracking-tight">EKSEN HUKUK</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-7 text-sm" aria-label="Eksen Hukuk navigasyon">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`transition-colors ${pathname === n.href ? "text-amber-400 font-semibold" : "text-slate-400 hover:text-white"}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/work/eksen-law/iletisim"
              className="hidden md:inline-flex px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-sm transition-colors"
            >
              Randevu Al
            </Link>
            {/* Hamburger */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menüyü aç"
            >
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-4 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/8 mt-3 pt-4 px-6 pb-4 space-y-3">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm py-1 transition-colors ${pathname === n.href ? "text-amber-400 font-semibold" : "text-slate-400 hover:text-white"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/work/eksen-law/iletisim"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 w-full text-center px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-sm transition-colors"
            >
              Randevu Al
            </Link>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/8 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center text-black font-black text-xs">E</span>
              <span className="font-extrabold tracking-tight">EKSEN HUKUK</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              2008&apos;den bu yana şirketler hukuku, iş hukuku ve gayrimenkul alanlarında kurumsal danışmanlık.
            </p>
            <p className="text-slate-600 text-xs mt-3">İstanbul Barosu&apos;na kayıtlıdır.</p>
          </div>
          <div>
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Sayfalar</p>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-slate-500 text-sm hover:text-white transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">İletişim</p>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li>0212 234 56 78</li>
              <li>info@eksenhukuk.av.tr</li>
              <li className="leading-relaxed">Levent Mah. Büyükdere Cad.<br />No:201 Kat:12, Şişli</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
          <p>© 2026 Eksen Hukuk Bürosu · Tüm hakları saklıdır</p>
          <Link href="/work" className="text-amber-600 hover:text-amber-400 transition-colors">← SAVA Demo Projelerine Dön</Link>
        </div>
      </footer>
    </div>
  );
}
