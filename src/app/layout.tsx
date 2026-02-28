import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SAVA — Ürün Odaklı Dijital Çözümler",
  description:
    "SAVA; CRM yazılımı ve dijital hizmetleriyle işletmenizi büyütmenize yardımcı olur. Landing page, kurumsal web sitesi, e-ticaret ve marka kimliği.",
  metadataBase: new URL("https://sava.com.tr"),
  openGraph: {
    title: "SAVA — Ürün Odaklı Dijital Çözümler",
    description: "CRM yazılımı ve dijital hizmetleriyle işletmenizi büyütün.",
    siteName: "SAVA",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
