"use client";

import Button from "@/components/ui/Button";

export default function WaitlistForm() {
  return (
    <form
      className="bg-white rounded-3xl p-8 shadow-card border border-neutral-100 space-y-5"
      aria-label="Bekleme listesi formu"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="wl-name" className="block text-sm font-medium mb-1.5">
            Ad Soyad
          </label>
          <input
            id="wl-name"
            type="text"
            required
            placeholder="Adınız"
            className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label htmlFor="wl-email" className="block text-sm font-medium mb-1.5">
            E-posta
          </label>
          <input
            id="wl-email"
            type="email"
            required
            placeholder="email@sirket.com"
            className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="wl-company" className="block text-sm font-medium mb-1.5">
          Şirket / Sektör
        </label>
        <input
          id="wl-company"
          type="text"
          placeholder="Şirketiniz"
          className="w-full border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>
      <Button type="submit" className="w-full" size="lg">
        Listeye Katıl
      </Button>
      <p className="text-xs text-neutral-400 text-center">
        Spam göndermiyoruz. İstediğiniz zaman çıkabilirsiniz.
      </p>
    </form>
  );
}
