import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/about`;
const TITLE = "About ZHM Real Estate LLC – Dubai Real Estate Agency Since 2010";
const DESCRIPTION =
  "Founded in 2010 by Mohammad Shahbaz Rasheed, ZHM Real Estate is a Business Bay agency helping clients buy, sell and invest across Dubai, Abu Dhabi & Sharjah.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    siteName: SITE_NAME,
    locale: "en_AE",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const ORG_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${PAGE_URL}#founder`;

// Only verifiable facts go here — Google treats structured data that
// contradicts the page (or reality) as spam.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: "ZHM Real Estate",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/nava_logo.png`,
        width: 479,
        height: 521,
      },
      image: [
        `${SITE_URL}/images/about/image-1.jpeg`,
        `${SITE_URL}/images/clients_meeting-and-company-images/zhm-azizi-ramadan-elite-broker-award.jpeg`,
      ],
      description: DESCRIPTION,
      foundingDate: "2010",
      founder: { "@id": FOUNDER_ID },
      address: {
        "@type": "PostalAddress",
        streetAddress: "SR-G01-017 Ontario Tower, Ground Floor, Business Bay",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      telephone: "+971502057334",
      email: "info@zhmrealestatellc.ae",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971585723972",
          contactType: "sales",
          areaServed: "AE",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "City", name: "Sharjah" },
      ],
      hasMap: "https://maps.google.com/?q=ZHM+Real+Estate+LLC,+Ontario+Tower,+Business+Bay,+Dubai",
      award: "Ramadan Elite Broker Award – Azizi Developments",
      sameAs: ["https://www.facebook.com/share/1D2TDYap2G/", "https://www.instagram.com/zhmrealestate/"],
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Mohammad Shahbaz Rasheed",
      jobTitle: "Founder & CEO",
      image: `${SITE_URL}/images/about/image-1.jpeg`,
      worksFor: { "@id": ORG_ID },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": ORG_ID },
      mainEntity: { "@id": ORG_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: `${PAGE_URL}/opengraph-image` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About Us", item: PAGE_URL },
      ],
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
