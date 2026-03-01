"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import OrionLayout from "../_components/OrionLayout";
import { TOURS, formatPrice } from "../_data/tours";

const REGIONS = ["Tümü", "Yurt İçi", "Avrupa", "Orta Doğu", "Uzak Doğu", "Afrika", "Amerika"];
const SORT_OPTIONS = [
  { label: "Önerilen", value: "default" },
  { label: "Fiyat: Düşük → Yüksek", value: "price_asc" },
  { label: "Fiyat: Yüksek → Düşük", value: "price_desc" },
  { label: "Süre: Kısa → Uzun", value: "nights_asc" },
  { label: "En Çok Değerlendirilen", value: "reviews_desc" },
];

export default function TurlarPage() {
  const [region, setRegion] = useState("Tümü");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = TOURS.filter((t) => {
      const regionOk = region === "Tümü" || t.region === region;
      const searchOk = search === "" || t.name.toLowerCase().includes(search.toLowerCase()) || t.destination.toLowerCase().includes(search.toLowerCase());
      return regionOk && searchOk;
    });
    if (sort === "price_asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price_desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "nights_asc") list = [...list].sort((a, b) => a.nights - b.nights);
    if (sort === "reviews_desc") list = [...list].sort((a, b) => b.reviews - a.reviews);
    return list;
  }, [region, sort, search]);

  return (
    <OrionLayout>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 max-w-6xl mx-auto">
        <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Tur Kataloğu</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Sizi nereye <span className="text-teal-400">götürelim?</span></h1>
        <p className="text-slate-500 text-sm">{TOURS.length} destinasyon · Tüm fiyatlar kişi başı çift kişilik oda baz alınmıştır.</p>
      </section>

      {/* Filters */}
      <section className="px-6 pb-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="flex items-center bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 gap-2 w-full sm:w-64">
            <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/></svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Destinasyon ara…"
              className="bg-transparent text-sm text-white placeholder-slate-600 outline-none flex-1"
            />
          </div>
          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-300 outline-none focus:ring-2 focus:ring-teal-500/30"
          >
            {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        {/* Region filter */}
        <div className="flex gap-2 flex-wrap mt-4">
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${region === r ? "bg-teal-500 text-[#0b1622] border-teal-500" : "border-white/10 text-slate-400 hover:border-white/30"}`}
            >
              {r}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-slate-500 text-center py-20">Sonuç bulunamadı.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <Link
                key={t.slug}
                href={`/work/orion-travel/turlar/${t.slug}`}
                className="group bg-white/[0.04] border border-white/8 rounded-2xl overflow-hidden hover:border-teal-500/30 hover:bg-white/[0.06] transition-all flex flex-col"
              >
                <div className="relative h-40 bg-gradient-to-br from-teal-700/40 to-cyan-900/60 flex items-end px-5 py-4">
                  {t.badge && (
                    <span className={`text-[10px] font-bold uppercase tracking-widest rounded-full px-2.5 py-0.5 ${
                      t.badge === "Bestseller" ? "bg-amber-400/20 text-amber-400 border border-amber-400/20" :
                      t.badge === "İndirim" ? "bg-red-500/20 text-red-400 border border-red-400/20" :
                      t.badge === "Son Kontenjan" ? "bg-orange-400/20 text-orange-400 border border-orange-400/20" :
                      "bg-teal-500/15 text-teal-400 border border-teal-500/20"
                    }`}>{t.badge}</span>
                  )}
                  <span className="absolute top-3 right-3 text-[10px] text-slate-500 bg-black/30 rounded-full px-2 py-0.5">{t.region}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1">{t.duration} · {t.groupSize}</p>
                  <h2 className="font-bold text-base group-hover:text-teal-400 transition-colors leading-tight mb-2 flex-1">{t.name}</h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{t.summary}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div>
                      <p className="text-teal-400 font-extrabold text-base">{formatPrice(t.price, t.currency)}</p>
                      {t.oldPrice && <p className="text-slate-600 text-xs line-through">{formatPrice(t.oldPrice, t.currency)}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-amber-400 text-xs font-bold">{"★".repeat(Math.floor(t.rating))}</p>
                      <p className="text-slate-600 text-[10px]">{t.reviews} yorum</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </OrionLayout>
  );
}
