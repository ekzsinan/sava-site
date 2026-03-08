import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { WORK_ITEMS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Projeler",
  description:
    "SAVA Digital Factory demo projeleri: Nomad Home E-Ticaret, Mavi Fincan ve Orion Travel.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <div className="hero-gradient pt-32 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-6">Projeler</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Demo <span className="gradient-text">Projelerimiz</span>
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Üç farklı paketi temsil eden canlı demo sitelerimizi inceleyin. Telefonunuzdan da açabilirsiniz.
            Gerçek müşteri projeleri için iletişime geçin.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {WORK_ITEMS.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group block rounded-3xl overflow-hidden border border-neutral-100 shadow-card hover:-translate-y-2 hover:shadow-glow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label={`${item.title} demo projesini gör`}
            >
              <div
                className={`h-52 bg-gradient-to-br ${item.color} flex items-center justify-center`}
                aria-hidden="true"
              >
                <span className="text-white text-3xl font-black opacity-30 select-none">
                  {item.title}
                </span>
              </div>
              <div className="p-7 bg-white">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Badge variant="neutral">{item.category}</Badge>
                  {"badge" in item && (
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                      item.badge === "COMMERCE" ? "bg-teal-50 text-teal-700 border-teal-200" :
                      item.badge === "BUSINESS" ? "bg-brand-50 text-brand-700 border-brand-200" :
                      "bg-neutral-100 text-neutral-600 border-neutral-200"
                    }`}>{item.badge}</span>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-neutral-500 mb-4">{item.description}</p>
                <span className="text-sm font-semibold text-brand-600">Demo&apos;yu Gör →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-neutral-50" narrow>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4">Sizin projeniz burada olabilir.</h2>
          <p className="text-neutral-500 mb-8">
            Kendi sektörünüze özel, tüm cihazlarda çalışan bir web sitesi için teklif alın.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Teklif Al
          </Link>
        </div>
      </Section>
    </>
  );
}
