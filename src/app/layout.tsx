import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SAVA Digital Factory — Profesyonel Web Sitesi & Dijital Kimlik",
  description:
    "SAVA Digital Factory ile işletmeniz için profesyonel web sitesi, logo ve dijital kimlik. Landing page, kurumsal site, e-ticaret. Hızlı teslim, fatura garantisi.",
  metadataBase: new URL("https://sava.company"),
  openGraph: {
    title: "SAVA Digital Factory — Profesyonel Web Sitesi & Dijital Kimlik",
    description: "Modern işletmeler için profesyonel web sitesi ve dijital kimlik. Hızlı teslim, fatura kesilir.",
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
