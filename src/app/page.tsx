import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScreenshotShowcase from "@/components/ui/ScreenshotShowcase";
import { SITE_WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SAVA ERP — İş Süreçlerinizi Tek Merkezden Yönetin",
  description:
    "SAVA ERP ile satıştan operasyona, CRM'den workflow otomasyonuna tüm iş süreçlerinizi gerçek zamanlı olarak takip edin ve yönetin. Karmaşıklığı değil, kontrolü büyütün.",
};

// ── Data ──────────────────────────────────────────────────

const stats = [
  { value: "50+", label: "Aktif Müşteri" },
  { value: "1.200+", label: "Otomatize İş Akışı" },
  { value: "99.9%", label: "Sistem Güvenilirliği" },
  { value: "12", label: "Aktif Modül" },
];

const problems = [
  {
    icon: "⚡",
    title: "Veri Adaları",
    desc: "Satış, muhasebe ve operasyon verileri farklı sistemlerde dağınık. Kararlar eksik bilgiyle alınıyor.",
    solution: "Merkezi veri mimarisi ile tüm verileriniz tek yerden erişilebilir.",
  },
  {
    icon: "🔍",
    title: "Kör Noktalar",
    desc: "Gerçek zamanlı operasyon görünürlüğü yok. Yöneticiler süreci takip edemez.",
    solution: "Canlı KPI dashboard ve otomatik raporlarla tam şeffaflık.",
  },
  {
    icon: "🔄",
    title: "Manuel Süreçler",
    desc: "Tekrarlayan görevler elle yapılıyor. İnsan hatası, gecikme ve verimlilik kaybı.",
    solution: "Workflow Automation ile tekrarlayan süreçleri otomatikleştirin.",
  },
  {
    icon: "💬",
    title: "Kopuk İletişim",
    desc: "Ekipler mail zincirleri ve birden fazla uygulama ile çalışıyor. Bilgi kaybolup gidiyor.",
    solution: "Entegre bildirim sistemi ve merkezi iletişim altyapısı.",
  },
  {
    icon: "⏰",
    title: "Zaman Kaybı",
    desc: "Raporlama, takip ve koordinasyon için saatler harcandı. Stratejiye zaman kalmıyor.",
    solution: "Otomatik raporlar ve akıllı hatırlatıcılarla saatler kazanın.",
  },
  {
    icon: "📦",
    title: "Ölçeklenme Sorunu",
    desc: "Büyüdükçe mevcut araçlar yetersiz kalıyor. Geçiş maliyetleri süreçleri durdurur.",
    solution: "Modüler ERP mimarisi; büyüdükçe yeni modüller eklenebilir.",
  },
];

const modules = [
  { icon: "👥", name: "CRM", desc: "Müşteri ilişkileri ve satış pipeline yönetimi" },
  { icon: "📊", name: "Satış", desc: "Teklif, sipariş ve gelir takibi" },
  { icon: "⚙️", name: "Operasyon", desc: "Proje ve görev yönetimi, operasyon akışı" },
  { icon: "💰", name: "Muhasebe", desc: "Fatura, ödeme ve finans raporlaması" },
  { icon: "👤", name: "İnsan Kaynakları", desc: "Personel yönetimi ve izin takibi" },
  { icon: "🔄", name: "Workflow Automation", desc: "Sürükle-bırak iş akışı tasarımcısı" },
  { icon: "📈", name: "Dashboard Builder", desc: "Özelleştirilebilir KPI ve analitik paneller" },
  { icon: "📝", name: "Form Builder", desc: "Dinamik form oluşturma ve veri toplama" },
  { icon: "📧", name: "E-Mail Tracking", desc: "Gönderilen mailler için açılma ve tıklama takibi" },
  { icon: "🔔", name: "Bildirim Sistemi", desc: "Rol tabanlı anlık bildirim ve uyarı motoru" },
  { icon: "🌐", name: "API & Webhooks", desc: "Dış sistemlerle entegrasyon altyapısı" },
  { icon: "🛡️", name: "Rol & Yetki", desc: "Granüler erişim kontrolü ve kullanıcı yönetimi" },
];

