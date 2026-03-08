// Site-wide constants

export const SITE_NAME = "SAVA";
export const SITE_URL = "https://sava.com.tr";
export const SITE_EMAIL = "info@sava.company";
export const SITE_LOCATION = "İstanbul, Türkiye";
export const SITE_WHATSAPP = "https://wa.me/905342231036";

export const NAV_LINKS = [
  { label: "Ürünler", href: "/products" },
  { label: "Dijital Hizmetler", href: "/services" },
  { label: "Projeler", href: "/work" },
  { label: "Fiyatlar", href: "/pricing" },
  { label: "İletişim", href: "/contact" },
];

export const SERVICES = [
  {
    id: "landing",
    title: "Landing Page",
    description: "Tek sayfalık, dönüşüm odaklı tanıtım sayfaları.",
  },
  {
    id: "corporate",
    title: "Kurumsal Web Sitesi",
    description: "Çok sayfalı, kurumsal kimliğe uygun web siteleri.",
  },
  {
    id: "ecommerce",
    title: "E-Ticaret",
    description: "Shopify veya WooCommerce altyapısıyla tam e-ticaret çözümü.",
  },
  {
    id: "branding",
    title: "Logo & Marka Kimliği",
    description: "Profesyonel logo tasarımı ve marka kılavuzu.",
  },
  {
    id: "payment",
    title: "Ödeme Entegrasyonu",
    description: "İyzico, Stripe ve diğer ödeme sistemleriyle entegrasyon.",
  },
];

export const PACKAGES = [
  {
    id: "start",
    name: "SAVA START",
    tagline: "Hızlı Başlangıç",
    price: "₺4.900",
    priceNote: "Lansman fiyatı",
    items: [
      "Logo tasarımı (3 öneri)",
      "Tek sayfalık landing page",
      "Mobil uyumlu tasarım",
      "1 revizyon hakkı",
      "3 iş günü teslim",
    ],
    highlight: false,
  },
  {
    id: "business",
    name: "SAVA BUSINESS",
    tagline: "En Çok Tercih Edilen",
    price: "₺12.900",
    priceNote: "Lansman fiyatı",
    items: [
      "5 sayfalık kurumsal web sitesi",
      "Google Analytics entegrasyonu",
      "Temel SEO optimizasyonu",
      "İletişim formu",
      "2 revizyon hakkı",
      "7 iş günü teslim",
    ],
    highlight: true,
  },
  {
    id: "commerce",
    name: "SAVA COMMERCE",
    tagline: "E-Ticaret Paketi",
    price: "₺24.900",
    priceNote: "Lansman fiyatı",
    items: [
      "Shopify / WooCommerce kurulumu",
      "Ödeme sistemi entegrasyonu",
      "10 ürün girişi",
      "Mobil uyumlu tema",
      "2 revizyon hakkı",
      "10 iş günü teslim",
    ],
    highlight: false,
  },
];

export const WORK_ITEMS = [
  {
    slug: "mavi-fincan",
    title: "Mavi Fincan",
    category: "Kafe & Restoran",
    description: "Tek sayfalık landing page — hero, menü, rezervasyon ve konum bölümleriyle.",
    color: "from-amber-600 to-orange-800",
    badge: "START",
  },
  {
    slug: "eksen-law",
    title: "Eksen Hukuk",
    category: "Kurumsal · Hukuk Bürosu",
    description: "5 sayfalık kurumsal site: Anasayfa, Hakkımızda, Hizmetler, Ekip, İletişim formu, SEO ve GA entegrasyonu.",
    color: "from-slate-700 to-slate-900",
    badge: "BUSINESS",
  },
  {
    slug: "orion-travel",
    title: "Orion Travel",
    category: "E-Ticaret · Turizm",
    description: "10 tur paketi, ürün detay, sepet, checkout ve iyzico/Stripe ödeme entegrasyonu ile tam e-ticaret deneyimi.",
    color: "from-teal-600 to-cyan-800",
    badge: "COMMERCE",
  },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Brifing", desc: "Projenizi ve ihtiyaçlarınızı anlarız." },
  { step: "02", title: "%50 Ön Ödeme", desc: "Projeye başlamak için ön ödeme alınır." },
  { step: "03", title: "Taslak", desc: "İlk tasarım ve geliştirme taslağını paylaşırız." },
  { step: "04", title: "Revizyon", desc: "1 revizyon hakkı ile düzenleme yapılır." },
  { step: "05", title: "Teslim", desc: "Proje teslim edilir, kalan ödeme alınır." },
  { step: "06", title: "Son Ödeme", desc: "Fatura kesilir, proje tamamen devredilir." },
];

export const FAQS = [
  {
    q: "Teslim süresi ne kadar?",
    a: "Pakete göre 3–10 iş günü arasında değişir. START paketi 3, BUSINESS 7, COMMERCE 10 iş günüdür.",
  },
  {
    q: "Kaç revizyon hakkım var?",
    a: "Her pakette 1–2 revizyon hakkı tanımlanmıştır. Ek revizyonlar ücretlidir.",
  },
  {
    q: "Fiyatlarınız sabit mi?",
    a: "Lansman döneminde gösterilen fiyatlar geçerlidir. Özel projeler için teklif alabilirsiniz.",
  },
  {
    q: "Fatura kesiyor musunuz?",
    a: "Evet, tüm projeler için e-fatura/fatura kesilmektedir.",
  },
  {
    q: "Başlamak için ne gerekli?",
    a: "Logo (varsa), marka renkleri, içerikler (metin ve görseller) ve ön ödeme yeterlidir.",
  },
  {
    q: "Uluslararası projelerde fiyatlandırma nasıl?",
    a: "Uluslararası projeler için EUR fiyatlandırması uygulanmaktadır. Teklif için iletişime geçin.",
  },
];
