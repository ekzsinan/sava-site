import type { Metadata } from "next";
import Link from "next/link";
import BrowserFrame from "@/components/ui/BrowserFrame";
import ScreenshotShowcase from "@/components/ui/ScreenshotShowcase";
import { SITE_WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SAVA ERP — İşletmenizin Yeni Kontrol Merkezi",
  description:
    "SAVA ERP; müşteri takibi, personel görevleri, workflow otomasyonları, e-posta takipleri, dashboard yönetimi ve dış sistem entegrasyonlarını tek merkezde birleştiren modern ERP platformudur.",
};

// ── Data ──────────────────────────────────────────────────

const heroTrust = [
  "Tek merkezden operasyon yönetimi",
  "Otomasyon destekli süreçler",
  "Gerçek zamanlı dashboardlar",
  "Entegrasyon odaklı yapı",
];

const invisibleLosses = [
  { title: "Kopuk iletişim", desc: "Ekipler farklı kanallarda konuşur, bilgi ortada kaybolur." },
  { title: "Veri adaları", desc: "Satış, muhasebe ve operasyon verisi farklı sistemlerde dağılır." },
  { title: "Zaman israfı", desc: "Manuel raporlama ve takip için saatler harcanır." },
  { title: "Kör noktalar", desc: "Operasyondaki gecikmeler ancak iş büyüdüğünde fark edilir." },
  { title: "Takipsiz müşteriler", desc: "Açılan teklif, dönülmemiş geri bildirim, atlanan görüşme." },
  { title: "Manuel işler", desc: "Tekrarlayan görevler hata payını ve maliyeti büyütür." },
  { title: "Ölçülemeyen performans", desc: "Hangi ekip nerede zorlanıyor, tahminle yönetilir." },
  { title: "Geç fark edilen problemler", desc: "Operasyonel darboğazlar, müdahale şansı kalmadan büyür." },
];

const modules = [
  { name: "Satış", desc: "Teklif, sipariş, fırsat ve gelir takibi." },
  { name: "Müşteri İlişkileri", desc: "CRM, müşteri kartı ve iletişim geçmişi." },
  { name: "Operasyon", desc: "Proje, görev, süreç akışı ve teslim yönetimi." },
  { name: "Muhasebe", desc: "Fatura, ödeme ve finans raporları." },
  { name: "İnsan Kaynakları", desc: "Personel, görev ve performans takibi." },
  { name: "Dashboard", desc: "Yöneticilere canlı KPI görünürlüğü." },
];

const businessImpact = [
  { value: "↓", label: "Tekrarlayan işler azalır" },
  { value: "↑", label: "Müşteri temas kalitesi artar" },
  { value: "↓", label: "Geciken görevler erkenden görünür" },
  { value: "↑", label: "Satış fırsatları kaçmaz" },
  { value: "↓", label: "Manuel veri girişi hataları azalır" },
  { value: "↑", label: "Yönetici operasyonu anlık izler" },
];

const integrations = [
  "Web sitesi formları",
  "Ödeme sistemleri",
  "Rezervasyon sistemleri",
  "Üçüncü parti uygulamalar",
  "E-posta altyapısı",
  "API & WebHook",
];

const comparison = [
  { classic: "Veri kaydeder, rapor üretir.", sava: "Veriyi aksiyona dönüştürür, süreci tetikler." },
  { classic: "Takip büyük ölçüde manuel kalır.", sava: "Workflow ile süreçler otomatik yürür." },
  { classic: "Müşteri ile temas takibi sınırlıdır.", sava: "E-posta açılma ve etkileşim verisi görünür." },
  { classic: "Dış sistemlerle entegrasyon zor olabilir.", sava: "WebHook & API ile dış veri ERP'ye akar." },
  { classic: "Yönetici raporu bekler.", sava: "Dashboard ile canlı görünürlük sağlar." },
  { classic: "Satış önceliği deneyime bırakılır.", sava: "Puanlama motoru kime odaklanacağını söyler." },
];

const visionCards = [
  { title: "İşletmenizin yeni kontrol merkezi", desc: "Satış, operasyon, müşteri ve muhasebe verileri aynı katmanda buluşur." },
  { title: "Görünmeyen kayıplar", desc: "Kopuk iletişim ve manuel işler, fark edilmeden para ve fırsat kaybettirir." },
  { title: "Merkezi sinir sistemi", desc: "ERP, modüller arasındaki bilgi akışını koordine eden katmandır." },
  { title: "Parçaların toplamından güçlü makine", desc: "Workflow, e-posta takip, puanlama ve dashboard birlikte güç çarpan etkisi yaratır." },
];

