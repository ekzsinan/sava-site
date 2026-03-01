import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOURS, getTour } from "../../_data/tours";
import TourDetailClient from "./TourDetailClient";
import OrionLayout from "../../_components/OrionLayout";
export async function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  return {
    title: `${tour.name} | Orion Travel`,
    description: tour.summary,
    metadataBase: new URL("https://sava.company"),
    openGraph: {
      title: tour.name,
      description: tour.summary,
      url: `https://sava.company/work/orion-travel/turlar/${slug}`,
      locale: "tr_TR",
      type: "website",
    },
    alternates: { canonical: `https://sava.company/work/orion-travel/turlar/${slug}` },
  };
}
export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tour.name,
    description: tour.description,
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: tour.currency,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Orion Travel Turizm A.S." },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      reviewCount: tour.reviews,
    },
  };
  return (
    <OrionLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TourDetailClient tour={tour} />
    </OrionLayout>
  );
}
