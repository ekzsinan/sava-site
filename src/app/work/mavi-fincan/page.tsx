import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Mavi Fincan — Demo",
  description: "Mavi Fincan Kafe demo web sitesi — SAVA Digital Factory tarafından hazırlanmıştır.",
  path: "/work/mavi-fincan",
});

const menuCategories = [
	{
		cat: "Kahveler",
		items: [
			{ name: "Filtre Kahve", price: "₺85", desc: "Günlük değişen single origin, V60 veya chemex demleme" },
			{ name: "Flat White", price: "₺95", desc: "Double ristretto, az miktarda kadifemsi süt buharı" },
			{ name: "Cortado", price: "₺90", desc: "Eşit oranda espresso ve sütlü köpük" },
			{ name: "Cold Brew", price: "₺100", desc: "18 saat soğuk demleme, doğal tatlılık" },
		],
	},
	{
		cat: "Kahvaltı & Brunch",
		items: [
			{ name: "Avokadolu Toast", price: "₺185", desc: "Ekşi maya ekmek, poşe yumurta, cherry domates, feta" },
			{ name: "Granola Bowl", price: "₺145", desc: "Ev yapımı granola, labne, mevsim meyveleri, akçaağaç şurubu" },
			{ name: "Eggs Benedict", price: "₺195", desc: "İngiliz muffin, jambon, poşe yumurta, hollandaise" },
			{ name: "Pancake Stack", price: "₺165", desc: "Üç katlı, taze çilek, ev yapımı krema, maple syrup" },
		],
	},
	{
		cat: "Pastane",
		items: [
			{ name: "Baked Cheesecake", price: "₺135", desc: "Günlük taze, orman meyveli sos" },
			{ name: "Brownie", price: "₺110", desc: "Çift çikolatalı, cevizli, vanilya dondurması ile" },
			{ name: "Croissant", price: "₺85", desc: "Tereyağlı, her sabah taze pişen, sade veya badem ezmeli" },
			{ name: "Carrot Cake", price: "₺125", desc: "Cream cheese frosting, ceviz, tarçın" },
		],
	},
];

const testimonials = [
	{
		name: "Başak T.",
		platform: "Google",
		stars: 5,
		text: "İstanbul'da gittiğim en iyi brunch mekanı. Avokadolu tostu muhteşem, sunumu da harika. Personel son derece ilgili ve güler yüzlü. Hafta sonları kalabalık olduğu için rezervasyon yaptırmanızı öneririm.",
	},
	{
		name: "Erdem K.",
		platform: "Google",
		stars: 5,
		text: "Filtre kahveleri gerçekten üst seviye. Single origin seçkileri her hafta değişiyor ve barista her biri hakkında detaylı bilgi veriyor. Mavi Fincan Kadıköy'ün en iyi spesiyalite kahve noktası.",
	},
	{
		name: "Yıldız Ö.",
		platform: "Google",
		stars: 5,
		text: "Çalışmak için ideal atmosfer. Gürültüden uzak, hızlı wifi, güzel müzik. Baked cheesecake'leri efsanevi. Artık her Cumartesi kahvaltım burada oluyor.",
	},
];

