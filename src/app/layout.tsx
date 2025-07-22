import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binit Shrestha - Senior Software Engineer | Security Expert | Brooklyn Marathon Runner",
  description: "Binit Shrestha: Senior Security Software Engineer at HubSpot, Tufts MS Computer Science graduate, marathon runner (3:26:20 PR), and executive producer. Brooklyn-based creator building secure, scalable systems.",
  keywords: [
    "Binit Shrestha", 
    "Senior Software Engineer", 
    "Security Engineer", 
    "HubSpot Engineer",
    "Brooklyn Software Engineer",
    "Tufts Computer Science",
    "Marathon Runner NYC",
    "Executive Producer",
    "Brooklyn NYC Developer",
    "Software Security Expert",
    "Java Python Engineer",
    "Marine Corps Marathon",
    "Brooklyn Half Marathon"
  ],
  authors: [{ name: "Binit Shrestha", url: "https://binshr.me" }],
  creator: "Binit Shrestha",
  publisher: "Binit Shrestha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://binshr.me"),
  alternates: {
    canonical: "https://binshr.me",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://binshr.me",
    title: "Binit Shrestha - Senior Software Engineer | Security Expert | Brooklyn Marathon Runner",
    description: "Brooklyn-based Senior Security Software Engineer at HubSpot. Marathon runner (3:26:20 PR) and creative executive producer. Building secure, scalable systems.",
    siteName: "Binit Shrestha",
    images: [
      {
        url: "https://binshr.me/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Binit Shrestha - Software Engineer and Marathon Runner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binit Shrestha - Senior Software Engineer | Brooklyn Marathon Runner",
    description: "Brooklyn-based Senior Security Software Engineer at HubSpot. Marathon runner (3:26:20 PR) and creative executive producer.",
    images: ["https://binshr.me/images/hero-bg.jpg"],
  },
  verification: {
    google: "google-site-verification", // Add when available
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "Brooklyn, New York",
    "geo.position": "40.6782;-73.9442",
    "ICBM": "40.6782, -73.9442",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://binshr.me/#person",
      name: "Binit Shrestha",
      alternateName: ["binshr", "Binit R. Shrestha"],
      description: "Senior Security Software Engineer at HubSpot, marathon runner, and executive producer based in Brooklyn, NYC",
      url: "https://binshr.me",
      image: "https://binshr.me/images/hero-bg.jpg",
      sameAs: [
        "https://www.linkedin.com/in/binitrshrestha",
        "https://www.imdb.com/name/nm15282353/",
        "https://www.strava.com/athletes/64573648",
        "https://www.instagram.com/binitshrestharealdeal/"
      ],
      jobTitle: "Senior Software Engineer I, Infrastructure Security",
      worksFor: {
        "@type": "Organization",
        name: "HubSpot",
        url: "https://www.hubspot.com"
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Tufts University",
        url: "https://www.tufts.edu"
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        addressCountry: "US"
      },
      knowsAbout: [
        "Software Engineering",
        "Cybersecurity", 
        "Java Programming",
        "Python Programming",
        "Infrastructure Security",
        "Marathon Running",
        "Film Production"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://binshr.me/#website",
      url: "https://binshr.me",
      name: "Binit Shrestha",
      description: "Personal portfolio of Binit Shrestha - Senior Security Software Engineer, Marathon Runner, and Executive Producer",
      publisher: {
        "@id": "https://binshr.me/#person"
      },
      inLanguage: "en-US"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://binshr.me/#service",
      name: "Software Engineering Services",
      provider: {
        "@id": "https://binshr.me/#person"
      },
      serviceType: "Software Development",
      areaServed: {
        "@type": "Place",
        name: "New York City"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <style>{`
          * { -webkit-overflow-scrolling: touch; }
          html, body { 
            position: relative; 
            overflow-x: hidden; 
            -webkit-text-size-adjust: 100%;
          }
          .mobile-nav-sticky {
            position: -webkit-sticky !important;
            position: sticky !important;
            position: fixed !important;
            top: 0px !important;
            left: 0px !important;
            right: 0px !important;
            width: 100vw !important;
            z-index: 2147483647 !important;
            transform: translate3d(0,0,0) !important;
            -webkit-transform: translate3d(0,0,0) !important;
          }
          @supports (-webkit-touch-callout: none) {
            .mobile-nav-sticky {
              position: -webkit-sticky !important;
              position: sticky !important;
              top: 0px !important;
            }
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
