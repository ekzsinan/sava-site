import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import PricingCard from "@/components/ui/PricingCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { PACKAGES, WORK_ITEMS, PROCESS_STEPS, FAQS, SITE_WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SAVA Digital Factory — Profesyonel Web Sitesi & Dijital Kimlik",
  description:
    "SAVA Digital Factory ile işletmeniz için modern web sitesi, logo ve dijital kimlik paketleri. Hızlı teslim, fatura garantisi.",
};

const valueProps = [
  { n: "01", title: "Hızlı Teslim", desc: "Pakete göre 3–10 iş günü arasında teslim. Gecikme yok, sürpriz yok." },
  { n: "02", title: "Fatura Kesilir", desc: "Tüm projeler için e-fatura veya fatura düzenlenir. Şeffaf ücretlendirme." },
  { n: "03", title: "Mobil Öncelikli", desc: "Her proje mobil uyumlu (responsive) olarak teslim edilir." },
  { n: "04", title: "SEO Temeli", desc: "Başlangıç SEO optimizasyonu ile arama motorlarında doğru başlangıç." },
  { n: "05", title: "Revizyon Hakkı", desc: "Her pakette tanımlı revizyon hakkı. Ek revizyon ücretlidir." },
  { n: "06", title: "Uzaktan Çalışırız", desc: "İstanbul merkezli, Türkiye genelinde ve uluslararası projelerde aktifiz." },
];

const crmFeatures = [
  { title: "Pipeline Yönetimi", desc: "Satış süreçlerinizi görsel olarak takip edin." },
  { title: "Müşteri Veritabanı", desc: "Tüm müşteri bilgilerini tek panelde görün." },
  { title: "Görev & Hatırlatıcı", desc: "Hiçbir fırsatı kaçırmayın." },
  { title: "Raporlama", desc: "Anlık analizler ve performans raporları." },
];

// Section order is intentionally data-driven so it can be reordered later when CRM goes public.
export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO — Digital Factory first ─────────── */}
      <div className="hero-gradient min-h-screen flex items-center pt-16">
        <Section className="w-full">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="brand" className="mb-6">
              SAVA Digital Factory
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08]">
              Modern işletmeler için{" "}
              <span className="gradient-text">profesyonel web sitesi</span> ve dijital kimlik.
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              SAVA Digital Factory, işletmelerin günler içinde modern web sitesi, marka kimliği
              ve dijital varlık oluşturmasına yardımcı olur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/pricing" size="lg">
                Paketleri İncele
              </Button>
              <Button href="/work" size="lg" variant="outline">
                Demo Siteleri Gör
              </Button>
            </div>
          </div>
        </Section>
      </div>

      {/* ── 2. DIGITAL FACTORY VALUE PROPOSITION ─────── */}
      <Section id="digital-factory" className="bg-neutral-50">
        <div className="text-center mb-14">
          <Badge className="mb-4">Neden SAVA?</Badge>
          <h2 className="text-4xl font-extrabold mb-4">Dijital varlığınızı hızla kuruyoruz.</h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Hızlı kurulum, güvenilir teslim ve fatura garantisi. İşletmeniz için doğru çözümü
            birlikte belirleyelim.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((f) => (
            <div
              key={f.n}
              className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-card hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="inline-flex w-10 h-10 rounded-2xl bg-brand-100 items-center justify-center text-brand-600 font-bold text-sm mb-4">
                {f.n}
              </span>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 3. PACKAGES ──────────────────────────────── */}
      <Section id="packages">
        <div className="text-center mb-14">
          <Badge className="mb-4">Hizmet Paketleri</Badge>
          <h2 className="text-4xl font-extrabold mb-4">Doğru paketi seçin.</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Her paket farklı bir ihtiyaca cevap verir. Landing page&apos;den tam e-ticaret çözümüne
            kadar net teslim, net fiyat.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 text-amber-700 text-sm font-medium">
            Sınırlı lansman slotları — ilk 3 proje için erken benimseyici fiyatı
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>
        <p className="text-center text-sm text-neutral-400 mt-6">
          Tüm paketler hakkında detaylı bilgi için{" "}
          <Link href="/pricing" className="text-brand-600 hover:underline">fiyatlar sayfasına</Link> gidin.
        </p>
      </Section>

      {/* ── 4. DEMO PROJECTS ─────────────────────────── */}
      <Section id="work" className="bg-neutral-50">
        <div className="text-center mb-14">
          <Badge className="mb-4">Demo Projeler</Badge>
          <h2 className="text-4xl font-extrabold mb-4">Her paket, gerçek bir demo.</h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Her demo farklı bir paketi temsil eder. Canlı deneyim için tıklayın.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {WORK_ITEMS.map((item) => (
            <Card key={item.slug}>
              <div
                className={`rounded-2xl h-40 bg-gradient-to-br ${item.color} mb-5 flex items-end px-4 pb-4`}
                aria-hidden="true"
              >
                {"badge" in item && item.badge && (
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                      item.badge === "COMMERCE"
                        ? "bg-teal-50 text-teal-700 border-teal-200"
                        : item.badge === "BUSINESS"
                        ? "bg-brand-50 text-brand-700 border-brand-200"
                        : "bg-neutral-100 text-neutral-600 border-neutral-200"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
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

      {/* ── 5. PROCESS ───────────────────────────────── */}
      <Section id="process">
        <div className="text-center mb-14">
          <Badge className="mb-4">Süreç</Badge>
          <h2 className="text-4xl font-extrabold mb-4">Nasıl Çalışıyoruz?</h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Brifingden teslime kadar şeffaf, adım adım bir süreç.
          </p>
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

      {/* ── 6. FAQ ───────────────────────────────────── */}
      <Section id="faq" className="bg-neutral-50" narrow>
        <div className="text-center mb-12">
          <Badge className="mb-4">SSS</Badge>
          <h2 className="text-4xl font-extrabold">Sık Sorulan Sorular</h2>
        </div>
        <FAQAccordion items={FAQS} />
      </Section>

      {/* ── 7. SAVA CRM — Coming Soon ────────────────── */}
      <Section id="crm" className="bg-neutral-900">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="warning" className="mb-4">Yakında · Coming Soon</Badge>
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              SAVA CRM
            </h2>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              SAVA CRM şu anda geliştirme aşamasındadır ve yakında işletmeleri gelişmiş müşteri
              yönetimiyle güçlendirmek için kullanıma sunulacak.
            </p>
            <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
              Küçük ve orta ölçekli işletmeler için tasarlanmış, sade ve güçlü CRM yazılımı.
              Müşterilerinizi, satışlarınızı ve görevlerinizi tek yerden yönetin.
            </p>
            <ul className="space-y-3 mb-8">
              {crmFeatures.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-neutral-200">{f.title}</p>
                    <p className="text-sm text-neutral-500">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button href="/products">Bekleme Listesine Katıl</Button>
          </div>
          <div
            className="rounded-3xl h-80 md:h-[400px] bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center shadow-glow"
            aria-hidden="true"
          >
            <span className="text-white text-7xl font-black opacity-10 select-none">CRM</span>
          </div>
        </div>
      </Section>

      {/* ── 8. CONTACT CTA STRIP ─────────────────────── */}
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
              href={SITE_WHATSAPP}
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
