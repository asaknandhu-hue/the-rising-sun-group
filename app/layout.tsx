import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GlobalStructuredData } from "@/components/structured-data";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Brussels information`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: `${siteName} | Brussels information`,
    description: siteDescription,
    siteName,
    type: "website",
    locale: "en_BE",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Brussels information`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
          <GlobalStructuredData />
        </div>
      </body>
    </html>
  );
}
