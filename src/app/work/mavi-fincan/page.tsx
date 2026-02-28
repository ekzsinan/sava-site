import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Mavi Fincan — Demo",
  description: "Mavi Fincan Kafe demo web sitesi — SAVA Digital Factory tarafından hazırlanmıştır.",
  path: "/work/mavi-fincan",
});

export default function MaviFincanPage() {
  return (
    <div className="min-h-screen bg-amber-950 text-white">
      {/* Demo badge */}
      <div className="fixed top-20 right-4 z-40">
        <Badge variant="demo" className="shadow-lg">Demo Proje</Badge>
      </div>

      {/* Nav */}
      <header className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-extrabold text-xl tracking-tight text-amber-200">☕ Mavi Fincan</span>
        <nav className="hidden md:flex gap-8 text-sm text-amber-300" aria-label="Mavi Fincan navigasyon">
          {["Menü","Hakkımızda","Galeri","Rezervasyon"].map(l=>(
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#rezervasyon" className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold rounded-xl text-sm transition-colors">
          Masa Rezervasyonu
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 py-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Kadıköy · İstanbul
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-amber-100">
            Her yudumda <br />huzur var.
          </h1>
          <p className="text-amber-200/70 text-lg leading-relaxed mb-8">
            Özenle seçilmiş kahve çekirdekleri, taze ev yapımı kekler ve sıcak bir atmosfer.
            Gününüzün en güzel molası burada.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#menu" className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold rounded-2xl transition-colors">
              Menüyü İncele
            </a>
            <a href="#rezervasyon" className="px-8 py-4 border border-amber-700 hover:border-amber-400 rounded-2xl text-amber-200 font-semibold transition-colors">
              Rezervasyon Yap
            </a>
          </div>
        </div>
        <div
          className="h-80 rounded-3xl bg-gradient-to-br from-amber-600 to-orange-900 border border-amber-700/40 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-7xl opacity-20 select-none">☕</span>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6 bg-amber-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-12 text-center text-amber-100">Menümüz</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {name:"Espresso",price:"₺65",desc:"Klasik İtalyan espresso."},
              {name:"Filtre Kahve",price:"₺75",desc:"Günlük taze öğütülmüş."},
              {name:"Latte",price:"₺90",desc:"Kremalı süt köpüğüyle."},
              {name:"Cheesecake",price:"₺120",desc:"Günlük taze yapım."},
              {name:"Waffle",price:"₺110",desc:"Mevsim meyveleriyle."},
              {name:"Granola Bowl",price:"₺95",desc:"Sağlıklı başlangıç."},
            ].map(i=>(
              <div key={i.name} className="bg-amber-900/40 border border-amber-800/50 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-amber-100">{i.name}</h3>
                  <span className="text-amber-400 font-bold">{i.price}</span>
                </div>
                <p className="text-amber-300/60 text-sm">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-12 text-center text-amber-100">Yorumlar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {name:"Elif D.",text:"İstanbul'un en iyi filtre kahvesi burada. Atmosfer muhteşem."},
              {name:"Can B.",text:"Her hafta sonu geliyoruz. Cheesecake'leri eşsiz!"},
            ].map(t=>(
              <div key={t.name} className="bg-amber-900/30 border border-amber-800/40 rounded-3xl p-7">
                <p className="text-amber-200/80 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-amber-300">⭐⭐⭐⭐⭐ {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rezervasyon */}
      <section id="rezervasyon" className="py-24 px-6 bg-amber-900/30">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-amber-100">Masa Rezervasyonu</h2>
          <p className="text-amber-300/70 mb-8">Yerinizi ayırtın, biz hazırlayalım.</p>
          <a href="tel:+902165551234" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold rounded-2xl transition-colors text-lg">
            📞 0216 555 12 34
          </a>
          <p className="text-amber-500 text-sm mt-3">veya Instagram&apos;dan DM gönderin</p>
        </div>
      </section>

      <footer className="border-t border-amber-900 py-8 px-6 text-center text-amber-700 text-sm">
        <p>© 2025 Mavi Fincan · Bu sayfa SAVA Digital Factory tarafından demo amaçlı hazırlanmıştır.</p>
        <Link href="/work" className="text-amber-400 hover:text-amber-300 mt-2 inline-block">
          ← Tüm Projelere Dön
        </Link>
      </footer>
    </div>
  );
}
