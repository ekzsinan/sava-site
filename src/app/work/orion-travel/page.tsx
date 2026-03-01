import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Orion Travel — Demo",
  description: "Orion Travel turizm acentesi demo web sitesi — SAVA Digital Factory tarafından hazırlanmıştır.",
  path: "/work/orion-travel",
});

const tours = [
	{
		dest: "Kapadokya",
		tag: "Yurt İçi",
		duration: "3 Gece / 4 Gün",
		price: "₺12.800",
		priceNote: "kişi başı",
		includes: ["Uçak bileti", "Balon turu", "Otel (3*)", "Rehber"],
		desc: "Peribacaları, yeraltı şehirleri ve sıcak hava balonu deneyimiyle Kapadokya'nın büyüsüne kapılın.",
	},
	{
		dest: "Santorini, Yunanistan",
		tag: "Avrupa",
		duration: "5 Gece / 6 Gün",
		price: "€ 1.150",
		priceNote: "kişi başı",
		includes: ["Uçak bileti", "Ada transferi", "Butik otel (4*)", "Gezi programı"],
		desc: "Beyaz badanalı evler, mavi kubbeli kiliseler ve eşsiz Ege günbatımı. Oia'nın romantik atmosferini yaşayın.",
	},
	{
		dest: "Bali, Endonezya",
		tag: "Uzak Doğu",
		duration: "7 Gece / 8 Gün",
		price: "€ 1.850",
		priceNote: "kişi başı",
		includes: ["Uçak bileti", "Villa konaklaması", "Ubud turu", "Tapınak ziyaretleri"],
		desc: "Pirinç tarlaları, Hindu tapınakları ve tropikal plajlarıyla Bali'nin tinsel atmosferini keşfedin.",
	},
	{
		dest: "Dubai, BAE",
		tag: "Orta Doğu",
		duration: "4 Gece / 5 Gün",
		price: "€ 1.300",
		priceNote: "vize dahil",
		includes: ["Uçak bileti", "Otel (5*)", "Çöl safarisi", "Vize işlemleri"],
		desc: "Burj Khalifa, lüks alışveriş merkezleri ve çöl safarisi ile Dubai'nin görkemli dünyasına adım atın.",
	},
	{
		dest: "Antalya",
		tag: "Yurt İçi",
		duration: "4 Gece / 5 Gün",
		price: "₺9.500",
		priceNote: "all inclusive",
		includes: ["Uçak bileti", "5* otel (all incl.)", "Kemer turu", "Havalimanı transferi"],
		desc: "Türkiye'nin güneş kıyısında 5 yıldızlı konforuyla tam pansiyon tatil. Berrak deniz, antik kentler.",
	},
	{
		dest: "Prag, Çekya",
		tag: "Avrupa",
		duration: "4 Gece / 5 Gün",
		price: "€ 880",
		priceNote: "kişi başı",
		includes: ["Uçak bileti", "Butik otel (4*)", "Şehir turu", "Krumlov günü"],
		desc: "Orta Çağ'dan kalma sokaklarda, kalesi ve tarihi köprüleriyle Avrupa'nın en büyüleyici başkenti.",
	},
];

const stats = [
	{ n: "18+", l: "Yıllık Deneyim" },
	{ n: "12.000+", l: "Mutlu Yolcu" },
	{ n: "60+", l: "Destinasyon" },
	{ n: "4.8 / 5", l: "Google Puanı" },
];

const testimonials = [
	{
		name: "Zeynep Arslan",
		role: "Grafik Tasarımcı, İstanbul",
		text: "Bali turumuz son derece iyi organize edilmişti. Her detay düşünülmüş, rehberimiz muhteşemdi. Orion Travel'ı arkadaşlarıma tereddütsüz öneririm.",
	},
	{
		name: "Mert Kılıç",
		role: "Yazılım Mühendisi, İzmir",
		text: "Dubai paketi vize sürecinden konaklamaya kadar her şeyi kapsıyordu. Çöl safarisi unutulmazlardı listesine girdi. Teşekkürler Orion!",
	},
	{
		name: "Selin & Burak Demir",
		role: "Balayı Çifti",
		text: "Santorini balayı paketimiz hayallerimizin ötesindeydi. Oia'daki butik otel inanılmazdı. Her yıldönümümüzde tekrar gideceğiz.",
	},
];

const services = [
	{ title: "Paket Turlar", desc: "Yurt içi ve yurt dışı kültür, doğa ve tatil turları." },
	{ title: "Balayı Paketleri", desc: "Romantik destinasyonlarda özel balayı düzenlemeleri." },
	{ title: "Grup & Kurumsal", desc: "Şirket gezileri, okul turları ve özel grup organizasyonları." },
	{ title: "Vize Danışmanlığı", desc: "Schengen, ABD, Uzak Doğu ve diğer vize başvuru desteği." },
	{ title: "Kongre & MICE", desc: "Kongre, sempozyum ve incentive organizasyonları için uçtan uca lojistik yönetim." },
	{ title: "Özel Tur Tasarımı", desc: "Bütçenize ve programınıza özel kişiselleştirilmiş rotalar." },
];

