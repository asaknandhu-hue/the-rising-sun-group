import Image from "next/image";
import { getPartnerCategory, type PartnerListing } from "@/lib/partners";

type PartnerCardProps = {
  partner: PartnerListing;
};

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <article className="partner-card">
      <div className="partner-card-heading">
        {partner.logo ? (
          <Image
            className="partner-card-logo"
            src={partner.logo.src}
            alt={partner.logo.alt}
            width={64}
            height={64}
          />
        ) : (
          <span className="partner-card-mark" aria-hidden="true">
            {partner.companyName.slice(0, 1)}
          </span>
        )}
        <div>
          <p className="partner-card-category">
            {getPartnerCategory(partner.category)?.name}
          </p>
          <h3>{partner.companyName}</h3>
        </div>
      </div>

      <div className="partner-card-labels" aria-label="Listing status">
        <span className="partner-status">Directory listing</span>
        {partner.sponsorshipStatus === "sponsored" && (
          <span className="partner-status partner-status-sponsored">
            Sponsored listing
          </span>
        )}
        {partner.recommendationStatus === "editorial-recommendation" && (
          <span className="partner-status partner-status-recommended">
            Recommended resource
          </span>
        )}
        {partner.featured && (
          <span className="partner-status partner-status-featured">
            Featured
          </span>
        )}
      </div>

      {partner.isIllustrativePlaceholder && (
        <p className="partner-placeholder-flag">
          Illustrative placeholder — not a real business
        </p>
      )}
      <p className="partner-card-description">{partner.description}</p>

      <dl className="partner-card-details">
        <div>
          <dt>Location</dt>
          <dd>{partner.location ?? "Not provided"}</dd>
        </div>
        {partner.contact && (
          <div>
            <dt>Contact</dt>
            <dd>{partner.contact}</dd>
          </div>
        )}
      </dl>

      {partner.website && (
        <a
          className="partner-card-link"
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${partner.companyName}'s website (opens in a new tab)`}
        >
          Visit website <span aria-hidden="true">↗</span>
        </a>
      )}
      {partner.recommendationStatus === "editorial-recommendation" && (
        <p className="partner-recommendation-note">
          Editorial recommendation only; not an official endorsement.
        </p>
      )}
    </article>
  );
}
