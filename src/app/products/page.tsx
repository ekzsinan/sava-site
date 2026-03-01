import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";
import WaitlistForm from "@/components/ui/WaitlistForm";

export const metadata: Metadata = buildMetadata({
  title: "SAVA CRM",
  description:
    "SAVA CRM — Küçük ve orta ölçekli işletmeler için sade, güçlü CRM yazılımı. Bekleme listesine katılın.",
  path: "/products",
});

const modules = [
  { title: "Pipeline", desc: "Satış adımlarınızı sürükle-bırak ile yönetin." },
  { title: "Müşteriler", desc: "İletişim geçmişi, notlar ve hatırlatıcılar." },
  { title: "Görevler", desc: "Takım ve bireysel görev yönetimi." },
  { title: "Raporlama", desc: "Anlık panel ve özelleştirilebilir raporlar." },
  { title: "E-posta Entegrasyonu", desc: "Gelen kutusunuzu CRM ile senkronize edin." },
  { title: "Bildirimler", desc: "Önemli aktivitelerde anında uyarı alın." },
];

const timeline = [
  { q: "Q3 2025", label: "MVP Geliştirme", done: true },
  { q: "Q4 2025", label: "Kapalı Beta", done: false },
  { q: "Q1 2026", label: "Açık Beta", done: false },
  { q: "Q2 2026", label: "Genel Yayın", done: false },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-gradient pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="warning" className="mb-6">Yakında · Coming Soon</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="gradient-text">SAVA CRM</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Küçük ve orta ölçekli işletmeler için tasarlanmış, sade ve güçlü CRM yazılımı.
            Müşterilerinizi, satışlarınızı ve görevlerinizi tek yerden yönetin.
          </p>
        </div>
      </div>

      {/* Modules */}
      <Section className="bg-neutral-50">
        <div className="text-center mb-14">
          <Badge className="mb-4">MVP Modülleri</Badge>
          <h2 className="text-3xl font-extrabold">Neler geliyor?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="bg-white rounded-3xl p-7 border border-neutral-100 shadow-card hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="inline-flex w-10 h-10 rounded-2xl bg-brand-100 items-center justify-center text-brand-600 font-bold text-sm mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold text-lg mb-1">{m.title}</h3>
              <p className="text-sm text-neutral-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section narrow>
        <div className="text-center mb-12">
          <Badge className="mb-4">Yol Haritası</Badge>
          <h2 className="text-3xl font-extrabold">Lansman Takvimi</h2>
        </div>
        <ol className="relative border-l-2 border-brand-200 ml-4 space-y-8">
          {timeline.map((t) => (
            <li key={t.q} className="pl-8 relative">
              <span
                className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-2 ${
                  t.done
                    ? "bg-brand-600 border-brand-600"
                    : "bg-white border-brand-300"
                }`}
                aria-hidden="true"
              />
              <p className="text-xs font-semibold text-brand-500 mb-0.5">{t.q}</p>
              <p className={`font-semibold ${t.done ? "text-neutral-800" : "text-neutral-400"}`}>
                {t.label}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Waitlist form */}
      <Section id="waitlist" className="bg-brand-50" narrow>
        <div className="text-center mb-10">
          <Badge className="mb-4">Bekleme Listesi</Badge>
          <h2 className="text-3xl font-extrabold mb-3">Erken erişim için kaydolun</h2>
          <p className="text-neutral-500">
            Beta yayınında ilk haberdar olmak için e-postanızı bırakın.
          </p>
        </div>
        <WaitlistForm />
      </Section>
    </>
  );
}
