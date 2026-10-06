import Link from "next/link";
import { navigationItems } from "@/lib/sections";
import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="footer-brand" href="/">
          <span className="wordmark-mark" aria-hidden="true">
            R
          </span>
          <span>{siteContent.brand}</span>
        </Link>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="footer-note">Independent information for Brussels. Not an estate agency.</p>
      </div>
    </footer>
  );
}
