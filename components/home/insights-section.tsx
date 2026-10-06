import { siteContent } from "@/lib/site-content";

export function InsightsSection() {
  return (
    <section className="insights-section" id="insights" aria-labelledby="insights-title">
      <div className="container">
        <div className="insights-top">
          <div>
            <p className="eyebrow">Explore Brussels</p>
            <h2 className="section-heading" id="insights-title">
              Useful perspectives. Room to grow.
            </h2>
          </div>
          <p className="section-intro">
            Begin with relocation, then explore more of the information that
            helps make sense of the city.
          </p>
        </div>
        <div className="insights-grid">
          {siteContent.insights.map((insight) => (
            <article className="insight-card" key={insight.title}>
              <span className="insight-icon" aria-hidden="true">
                {insight.symbol}
              </span>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
            </article>
          ))}
        </div>
        <div className="future-note">
          <p>
            <strong>Looking ahead:</strong> Rising Sun Properties is a future
            part of the platform. For now, The Rising Sun Group shares
            independent information — it is not an estate agency.
          </p>
          <span className="future-label">More to come</span>
        </div>
      </div>
    </section>
  );
}
