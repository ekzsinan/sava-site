import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import PricingCard from "@/components/ui/PricingCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { PACKAGES, WORK_ITEMS, PROCESS_STEPS, FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SAVA — İşletme Sistemlerinizi Birlikte İnşa Edelim",
  description:
    "SAVA CRM ve dijital hizmetleriyle işletmenizi hızla büyütün. Landing page, kurumsal site, e-ticaret, marka kimliği.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <div className="hero-gradient min-h-screen flex items-center pt-16">
        <Section className="w-full">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="brand" className="mb-6">
              Ürün Odaklı · Dijital Hizmetler
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08]">
              İşletme sistemlerinizi{" "}
              <span className="gradient-text">SAVA</span> ile inşa edin.
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              CRM ana ürünümüz. Dijital hizmetlerimiz hızlı kurulum ve fon yaratma için. Ürün
              odaklı, müşteri öncelikli bir şirket.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/products" size="lg">
                SAVA CRM&apos;i Keşfet
              </Button>
              <Button href="/services" size="lg" variant="outline">
                Hizmet Paketleri
              </Button>
            </div>
          </div>
        </Section>
      </div>

      {/* ── CRM HIGHLIGHT ────────────────────────────── */}
      <Section id="crm" className="bg-neutral-50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="brand" className="mb-4">Yakında</Badge>
            <h2 className="text-4xl font-extrabold mb-4">
              SAVA CRM
            </h2>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              Küçük ve orta ölçekli işletmeler için tasarlanmış, sade ve güçlü CRM yazılımı.
              Müşterilerinizi, satışlarınızı ve görevlerinizi tek yerden yönetin.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { icon: "🔁", title: "Pipeline Yönetimi", desc: "Satış süreçlerinizi görsel olarak takip edin." },
                { icon: "👥", title: "Müşteri Veritabanı", desc: "Tüm müşteri bilgilerini tek panelde görün." },
                { icon: "✅", title: "Görev & Hatırlatıcı", desc: "Hiçbir fırsatı kaçırmayın." },
                { icon: "📊", title: "Raporlama", desc: "Anlık analizler ve performans raporları." },
              ].map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <span className="text-2xl" aria-hidden="true">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-neutral-800">{f.title}</p>
                    <p className="text-sm text-neutral-500">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button href="/products">Bekleme Listesine Katıl</Button>
          </div>
          <div
            className="rounded-3xl h-80 md:h-[460px] bg-gradient-to-br from-brand-500 to-brand-800 flex items-center justify-center shadow-glow"
            aria-hidden="true"
          >
            <span className="text-white text-6xl font-black opacity-20 select-none">CRM</span>
          </div>
        </div>
      </Section>

      {/* ── PACKAGES ─────────────────────────────────── */}
      <Section id="services">
        <div className="text-center mb-14">
          <Badge className="mb-4">Hizmet Paketleri</Badge>
          <h2 className="text-4xl font-extrabold mb-4">SAVA Digital Factory</h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Hızlı kurulum, güvenilir teslim. İşletmeniz için doğru paketi seçin.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </Section>

      {/* ── WORK PREVIEW ─────────────────────────────── */}
      <Section id="work" className="bg-neutral-50">
        <div className="text-center mb-14">
          <Badge className="mb-4">Projeler</Badge>
          <h2 className="text-4xl font-extrabold mb-4">Demo Projelerimiz</h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Farklı sektörlerdeki çözümleri inceleyin.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {WORK_ITEMS.map((item) => (
            <Card key={item.slug}>
              <div
                className={`rounded-2xl h-40 bg-gradient-to-br ${item.color} mb-5 flex items-center justify-center`}
                aria-hidden="true"
              >
                <span className="text-white font-extrabold text-lg opacity-60">{item.title}</span>
              </div>
              <Badge variant="neutral" className="mb-2">{item.category}</Badge>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-neutral-500 mb-4">{item.description}</p>
              <Link
                href={`/work/${item.slug}`}
                className="text-sm font-semibold text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
                aria-label={`${item.title} demo projesini görüntüle`}
              >
                Demo&apos;yu Gör →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── PROCESS ──────────────────────────────────── */}
      <Section id="process">
        <div className="text-center mb-14">
          <Badge className="mb-4">Süreç</Badge>
          <h2 className="text-4xl font-extrabold mb-4">Nasıl Çalışıyoruz?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((s) => (
            <div key={s.step} className="flex items-start gap-4 p-6 rounded-3xl bg-neutral-50 border border-neutral-100">
              <span className="text-3xl font-black text-brand-200 select-none">{s.step}</span>
              <div>
                <p className="font-bold mb-1">{s.title}</p>
                <p className="text-sm text-neutral-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <Section id="faq" className="bg-neutral-50" narrow>
        <div className="text-center mb-12">
          <Badge className="mb-4">SSS</Badge>
          <h2 className="text-4xl font-extrabold">Sık Sorulan Sorular</h2>
        </div>
        <FAQAccordion items={FAQS} />
      </Section>

      {/* ── CONTACT CTA STRIP ────────────────────────── */}
      <Section className="bg-brand-600">
        <div className="text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">Projenizi hayata geçirelim.</h2>
          <p className="text-brand-200 mb-8 max-w-lg mx-auto">
            Ücretsiz keşif görüşmesi için bizimle iletişime geçin. Fatura kesilir.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Teklif Al
            </Button>
            <a
              href="https://wa.me/905xxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-lg"
              aria-label="WhatsApp ile iletişime geç"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