export default function MaviFincanPage() {
	return (
		<div className="min-h-screen bg-[#1a1208] text-white">
			{/* Demo badge */}
			<div className="fixed top-20 right-4 z-40">
				<Badge variant="demo" className="shadow-lg">Demo Proje</Badge>
			</div>

			{/* Nav */}
			<header className="sticky top-0 z-30 bg-[#1a1208]/95 backdrop-blur border-b border-amber-900/30 px-6 py-4">
				<div className="max-w-6xl mx-auto flex items-center justify-between">
					<div>
						<span className="font-black text-xl tracking-tight text-amber-100">Mavi Fincan</span>
						<span className="text-amber-600 text-xs ml-2 font-medium">specialty coffee & brunch</span>
					</div>
					<nav className="hidden md:flex gap-8 text-sm text-amber-400/80" aria-label="Mavi Fincan navigasyon">
						{[["Menü","#menu"],["Hakkımızda","#about"],["Konum","#location"],["Rezervasyon","#rezervasyon"]].map(([l,h])=>(
							<a key={l} href={h} className="hover:text-amber-200 transition-colors">{l}</a>
						))}
					</nav>
					<a href="#rezervasyon" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-[#1a1208] font-bold rounded-lg text-sm transition-colors">
						Rozervasyon
					</a>
				</div>
			</header>

			{/* Hero */}
			<section className="px-6 pt-24 pb-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
				<div>
					<div className="inline-flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-widest mb-6 border border-amber-800/40 rounded-full px-4 py-1.5 bg-amber-900/20">
						Kadıköy, Moda · İstanbul
					</div>
					<h1 className="text-5xl md:text-[62px] font-black leading-[1.08] mb-6 tracking-tight text-amber-50">
						Sabahı iyi<br />
						<span className="text-amber-400">başlatmanın</span><br />
						tek yolu.
					</h1>
					<p className="text-amber-200/50 text-lg leading-relaxed mb-10">
						Spesiyalite kahve, her sabah taze pişen pastane ve ev yapımı brunch tabakları.
						Kadıköy'ün kalbinde, Moda'nın sakin sokakları arasında sizi bekliyoruz.
					</p>
					<div className="flex gap-4 flex-wrap">
						<a href="#menu" className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-[#1a1208] font-bold rounded-xl transition-colors text-sm">
							Menüyü Gör
						</a>
						<a href="#rezervasyon" className="px-7 py-3.5 border border-amber-800/60 hover:border-amber-500/60 rounded-xl text-amber-300 font-semibold transition-colors text-sm">
							Masa Ayırt
						</a>
					</div>
					<div className="mt-10 flex items-center gap-6 text-sm text-amber-700">
						<span>Spesiyalite Kahve</span>
						<span>·</span>
						<span>Günlük Taze Menü</span>
						<span>·</span>
						<span>Vegan Seçenekler</span>
					</div>
				</div>
				<div className="relative">
					<div
						className="h-[420px] rounded-3xl bg-gradient-to-br from-amber-800/60 via-orange-900/40 to-[#1a1208] border border-amber-800/30 flex items-center justify-center overflow-hidden"
						aria-hidden="true"
					>
						<div className="relative z-10 text-center">
							<p className="text-amber-400/40 text-xs uppercase tracking-widest mb-2">Fotoğraf alanı</p>
							<p className="text-amber-600/30 text-xs">Gerçek projede görseller yerleşir</p>
						</div>
					</div>
					<div className="absolute -bottom-4 -left-4 bg-[#1a1208] border border-amber-800/40 rounded-2xl px-5 py-4 shadow-xl">
						<p className="text-amber-400 font-black text-2xl">4.9</p>
						<p className="text-amber-200/50 text-xs">★★★★★ · 340+ Google yorumu</p>
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" className="border-y border-amber-900/20 py-16 px-6">
				<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
					{[
						{ num: "01", title: "Single Origin Kahve", desc: "Etiyopya, Kolombiya ve Guatemala'dan haftalık değişen taze kavrulmuş çekirdekler." },
						{ num: "02", title: "Günlük Taze Mutfak", desc: "Menümüz mevsime ve pazara göre şekillenir. Her tabak günün sabahında hazırlanır." },
						{ num: "03", title: "Huzurlu Atmosfer", desc: "Çalışmaya, buluşmaya ya da sadece nefes almaya elverişli rahat ve sessiz bir ortam." },
					].map(i=>(
						<div key={i.title} className="px-4">
							<span className="text-amber-600/50 font-black text-3xl block mb-4 select-none">{i.num}</span>
							<h3 className="font-bold text-amber-100 mb-2">{i.title}</h3>
							<p className="text-amber-700/80 text-sm leading-relaxed">{i.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Menu */}
			<section id="menu" className="py-24 px-6 max-w-6xl mx-auto">
				<div className="mb-12">
					<p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">Menü</p>
					<h2 className="text-3xl md:text-4xl font-extrabold text-amber-50">Ne içmek, ne yemek istersiniz?</h2>
					<p className="text-amber-700 text-sm mt-2">Fiyatlar kişi başıdır · Alerjen bilgisi için personelimize danışın</p>
				</div>
				<div className="space-y-14">
					{menuCategories.map(cat=>(
						<div key={cat.cat}>
							<h3 className="text-amber-400 font-extrabold text-lg mb-6 pb-3 border-b border-amber-900/40">{cat.cat}</h3>
							<div className="grid sm:grid-cols-2 gap-4">
								{cat.items.map(item=>(
									<div key={item.name} className="flex items-start justify-between gap-4 bg-amber-900/10 border border-amber-900/20 rounded-xl px-5 py-4 hover:border-amber-700/30 transition-colors">
										<div>
											<h4 className="font-bold text-amber-100 text-sm">{item.name}</h4>
											<p className="text-amber-700/70 text-xs mt-1 leading-relaxed">{item.desc}</p>
										</div>
										<span className="text-amber-400 font-extrabold text-sm whitespace-nowrap">{item.price}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 px-6 border-y border-amber-900/20">
				<div className="max-w-5xl mx-auto">
					<div className="mb-10">
						<p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">Misafir Yorumları</p>
						<h2 className="text-3xl font-extrabold text-amber-50">Google'da ne diyorlar?</h2>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map(t=>(
							<div key={t.name} className="bg-amber-900/10 border border-amber-900/20 rounded-2xl p-7 flex flex-col">
								<div className="flex items-center justify-between mb-4">
									<span className="text-amber-400 text-sm">{"★".repeat(t.stars)}</span>
									<span className="text-amber-800 text-xs">{t.platform}</span>
								</div>
								<p className="text-amber-200/70 text-sm leading-relaxed italic flex-1 mb-5">&ldquo;{t.text}&rdquo;</p>
								<p className="font-bold text-amber-300 text-sm">{t.name}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Location + Hours */}
			<section id="location" className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
				<div>
					<p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">Neredeyiz?</p>
					<h2 className="text-2xl font-extrabold text-amber-50 mb-4">Moda'nın kalbindeyiz</h2>
					<p className="text-amber-700 text-sm mb-6 leading-relaxed">
						Moda Cad. No:47/A, Kadıköy · İstanbul<br/>
						Moda Sahili'ne 3 dakika yürüme mesafesi
					</p>
					<div className="space-y-2 text-sm">
						{[
							["Pazartesi – Cuma", "08:00 – 21:00"],
							["Cumartesi", "09:00 – 22:00"],
							["Pazar", "09:00 – 21:00"],
						].map(([day, hours])=>(
							<div key={day} className="flex justify-between text-amber-700/80 border-b border-amber-900/20 pb-2">
								<span>{day}</span>
								<span className="font-semibold text-amber-400">{hours}</span>
							</div>
						))}
					</div>
				</div>
				<div className="bg-amber-900/10 border border-amber-900/20 rounded-2xl h-52 flex items-center justify-center">
					<p className="text-amber-800/50 text-xs text-center">Harita bileşeni<br/>Google Maps embed</p>
				</div>
			</section>

			{/* Reservation */}
			<section id="rezervasyon" className="py-24 px-6 bg-amber-900/10 border-t border-amber-900/20">
				<div className="max-w-lg mx-auto text-center">
					<p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">Rezervasyon</p>
					<h2 className="text-3xl font-extrabold text-amber-50 mb-4">Masanızı ayırtın</h2>
					<p className="text-amber-700/80 text-sm mb-8">
						Hafta sonları dolup taşıyoruz. Rezervasyonunuzu önceden yapmanızı öneririz.<br/>
						6 kişi ve üzeri grup rezervasyonları için lütfen arayın.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a href="tel:+902163334455" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-amber-500 hover:bg-amber-400 text-[#1a1208] font-bold rounded-xl transition-colors">
							0216 333 44 55
						</a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-amber-800/60 hover:border-amber-500/60 rounded-xl text-amber-300 font-semibold transition-colors">
							Instagram DM
						</a>
					</div>
					<p className="text-amber-800 text-xs mt-5">@mavifincan · moda.kafe@mavifincan.com.tr</p>
				</div>
			</section>

			<footer className="border-t border-amber-900/20 py-8 px-6 text-center text-amber-900 text-xs">
				<p className="mb-1">© 2025 Mavi Fincan · Moda, Kadıköy · İstanbul</p>
				<p className="mb-3">Bu sayfa SAVA Digital Factory tarafından demo amaçlı hazırlanmıştır.</p>
				<Link href="/work" className="text-amber-600 hover:text-amber-400 transition-colors">
					← Tüm Projelere Dön
				</Link>
			</footer>
		</div>
	);
}
