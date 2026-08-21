import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SiteLoader } from "@/components/site-loader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aynera.com"),
  title: {
    default: "Aynera · The Era of Togetherness",
    template: "%s",
  },
  description:
    "Meet people outside your usual circle through relevant introductions, shared Taste and real opportunities to meet.",
  openGraph: {
    type: "website",
    siteName: "Aynera",
    title: "Aynera · The Era of Togetherness",
    description:
      "Meet people outside your usual circle through relevant introductions, shared Taste and real opportunities to meet.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="has-intro">
        <SiteLoader />
        <div className="aurora-field" aria-hidden />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