const screenshots = [
  {
    title: "CRM Pipeline",
    desc: "Gerçek zamanlı müşteri ve fırsat takibi. Kanban görünüm, özelleştirilebilir aşamalar.",
    tag: "CRM",
  },
  {
    title: "Workflow Ekranı",
    desc: "Görsel iş akışı tasarımcısı. Tetikleyici bazlı otomasyon, koşullu mantık.",
    tag: "Automation",
  },
  {
    title: "KPI Dashboard",
    desc: "Tüm operasyon metrikleriniz tek ekranda. Anlık güncelleme, filtreleme.",
    tag: "Analytics",
  },
  {
    title: "Modül Yönetimi",
    desc: "Her modül bağımsız açılıp kapanabilir. Plug-in ERP mimarisi.",
    tag: "Modüler",
  },
];

const steps = [
  {
    n: "01",
    title: "Kurulum & Yapılandırma",
    desc: "SAVA ERP altyapınıza kurulur. Modüller, roller ve şirket yapısı yapılandırılır. Mevcut veriler import edilir.",
  },
  {
    n: "02",
    title: "Süreç Tasarımı",
    desc: "Satış, operasyon ve muhasebe akışlarınız sisteme uyarlanır. Workflow'lar ve otomasyonlar tasarlanır.",
  },
  {
    n: "03",
    title: "Canlı Yönetim",
    desc: "Ekibiniz gerçek zamanlı çalışır. Tüm veriler merkezi, tüm süreçler görünür, tüm raporlar otomatik.",
  },
];

