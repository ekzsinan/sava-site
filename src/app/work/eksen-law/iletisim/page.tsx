"use client";

import { useState } from "react";
import EksenLayout from "../_components/EksenLayout";

export default function EksenIletisimPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: Record<string, string>) {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Ad soyad zorunludur.";
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Geçerli bir e-posta girin.";
    if (!data.message.trim() || data.message.trim().length < 20) e.message = "Mesajınız en az 20 karakter olmalıdır.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    // Stub: simulate API call
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  const fieldCls = (field: string) =>
    `w-full bg-white/[0.04] border ${errors[field] ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/40 transition-colors`;

  return (
    <EksenLayout>
      {/* Hero */}
      <section className="px-6 pt-20 pb-14 max-w-5xl mx-auto">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">İletişim</p>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
          Hukuki konunuzu<br /><span className="text-amber-400">birlikte değerlendirelim.</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
          İlk danışma görüşmesi ücretsizdir. Formu doldurun, 1 iş günü içinde sizinle iletişime geçelim.
        </p>
      </section>

      <section className="pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          {sent ? (
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold text-amber-100 mb-2">Mesajınız alındı!</h2>
              <p className="text-slate-400 text-sm">En geç 1 iş günü içinde size dönüş yapacağız.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-amber-400 text-sm hover:underline">
                Yeni mesaj gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="İletişim formu" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ek-name" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Ad Soyad *</label>
                  <input id="ek-name" name="name" type="text" placeholder="Adınız Soyadınız" className={fieldCls("name")} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="ek-email" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">E-posta *</label>
                  <input id="ek-email" name="email" type="email" placeholder="ornek@sirket.com" className={fieldCls("email")} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ek-phone" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Telefon</label>
                  <input id="ek-phone" name="phone" type="tel" placeholder="+90 5xx xxx xx xx" className={fieldCls("phone")} />
                </div>
                <div>
                  <label htmlFor="ek-subject" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Konu</label>
                  <select id="ek-subject" name="subject" className={fieldCls("subject")}>
                    <option value="">Seçiniz</option>
                    <option>Şirketler & Ticaret Hukuku</option>
                    <option>Birleşme & Devralma</option>
                    <option>İş Hukuku</option>
                    <option>Gayrimenkul Hukuku</option>
                    <option>Aile & Miras Hukuku</option>
                    <option>Uluslararası Tahkim</option>
                    <option>Diğer</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="ek-message" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Mesajınız *</label>
                <textarea id="ek-message" name="message" rows={5} placeholder="Hukuki konunuzu kısaca açıklayın…" className={`${fieldCls("message")} resize-none`} />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              <p className="text-slate-600 text-xs">Bilgileriniz gizli tutulur ve üçüncü taraflarla paylaşılmaz.</p>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/40 text-black font-bold rounded-xl transition-colors text-sm"
              >
                {loading ? "Gönderiliyor…" : "Mesaj Gönder"}
              </button>
            </form>
          )}
        </div>

        {/* Info panel */}
        <div className="space-y-6">
          <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-6">
            <h2 className="font-extrabold text-lg mb-4">Bize ulaşın</h2>
            <ul className="space-y-3 text-sm">
              {[
                ["Telefon", "0212 234 56 78"],
                ["E-posta", "info@eksenhukuk.av.tr"],
                ["Adres", "Büyükdere Cad. No:201 Kat:12, Şişli · İstanbul"],
                ["Çalışma Saatleri", "Pazartesi – Cuma, 09:00 – 18:00"],
              ].map(([label, value]) => (
                <li key={label} className="flex gap-3">
                  <span className="text-slate-500 w-32 flex-shrink-0">{label}</span>
                  <span className="text-slate-300 font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/15 rounded-2xl p-6">
            <h3 className="font-bold text-amber-100 mb-2">İlk danışma ücretsiz</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              30 dakikalık ön görüşmede hukuki durumunuzu değerlendiriyor, olası stratejileri paylaşıyoruz. Devam kararını siz verirsiniz.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
            <h3 className="font-bold mb-3">Yanıt süremiz</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between"><span>E-posta</span><span className="font-semibold text-slate-300">En geç 1 iş günü</span></li>
              <li className="flex justify-between"><span>Telefon</span><span className="font-semibold text-slate-300">Mesai saatleri içinde</span></li>
            </ul>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-2xl h-36 flex items-center justify-center">
            <p className="text-slate-700 text-xs text-center">Google Maps embed<br />Gerçek projede yerleşir</p>
          </div>
        </div>
      </section>
    </EksenLayout>
  );
}