export default function OrionTravelPage() {
	return (
		<div className="min-h-screen bg-[#0b1622] text-white">
			{/* Demo badge */}
			<div className="fixed top-20 right-4 z-40">
				<Badge variant="demo" className="shadow-lg">Demo Proje</Badge>
			</div>

			{/* Nav */}
			<header className="sticky top-0 z-30 bg-[#0b1622]/95 backdrop-blur border-b border-cyan-900/40 px-6 py-4">
				<div className="max-w-6xl mx-auto flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-black text-[#0b1622] text-sm select-none">O</div>
						<div>
							<span className="font-extrabold text-lg tracking-tight text-white leading-none block">ORION</span>
							<span className="text-teal-400 text-[10px] font-semibold uppercase tracking-widest leading-none">Travel & Tourism</span>
						</div>
					</div>
					<nav className="hidden md:flex gap-8 text-sm text-slate-400" aria-label="Orion Travel navigasyon">
						{[["Turlar", "#tours"], ["Hizmetler", "#services"], ["Hakkımızda", "#about"], ["İletişim", "#contact"]].map(([l, h]) => (
							<a key={l} href={h} className="hover:text-white transition-colors">{l}</a>
						))}
					</nav>
					<a href="#contact" className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-lg text-sm transition-colors">
						Teklif Al
					</a>
				</div>
			</header>

			{/* Hero */}
			<section className="px-6 pt-24 pb-20 max-w-6xl mx-auto">
				<div className="max-w-3xl">
					<div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-6 border border-teal-500/20 rounded-full px-4 py-1.5 bg-teal-500/5">
						<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
						İstanbul · Yurt İçi & Yurt Dışı Turizm
					</div>
					<h1 className="text-5xl md:text-[64px] font-black leading-[1.08] mb-6 tracking-tight">
						Seyahat bir ayrıcalık<br />
						<span className="text-teal-400">değil, bir hak.</span>
					</h1>
					<p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl">
						18 yıllık deneyim, 12.000&apos;den fazla mutlu yolcu. Kapadokya&apos;dan Bali&apos;ye, Santorini&apos;den Dubai&apos;ye — hayalinizdeki tatili biz planlıyoruz.
					</p>
					<div className="flex gap-4 flex-wrap">
						<a href="#tours" className="px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-xl transition-colors text-sm">
							Turları Keşfet
						</a>
						<a href="#contact" className="px-7 py-3.5 border border-white/10 hover:border-white/30 rounded-xl text-slate-300 font-semibold transition-colors text-sm">
							Teklif Al &rarr;
						</a>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="border-y border-cyan-900/30 py-10 px-6">
				<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
					{stats.map(({ n, l }) => (
						<div key={l} className="py-4">
							<p className="text-4xl font-extrabold text-teal-400 mb-1">{n}</p>
							<p className="text-slate-500 text-sm">{l}</p>
						</div>
					))}
				</div>
			</section>

			{/* Tours */}
			<section id="tours" className="py-24 px-6 max-w-6xl mx-auto">
				<div className="mb-12">
					<p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Popüler Turlar</p>
					<h2 className="text-3xl md:text-4xl font-extrabold">Sizi nereye götürelim?</h2>
					<p className="text-slate-500 text-sm mt-2">Tüm fiyatlar kişi başı, çift kişilik oda baz alınarak hesaplanmıştır.</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{tours.map((t) => (
						<div key={t.dest} className="bg-white/[0.04] border border-white/8 rounded-2xl overflow-hidden hover:border-teal-500/30 hover:bg-white/[0.06] transition-all group flex flex-col">
							<div className="h-36 bg-gradient-to-br from-teal-700/40 to-cyan-900/60 flex items-end px-5 py-4">
								<span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-teal-500/15 border border-teal-500/20 rounded-full px-2.5 py-0.5">
									{t.tag}
								</span>
							</div>
							<div className="p-5 flex flex-col flex-1">
								<div className="flex items-start justify-between mb-2">
									<h3 className="font-bold text-base group-hover:text-teal-400 transition-colors">{t.dest}</h3>
									<div className="text-right ml-3 flex-shrink-0">
										<p className="text-teal-400 font-extrabold text-sm whitespace-nowrap">{t.price}</p>
										<p className="text-slate-600 text-[10px]">{t.priceNote}</p>
									</div>
								</div>
								<p className="text-slate-500 text-xs mb-4 leading-relaxed flex-1">{t.desc}</p>
								<p className="text-slate-600 text-xs mb-1.5 font-semibold uppercase tracking-wider">Dahil</p>
								<ul className="space-y-1 mb-3">
									{t.includes.map((inc) => (
										<li key={inc} className="text-slate-400 text-xs flex items-center gap-2">
											<span className="w-1 h-1 rounded-full bg-teal-500 flex-shrink-0"></span>
											{inc}
										</li>
									))}
								</ul>
								<p className="text-slate-600 text-xs font-medium">{t.duration}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Services */}
			<section id="services" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
				<div className="max-w-6xl mx-auto">
					<div className="mb-12">
						<p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Hizmetlerimiz</p>
						<h2 className="text-3xl md:text-4xl font-extrabold">Seyahatinizin her adımında yanınızdayız</h2>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{services.map((s, i) => (
							<div key={s.title} className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 hover:border-teal-500/25 transition-all">
								<span className="text-teal-500/40 font-black text-2xl block mb-4 select-none leading-none">
									{String(i + 1).padStart(2, "0")}
								</span>
								<h3 className="font-bold text-base mb-2">{s.title}</h3>
								<p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" className="py-24 px-6 max-w-5xl mx-auto">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div>
						<p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">Hakkımızda</p>
						<h2 className="text-3xl font-extrabold mb-6">2007&apos;den bu yana güvenilir seyahat ortağınız</h2>
						<p className="text-slate-400 leading-relaxed mb-4">
							Orion Travel, İstanbul merkezli TURSAB belgeli bir turizm acentesidir. Kuruluşundan bu yana binlerce kişinin hayallerindeki tatile kavuşmasına aracılık ettik.
						</p>
						<p className="text-slate-400 leading-relaxed mb-8">
							Deneyimli ekibimiz paket turdan özel balayı organizasyonuna, vize danışmanlığından kurumsal gezi yönetimine kadar geniş bir yelpazede hizmet sunmaktadır.
						</p>
						<div className="flex flex-col gap-3">
							{["TURSAB Üyesi · Belge No: A-4582", "IATA Akreditasyonu", "24/7 Yolcu Destek Hattı"].map((item) => (
								<div key={item} className="flex items-center gap-3 text-sm text-slate-300">
									<span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0"></span>
									{item}
								</div>
							))}
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{[
							{ n: "18+", l: "Yıllık Tecrübe" },
							{ n: "60+", l: "Aktif Destinasyon" },
							{ n: "98%", l: "Müşteri Memnuniyeti" },
							{ n: "350+", l: "Yıllık Tur" },
						].map(({ n, l }) => (
							<div key={l} className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 text-center">
								<p className="text-3xl font-extrabold text-teal-400 mb-1">{n}</p>
								<p className="text-slate-500 text-xs">{l}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
				<div className="max-w-6xl mx-auto">
					<div className="mb-12">
						<p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Yolcu Yorumları</p>
						<h2 className="text-3xl font-extrabold">Yolcularımız ne diyor?</h2>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map((t) => (
							<div key={t.name} className="bg-white/[0.04] border border-white/8 rounded-2xl p-7 flex flex-col">
								<p className="text-teal-400 text-sm mb-4 font-bold tracking-widest">★ ★ ★ ★ ★</p>
								<p className="text-slate-300 leading-relaxed text-sm italic flex-1 mb-6">
									&ldquo;{t.text}&rdquo;
								</p>
								<div className="pt-4 border-t border-white/5">
									<p className="font-bold text-sm">{t.name}</p>
									<p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
				<p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">İletişim</p>
				<h2 className="text-3xl font-extrabold mb-4">Tatil planınızı birlikte yapalım</h2>
				<p className="text-slate-400 mb-8 max-w-md mx-auto">
					Ücretsiz danışmanlık için arayın veya e-posta gönderin. Bütçenize ve programınıza özel teklif hazırlayalım.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
					<a href="tel:+902122224466" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-[#0b1622] font-bold rounded-xl transition-colors">
						0212 222 44 66
					</a>
					<a href="mailto:info@oriontravel.com.tr" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/30 rounded-xl text-slate-300 font-semibold transition-colors">
						info@oriontravel.com.tr
					</a>
				</div>
				<p className="text-slate-600 text-xs">Abide-i Hürriyet Cad. No:78 Kat:3 · Şişli, İstanbul</p>
				<p className="text-slate-600 text-xs mt-1">Pazartesi – Cumartesi · 09:00 – 19:00</p>
			</section>

			<footer className="border-t border-cyan-900/30 py-8 px-6 text-center text-slate-700 text-xs">
				<p className="mb-2">© 2025 Orion Travel Turizm A.Ş. · TURSAB Belgeli · İstanbul</p>
				<p className="mb-3 text-slate-800">Bu sayfa SAVA Digital Factory tarafından demo amaçlı hazırlanmıştır.</p>
				<Link href="/work" className="text-teal-500 hover:text-teal-400 transition-colors">
					← Tüm Projelere Dön
				</Link>
			</footer>
		</div>
	);
}
