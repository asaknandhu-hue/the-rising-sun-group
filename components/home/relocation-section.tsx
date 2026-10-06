import Link from "next/link";
import { ExpatLeadCta } from "@/components/lead-ctas";

export function RelocationSection() {
  return (
    <section
      className="relocation-section"
      id="relocation"
      aria-labelledby="relocation-title"
    >
      <div className="container relocation-grid">
        <div>
          <p className="eyebrow">Relocating to Brussels</p>
          <h2 className="section-heading" id="relocation-title">
            Make your move with a little more clarity.
          </h2>
          <p className="relocation-copy">
            A practical starting point for expats, EU employees, international
            professionals, students and new residents preparing for life in
            Brussels.
          </p>
          <div className="relocation-action">
            <Link className="button-light" href="/relocation">
              Start Your Brussels Relocation{" "}
              <span className="button-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
          <ExpatLeadCta />
        </div>
        <div>
          <p className="relocation-audience-label">For people finding their feet</p>
          <ul className="relocation-audiences" aria-label="People this guide is for">
            <li>Expats</li>
            <li>EU employees</li>
            <li>International professionals</li>
            <li>Students</li>
            <li>New residents</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
