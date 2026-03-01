import type { Metadata } from "next";
import Link from "next/link";
import EksenLayout from "./_components/EksenLayout";
import GoogleAnalytics from "./_components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Eksen Hukuk | Kurumsal Hukuk Bürosu — İstanbul",
  description:
    "Eksen Hukuk, şirketler hukuku, iş hukuku ve gayrimenkul alanlarında İstanbul'un önde gelen kurumsal hukuk bürolarından biridir. Ücretsiz ilk danışma için randevu alın.",
  metadataBase: new URL("https://sava.company"),
  openGraph: {
    title: "Eksen Hukuk | Kurumsal Hukuk Bürosu — İstanbul",
    description: "17+ yıllık deneyim, 850+ tamamlanan dava. Şirketler, iş ve gayrimenkul hukuku.",
    url: "https://sava.company/work/eksen-law",
    siteName: "Eksen Hukuk",
    locale: "tr_TR",
    type: "website",
  },
  alternates: { canonical: "https://sava.company/work/eksen-law" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Eksen Hukuk Bürosu",
  url: "https://sava.company/work/eksen-law",
  telephone: "+902122345678",
  email: "info@eksenhukuk.av.tr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Büyükdere Cad. No:201 Kat:12",
    addressLocality: "Şişli",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  description: "Şirketler hukuku, iş hukuku ve gayrimenkul alanlarında kurumsal danışmanlık.",
  foundingDate: "2008",
  memberOf: { "@type": "Organization", name: "İstanbul Barosu" },
};

const practiceAreas = [
	{
		abbr: "ŞT",
		title: "Şirketler & Ticaret Hukuku",
		desc: "Şirket kuruluşu, hisse devri, ortaklık anlaşmazlıkları, ticari sözleşmeler ve şirket yönetişimi konularında kapsamlı hukuki danışmanlık.",
	},
	{
		abbr: "M&A",
		title: "Birleşme & Devralma",
		desc: "Hukuki durum tespiti (due diligence), hisse ve varlık devirleri, SPA müzakereleri ve kapanış süreçlerinin yönetimi.",
	},
	{
		abbr: "İH",
		title: "İş & Sosyal Güvenlik",
		desc: "İş sözleşmeleri, kıdem-ihbar tazminatı davaları, toplu işten çıkarma süreçleri ve SGK uyuşmazlıkları.",
	},
	{
		abbr: "GM",
		title: "Gayrimenkul Hukuku",
		desc: "Tapu tescili, kira hukuku, inşaat sözleşmeleri, gayrimenkul geliştirme projelerinde hukuki danışmanlık.",
	},
	{
		abbr: "AM",
		title: "Aile & Miras Hukuku",
		desc: "Anlaşmalı/çekişmeli boşanma, velayet, nafaka, miras planlaması, vasiyetname.",
	},
	{
		abbr: "UT",
		title: "Uluslararası Tahkim",
		desc: "ICC, ISTAC ve UNCITRAL kuralları kapsamında ticari tahkim ve yatırım uyuşmazlıkları.",
	},
];

const processSteps = [
	{
		n: "01",
		title: "İlk Danışma",
		desc: "Ücretsiz 30 dakikalık ön görüşme ile hukuki durumunuzu değerlendiriyoruz.",
	},
	{
		n: "02",
		title: "Strateji Belirleme",
		desc: "Dava veya danışmanlık stratejisini netleştiriyor, vekâletname alıyoruz.",
	},
	{
		n: "03",
		title: "Süreç Yönetimi",
		desc: "Tüm yasal adımları, dava süreçlerini ve müzakereleri takip ediyoruz.",
	},
	{
		n: "04",
		title: "Sonuç & Raporlama",
		desc: "Müvekkilimizi her aşamada bilgilendiriyor, süreç sonunda rapor sunuyoruz.",
	},
];

const testimonials = [
	{
		name: "Kerem Yıldız",
		role: "CEO, Yıldız Holding Yan Kuruluşu",
		text: "Şirket satın alma sürecinde Eksen Hukuk'un due diligence ekibi son derece titiz ve deneyimliydi. Karmaşık yapıyı hızla kavrayıp riskleri net biçimde ortaya koydular.",
	},
	{
		name: "Neslihan Demir",
		role: "İK Direktörü, Lojistik Firması",
		text: "İş hukuku davalarımızda her seferinde çözüm odaklı yaklaştılar. İşveren haklarımızı korurken çalışanlarla da uzlaşı sağlamayı başardılar.",
	},
	{
		name: "Taner Koç",
		role: "Girişimci & Yatırımcı",
		text: "Start-up'ımın hukuki altyapısını kurarken kuruluş, term sheet ve yatırımcı anlaşmaları süreçlerini başarıyla yönettiler.",
	},
];

const faqs = [
	{
		q: "İlk danışma ücretli mi?",
		a: "Hayır. İlk 30 dakikalık ön görüşme ücretsizdir. Bu görüşmede durumunuzu değerlendirip size en uygun hukuki yolu öneririz.",
	},
	{
		q: "Vekâlet ücreti nasıl belirleniyor?",
		a: "Ücretlendirme; davanın niteliğine, tahmini süresine ve iş yoğunluğuna göre belirlenir. Başlangıçta net bir teklifle öngörülemeyen sürprizleri ortadan kaldırıyoruz.",
	},
	{
		q: "Uzaktan danışmanlık sunuyor musunuz?",
		a: "Evet. Video görüşme ve e-posta yoluyla Türkiye genelindeki müvekkillere hizmet veriyoruz.",
	},
	{
		q: "Hangi mahkemelerde dava takip ediyorsunuz?",
		a: "İstanbul başta olmak üzere tüm Türkiye'de ilk derece, istinaf ve temyiz aşamalarında dava takibi yapıyoruz.",
	},
];

