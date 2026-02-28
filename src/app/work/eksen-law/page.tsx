import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Eksen Hukuk — Demo",
  description: "Eksen Hukuk Bürosu demo web sitesi — SAVA Digital Factory tarafından hazırlanmıştır.",
  path: "/work/eksen-law",
});

const attorneys = [
	{
		name: "Av. Mehmet Eksen",
		title: "Kurucu Ortak",
		bar: "İstanbul Barosu · Sicil No: 42817",
		focus: "Ticaret Hukuku · Şirket Birleşmeleri",
		edu: "İstanbul Üniversitesi Hukuk Fakültesi",
	},
	{
		name: "Av. Deniz Karaer",
		title: "Ortak Avukat",
		bar: "İstanbul Barosu · Sicil No: 51234",
		focus: "İş Hukuku · Uluslararası Tahkim",
		edu: "Galatasaray Üniversitesi Hukuk Fakültesi",
	},
	{
		name: "Av. Selin Arslan",
		title: "Kıdemli Avukat",
		bar: "İstanbul Barosu · Sicil No: 63905",
		focus: "Gayrimenkul · Aile Hukuku",
		edu: "Ankara Üniversitesi Hukuk Fakültesi",
	},
];

const practiceAreas = [
	{
		icon: "🏢",
		title: "Şirketler & Ticaret Hukuku",
		desc: "Şirket kuruluşu, hisse devri, ortaklık anlaşmazlıkları, ticari sözleşmeler ve şirket yönetişimi konularında kapsamlı hukuki danışmanlık.",
	},
	{
		icon: "⚖️",
		title: "Birleşme & Devralma (M&A)",
		desc: "Hukuki durum tespiti (due diligence), hisse ve varlık devirleri, SPA müzakereleri ve kapanış süreçlerinin yönetimi.",
	},
	{
		icon: "👷",
		title: "İş & Sosyal Güvenlik Hukuku",
		desc: "İş sözleşmeleri, kıdem-ihbar tazminatı davaları, toplu işten çıkarma süreçleri ve SGK uyuşmazlıkları.",
	},
	{
		icon: "🏘️",
		title: "Gayrimenkul Hukuku",
		desc: "Tapu tescili, kat mülkiyeti, kira hukuku, inşaat sözleşmeleri ve gayrimenkul geliştirme projelerinde hukuki danışmanlık.",
	},
	{
		icon: "👨‍👩‍👧",
		title: "Aile & Miras Hukuku",
		desc: "Anlaşmalı/çekişmeli boşanma, velayet ve nafaka davaları, miras planlaması ve vasiyetname düzenlenmesi.",
	},
	{
		icon: "🌐",
		title: "Uluslararası Tahkim",
		desc: "ICC, ISTAC ve UNCITRAL kuralları kapsamında uluslararası ticari tahkim, yatırım uyuşmazlıkları ve yabancı mahkeme kararlarının tanınması.",
	},
];

const testimonials = [
	{
		name: "Kerem Yıldız",
		role: "CEO, Yıldız Holding Yan Kuruluşu",
		text: "Şirket satın alma sürecinde Eksen Hukuk'un due diligence ekibi son derece titiz ve deneyimliydi. Karmaşık yapıyı hızla kavrayıp riskleri net biçimde ortaya koydular. Güvenle çalışabileceğiniz bir büro.",
	},
	{
		name: "Neslihan Demir",
		role: "İK Direktörü, Lojistik Firması",
		text: "İş hukuku davalarımızda her seferinde çözüm odaklı yaklaştılar. İşveren haklarımızı korurken çalışanlarla da uzlaşı sağlamayı başardılar. Artık her şirket hukuku meselemizde ilk aradığımız büro.",
	},
	{
		name: "Taner Koç",
		role: "Girişimci & Yatırımcı",
		text: "Start-up'ımın hukuki altyapısını kurarkern kuruluş, term sheet müzakeresi ve yatırımcı anlaşmaları süreçlerini başarıyla yönettiler. Genç şirketleri iyi anlayan bir ekip.",
	},
];

