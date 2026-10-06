import Link from "next/link";

type LeadCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
};

function LeadCta({ eyebrow, title, description, linkLabel }: LeadCtaProps) {
  return (
    <aside className="lead-cta" aria-label={title}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link className="button-primary" href="/contact#lead-capture">
        {linkLabel} <span aria-hidden="true">↗</span>
      </Link>
    </aside>
  );
}

export function ExpatLeadCta() {
  return (
    <LeadCta
      eyebrow="For people moving to Brussels"
      title="Share where you are in your move."
      description="Use the enquiry form to describe what you are exploring. The current prototype will validate and discard your submission."
      linkLabel="Share your relocation enquiry"
    />
  );
}

export function RenterLeadCta() {
  return (
    <LeadCta
      eyebrow="For renters"
      title="Tell us what you’re looking for."
      description="You can share your rental enquiry and neighborhood of interest. This prototype cannot save it or arrange follow-up."
      linkLabel="Share your rental enquiry"
    />
  );
}

export function PropertyOwnerLeadCta() {
  return (
    <LeadCta
      eyebrow="For property owners"
      title="Tell us what you’re considering."
      description="Share the property question you are exploring. The form validates and discards submissions; no follow-up is available yet."
      linkLabel="Share an owner enquiry"
    />
  );
}

export function BusinessPartnerLeadCta() {
  return (
    <LeadCta
      eyebrow="For businesses and service providers"
      title="Start a partner enquiry."
      description="Use the form to describe your enquiry. This prototype does not save submissions or provide a follow-up channel."
      linkLabel="Share a partner enquiry"
    />
  );
}
