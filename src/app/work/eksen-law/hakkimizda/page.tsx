import type { Metadata } from "next";
import Link from "next/link";
import EksenLayout from "../_components/EksenLayout";

export const metadata: Metadata = {
  title: "Hakkımızda | Eksen Hukuk",
  description: "2008'den bu yana şirketler, iş ve gayrimenkul hukuku alanlarında kurumsal müvekkillere hizmet veren Eksen Hukuk Bürosu hakkında.",
  alternates: { canonical: "https://sava.company/work/eksen-law/hakkimizda" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Hakkımızda — Eksen Hukuk",
  url: "https://sava.company/work/eksen-law/hakkimizda",
  description: "Eksen Hukuk Bürosu tarihçesi ve misyonu.",
};

const values = [
  { n: "01", title: "Dürüstlük", desc: "Müvekkillerimize her zaman gerçekçi ve açık bir değerlendirme sunarız. Başarı garantisi vermeyiz; doğru bilgi veririz." },
  { n: "02", title: "Uzmanlık", desc: "Odaklandığımız alanlarda derinleşiriz. Hukuk alanında genelci olmak yerine seçili uzmanlık alanlarında mükemmelliği tercih ederiz." },
  { n: "03", title: "Erişilebilirlik", desc: "Her müvekkile aynı özeni gösteririz. Büyük bürolar kadar kapsamlı, küçük bürolar kadar kişisel bir hizmet anlayışı." },
  { n: "04", title: "Şeffaflık", desc: "Ücretlendirmede, süreç yönetiminde ve sonuç beklentilerinde şeffaf iletişimi esas alırız." },
];

const milestones = [
  { year: "2008", event: "Av. Mehmet Eksen tarafından şirketler hukuku odaklı olarak kuruldu." },
  { year: "2012", event: "İş hukuku ve gayrimenkul departmanları oluşturuldu; ikinci ortak katıldı." },
  { year: "2016", event: "Uluslararası tahkim pratiği başlatıldı; ilk ICC davası sonuçlandırıldı." },
  { year: "2019", event: "Şişli ofis genişletildi; üçüncü uzman avukat kadrosuna katıldı." },
  { year: "2023", event: "850. dava kapandı; dijital müvekkil portalı devreye alındı." },
  { year: "2026", event: "Yeni nesil kurumsal müvekkil hizmetleri ile büyüme sürdürülüyor." },
];

export default function HakkimizdaPage() {
  return (
    <EksenLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-5xl mx-auto">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Hakkımızda</p>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
          17 yıllık deneyim,<br /><span className="text-amber-400">binlerce çözüm.</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
          Eksen Hukuk, 2008 yılında Av. Mehmet Eksen tarafından İstanbul&apos;da kurulmuştur. Büro, şirketler hukuku,
          iş hukuku ve gayrimenkul hukuku alanlarında kurumsal müvekkillere ve bireylere çözüm odaklı hukuki hizmet sunmaktadır.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Misyon</p>
            <h2 className="text-2xl font-extrabold mb-4">Hukukta netlik, müvekkilde güven</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Büyük bürolar kadar kapsamlı, küçük bürolar kadar kişisel bir hizmet anlayışıyla her müvekkile özel strateji geliştirmek ve sonuç odaklı çözümler üretmek.
            </p>
          </div>
          <div>
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Vizyon</p>
            <h2 className="text-2xl font-extrabold mb-4">Türkiye'nin en güvenilir kurumsal bürosu</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Şirketler ve bireyler için hukukun karmaşıklığını sadeleştiren, teknoloji destekli ve erişilebilir bir hukuk bürosu olmak.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Değerlerimiz</p>
        <h2 className="text-3xl font-extrabold mb-8">Çalışma ilkelerimiz</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.n} className="bg-white/[0.04] border border-white/8 rounded-2xl p-6">
              <span className="text-amber-500/40 font-black text-2xl block mb-3 select-none">{v.n}</span>
              <h3 className="font-bold mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Tarihçe</p>
          <h2 className="text-3xl font-extrabold mb-8">Büromuzun yolculuğu</h2>
          <ol className="relative border-l-2 border-amber-500/20 ml-4 space-y-8">
            {milestones.map((m) => (
              <li key={m.year} className="pl-8 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-500/20 border-2 border-amber-500/40" />
                <p className="text-amber-400 text-xs font-bold mb-1">{m.year}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-4">Ekibimizle tanışmak ister misiniz?</h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/work/eksen-law/ekibimiz" className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm transition-colors">
            Ekibimizi Tanıyın
          </Link>
          <Link href="/work/eksen-law/iletisim" className="px-6 py-3 border border-white/10 hover:border-white/30 text-slate-300 font-semibold rounded-xl text-sm transition-colors">
            İletişime Geçin
          </Link>
        </div>
      </section>
    </EksenLayout>
  );
}