const whySava = [
  { title: "İşletmeye özel esneklik", desc: "Süreçleriniz sisteme değil, sistem süreçlerinize uyum sağlar." },
  { title: "Otomasyon odaklı yapı", desc: "Workflow motoru ile rutin işler arka planda çalışır." },
  { title: "Entegrasyon kabiliyeti", desc: "WebHook, SMTP ve API ile dış dünyaya açık mimari." },
  { title: "Gerçek zamanlı görünürlük", desc: "Yöneticiler operasyonu rapor beklemeden izler." },
  { title: "Müşteri takibinde netlik", desc: "E-posta ve etkileşim takibi ile sıcak temas korunur." },
  { title: "Ekip ve görev yönetimi", desc: "Personel performansı tahminle değil veriyle ölçülür." },
  { title: "Dashboard özelleştirme", desc: "Yazılımcıya ihtiyaç duymadan ekranınızı kendiniz tasarlayın." },
  { title: "Kârlılık ve verimlilik odağı", desc: "Görünmeyen kaçakların önüne geçer, kararı şeffaflaştırır." },
];

const features = [
  {
    id: "dashboard",
    title: "Dashboard Düzenleyicisi",
    pill: "Kontrol Merkezi",
    headline: "İşletmenize özel kontrol ekranlarını siz tasarlayın.",
    desc:
      "KPI kartlarını, grafiklerini ve veri bileşenlerini sürükle-bırak yöntemiyle yeniden düzenleyin. Yazılımcıya ihtiyaç duymadan, operasyonunuzu sizin için en anlamlı şekilde görün.",
    bullets: [
      "Sürükle-bırak KPI ve grafik düzeni",
      "Rol bazlı dashboard görünümleri",
      "Canlı veri ile anlık güncellenen widget'lar",
    ],
    image: "/dashboard-editor.png",
    url: "app.sava.company/dashboard",
    reverse: false,
  },
  {
    id: "email",
    title: "E-Posta Takip",
    pill: "Müşteri Sinyali",
    headline: "Müşterinin ilgisini doğru anda yakalayın.",
    desc:
      "KVKK süreçleri dikkate alınarak yapılandırılan takip mekanizması sayesinde müşteriye gönderilen teklif, bilgilendirme veya kampanya e-postalarının açılma durumunu görün. Doğru müşteriye doğru zamanda temas kurun.",
    bullets: [
      "Açılma ve etkileşim takibi",
      "KVKK uyumlu metin yapılandırması",
      "Satış ve CRM süreçleriyle entegre çalışır",
    ],
    image: "/email-tracking.png",
    url: "app.sava.company/email-tracking",
    reverse: true,
  },
  {
    id: "scoring",
    title: "Puanlama Motoru",
    pill: "Satış Önceliği",
    headline: "Satış ekibiniz kime odaklanacağını net görsün.",
    desc:
      "Müşterilerinizi davranışlarına ve süreç hareketlerine göre otomatik skorlayın. Sıcak, ılık ve soğuk müşteri ayrımı yapılır; zaman en yüksek potansiyelli müşterilere ayrılır.",
    bullets: [
      "Davranış bazlı otomatik skor hesaplama",
      "Sıcak / ılık / soğuk müşteri segmentleri",
      "Satış ekibine net odak listesi",
    ],
    image: "/scoring-engine.png",
    url: "app.sava.company/scoring",
    reverse: false,
  },
  {
    id: "workflow",
    title: "Workflow Otomasyonu",
    pill: "Görünmez Asistan",
    headline: "Tekrarlayan işleri sistem üstlensin.",
    desc:
      "Yeni müşteri, teklif, ödeme, rezervasyon veya görev durumlarına göre e-posta, bildirim, görev ve takip aksiyonları otomatik çalışsın. \"Eğer bu olursa şunu yap\" mantığıyla iş akışlarını dakikalar içinde kurun.",
    bullets: [
      "Tetikleyici → koşul → aksiyon yapısı",
      "Otomatik e-posta, görev ve bildirim",
      "Geciken işler için otomatik uyarı",
    ],
    image: "/workflow.png",
    url: "app.sava.company/workflows",
    reverse: true,
  },
  {
    id: "webhook",
    title: "WebHook Entegrasyonları",
    pill: "Açık Mimari",
    headline: "Dış sistemlerden gelen veri ERP'ye anlık akar.",
    desc:
      "Web sitesi formları, ödeme bildirimleri, rezervasyonlar, siparişler ve müşteri talepleri manuel işleme gerek kalmadan ilgili sürece dahil olur. SAVA ERP kapalı bir kutu değil, açık bir kontrol katmanıdır.",
    bullets: [
      "Form, ödeme, rezervasyon, sipariş tetikleyicileri",
      "Üçüncü parti servislerle gerçek zamanlı bağlantı",
      "Workflow ile birleşik çalışma",
    ],
    image: "/webhook.png",
    url: "app.sava.company/webhooks",
    reverse: false,
  },
  {
    id: "smtp",
    title: "SMTP Gönderici",
    pill: "Kurumsal İletişim",
    headline: "Kendi alan adınızla, ERP içinden e-posta gönderin.",
    desc:
      "Teklif, bilgilendirme, hatırlatma ve operasyon bildirimlerini SAVA ERP üzerinden kurumsal alan adınızla gönderin. Workflow ve e-posta takip özellikleriyle uçtan uca entegre çalışır.",
    bullets: [
      "Kendi alan adınızla kurumsal gönderim",
      "Workflow tetikleyicilerine bağlı otomatik mailler",
      "E-posta takip ile açılma raporlaması",
    ],
    image: "/smtp-sender.png",
    url: "app.sava.company/smtp",
    reverse: true,
  },
];

