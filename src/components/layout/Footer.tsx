import Link from "next/link";
import Image from "next/image";
import { SITE_EMAIL, SITE_LOCATION, SITE_WHATSAPP } from "@/lib/constants";

const footerNav: Record<string, { label: string; href: string }[]> = {
  "Ürün": [
    { label: "Genel Bakış", href: "/#product" },
    { label: "Dashboard Düzenleyicisi", href: "/#dashboard" },
    { label: "Workflow Otomasyonu", href: "/#workflow" },
    { label: "Puanlama Motoru", href: "/#scoring" },
    { label: "E-Posta Takip", href: "/#email" },
  ],
  "Entegrasyon": [
    { label: "WebHook", href: "/#webhook" },
    { label: "SMTP Gönderici", href: "/#smtp" },
    { label: "Entegrasyonlar", href: "/#integrations" },
    { label: "Ürün Ekranları", href: "/#screens" },
  ],
  "Şirket": [
    { label: "Hakkımızda", href: "/contact" },
    { label: "İletişim", href: "/contact" },
    { label: "Demo Talep Et", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/sava-logo.png"
              alt="SAVA ERP"
              width={110}
              height={32}
              className="h-8 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              İşletmenizin tüm operasyonlarını tek merkezden yönetmenizi sağlayan
              modern, modüler ERP platformu.
            </p>
            <p className="text-xs mt-4 text-slate-500">{SITE_LOCATION}</p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={SITE_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors text-sm"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-400 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="border-t border-slate-800 pt-8 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
            <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white transition-colors">
              {SITE_EMAIL}
            </a>
            <a
              href={SITE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              +90 534 223 10 36
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
          >
            Demo Talep Et →
          </Link>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} SAVA. Tüm hakları saklıdır.</span>
          <span>SAVA ERP · Enterprise İş Yönetimi Platformu</span>
        </div>
      </div>
    </footer>
  );
}