// ── Page ──────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="hero-gradient pt-28 pb-16 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                SAVA ERP · Enterprise İş Yönetimi Platformu
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.1] mb-5">
                İşletmenizin tüm operasyonlarını{" "}
                <span className="gradient-text">tek merkezden</span>{" "}
                yönetin.
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                SAVA ERP ile satıştan operasyona, CRM'den workflow otomasyonuna
                tüm iş süreçlerinizi gerçek zamanlı olarak takip edin ve yönetin.
                Karmaşıklığı değil, kontrolü büyütün.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
                >
                  Demo Talep Et
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </Link>
                <Link
                  href="/#screenshots"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-brand-200 hover:text-brand-700 transition-colors"
                >
                  Canlı Ekranları İncele
                </Link>
              </div>
              {/* Trust indicators */}
              <div className="flex items-center gap-5 mt-8 pt-8 border-t border-slate-100">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-extrabold text-slate-900">{s.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dashboard Screenshot */}
            <div className="relative">
              <div className="browser-frame shadow-card-blue">
                <div className="browser-bar">
                  <span className="browser-dot bg-red-400" />
                  <span className="browser-dot bg-yellow-400" />
                  <span className="browser-dot bg-green-400" />
                  <div className="ml-3 flex-1 bg-white rounded-md h-5 flex items-center px-3 max-w-xs">
                    <span className="text-xs text-slate-400 select-none">app.sava.company/crm</span>
                  </div>
                </div>
                <Image
                  src="/crm-screenshot.png"
                  alt="SAVA ERP CRM Dashboard"
                  width={900}
                  height={560}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-card flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">Sistem Aktif</div>
                  <div className="text-xs text-slate-400">Gerçek zamanlı çalışıyor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM → SOLUTION ────────────────────── */}
      <section id="solutions" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold mb-4">
              İşletmenizin karşılaştığı zorluklar
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Görünmez kayıplar işletmeleri geri tutuyor.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Kopuk sistemler, manuel süreçler ve dağınık veriler — SAVA ERP bunların tamamını tek platformda çözer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-card hover:border-brand-100 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-xl mb-4 group-hover:bg-brand-50 transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="pt-4 border-t border-slate-50">
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 text-xs font-bold mt-0.5 flex-shrink-0">SAVA →</span>
                    <p className="text-xs text-brand-700 leading-relaxed">{p.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PRODUCT OVERVIEW ──────────────────────── */}
      <section id="product" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-5">
                SAVA ERP Platformu
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                Tek platform, tüm operasyonunuz.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                SAVA ERP, KOBİ&apos;lerin ve büyüyen işletmelerin ihtiyaç duyduğu tüm araçları
                tek çatı altında toplar. Modüler yapısı sayesinde işletmenizle birlikte büyür.
              </p>

              <div className="space-y-5">
                { [
                  { title: "Merkezi Veri Mimarisi", desc: "Satış, muhasebe, HR ve operasyon verileri tek veritabanında birleşiyor." },
                  { title: "Rol Tabanlı Erişim", desc: "Her kullanıcı sadece kendi görevini görür. Granüler yetki kontrolü." },
                  { title: "Gerçek Zamanlı Bildirimler", desc: "Önemli olaylar anında ilgili kişilere ulaşır. Hiçbir şey gözden kaçmaz." },
                  { title: "Açık API & Webhook Desteği", desc: "Muhasebe yazılımı, e-ticaret platformu veya kustom uygulamalarla entegre olun." },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{f.title}</div>
                      <div className="text-sm text-slate-500 mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
                >
                  Demo Talep Et
                </Link>
                <Link
                  href="/#screenshots"
                  className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Ekranları İncele →
                </Link>
              </div>
            </div>

            {/* Right: Real screenshot with context */}
            <div className="relative">
              <div className="browser-frame shadow-card">
                <div className="browser-bar">
                  <span className="browser-dot bg-red-400" />
                  <span className="browser-dot bg-yellow-400" />
                  <span className="browser-dot bg-green-400" />
                  <div className="ml-3 flex-1 bg-white rounded-md h-5 flex items-center px-3 max-w-xs">
                    <span className="text-xs text-slate-400 select-none">app.sava.company/dashboard</span>
                  </div>
                </div>
                <Image
                  src="/crm-screenshot.png"
                  alt="SAVA ERP Dashboard ekranı"
                  width={900}
                  height={560}
                  className="w-full h-auto"
                />
              </div>

              {/* Metric widgets */}
              <div className="absolute top-4 -right-5 bg-white rounded-2xl p-4 shadow-card border border-slate-100 min-w-[140px]">
                <div className="text-xs text-slate-400 mb-1">Bu Ay Gelir</div>
                <div className="text-xl font-extrabold text-slate-900">₺842K</div>
                <div className="text-xs text-green-600 font-medium mt-1">↑ %18.4 artış</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MODULES ───────────────────────────────── */}
      <section id="modules" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-4">
              Modüler Mimari
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              İhtiyacınız olan modülleri açın.
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Her modül bağımsız çalışır, birbirine entegre olur. Bugün ihtiyacınız olanla başlayın,
              büyüdükçe yenilerini ekleyin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {modules.map((m) => (
              <div key={m.name} className="module-card group cursor-default">
                <div className="text-2xl mb-3">{m.icon}</div>
                <h3 className="font-bold text-slate-900 mb-1 text-sm">{m.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SCREENSHOT SHOWCASE ───────────────────── */}
      <section id="screenshots" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-4">
              Gerçek Ürün Ekranları
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Gördüğünüz her ekran gerçek.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              SAVA ERP aktif olarak kullanılan bir platformdur.
              Aşağıdaki ekranlar gerçek ürün arayüzüdür.
            </p>
          </div>

          <ScreenshotShowcase />

          {/* Extra screenshot grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {screenshots.map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-slate-100 shadow-soft hover:shadow-card hover:border-brand-100 transition-all duration-200 cursor-pointer">
                <div className="aspect-video overflow-hidden bg-slate-50">
                  <Image
                    src="/crm-screenshot.png"
                    alt={`SAVA ERP ${s.title}`}
                    width={480}
                    height={270}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-slate-900 text-sm">{s.title}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ──────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-4">
              Nasıl Çalışır?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              3 adımda tam operasyon yönetimi.
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Kurulumdan canlı yönetim aşamasına kadar adım adım yönlendirme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-soft">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-slate-200 z-10" />
                )}
                <div className="step-badge mb-5">{s.n}</div>
                <h3 className="font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA SECTION ───────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-900/50 border border-brand-800 text-brand-300 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Demo Erişimi Açık
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            İşletmenizi görünmez kayıplardan{" "}
            <span className="text-brand-400">kurtarın.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            SAVA ERP ile tüm operasyonunuzu tek merkezden yönetin. Gerçek ekranları görün,
            sistemi kendi iş süreçlerinizde deneyin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors text-lg shadow-glow"
            >
              Demo Talep Et
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9h12M10 4l5 5-5 5"/>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 transition-colors text-lg"
            >
              Toplantı Planla
            </Link>
            <a
              href={SITE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-slate-400 font-semibold rounded-xl border border-slate-800 hover:border-slate-600 hover:text-white transition-colors text-lg"
              aria-label="WhatsApp ile iletişime geç"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
