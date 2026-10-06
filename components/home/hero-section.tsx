import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">An independent Brussels platform</p>
          <h1 id="hero-title">
            Clarity and Confidence in the Brussels Real Estate Market.
          </h1>
          <p className="hero-description">
            Independent insights, practical relocation strategies and
            property-market information to help you navigate Brussels with
            confidence.
          </p>
          <div className="hero-actions">
            <Link
              className="button-primary"
              href="/relocation/moving-to-brussels"
            >
              Explore Brussels Relocation Guide{" "}
              <span className="button-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link className="button-light" href="#property-insights">
              Explore Property Insights
            </Link>
          </div>
        </div>
        <figure
          className="brussels-visual"
          role="img"
          aria-label="Illustration of Brussels rooftops and the Atomium"
        >
          <svg
            className="brussels-illustration"
            viewBox="0 0 620 540"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="brussels-sky" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#e7e9dd" />
                <stop offset="1" stopColor="#cbd8cc" />
              </linearGradient>
              <linearGradient id="brussels-ground" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#637c6b" />
                <stop offset="1" stopColor="#304d43" />
              </linearGradient>
            </defs>
            <rect width="620" height="540" fill="url(#brussels-sky)" />
            <circle cx="485" cy="106" r="60" fill="#d9bd8a" opacity=".56" />
            <circle cx="485" cy="106" r="86" fill="none" stroke="#fff" opacity=".45" />
            <path d="M0 335 68 283l66 46 63-76 79 79 74-59 71 56 78-86 121 81v156H0Z" fill="#a7b5a7" opacity=".55" />
            <path d="M0 382 76 323l77 51 76-73 81 75 83-59 84 66 62-76 81 55v178H0Z" fill="#819886" />
            <path d="M0 444h620v96H0Z" fill="url(#brussels-ground)" />
            <g fill="#e6dfcd" stroke="#d0c8b6" strokeWidth="2">
              <path d="M25 361h91v83H25z" />
              <path d="m18 361 52-42 53 42Z" />
              <path d="M118 378h87v66h-87z" />
              <path d="m111 378 50-37 51 37Z" />
              <path d="M392 367h95v77h-95z" />
              <path d="m383 367 57-45 56 45Z" />
              <path d="M490 386h98v58h-98z" />
              <path d="m482 386 55-39 59 39Z" />
            </g>
            <g fill="#64796d">
              <path d="M62 379h12v19H62zm27 0h12v19H89zm-27 34h12v31H62zm27 0h12v31H89z" />
              <path d="M147 392h12v17h-12zm27 0h12v17h-12zm-27 28h12v24h-12zm27 0h12v24h-12z" />
              <path d="M420 385h13v18h-13zm29 0h13v18h-13zm-29 31h13v28h-13zm29 0h13v28h-13z" />
              <path d="M516 399h13v17h-13zm30 0h13v17h-13zm-30 27h13v18h-13zm30 0h13v18h-13z" />
            </g>
            <g fill="none" stroke="#f4f0e4" strokeWidth="8" strokeLinecap="round">
              <path d="m292 185 75-65 72 70-79 68Z" />
              <path d="m292 185 68 5 79 0m-71 68-8-73 7-65" />
            </g>
            <g fill="#d8c69f" stroke="#f4f0e4" strokeWidth="5">
              <circle cx="292" cy="185" r="18" />
              <circle cx="367" cy="120" r="18" />
              <circle cx="439" cy="190" r="18" />
              <circle cx="360" cy="258" r="18" />
              <circle cx="360" cy="190" r="18" />
            </g>
            <path d="M0 470c116-27 211 10 318-3s192-31 302-7" fill="none" stroke="#d7dfd2" strokeWidth="2" opacity=".8" />
          </svg>
          <figcaption className="brussels-visual-caption">
            <span>Brussels, Belgium</span>
            <span aria-hidden="true">50° 50′ N&nbsp; · &nbsp;4° 21′ E</span>
          </figcaption>
          <span className="brussels-visual-index" aria-hidden="true">
            01 / 03
          </span>
        </figure>
      </div>
    </section>
  );
}
