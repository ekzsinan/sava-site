// This file is intentionally kept as a client component page.
"use client";

import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SITE_WHATSAPP } from "@/lib/constants";

const CONTACT_EMAIL = "info@sava.company";

const services = [
  "Landing Page",
  "Kurumsal Web Sitesi",
  "E-Ticaret",
  "Logo & Marka Kimliği",
  "Ödeme Entegrasyonu",
  "SAVA CRM (Bekleme Listesi)",
  "Diğer",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("c-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("c-email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("c-phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("c-company") as HTMLInputElement).value,
      service: (form.elements.namedItem("c-service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("c-message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSent(true);
      } else {
        const json = await res.json();
        setError(json.error || "Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="hero-gradient pt-32 pb-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge className="mb-6">İletişim</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Konuşalım, <span className="gradient-text">üretelim.</span>
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Projeniz hakkında bilgi alın veya teklif isteyin. En geç 1 iş günü içinde geri dönüyoruz.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            {sent ? (
              <div className="bg-brand-50 border border-brand-200 rounded-3xl p-10 text-center">
                <span className="text-5xl block mb-4">✅</span>
                <h2 className="text-2xl font-extrabold mb-2 text-brand-800">Mesajınız alındı!</h2>
                <p className="text-neutral-500">En geç 1 iş günü içinde size dönüş yapacağız.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="İletişim formu"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-medium mb-1.5">Ad Soyad *</label>
                    <input id="c-name" type="text" required placeholder="Adınız Soyadınız"
                      className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-medium mb-1.5">E-posta *</label>
                    <input id="c-email" type="email" required placeholder="email@sirket.com"
                      className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-medium mb-1.5">Telefon</label>
                    <input id="c-phone" type="tel" placeholder="+90 5xx xxx xx xx"
                      className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  </div>
                  <div>
                    <label htmlFor="c-company" className="block text-sm font-medium mb-1.5">Şirket</label>
                    <input id="c-company" type="text" placeholder="Şirket adı"
                      className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-service" className="block text-sm font-medium mb-1.5">İhtiyacınız Olan Hizmet</label>
                  <select id="c-service"
                    className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500">
                    <option value="">Seçiniz</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="block text-sm font-medium mb-1.5">Mesajınız *</label>
                  <textarea id="c-message" required rows={5} placeholder="Projenizi kısaca anlatın..."
                    className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none" />
                </div>
                {error && (
                  <p className="text-red-500 text-sm text-center bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
                    ⚠️ {error}
                  </p>
                )}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" className="flex-1" size="lg" disabled={loading}>
                    {loading ? "Gönderiliyor…" : "Gönder"}
                  </Button>
                  <a
                    href={SITE_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-green-400 text-green-700 font-semibold hover:bg-green-50 transition-colors text-base"
                    aria-label="WhatsApp ile iletişime geç"
                  >
                    💬 WhatsApp
                  </a>
                </div>
                <p className="text-xs text-neutral-400 text-center">
                  Fatura kesilir · Bilgileriniz üçüncü taraflarla paylaşılmaz.
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold mb-4">Doğrudan ulaşın</h2>
              <ul className="space-y-4 text-neutral-600">
                <li className="flex items-center gap-3">
                  <span className="text-brand-500 text-xl" aria-hidden="true">✉</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-600 transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-xl" aria-hidden="true">💬</span>
                  <a href={SITE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                    WhatsApp ile yaz
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-400 text-xl" aria-hidden="true">📍</span>
                  <span>İstanbul, Türkiye</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6">
              <h3 className="font-bold mb-3">Ne zaman cevap veririz?</h3>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>⏱ E-posta: En geç 1 iş günü</li>
                <li>💬 WhatsApp: Genellikle birkaç saat içinde</li>
                <li>📅 Pazartesi – Cuma, 09:00 – 18:00</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-3xl p-6">
              <h3 className="font-bold text-brand-800 mb-2">Fatura kesilir.</h3>
              <p className="text-sm text-brand-600">
                Tüm projelerimiz için e-fatura veya fatura düzenlenmektedir.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
