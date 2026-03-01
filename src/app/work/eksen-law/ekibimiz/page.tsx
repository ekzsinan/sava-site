import type { Metadata } from "next";
import Link from "next/link";
import EksenLayout from "../_components/EksenLayout";

export const metadata: Metadata = {
  title: "Ekibimiz | Eksen Hukuk",
  description: "Eksen Hukuk avukatları: Av. Mehmet Eksen, Av. Deniz Karaer ve Av. Selin Arslan. İstanbul Barosu üyesi uzman kadro.",
  alternates: { canonical: "https://sava.company/work/eksen-law/ekibimiz" },
};

const attorneys = [
  {
    name: "Av. Mehmet Eksen",
    title: "Kurucu Ortak",
    bar: "İstanbul Barosu · Sicil No: 42817",
    focus: ["Ticaret Hukuku", "Şirket Birleşmeleri", "Kurumsal Yönetişim"],
    edu: "İstanbul Üniversitesi Hukuk Fakültesi (LLB)",
    extra: "Harvard Law School Executive Program (2014)",
    bio: "Av. Mehmet Eksen, 2008 yılında kurduğu büroyu kurumsal müvekkil odaklı bir yapıya dönüştürmüştür. Özellikle büyük ölçekli M&A işlemleri ve şirket yeniden yapılandırma süreçlerinde tercih edilen isimler arasındadır.",
    cases: "300+ tamamlanan dava",
  },
  {
    name: "Av. Deniz Karaer",
    title: "Ortak Avukat",
    bar: "İstanbul Barosu · Sicil No: 51234",
    focus: ["İş Hukuku", "Uluslararası Tahkim", "SGK Uyuşmazlıkları"],
    edu: "Galatasaray Üniversitesi Hukuk Fakültesi (LLB)",
    extra: "Université Paris II Panthéon-Assas (LLM)",
    bio: "Av. Deniz Karaer, iş hukuku ve uluslararası tahkim alanlarındaki derin uzmanlığıyla kurumsal müvekkillerin işgücü uyuşmazlıklarını etkin biçimde çözmektedir. ICC tahkim davalarında deneyimlidir.",
    cases: "280+ tamamlanan dava",
  },
  {
    name: "Av. Selin Arslan",
    title: "Kıdemli Avukat",
    bar: "İstanbul Barosu · Sicil No: 63905",
    focus: ["Gayrimenkul Hukuku", "Aile Hukuku", "Miras Planlaması"],
    edu: "Ankara Üniversitesi Hukuk Fakültesi (LLB)",
    extra: "İstanbul Üniversitesi (Özel Hukuk LLM)",
    bio: "Av. Selin Arslan, gayrimenkul hukuku ve aile hukuku konularındaki titiz çalışma yöntemi ile müvekkillerinden yüksek memnuniyet puanları almaktadır. Kira uyuşmazlıkları ve boşanma davalarında bölgenin önde gelen avukatları arasındadır.",
    cases: "270+ tamamlanan dava",
  },
];

export default function EkibimizPage() {
  return (
    <EksenLayout>
      {/* Hero */}
      <section className="px-6 pt-20 pb-14 max-w-5xl mx-auto">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Ekibimiz</p>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
          Deneyimli, uzman,<br /><span className="text-amber-400">çözüm odaklı.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
          Her avukatımız kendi uzmanlık alanında derinleşmiş, müvekkillerine doğrudan ulaşılabilir bir ekipten oluşuyoruz.
        </p>
      </section>

      {/* Team cards */}
      <section className="py-4 pb-20 px-6 max-w-6xl mx-auto space-y-8">
        {attorneys.map((a) => (
          <div key={a.name} className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 grid md:grid-cols-3 gap-8">
            {/* Avatar + basics */}
            <div className="flex flex-col items-start">
              <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <span className="text-amber-400 font-black text-3xl">{a.name.split(" ")[1][0]}</span>
              </div>
              <h2 className="font-extrabold text-xl mb-1">{a.name}</h2>
              <p className="text-amber-400 text-sm font-semibold mb-3">{a.title}</p>
              <p className="text-slate-500 text-xs mb-1">{a.bar}</p>
              <p className="text-slate-500 text-xs mt-3 font-semibold text-green-400/80">{a.cases}</p>
            </div>

            {/* Bio + education */}
            <div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">{a.bio}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Eğitim</p>
              <p className="text-slate-400 text-sm">{a.edu}</p>
              <p className="text-slate-500 text-xs mt-1">{a.extra}</p>
            </div>

            {/* Focus areas */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Uzmanlık Alanları</p>
              <div className="flex flex-wrap gap-2">
                {a.focus.map((f) => (
                  <span key={f} className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-300 text-xs font-semibold">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-14 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-4">Ekibimizle çalışmak ister misiniz?</h2>
        <Link href="/work/eksen-law/iletisim" className="inline-flex px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm transition-colors">
          Randevu Al
        </Link>
      </section>
    </EksenLayout>
  );
}
