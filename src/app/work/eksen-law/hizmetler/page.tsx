import type { Metadata } from "next";
import Link from "next/link";
import EksenLayout from "../_components/EksenLayout";

export const metadata: Metadata = {
  title: "Hizmetler | Eksen Hukuk",
  description: "Eksen Hukuk'un sunduğu hukuki hizmetler: şirketler hukuku, M&A, iş hukuku, gayrimenkul, aile hukuku ve uluslararası tahkim.",
  alternates: { canonical: "https://sava.company/work/eksen-law/hizmetler" },
};

const services = [
  {
    abbr: "ŞT",
    title: "Şirketler & Ticaret Hukuku",
    desc: "Şirket kuruluşu, pay devri, genel kurul yönetimi, ticari sözleşme müzakeresi ve şirket yönetişimi alanlarında kapsamlı danışmanlık sunuyoruz.",
    items: ["Şirket kuruluşu ve ana sözleşme hazırlığı", "Pay devri ve hisse senetleri", "Ortaklık anlaşmazlıkları", "Ticari sözleşmeler", "Şirket yönetişimi ve uyum"],
  },
  {
    abbr: "M&A",
    title: "Birleşme & Devralma",
    desc: "Hukuki durum tespitinden kapanışa kadar tüm M&A süreçlerini yönetiyoruz. Hem alıcı hem satıcı tarafı deneyimi.",
    items: ["Hukuki due diligence", "Hisse ve varlık devirleri", "SPA / SHA müzakereleri", "Rekabet hukuku değerlendirmesi", "Kapanış sonrası entegrasyon"],
  },
  {
    abbr: "İH",
    title: "İş & Sosyal Güvenlik Hukuku",
    desc: "İşverenler ve çalışanlar için iş hukuku danışmanlığı. İşe alımdan çıkışa kadar tüm süreçlerde hukuki destek.",
    items: ["İş sözleşmesi hazırlama ve revizyon", "Kıdem ve ihbar tazminatı davaları", "Toplu işten çıkarma süreçleri", "SGK uyuşmazlıkları", "İşyeri disiplin yönetimi"],
  },
  {
    abbr: "GM",
    title: "Gayrimenkul Hukuku",
    desc: "Tapu işlemlerinden inşaat projelerine, kira hukukundan imar uyuşmazlıklarına kadar tüm gayrimenkul meselelerinde danışmanlık.",
    items: ["Tapu tescili ve devir işlemleri", "Kat mülkiyeti ve kat irtifakı", "Kira sözleşmeleri ve tahliye", "İnşaat ve müteahhitlik sözleşmeleri", "İmar hukuku uyuşmazlıkları"],
  },
  {
    abbr: "AM",
    title: "Aile & Miras Hukuku",
    desc: "Anlaşmalı/çekişmeli boşanma, velayet, nafaka, miras planlaması ve vasiyetname hazırlığı konularında hassas ve gizlilik esaslı hizmet.",
    items: ["Anlaşmalı boşanma protokolü", "Çekişmeli boşanma davaları", "Velayet ve nafaka", "Miras paylaşımı uyuşmazlıkları", "Vasiyetname ve miras planlaması"],
  },
  {
    abbr: "UT",
    title: "Uluslararası Tahkim",
    desc: "ICC, ISTAC ve UNCITRAL kuralları çerçevesinde uluslararası ticari tahkim, yatırım uyuşmazlıkları ve yabancı mahkeme kararlarının tenfizi.",
    items: ["ICC ve ISTAC tahkim davası yönetimi", "UNCITRAL kural kapsamı", "Yatırım uyuşmazlıkları", "Yabancı mahkeme kararı tenfizi", "Tahkim anlaşması hazırlığı"],
  },
];

export default function HizmetlerPage() {
  return (
    <EksenLayout>
      {/* Hero */}
      <section className="px-6 pt-20 pb-14 max-w-5xl mx-auto">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Hizmetlerimiz</p>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
          Hukuki ihtiyaçlarınız için<br /><span className="text-amber-400">kapsamlı çözümler.</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
          6 temel hukuk alanında uzmanlaşmış ekibimizle şirketinizin ve kişisel hukuki gereksinimlerinizin tamamına yanıt veriyoruz.
        </p>
      </section>

      {/* Service grid */}
      <section className="py-4 px-6 pb-20 max-w-6xl mx-auto">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div key={s.abbr} className={`grid md:grid-cols-2 gap-8 items-start rounded-3xl p-8 border border-white/8 ${i % 2 === 0 ? "bg-white/[0.03]" : "bg-white/[0.05]"}`}>
              <div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-black text-sm mb-4">{s.abbr}</span>
                <h2 className="text-xl font-extrabold mb-3">{s.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Kapsam</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-amber-500/5 border-y border-amber-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-4">İhtiyacınız olan hizmet burada var mı?</h2>
          <p className="text-slate-400 mb-6">Ücretsiz ilk danışma için hemen iletişime geçin.</p>
          <Link href="/work/eksen-law/iletisim" className="inline-flex px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm transition-colors">
            Ücretsiz Danışma Al
          </Link>
        </div>
      </section>
    </EksenLayout>
  );
}
