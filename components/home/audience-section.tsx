import { siteContent } from "@/lib/site-content";
import { SectionHeading } from "@/components/ui";

export function AudienceSection() {
  return (
    <section className="audience-section" id="about" aria-labelledby="audience-title">
      <div className="container">
        <div className="audience-heading-row">
          <SectionHeading
            eyebrow="What we do"
            title="A clearer way to understand Brussels."
            id="audience-title"
          />
          <p className="section-intro">
            The Rising Sun Group helps people understand Brussels housing,
            relocation and property decisions through independent information
            and practical guidance.
          </p>
        </div>
        <div className="audience-grid">
          {siteContent.audiences.map((audience) => (
            <article className="audience-card" key={audience.number}>
              <span className="card-kicker" aria-hidden="true">
                {audience.number}
              </span>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
