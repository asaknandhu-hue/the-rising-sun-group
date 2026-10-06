import Link from "next/link";
import { navigationItems } from "@/lib/sections";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/">
          <span className="wordmark-mark" aria-hidden="true">
            R
          </span>
          <span>
            <span className="wordmark-name">{siteContent.brand}</span>
            <span className="wordmark-location">{siteContent.location}</span>
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link
              className={item.href === "/contact" ? "nav-contact" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
              {item.href === "/contact" && <span aria-hidden="true">↗</span>}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