export default function EksenLawPage() {
	return (
		<div className="min-h-screen bg-[#0e1117] text-white">
			{/* Demo badge */}
			<div className="fixed top-20 right-4 z-40">
				<Badge variant="demo" className="shadow-lg">
					Demo Proje
				</Badge>
			</div>

			{/* Nav */}
			<header className="sticky top-0 z-30 bg-[#0e1117]/90 backdrop-blur border-b border-white/5 px-6 py-4">
				<div className="max-w-6xl mx-auto flex items-center justify-between">
					<div className="flex items-center gap-3">
						<span className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center text-black font-black text-xs">
							E
						</span>
						<span className="font-extrabold text-lg tracking-tight">
							EKSEN HUKUK
						</span>
					</div>
					<nav
						className="hidden md:flex gap-8 text-sm text-slate-400"
						aria-label="Eksen Hukuk navigasyon"
					>
						{[
							["Uzmanlık Alanları", "#practice"],
							["Avukatlarımız", "#team"],
							["Referanslar", "#testimonials"],
							["İletişim", "#contact"],
						].map(([l, h]) => (
							<a
								key={l}
								href={h}
								className="hover:text-white transition-colors"
							>
								{l}
							</a>
						))}
					</nav>
					<a
						href="#contact"
						className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-sm transition-colors"
					>
						Randevu Al
					</a>
				</div>
			</header>

			{/* Hero */}
			<section className="px-6 pt-24 pb-20 max-w-6xl mx-auto">
				<div className="max-w-3xl">
					<div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6 border border-amber-500/20 rounded-full px-4 py-1.5 bg-amber-500/5">
						<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
						İstanbul · Hukuki Danışmanlık & Dava Yönetimi
					</div>
					<h1 className="text-5xl md:text-[64px] font-black leading-[1.08] mb-6 tracking-tight">
						Hukukta netlik,
						<br />
						<span className="text-amber-400">sonuçta fark.</span>
					</h1>
					<p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl">
						Eksen Hukuk, 2008'den bu yana şirketler hukuku, iş hukuku ve gayrimenkul
						alanlarında kurumsal müvekkillere ve bireylere çözüm odaklı hukuki hizmet
						sunmaktadır.
					</p>
					<div className="flex gap-4 flex-wrap">
						<a
							href="#contact"
							className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors text-sm"
						>
							Ücretsiz İlk Danışma
						</a>
						<a
							href="#practice"
							className="px-7 py-3.5 border border-white/10 hover:border-white/30 rounded-xl text-slate-300 font-semibold transition-colors text-sm"
						>
							Uzmanlık Alanlarımız &rarr;
						</a>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="border-y border-white/5 py-10 px-6">
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

			{/* Practice Areas */}
			<section id="practice" className="py-24 px-6 max-w-6xl mx-auto">
				<div className="mb-12">
					<p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
						Uzmanlık Alanları
					</p>
					<h2 className="text-3xl md:text-4xl font-extrabold">
						Hangi konularda yardımcı olabiliriz?
					</h2>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{practiceAreas.map((s) => (
						<div
							key={s.title}
							className="bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-amber-500/20 hover:bg-white/[0.05] transition-all group"
						>
							<span
								className="text-2xl block mb-5"
								aria-hidden="true"
							>
								{s.icon}
							</span>
							<h3 className="font-bold text-base mb-3 group-hover:text-amber-400 transition-colors">
								{s.title}
							</h3>
							<p className="text-slate-500 text-sm leading-relaxed">
								{s.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Team */}
			<section
				id="team"
				className="py-24 px-6 bg-white/[0.02] border-y border-white/5"
			>
				<div className="max-w-6xl mx-auto">
					<div className="mb-12">
						<p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
							Ekibimiz
						</p>
						<h2 className="text-3xl md:text-4xl font-extrabold">
							Avukatlarımız
						</h2>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{attorneys.map((a) => (
							<div
								key={a.name}
								className="bg-[#0e1117] border border-white/8 rounded-2xl p-7 hover:border-amber-500/20 transition-all"
							>
								<div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
									<span className="text-amber-400 font-black text-xl">
										{a.name.split(" ")[1][0]}
									</span>
								</div>
								<h3 className="font-extrabold text-lg mb-1">{a.name}</h3>
								<p className="text-amber-400 text-sm font-semibold mb-3">
									{a.title}
								</p>
								<p className="text-slate-500 text-xs mb-1">{a.bar}</p>
								<p className="text-slate-400 text-xs mb-1">
									🎓 {a.edu}
								</p>
								<p className="text-slate-400 text-xs mt-3 pt-3 border-t border-white/5">
									{a.focus}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section id="testimonials" className="py-24 px-6 max-w-6xl mx-auto">
				<div className="mb-12">
					<p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
						Müvekkil Görüşleri
					</p>
					<h2 className="text-3xl md:text-4xl font-extrabold">
						Müvekkillerimiz ne diyor?
					</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((t) => (
						<div
							key={t.name}
							className="bg-white/[0.03] border border-white/8 rounded-2xl p-7 flex flex-col"
						>
							<p className="text-amber-400 text-lg mb-4">★★★★★</p>
							<p className="text-slate-300 leading-relaxed mb-6 text-sm italic flex-1">
								&ldquo;{t.text}&rdquo;
							</p>
							<div className="pt-4 border-t border-white/5">
								<p className="font-bold text-sm">{t.name}</p>
								<p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Approach */}
			<section className="py-16 px-6 bg-amber-500/5 border-y border-amber-500/10">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl font-extrabold mb-4">Neden Eksen Hukuk?</h2>
					<p className="text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
						Büyük bürolar kadar kapsamlı, küçük bürolar kadar kişisel. Müvekkillerimizle
						doğrudan iletişim kurar, her davayı stratejik bir bakış açısıyla ele alırız.
					</p>
					<div className="grid sm:grid-cols-3 gap-4 text-left">
						{[
							{
								t: "Şeffaf Ücretlendirme",
								d: "Başlangıçta net vekâlet ücreti. Sürpriz maliyet yok.",
							},
							{
								t: "Hızlı Geri Dönüş",
								d: "Her müvekkil mesajına 24 saat içinde yanıt garantisi.",
							},
							{
								t: "Uçtan Uca Yönetim",
								d: "Danışmadan kapanışa kadar tek elden süreç takibi.",
							},
						].map((i) => (
							<div
								key={i.t}
								className="bg-[#0e1117] border border-white/8 rounded-xl p-5"
							>
								<p className="font-bold text-sm mb-2 text-amber-400">
									{i.t}
								</p>
								<p className="text-slate-500 text-xs leading-relaxed">
									{i.d}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
				<p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
					İletişim
				</p>
				<h2 className="text-3xl font-extrabold mb-4">Randevu alın</h2>
				<p className="text-slate-400 mb-8 max-w-md mx-auto">
					İlk danışma görüşmesi ücretsizdir. Hukuki konunuzu paylaşın, size en kısa
					sürede dönüş yapalım.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
					<a
						href="tel:+902122345678"
						className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors"
					>
						📞 0212 234 56 78
					</a>
					<a
						href="mailto:info@eksenhukuk.av.tr"
						className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/30 rounded-xl text-slate-300 font-semibold transition-colors"
					>
						✉ info@eksenhukuk.av.tr
					</a>
				</div>
				<p className="text-slate-600 text-xs">
					Levent Mah. Büyükdere Cad. No:201 Kat:12 · Şişli, İstanbul
				</p>
				<p className="text-slate-600 text-xs mt-1">
					Pazartesi – Cuma · 09:00 – 18:00
				</p>
			</section>

			{/* Footer */}
			<footer className="border-t border-white/5 py-8 px-6 text-center text-slate-700 text-xs">
				<p className="mb-2">
					© 2025 Eksen Hukuk Bürosu · Tüm hakları saklıdır · İstanbul Barosu'na
					kayıtlıdır
				</p>
				<p className="mb-3 text-slate-800">
					Bu sayfa SAVA Digital Factory tarafından demo amaçlı hazırlanmıştır.
				</p>
				<Link
					href="/work"
					className="text-amber-500 hover:text-amber-400 transition-colors"
				>
					← Tüm Projelere Dön
				</Link>
			</footer>
		</div>
	);
}
