import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Eksen Hukuk — Demo",
  description: "Eksen Hukuk Bürosu demo web sitesi — SAVA Digital Factory tarafından hazırlanmıştır.",
  path: "/work/eksen-law",
});

export default function EksenLawPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Demo badge */}
      <div className="fixed top-20 right-4 z-40">
        <Badge variant="demo" className="shadow-lg">Demo Proje</Badge>
      </div>

      {/* Nav */}
      <header className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-extrabold text-xl tracking-tight">EKSEN HUKUK</span>
        <nav className="hidden md:flex gap-8 text-sm text-slate-300" aria-label="Eksen Hukuk navigasyon">
          {["Hakkımızda","Uzmanlık Alanları","Avukatlar","İletişim"].map(l=>(
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl text-sm transition-colors">
          Randevu Al
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 py-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Hukuki Danışmanlık & Temsil
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Haklarınız için <br />yanınızdayız.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            15 yılı aşkın deneyimimizle ticaret, iş ve aile hukuku alanlarında profesyonel
            danışmanlık ve dava yönetimi hizmeti sunuyoruz.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-2xl transition-colors">
              Ücretsiz Danışma
            </a>
            <a href="#services" className="px-8 py-4 border border-slate-600 hover:border-slate-400 rounded-2xl text-slate-200 font-semibold transition-colors">
              Uzmanlık Alanları
            </a>
          </div>
        </div>
        <div
          className="h-80 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-700 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-6xl opacity-10 font-black select-none">⚖</span>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["500+","Başarılı Dava"],["15","Yıl Deneyim"],["3","Uzman Avukat"],["98%","Müşteri Memnuniyeti"]].map(([n,l])=>(
            <div key={l}>
              <p className="text-4xl font-extrabold text-amber-400">{n}</p>
              <p className="text-slate-400 text-sm mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12 text-center">Uzmanlık Alanları</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {icon:"🏢",title:"Ticaret Hukuku",desc:"Şirket kuruluşu, sözleşmeler ve ticari uyuşmazlıklar."},
            {icon:"👷",title:"İş Hukuku",desc:"İşçi-işveren ilişkileri ve iş davaları."},
            {icon:"👨‍👩‍👧",title:"Aile Hukuku",desc:"Boşanma, velayet ve miras davaları."},
            {icon:"🏘️",title:"Gayrimenkul",desc:"Tapu, kira ve gayrimenkul uyuşmazlıkları."},
            {icon:"⚡",title:"Ceza Hukuku",desc:"Cezai savunma ve hukuki destek."},
            {icon:"🌐",title:"Uluslararası Hukuk",desc:"Yabancı yatırımcı ve uluslararası sözleşmeler."},
          ].map(s=>(
            <div key={s.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-amber-500/30 transition-colors">
              <span className="text-3xl block mb-4" aria-hidden="true">{s.icon}</span>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-12 text-center">Müvekkil Görüşleri</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {name:"Ahmet K.",role:"Şirket Ortağı",text:"Ticari davamızda son derece profesyonel ve sonuç odaklı bir yaklaşım sergilediler."},
              {name:"Selin M.",role:"Özel Danışan",text:"Aile davası sürecinde her aşamada yanımda olduklarını hissettim. Teşekkürler."},
            ].map(t=>(
              <div key={t.name} className="bg-slate-800/50 border border-slate-700 rounded-3xl p-7">
                <p className="text-slate-300 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4">Randevu Alın</h2>
        <p className="text-slate-400 mb-8">Hukuki danışmanlık için bize ulaşın.</p>
        <a href="tel:+902121234567" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-2xl transition-colors text-lg">
          📞 +90 212 123 45 67
        </a>
        <p className="text-slate-500 text-sm mt-4">hukuk@eksen.com.tr</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-600 text-sm">
        <p>© 2025 Eksen Hukuk Bürosu · Bu sayfa SAVA Digital Factory tarafından demo amaçlı hazırlanmıştır.</p>
        <Link href="/work" className="text-brand-400 hover:text-brand-300 mt-2 inline-block">
          ← Tüm Projelere Dön
        </Link>
      </footer>
    </div>
  );
}
