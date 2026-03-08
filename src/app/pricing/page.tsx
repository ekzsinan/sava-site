import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import PricingCard from "@/components/ui/PricingCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { PACKAGES, FAQS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Fiyatlar",
  description:
    "SAVA Digital Factory hizmet paket fiyatları. TRY ve EUR seçenekleri. Lansman dönemi erken benimseyici indirimi.",
  path: "/pricing",
});

const included = [
  "Telefon, tablet ve masaüstüne tam uyumlu (responsive) tasarım",
  "SSL sertifikası",
  "Temel SEO optimizasyonu",
  "1–2 revizyon hakkı",
  "Teslim sonrası 7 gün destek",
  "Fatura (e-fatura)",
];

const revisionPolicy = [
  "START paketi: 1 revizyon hakkı",
  "BUSINESS paketi: 2 revizyon hakkı",
  "COMMERCE paketi: 2 revizyon hakkı",
  "Ek revizyon: ₺500/saat",
  "Büyük kapsam değişikliği ayrıca fiyatlandırılır",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-gradient pt-32 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-6">Şeffaf Fiyatlandırma</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Net fiyat, <span className="gradient-text">net teslim.</span>
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed mb-4">
            Her paket tüm cihazlara uyumlu teslim edilir. Fatura kesilir. Lansman döneminde sınırlı slot.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 text-amber-700 text-sm font-medium">
            İlk 3 proje için erken benimseyici fiyatı geçerlidir
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>
        <p className="text-center text-sm text-neutral-400 mt-6">
          Uluslararası projeler için EUR fiyatlandırması uygulanmaktadır. Teklif için{" "}
          <a href="/contact" className="text-brand-600 hover:underline">iletişime geçin</a>.
        </p>
      </Section>

      {/* What's included */}
      <Section className="bg-neutral-50">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Badge className="mb-4">Her Pakete Dahil</Badge>
            <h2 className="text-2xl font-extrabold mb-6">Her pakette standart olarak gelenler</h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Badge variant="neutral" className="mb-4">Revizyon Politikası</Badge>
            <h2 className="text-2xl font-extrabold mb-6">Revizyon hakları</h2>
            <ul className="space-y-3">
              {revisionPolicy.map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-700">
                  <span className="text-neutral-400 font-bold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Timelines */}
      <Section narrow>
        <div className="text-center mb-10">
          <Badge className="mb-4">Teslim Süreleri</Badge>
          <h2 className="text-2xl font-extrabold">Ne zaman teslim edilir?</h2>
        </div>
        <div className="space-y-4">
          {[
            { pkg: "SAVA START", time: "3 iş günü", color: "bg-brand-100 text-brand-700" },
            { pkg: "SAVA BUSINESS", time: "7 iş günü", color: "bg-brand-200 text-brand-800" },
            { pkg: "SAVA COMMERCE", time: "10 iş günü", color: "bg-brand-300 text-brand-900" },
          ].map((t) => (
            <div key={t.pkg} className="flex items-center justify-between bg-white border border-neutral-100 rounded-2xl px-6 py-4 shadow-soft">
              <span className="font-semibold text-neutral-800">{t.pkg}</span>
              <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${t.color}`}>
                {t.time}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-400 text-center mt-4">
          Süreler içerik tesliminden sonra başlar. Revizyon talepleri +1–2 iş günü ekleyebilir.
        </p>
      </Section>

      {/* FAQ */}
      <Section className="bg-neutral-50" narrow>
        <div className="text-center mb-10">
          <Badge className="mb-4">SSS</Badge>
          <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
        </div>
        <FAQAccordion items={FAQS} />
      </Section>

      {/* CTA */}
      <Section className="bg-brand-600">
        <div className="text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">Projenizi başlatalım.</h2>
          <p className="text-brand-200 mb-8 max-w-lg mx-auto">
            Sınırlı lansman slotları için hemen iletişime geçin.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl hover:bg-brand-50 transition-colors shadow-card"
          >
            Teklif Al
          </a>
        </div>
      </Section>
    </>
  );
}
