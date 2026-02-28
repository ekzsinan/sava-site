import Link from "next/link";
import { SITE_EMAIL, SITE_LOCATION, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-extrabold text-white block mb-3">SAVA</span>
            <p className="text-sm leading-relaxed">
              Ürün odaklı dijital çözümler. CRM ana ürünümüz. Dijital hizmetler hızlı kurulum
              ve fon yaratma için.
            </p>
            <p className="text-xs mt-4 text-neutral-500">{SITE_LOCATION}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Sayfalar
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
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

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              İletişim
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-400 rounded"
                >
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905xxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="WhatsApp ile iletişim"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-600">
          <span>© {new Date().getFullYear()} SAVA. Tüm hakları saklıdır.</span>
          <span>Fatura kesilir · SAVA Digital Factory</span>
        </div>
      </div>
    </footer>
  );
}