// ── Page ──────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="hero-gradient pt-28 pb-20 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
            <div className="max-w-xl">
              <div className="pill-brand mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                SAVA ERP · İşletmenizin Yeni Kontrol Merkezi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.08] mb-6">
                İşletmenizin tüm operasyonlarını{" "}
                <span className="gradient-text">tek merkezden</span>{" "}
                yönetin.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                SAVA ERP; müşteri takibi, personel görevleri, workflow otomasyonları, e-posta takipleri,
                dashboard yönetimi ve dış sistem entegrasyonlarını tek merkezde birleştiren modern ERP platformudur.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
                >
                  Demo Talep Et
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link
                  href="/#screens"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-brand-200 hover:text-brand-700 transition-colors"
                >
                  Ürün Ekranlarını Gör
                </Link>
              </div>

              {/* Trust strip */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-10 pt-8 border-t border-slate-200/70">
                {heroTrust.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <path d="M2.5 7l3 3 6-6" stroke="#2563eb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Real product screenshot */}
            <div className="relative">
              <BrowserFrame
                src="/dashboard-editor.png"
                alt="SAVA ERP Dashboard Düzenleyicisi"
                url="app.sava.company/dashboard"
                priority
              />
              <div className="absolute -bottom-5 -left-4 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-card flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5l3 3 7-7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Canlı Veri</div>
                  <div className="text-[11px] text-slate-500">Anlık güncellenen dashboardlar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INVISIBLE LOSSES ─────────────────────── */}
      <section className="py-24 px-6 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="pill-danger mb-4">Görünmeyen kayıplar</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              İşletmenizdeki kayıpların çoğu görünmez başlar.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Bir müşteri geri dönüşü unutulduğunda, bir teklif takip edilmediğinde, bir görev geciktiğinde
              veya bir veri farklı sistemler arasında kaybolduğunda işletme fark etmeden para, zaman ve
              fırsat kaybeder.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {invisibleLosses.map((l) => (
              <div key={l.title} className="feature-card">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <h3 className="font-semibold text-slate-900 text-sm">{l.title}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SAVA ERP AS CONTROL LAYER ────────────── */}
      <section id="product" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="pill-brand mb-5">SAVA ERP</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                İşletmenizin merkezi kontrol katmanı.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Satış, operasyon, müşteri ilişkileri, görev takibi, e-posta iletişimi, workflow otomasyonları
                ve dış sistem entegrasyonlarını tek merkezde birleştirir. SAVA ERP işletmenizin
                <span className="text-slate-900 font-semibold"> merkezi sinir sistemi</span> gibi çalışır.
              </p>

              <div className="space-y-4">
                {[
                  { t: "Karmaşayı bitiren şeffaf yönetim", d: "Tüm modüller aynı veri üzerinde çalışır, tekrar yok." },
                  { t: "Canlı veri, tam kontrol", d: "Yöneticiler rapor beklemez, kararı anlık alır." },
                  { t: "Çalışma tarzınıza uyum", d: "Süreçleriniz sisteme değil, sistem süreçlerinize uyar." },
                ].map((f) => (
                  <div key={f.t} className="flex items-start gap-3">
                    <div className="check-mini mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5l2.5 2.5 5-5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{f.t}</div>
                      <div className="text-sm text-slate-500 mt-0.5">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Module hub diagram */}
            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 p-8 md:p-10">
              <div className="grid grid-cols-3 gap-4 items-center">
                {modules.slice(0, 3).map((m) => (
                  <ModuleNode key={m.name} name={m.name} desc={m.desc} />
                ))}
                <div className="col-span-3 flex items-center justify-center py-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-100 rounded-3xl blur-xl opacity-60" />
                    <div className="relative bg-white border border-brand-200 rounded-2xl px-6 py-4 shadow-card flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="2" width="5" height="5" rx="1" fill="white" />
                          <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7" />
                          <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7" />
                          <rect x="9" y="9" width="5" height="5" rx="1" fill="white" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-500">Merkezi Katman</div>
                        <div className="font-bold text-slate-900 text-sm">SAVA ERP</div>
                      </div>
                    </div>
                  </div>
                </div>
                {modules.slice(3, 6).map((m) => (
                  <ModuleNode key={m.name} name={m.name} desc={m.desc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURE GRID (alternating) ────────────── */}
      <section id="features" className="py-24 px-6 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="pill-brand mb-4 mx-auto inline-flex">Ürün Özellikleri</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Veriyi sadece saklamayın, aksiyona dönüştürün.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              SAVA ERP&apos;nin temel modüllerini ve gerçek ürün ekranlarını inceleyin.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {features.map((f) => (
              <div
                key={f.id}
                id={f.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  f.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="max-w-lg">
                  <div className="pill-brand mb-4">{f.pill}</div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                    {f.headline}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{f.desc}</p>
                  <ul className="space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                        <div className="check-mini mt-0.5">
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M2 5.5l2.5 2.5 5-5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <BrowserFrame src={f.image} alt={`SAVA ERP — ${f.title}`} url={f.url} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AUTOMATION IMPACT ─────────────────────── */}
      <section id="automation" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="pill-brand mb-4">Otomasyonun etkisi</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Otomasyon sadece hız kazandırmaz; kârlılığı görünür hale getirir.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              SAVA ERP&apos;deki workflow, e-posta takip ve puanlama motoru birlikte çalıştığında
              ekipler daha değerli işlere odaklanır, fırsatlar kaçmaz, kararlar gecikmez.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessImpact.map((b, i) => (
              <div key={i} className="feature-card flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                    b.value === "↑"
                      ? "bg-brand-50 text-brand-600 border border-brand-100"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  {b.value}
                </div>
                <p className="text-sm text-slate-700 font-medium leading-snug">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CUSTOMER FOCUS ────────────────────────── */}
      <section className="py-24 px-6 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <BrowserFrame
              src="/scoring-engine.png"
              alt="SAVA ERP Puanlama Motoru ekranı"
              url="app.sava.company/scoring"
            />
            <div className="max-w-lg">
              <div className="pill-brand mb-4">Müşteri odağı</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                Hangi müşteriye ne zaman temas edeceğinizi sistem söylesin.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                SAVA ERP, müşterinin sistemdeki hareketlerine göre satış ekibinize net bir odak sağlar.
                Açılan teklif, görüntülenen e-posta, sıcak ilgi sinyali — hepsi tek ekranda görünür hale gelir.
              </p>
              <ul className="space-y-3">
                {[
                  "Teklif açıldı mı?",
                  "E-posta görüldü mü?",
                  "Müşteri sıcak mı, ılık mı, soğuk mu?",
                  "Kaç gündür temas yok?",
                  "Hangi müşteri öncelikli?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="check-mini mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5l2.5 2.5 5-5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TEAM & OPERATIONS ─────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="max-w-lg">
              <div className="pill-brand mb-4">Personel & Operasyon</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                Performansı tahminle değil, süreç verisiyle yönetin.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Görev atama, iş akışı takibi, bekleyen ve geciken işler tek panelden izlenir.
                Yöneticiler operasyonel darboğazları, ekipler kendi öncelik listesini net görür.
                Amaç baskı değil; <span className="text-slate-900 font-semibold">netlik ve görünürlük</span>.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Görev atama",
                  "İş akışı takibi",
                  "Bekleyen / geciken işler",
                  "Tamamlanan görevler",
                  "Operasyonel darboğazlar",
                  "Yönetici dashboardları",
                ].map((i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <BrowserFrame
              src="/workflow.png"
              alt="SAVA ERP Workflow ekranı"
              url="app.sava.company/workflows"
            />
          </div>
        </div>
      </section>

      {/* ── 8. INTEGRATIONS ──────────────────────────── */}
      <section id="integrations" className="py-24 px-6 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <BrowserFrame
              src="/webhook.png"
              alt="SAVA ERP WebHook ekranı"
              url="app.sava.company/webhooks"
            />
            <div className="max-w-lg">
              <div className="pill-brand mb-4">Entegrasyon</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                SAVA ERP kapalı bir kutu değildir.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                İşletmenizin kullandığı farklı sistemleri birbirine bağlayan bir kontrol katmanı gibi çalışır.
                WebHook, SMTP ve API mantığı ile dış sistemlerle gerçek zamanlı veri alışverişi yapar.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {integrations.map((i) => (
                  <div key={i} className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <Link
                href="/#smtp"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                SMTP Gönderici altyapısını gör →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. COMPARISON ────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="pill-brand mb-4 mx-auto inline-flex">Klasik ERP vs. SAVA ERP</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Klasik ERP kayıt tutar; SAVA ERP aksiyon aldırır.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              SAVA ERP farkını teknik özelliklerle değil, iş süreçlerine dokunuş şekliyle anlatır.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden">
            <div className="bg-slate-50 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Klasik ERP</div>
              <div className="text-lg font-bold text-slate-700">Veri kaydı odaklı</div>
            </div>
            <div className="bg-white p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">SAVA ERP</div>
              <div className="text-lg font-bold text-slate-900">Aksiyon odaklı</div>
            </div>

            {comparison.flatMap((row, i) => [
              <div key={`c${i}`} className="bg-slate-50 p-5 flex items-start gap-3">
                <div className="x-mini mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2l-6 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{row.classic}</p>
              </div>,
              <div key={`s${i}`} className="bg-white p-5 flex items-start gap-3">
                <div className="check-mini mt-0.5">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M2 5.5l2.5 2.5 5-5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">{row.sava}</p>
              </div>,
            ])}
          </div>
        </div>
      </section>

      {/* ── 10. SCREENSHOT SHOWCASE ──────────────────── */}
      <section id="screens" className="py-24 px-6 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="pill-brand mb-4">Gerçek Ürün Ekranları</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              SAVA ERP&apos;yi kendi ekranlarından tanıyın.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Aşağıdaki tüm ekranlar gerçek SAVA ERP arayüzlerinden alınmıştır.
            </p>
          </div>

          <ScreenshotShowcase />
        </div>
      </section>

      {/* ── 11. VISION (PDF takeaways) ──────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="pill-brand mb-4">SAVA ERP Vizyonu</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Görünmeyen kaçakları görünür hale getirmek.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              SAVA ERP yalnızca bir yazılım değil; işletmenizin günlük kararlarını netleştiren bir bakış açısıdır.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visionCards.map((v, i) => (
              <div key={v.title} className="feature-card relative overflow-hidden">
                <div className="text-5xl font-extrabold text-brand-50 absolute top-2 right-4 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 relative">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed relative">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. WHY SAVA ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="pill-brand mb-4 mx-auto inline-flex">Neden SAVA ERP?</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              İşletmenize özel, otomasyon odaklı, entegre.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Modern bir SaaS deneyimi, kurumsal bir altyapı ile birleşiyor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whySava.map((w) => (
              <div key={w.title} className="feature-card">
                <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7.5l2.5 2.5L11 4" stroke="#2563eb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{w.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. FINAL CTA ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0f172a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Demo Erişimi Açık
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-[1.1]">
            İşletmenizdeki görünmez kaçakları{" "}
            <span className="text-brand-400">bugün durdurun.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            SAVA ERP ile müşteri süreçlerinizi, operasyonlarınızı, görevlerinizi ve entegrasyonlarınızı
            tek merkezden yönetin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors text-lg shadow-glow"
            >
              Demo Talep Et
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9h12M10 4l5 5-5 5" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/15 hover:bg-white/10 transition-colors text-lg"
            >
              Bizimle İletişime Geç
            </Link>
            <a
              href={SITE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-slate-300 font-semibold rounded-xl border border-white/10 hover:border-white/30 hover:text-white transition-colors text-lg"
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

// ── Small subcomponents ──────────────────────────────────

function ModuleNode({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-brand-200 hover:shadow-soft transition-all duration-200">
      <div className="text-sm font-semibold text-slate-900 mb-1">{name}</div>
      <div className="text-[11px] text-slate-500 leading-snug">{desc}</div>
    </div>
  );
}

