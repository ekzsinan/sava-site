import type { Metadata } from "next";
import Link from "next/link";
import OrionLayout from "./_components/OrionLayout";
import { TOURS, formatPrice } from "./_data/tours";

export const metadata: Metadata = {
  title: "Orion Travel | Yurt İçi & Yurt Dışı Turlar — İstanbul",
  description: "18 yıllık deneyim, 60+ destinasyon. Paket turlar, balayı, vize danışmanlığı. iyzico & Stripe ödeme entegrasyonu.",
  metadataBase: new URL("https://sava.company"),
  openGraph: { title: "Orion Travel", description: "Hayalinizdeki tatili biz planlıyoruz.", url: "https://sava.company/work/orion-travel", locale: "tr_TR", type: "website" },
  alternates: { canonical: "https://sava.company/work/orion-travel" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Orion Travel Turizm A.Ş.",
  url: "https://sava.company/work/orion-travel",
  telephone: "+902122224466",
  address: { "@type": "PostalAddress", addressLocality: "Şişli", addressRegion: "İstanbul", addressCountry: "TR" },
  description: "TURSAB belgeli paket tur, balayı ve vize danışmanlığı hizmetleri.",
};

const featured = TOURS.slice(0, 3);

export default function OrionHomePage() {
  return (
    <OrionLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-6 border border-teal-500/20 rounded-full px-4 py-1.5 bg-teal-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            İstanbul · Yurt İçi & Yurt Dışı Turizm
          </div>
          <h1 className="text-5xl md:text-[64px] font-black leading-[1.08] mb-6 tracking-tight">
            Seyahat bir ayrıcalık<br /><span className="text-teal-400">değil, bir hak.</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl">
            18 yıllık deneyim, 12.000&apos;den fazla mutlu yolcu. 10 destinasyon, anlık rezervasyon ve güvenli ödeme.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/work/orion-travel/turlar" className="px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-xl transition-colors text-sm">
              Turları Keşfet
            </Link>
            <a href="#hizmetler" className="px-7 py-3.5 border border-white/10 hover:border-white/30 rounded-xl text-slate-300 font-semibold transition-colors text-sm">
              Hizmetlerimiz &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-cyan-900/30 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["18+","Yıllık Deneyim"],["12.000+","Mutlu Yolcu"],["60+","Destinasyon"],["4.8/5","Google Puanı"]].map(([n,l])=>(
            <div key={l} className="py-4">
              <p className="text-4xl font-extrabold text-teal-400 mb-1">{n}</p>
              <p className="text-slate-500 text-sm">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured tours */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">Öne Çıkan Turlar</p>
            <h2 className="text-3xl font-extrabold">Popüler destinasyonlar</h2>
          </div>
          <Link href="/work/orion-travel/turlar" className="text-teal-400 text-sm font-semibold hover:underline">Tümünü gör &rarr;</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((t) => (
            <Link key={t.slug} href={`/work/orion-travel/turlar/${t.slug}`} className="group bg-white/[0.04] border border-white/8 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all">
              <div className="h-40 bg-gradient-to-br from-teal-700/40 to-cyan-900/60 flex items-end px-5 py-4">
                {t.badge && <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-teal-500/15 border border-teal-500/20 rounded-full px-2.5 py-0.5">{t.badge}</span>}
              </div>
              <div className="p-5">
                <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1">{t.region} · {t.duration}</p>
                <h3 className="font-bold mb-2 group-hover:text-teal-400 transition-colors leading-tight">{t.name}</h3>
                <p className="text-teal-400 font-extrabold">{formatPrice(t.price, t.currency)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Payment placeholder */}
      <section id="hizmetler" className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Ödeme Altyapısı</p>
          <h2 className="text-3xl font-extrabold mb-8">Güvenli & Esnek Ödeme</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "iyzico Entegrasyonu", status: "Aktif (Demo)", desc: "Türkiye'nin önde gelen ödeme altyapısı. 3D Secure, taksit ve BKM Express desteği." },
              { title: "Stripe Global", status: "Aktif (Demo)", desc: "Uluslararası kartlar, Apple Pay, Google Pay. EUR/USD kur desteği." },
              { title: "Kapıda / Havale", status: "Aktif", desc: "EFT/havale ve kapıda ödeme seçenekleri. Kurumsal fatura kesimi." },
            ].map((p) => (
              <div key={p.title} className="bg-white/[0.04] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm">{p.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full">{p.status}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4">10 destinasyon, anlık rezervasyon.</h2>
        <p className="text-slate-400 mb-8">Tur paketlerimizi inceleyin, sepete ekleyin, güvenle ödeyin.</p>
        <Link href="/work/orion-travel/turlar" className="inline-flex px-8 py-4 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-xl transition-colors">
          Turları Keşfet
        </Link>
      </section>
    </OrionLayout>
  );
}
