"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../_components/CartContext";
import { type TourPackage, formatPrice } from "../../_data/tours";
export default function TourDetailClient({ tour }: { tour: TourPackage }) {
  const { add } = useCart();
  const [selectedDate, setSelectedDate] = useState(tour.availableDates[0]);
  const [travelers, setTravelers] = useState(2);
  const [added, setAdded] = useState(false);
  function handleAdd() {
    add(tour, selectedDate, travelers);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }
  const totalPrice = tour.price * travelers;
  return (
    <>
      <div className="px-6 pt-8 max-w-6xl mx-auto">
        <nav className="text-xs text-slate-500 flex items-center gap-2 mb-6">
          <Link href="/work/orion-travel" className="hover:text-white transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/work/orion-travel/turlar" className="hover:text-white transition-colors">Turlar</Link>
          <span>/</span>
          <span className="text-slate-300">{tour.destination}</span>
        </nav>
      </div>
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-2.5 py-0.5">{tour.region}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-white/8 rounded-full px-2.5 py-0.5">{tour.difficulty}</span>
                {tour.badge && (
                  <span className={`text-[10px] font-bold uppercase tracking-widest rounded-full px-2.5 py-0.5 border ${
                    tour.badge === "Bestseller" ? "bg-amber-400/10 text-amber-400 border-amber-400/20" :
                    tour.badge === "\u0130ndirim" ? "bg-red-500/10 text-red-400 border-red-400/20" :
                    tour.badge === "Son Kontenjan" ? "bg-orange-400/10 text-orange-400 border-orange-400/20" :
                    "bg-teal-500/10 text-teal-400 border-teal-500/20"
                  }`}>{tour.badge}</span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight">{tour.name}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-400 flex-wrap">
                <span className="text-amber-400 font-bold">{"★".repeat(Math.floor(tour.rating))}</span>
                <span>{tour.rating} ({tour.reviews} yorum)</span>
                <span>·</span>
                <span>{tour.duration}</span>
                <span>·</span>
                <span>{tour.groupSize}</span>
              </div>
            </div>
            {/* Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tour.gallery.map((g, i) => (
                <div key={g} className={`rounded-2xl bg-gradient-to-br from-teal-800/30 to-cyan-900/50 flex items-center justify-center border border-white/5 ${i === 0 ? "col-span-2 row-span-2 h-52" : "h-24"}`}>
                  <p className="text-slate-600 text-[10px] text-center px-2 leading-tight">{g}</p>
                </div>
              ))}
            </div>
            {/* Description */}
            <div>
              <h2 className="text-xl font-extrabold mb-3">Tur Hakkında</h2>
              <p className="text-slate-400 leading-relaxed">{tour.description}</p>
            </div>
            {/* Highlights */}
            <div>
              <h2 className="text-xl font-extrabold mb-4">Öne Çıkanlar</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {tour.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-slate-300">{h}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Included / Excluded */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-extrabold mb-4">Dahil</h2>
                <ul className="space-y-2">
                  {tour.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">+</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-extrabold mb-4">Dahil Değil</h2>
                <ul className="space-y-2">
                  {tour.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="text-slate-600 font-bold mt-0.5 flex-shrink-0">-</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* FAQ */}
            {tour.faq.length > 0 && (
              <div>
                <h2 className="text-xl font-extrabold mb-4">Sık Sorulan Sorular</h2>
                <div className="space-y-3">
                  {tour.faq.map((f) => (
                    <div key={f.q} className="bg-white/[0.04] border border-white/8 rounded-2xl p-5">
                      <p className="font-semibold text-teal-100 mb-2 text-sm">{f.q}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Right: booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/[0.05] border border-white/10 rounded-3xl p-6 space-y-5">
              <div>
                <p className="text-teal-400 font-extrabold text-3xl">{formatPrice(tour.price, tour.currency)}</p>
                {tour.oldPrice && <p className="text-slate-500 text-sm line-through">{formatPrice(tour.oldPrice, tour.currency)}</p>}
                <p className="text-slate-500 text-xs mt-1">kişi başı · {tour.duration}</p>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Tarih Seç</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                >
                  {tour.availableDates.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Katılımcı Sayısı</label>
                <div className="flex items-center border border-white/10 rounded-xl overflow-hidden">
                  <button onClick={() => setTravelers((n) => Math.max(1, n - 1))} className="w-12 h-12 flex items-center justify-center text-slate-400 hover:bg-white/5 text-xl font-bold transition-colors">-</button>
                  <span className="flex-1 text-center font-bold text-lg">{travelers}</span>
                  <button onClick={() => setTravelers((n) => Math.min(20, n + 1))} className="w-12 h-12 flex items-center justify-center text-slate-400 hover:bg-white/5 text-xl font-bold transition-colors">+</button>
                </div>
              </div>
              <div className="bg-teal-500/5 border border-teal-500/15 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-slate-400 text-sm">{travelers} kişi toplamı</span>
                <span className="font-extrabold text-teal-400">{formatPrice(totalPrice, tour.currency)}</span>
              </div>
              <button
                onClick={handleAdd}
                className={`w-full py-4 font-bold rounded-xl transition-all text-sm ${added ? "bg-green-500 text-white" : "bg-teal-500 hover:bg-teal-400 text-[#0b1622]"}`}
              >
                {added ? "Sepete Eklendi!" : "Sepete Ekle"}
              </button>
              <div className="space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-600" />Ücretsiz iptal — 14 gün öncesine kadar</div>
                <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-600" />3D Secure güvenli ödeme</div>
                <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-600" />Onay 1 iş günü içinde</div>
              </div>
              <div className="border-t border-white/5 pt-4 text-center">
                <p className="text-slate-500 text-xs mb-2">Sorunuz mu var?</p>
                <a href="tel:+902122224466" className="text-teal-400 text-sm font-semibold hover:underline">0212 222 44 66</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/work/orion-travel/turlar" className="text-slate-500 text-sm hover:text-white transition-colors">
            Tüm Turlara Dön
          </Link>
        </div>
      </section>
    </>
  );
}
