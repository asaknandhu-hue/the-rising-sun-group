export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">Contact information</p>
          <h2 className="section-heading" id="contact-title">
            Building a clearer picture of Brussels, together.
          </h2>
          <p className="section-intro">
            The Rising Sun Group is at the beginning of its journey. Check back
            as the platform develops and new information becomes available.
          </p>
        </div>
        <aside className="contact-status" aria-label="Contact information">
          <span>Contact details</span>
          <p>
            Contact information will be shared here when it is available. This
            platform does not currently offer a contact or enquiry form.
          </p>
        </aside>
      </div>
    </section>
  );
}