export default function EksenHomePage() {
	return (
		<EksenLayout>
			<GoogleAnalytics />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* ── HERO ── */}
			<section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
				<div className="max-w-3xl">
					<div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6 border border-amber-500/20 rounded-full px-4 py-1.5 bg-amber-500/5">
						<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
						İstanbul · Hukuki Danışmanlık & Dava Yönetimi
					</div>
					<h1 className="text-5xl md:text-[64px] font-black leading-[1.08] mb-6 tracking-tight">
						Hukukta netlik,<br />
						<span className="text-amber-400">sonuçta fark.</span>
					</h1>
					<p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl">
						Eksen Hukuk, 2008&apos;den bu yana şirketler hukuku, iş hukuku ve gayrimenkul alanlarında
						kurumsal müvekkillere ve bireylere çözüm odaklı hukuki hizmet sunmaktadır.
					</p>
					<div className="flex gap-4 flex-wrap">
						<Link href="/work/eksen-law/iletisim" className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors text-sm">
							Ücretsiz İlk Danışma
						</Link>
						<Link href="/work/eksen-law/hizmetler" className="px-7 py-3.5 border border-white/10 hover:border-white/30 rounded-xl text-slate-300 font-semibold transition-colors text-sm">
							Uzmanlık Alanlarımız &rarr;
						</Link>
					</div>
				</div>
			</section>

			{/* ── STATS ── */}
			<section className="border-y border-white/8 py-10 px-6">
				<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
					{[
					 ["17+", "Yıl Deneyim"],
					 ["850+", "Tamamlanan Dava"],
					 ["3", "Uzman Avukat"],
					 ["6", "Hukuk Alanı"],
				 ].map(([n,l])=>(
					<div key={l} className="py-4">
						<p className="text-4xl font-extrabold text-amber-400 mb-1">{n}</p>
						<p className="text-slate-500 text-sm">{l}</p>
					</div>
				))}
				</div>
			</section>

			{/* ── PRACTICE AREAS ── */}
			<section id="practice" className="py-20 px-6 max-w-6xl mx-auto">
				<div className="mb-10">
					<p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Uzmanlık Alanları</p>
					<h2 className="text-3xl md:text-4xl font-extrabold">Hangi konularda yardımcı olabiliriz?</h2>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{practiceAreas.map((s) => (
						<div key={s.title} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 hover:bg-white/[0.06] transition-all group">
							<span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-black text-xs mb-4">{s.abbr}</span>
							<h3 className="font-bold text-base mb-2 group-hover:text-amber-400 transition-colors">{s.title}</h3>
							<p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
						</div>
					))}
				</div>
				<div className="mt-8 text-center">
					<Link href="/work/eksen-law/hizmetler" className="inline-flex px-6 py-3 border border-amber-500/30 hover:border-amber-500/60 text-amber-400 font-semibold rounded-xl text-sm transition-colors">
						Tüm Hizmetlerimizi Görün &rarr;
					</Link>
				</div>
			</section>

			{/* ── PROCESS ── */}
			<section className="py-20 px-6 bg-white/[0.02] border-y border-white/8">
				<div className="max-w-5xl mx-auto">
					<div className="mb-10">
						<p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Nasıl Çalışıyoruz?</p>
						<h2 className="text-3xl font-extrabold">Danışmadan sonuca giden yol</h2>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{processSteps.map((s) => (
							<div key={s.n} className="bg-white/[0.04] border border-white/8 rounded-2xl p-6">
								<span className="text-amber-500/40 font-black text-3xl block mb-4 select-none leading-none">{s.n}</span>
								<h3 className="font-bold mb-2">{s.title}</h3>
								<p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── TESTIMONIALS ── */}
			<section className="py-20 px-6 max-w-6xl mx-auto">
				<div className="mb-10">
					<p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Referanslar</p>
					<h2 className="text-3xl font-extrabold">Müvekkillerimiz ne diyor?</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((t) => (
						<div key={t.name} className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex flex-col">
							<p className="text-amber-400 text-sm font-bold tracking-widest mb-4">★ ★ ★ ★ ★</p>
							<p className="text-slate-300 text-sm leading-relaxed italic flex-1 mb-5">&ldquo;{t.text}&rdquo;</p>
							<div className="pt-4 border-t border-white/5">
								<p className="font-bold text-sm">{t.name}</p>
								<p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ── FAQ ── */}
			<section className="py-16 px-6 bg-white/[0.02] border-y border-white/8">
				<div className="max-w-3xl mx-auto">
					<div className="mb-8">
						<p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">SSS</p>
						<h2 className="text-3xl font-extrabold">Sık Sorulan Sorular</h2>
					</div>
					<div className="space-y-3">
						{faqs.map((f) => (
							<div key={f.q} className="bg-white/[0.04] border border-white/8 rounded-2xl p-5">
								<p className="font-semibold text-amber-100 mb-2">{f.q}</p>
								<p className="text-slate-400 text-sm leading-relaxed">{f.a}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA STRIP ── */}
			<section className="py-20 px-6 max-w-3xl mx-auto text-center">
				<h2 className="text-3xl font-extrabold mb-4">Hukuki konunuzu birlikte değerlendirelim.</h2>
				<p className="text-slate-400 mb-8">İlk danışma görüşmesi ücretsizdir. En kısa sürede size dönüş yapalım.</p>
				<Link href="/work/eksen-law/iletisim" className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors">
					Randevu Al
				</Link>
			</section>
		</EksenLayout>
	);
}
