import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import PricingCard from "@/components/ui/PricingCard";
import { PACKAGES, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Dijital Hizmetler",
  description:
    "SAVA Digital Factory: Landing page, kurumsal web sitesi, e-ticaret, logo/marka ve ödeme entegrasyonu hizmetleri.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-gradient pt-32 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-6">SAVA Digital Factory</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Dijital varlığınızı <span className="gradient-text">hızla kuruyoruz.</span>
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Hızlı kurulum, güvenilir teslim ve fatura garantisi. İşletmeniz için doğru çözümü
            birlikte belirleyelim.
          </p>
        </div>
      </div>

      {/* Services List */}
      <Section className="bg-neutral-50">
        <div className="text-center mb-14">
          <Badge className="mb-4">Hizmetlerimiz</Badge>
          <h2 className="text-3xl font-extrabold">Ne sunuyoruz?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-card hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="inline-flex w-10 h-10 rounded-2xl bg-brand-100 items-center justify-center text-brand-600 font-bold text-sm mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Packages */}
      <Section>
        <div className="text-center mb-14">
          <Badge className="mb-4">Paketler</Badge>
          <h2 className="text-3xl font-extrabold mb-3">Hazır Paket Seçenekleri</h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Sabit fiyatlı paketlerimizle hızlı karar alın. Sınırlı lansman slotları mevcuttur.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 text-amber-700 text-sm font-medium">
            Sınırlı lansman slotları — İlk 3 proje için erken benimseyici fiyatı
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </Section>

      {/* What we need */}
      <Section className="bg-neutral-50" narrow>
        <div className="text-center mb-10">
          <Badge className="mb-4">Hazırlık</Badge>
          <h2 className="text-3xl font-extrabold mb-3">Başlamak için neler gerekli?</h2>
        </div>
        <ul className="space-y-4">
          {[
            "Logo ve marka renkleri (varsa)",
            "Sayfalar için metin içerikler",
            "Ürün / hizmet görselleri",
            "İletişim bilgileri",
            "Ön ödeme (%50)",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 bg-white border border-neutral-100 rounded-2xl px-6 py-4 shadow-soft">
              <span className="text-brand-500 font-bold">✓</span>
              <span className="text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-center text-xs text-neutral-400 mt-6">
          Fatura kesilir · İstanbul merkezli · Uzaktan çalışırız
        </p>
      </Section>
    </>
  );
}
