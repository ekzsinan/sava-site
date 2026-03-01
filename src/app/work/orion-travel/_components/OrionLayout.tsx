"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { CartProvider, useCart } from "./CartContext";
import { formatPrice } from "../_data/tours";

const NAV = [
  { label: "Ana Sayfa", href: "/work/orion-travel" },
  { label: "Turlar", href: "/work/orion-travel/turlar" },
];

function CartSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, remove, total } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [done, setDone] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#0b1622] w-full max-w-md flex flex-col border-l border-cyan-900/30 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-cyan-900/30">
          <h2 className="font-extrabold text-lg">Sepetim ({items.length} tur)</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:bg-white/10 text-xl font-bold">×</button>
        </div>

        {!checkout ? (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-slate-500 text-sm text-center py-16">Sepetiniz boş.</p>
              ) : items.map((item) => (
                <div key={item.tour.slug} className="bg-white/[0.04] border border-white/8 rounded-2xl p-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400 font-black text-sm">{item.tour.destination.slice(0, 2)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm leading-tight mb-1">{item.tour.name}</p>
                    <p className="text-slate-500 text-xs">{item.selectedDate} · {item.travelers} kişi</p>
                    <p className="text-teal-400 font-bold text-sm mt-1">{formatPrice(item.tour.price * item.travelers, item.tour.currency)}</p>
                  </div>
                  <button onClick={() => remove(item.tour.slug)} className="text-slate-600 hover:text-red-400 text-sm transition-colors">Kaldır</button>
                </div>
              ))}
            </div>
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-cyan-900/30">
                <div className="flex justify-between text-sm text-slate-400 mb-3">
                  <span>Toplam</span>
                  <span className="font-extrabold text-white text-base">{formatPrice(total, items[0]?.tour.currency || "TRY")}</span>
                </div>
                <button onClick={() => setCheckout(true)} className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-xl text-sm transition-colors">
                  Ödemeye Geç
                </button>
              </div>
            )}
          </>
        ) : done ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="text-xl font-extrabold mb-2">Rezervasyonunuz alındı!</h3>
            <p className="text-slate-400 text-sm mb-2">Rezervasyon No: <span className="font-bold text-white">#OT-{Math.floor(Math.random()*90000+10000)}</span></p>
            <p className="text-slate-500 text-sm mb-6">Onay e-postası gönderildi. Tur ekibimiz 1 iş günü içinde sizinle iletişime geçecek.</p>
            <button onClick={() => { setDone(false); setCheckout(false); setStep(1); onClose(); }} className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-xl text-sm transition-colors">
              Tamam
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {/* Steps indicator */}
            <div className="flex items-center px-6 py-4 border-b border-cyan-900/20 gap-2">
              {["Bilgiler", "Ödeme", "Onay"].map((s, i) => (
                <div key={s} className="flex items-center flex-1">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${i + 1 < step ? "bg-green-500 text-white" : i + 1 === step ? "bg-teal-500 text-[#0b1622]" : "bg-white/10 text-slate-500"}`}>
                    {i + 1 < step ? "✓" : i + 1}
                  </span>
                  <span className={`text-xs ml-1.5 hidden sm:block ${i + 1 === step ? "text-white font-semibold" : "text-slate-500"}`}>{s}</span>
                  {i < 2 && <div className={`flex-1 h-px mx-2 ${i + 1 < step ? "bg-green-400/40" : "bg-white/10"}`} />}
                </div>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              {step === 1 && (
                <>
                  <h3 className="font-bold mb-2">Katılımcı Bilgileri</h3>
                  {[["Ad Soyad", "Ayşe Kaya"], ["E-posta", "ayse@ornek.com"], ["Telefon", "+90 532 123 45 67"], ["TC Kimlik No", "•••••••••••"]].map(([l, v]) => (
                    <div key={l}>
                      <label className="block text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">{l}</label>
                      <input defaultValue={v} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/40" />
                    </div>
                  ))}
                </>
              )}
              {step === 2 && (
                <>
                  <h3 className="font-bold mb-2">Ödeme Yöntemi</h3>
                  <div className="flex gap-2 mb-4">
                    {["Kredi Kartı", "iyzico", "Havale"].map((m, i) => (
                      <button key={m} className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${i === 0 ? "bg-teal-500/10 border-teal-500/30 text-teal-300" : "border-white/10 text-slate-500 hover:border-white/20"}`}>{m}</button>
                    ))}
                  </div>
                  <div className="bg-slate-800 rounded-2xl p-5 text-white mb-3">
                    <div className="flex justify-between mb-4">
                      <span className="text-slate-400 text-xs">KART NO</span>
                      <span className="text-teal-400 text-xs font-bold">iyzico</span>
                    </div>
                    <p className="font-mono text-lg tracking-widest mb-4">•••• •••• •••• 4242</p>
                    <div className="flex justify-between text-sm">
                      <span>AYŞE KAYA</span><span>08/28</span>
                    </div>
                  </div>
                  {[["Kart Numarası", "4242 4242 4242 4242"], ["Son Kullanma", "08 / 28"], ["CVV", "•••"]].map(([l, v]) => (
                    <div key={l}>
                      <label className="block text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">{l}</label>
                      <input defaultValue={v} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono focus:outline-none focus:ring-2 focus:ring-teal-500/40" />
                    </div>
                  ))}
                  <div className="bg-teal-500/5 border border-teal-500/15 rounded-xl p-3 text-xs text-teal-300">
                    3, 6, 12 taksit seçeneği mevcuttur. Taksit oranları bankaya göre değişir.
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="font-bold mb-4">Rezervasyon Özeti</h3>
                  {items.map((item) => (
                    <div key={item.tour.slug} className="bg-white/[0.04] border border-white/8 rounded-xl p-4 mb-3">
                      <p className="font-semibold text-sm">{item.tour.name}</p>
                      <p className="text-slate-500 text-xs mt-1">{item.selectedDate} · {item.travelers} kişi · {item.tour.duration}</p>
                      <p className="text-teal-400 font-bold mt-2">{formatPrice(item.tour.price * item.travelers, item.tour.currency)}</p>
                    </div>
                  ))}
                  <div className="flex justify-between font-extrabold text-base border-t border-white/8 pt-4">
                    <span>Toplam</span>
                    <span className="text-teal-400">{formatPrice(total, items[0]?.tour.currency || "TRY")}</span>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <input type="checkbox" defaultChecked id="kvkk-orion" className="mt-0.5" />
                    <label htmlFor="kvkk-orion" className="text-xs text-slate-500 cursor-pointer">
                      Tur sözleşmesini ve KVKK metnini okudum, kabul ediyorum.
                    </label>
                  </div>
                </>
              )}
            </div>

            <div className="px-6 py-5 border-t border-cyan-900/20">
              <button
                onClick={() => { if (step < 3) setStep((s) => (s + 1) as 1|2|3); else setDone(true); }}
                className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-xl text-sm transition-colors"
              >
                {step === 3 ? "Rezervasyonu Tamamla" : "Devam Et"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OrionInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { count } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1622] text-white">
      <div className="fixed top-20 right-4 z-40">
        <Badge variant="brand" className="shadow-lg">Commerce Demo</Badge>
      </div>

      <header className="sticky top-0 z-30 bg-[#0b1622]/95 backdrop-blur border-b border-cyan-900/40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/work/orion-travel" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-black text-[#0b1622] text-sm select-none">O</div>
            <div>
              <span className="font-extrabold text-lg tracking-tight leading-none block">ORION</span>
              <span className="text-teal-400 text-[10px] font-semibold uppercase tracking-widest leading-none">Travel & Tourism</span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm text-slate-400">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`transition-colors ${pathname === n.href || (n.href !== "/work/orion-travel" && pathname.startsWith(n.href)) ? "text-teal-400 font-semibold" : "hover:text-white"}`}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-lg text-sm transition-colors"
            >
              Sepet
              {count > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#0b1622] text-teal-400 text-[10px] font-black flex items-center justify-center">{count}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-cyan-900/30 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <span className="font-black text-xl">ORION <span className="text-slate-500 font-normal text-sm">Travel & Tourism</span></span>
            <p className="text-slate-500 text-xs mt-2 max-w-xs leading-relaxed">TURSAB Belgeli · IATA Akredite · 2007&apos;den bu yana</p>
          </div>
          <div className="flex gap-12 text-sm text-slate-500">
            <div>
              <p className="font-bold text-slate-300 mb-2">Keşfet</p>
              <ul className="space-y-1"><li><Link href="/work/orion-travel/turlar" className="hover:text-white transition-colors">Tüm Turlar</Link></li></ul>
            </div>
            <div>
              <p className="font-bold text-slate-300 mb-2">Şirket</p>
              <ul className="space-y-1 text-xs">
                <li>0212 222 44 66</li>
                <li>info@oriontravel.com.tr</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-cyan-900/20 pt-6 mt-8 flex flex-col sm:flex-row justify-between text-xs text-slate-700 gap-2">
          <p>© 2026 Orion Travel Turizm A.Ş. · Tüm hakları saklıdır</p>
          <Link href="/work" className="text-teal-600 hover:text-teal-400 transition-colors">← SAVA Demo Projelerine Dön</Link>
        </div>
      </footer>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default function OrionLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <OrionInner>{children}</OrionInner>
    </CartProvider>
  );
}
