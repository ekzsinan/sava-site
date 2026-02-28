import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Orion Travel — Demo",
  description: "Orion Travel turizm acentesi demo web sitesi — SAVA Digital Factory tarafından hazırlanmıştır.",
  path: "/work/orion-travel",
});

export default function OrionTravelPage() {
  return (
    <div className="min-h-screen bg-cyan-950 text-white">
      {/* Demo badge */}
      <div className="fixed top-20 right-4 z-40">
        <Badge variant="demo" className="shadow-lg">Demo Proje</Badge>
      </div>

      {/* Nav */}
      <header className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-extrabold text-xl tracking-tight text-cyan-200">🌍 Orion Travel</span>
        <nav className="hidden md:flex gap-8 text-sm text-cyan-300" aria-label="Orion Travel navigasyon">
          {["Turlar","Destinasyonlar","Hakkımızda","İletişim"].map(l=>(
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#tours" className="px-5 py-2.5 bg-teal-400 hover:bg-teal-300 text-teal-950 font-bold rounded-xl text-sm transition-colors">
          Tur Bul
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 py-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Türkiye &amp; Dünya Turları
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-cyan-100">
            Hayalinizdeki <br />seyahati <br />planlayın.
          </h1>
          <p className="text-cyan-200/70 text-lg leading-relaxed mb-8">
            Yurt içi ve yurt dışı tur paketleri, vize danışmanlığı ve özel grup organizasyonları
            ile unutulmaz bir seyahat deneyimi.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#tours" className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-teal-950 font-bold rounded-2xl transition-colors">
              Turları Keşfet
            </a>
            <a href="#contact" className="px-8 py-4 border border-cyan-700 hover:border-cyan-400 rounded-2xl text-cyan-200 font-semibold transition-colors">
              Teklif Al
            </a>
          </div>
        </div>
        <div
          className="h-80 rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-900 border border-teal-700/40 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-7xl opacity-20 select-none">✈</span>
        </div>
      </section>

      {/* Tours */}
      <section id="tours" className="py-24 px-6 bg-cyan-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-12 text-center text-cyan-100">Popüler Turlar</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {dest:"Kapadokya",duration:"3 Gece 4 Gün",price:"₺8.500",desc:"Balon turu dahil."},
              {dest:"Santorini",duration:"5 Gece 6 Gün",price:"€850",desc:"Ada transfer dahil."},
              {dest:"Bali",duration:"7 Gece 8 Gün",price:"€1.200",desc:"Konaklama dahil."},
              {dest:"İstanbul",duration:"2 Gece 3 Gün",price:"₺4.500",desc:"Rehber dahil."},
              {dest:"Antalya",duration:"4 Gece 5 Gün",price:"₺6.800",desc:"All inclusive."},
              {dest:"Dubai",duration:"4 Gece 5 Gün",price:"€950",desc:"Vize dahil."},
            ].map(t=>(
              <div key={t.dest} className="bg-cyan-900/40 border border-cyan-800/50 rounded-3xl p-6 hover:border-teal-500/40 transition-colors">
                <div
                  className="h-24 rounded-2xl bg-gradient-to-br from-teal-700 to-cyan-900 mb-4 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-2xl opacity-40 select-none">🗺</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-cyan-100">{t.dest}</h3>
                  <span className="text-teal-400 font-bold text-sm">{t.price}</span>
                </div>
                <p className="text-cyan-400/60 text-xs mb-1">{t.duration}</p>
                <p className="text-cyan-300/50 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-12 text-center text-cyan-100">Müşteri Yorumları</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {name:"Zeynep A.",text:"Kapadokya turumuz mükemmeldi. Her şey planlı ve sorunsuzdu."},
              {name:"Mert K.",text:"Dubai vizesi dahil paketi çok avantajlı. Kesinlikle tavsiye ediyorum."},
            ].map(t=>(
              <div key={t.name} className="bg-cyan-900/30 border border-cyan-800/40 rounded-3xl p-7">
                <p className="text-cyan-200/80 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-teal-300">⭐⭐⭐⭐⭐ {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-cyan-900/30">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-cyan-100">Tur Teklifi Alın</h2>
          <p className="text-cyan-300/70 mb-8">Hayalinizdeki tatil için hemen arayın.</p>
          <a href="tel:+902123334455" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-400 hover:bg-teal-300 text-teal-950 font-bold rounded-2xl transition-colors text-lg">
            📞 0212 333 44 55
          </a>
          <p className="text-cyan-500 text-sm mt-3">tur@oriontravel.com.tr</p>
        </div>
      </section>

      <footer className="border-t border-cyan-900 py-8 px-6 text-center text-cyan-700 text-sm">
        <p>© 2025 Orion Travel · Bu sayfa SAVA Digital Factory tarafından demo amaçlı hazırlanmıştır.</p>
        <Link href="/work" className="text-teal-400 hover:text-teal-300 mt-2 inline-block">
          ← Tüm Projelere Dön
        </Link>
      </footer>
    </div>
  );
}
