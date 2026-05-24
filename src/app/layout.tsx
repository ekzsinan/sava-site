import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SAVA ERP — İş Süreçlerinizi Tek Merkezden Yönetin",
  description:
    "SAVA ERP ile satıştan operasyona, CRM'den workflow otomasyonuna tüm iş süreçlerinizi modern, modüler yapıyla yönetin. Enterprise seviyede, KOBİ'ye uygun.",
  metadataBase: new URL("https://sava.company"),
  openGraph: {
    title: "SAVA ERP — Modern İş Yönetimi Platformu",
    description: "Karmaşık iş süreçlerini sadeleştiren, gerçek zamanlı operasyon görünürlüğü sağlayan enterprise ERP platformu.",
    siteName: "SAVA ERP",
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
