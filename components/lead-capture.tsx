"use client";

import { useState, type FormEvent } from "react";
import {
  leadInterests,
  validateLeadSubmission,
  type LeadErrors,
  type LeadField,
  type LeadSubmission,
} from "@/lib/leads";

const successMessage = "Thank you. Your request has been received.";

export function LeadCapture() {
  const [errors, setErrors] = useState<LeadErrors>({});
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function fieldAttributes(field: LeadField) {
    const errorId = `${field}-error`;
    return {
      "aria-invalid": errors[field] ? true : undefined,
      "aria-describedby": errors[field] ? errorId : undefined,
    };
  }

  function clearFieldError(field: LeadField) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setFeedback("");
    setIsSuccess(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFeedback("");
    setIsSuccess(false);

    const formData = new FormData(event.currentTarget);
    const submission: LeadSubmission = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      interest: String(formData.get("interest") ?? "") as LeadSubmission["interest"],
      neighborhood: String(formData.get("neighborhood") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
    };
    const validation = validateLeadSubmission(submission);
    if (!validation.success) {
      setErrors(validation.errors);
      setFeedback("Please review the highlighted fields.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
        cache: "no-store",
      });

      if (!response.ok) {
        const result: unknown = await response.json().catch(() => null);
        const serverErrors =
          typeof result === "object" &&
          result !== null &&
          "fields" in result &&
          typeof result.fields === "object" &&
          result.fields !== null
            ? (result.fields as LeadErrors)
            : {};
        setErrors(serverErrors);
        setFeedback("We could not accept this request. Please check the form and try again.");
        return;
      }

      form.reset();
      setFeedback(successMessage);
      setIsSuccess(true);
    } catch {
      setFeedback("We could not reach the form endpoint. Your request was not accepted.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function errorMessage(field: LeadField) {
    return errors[field] ? (
      <span className="lead-form-error" id={`${field}-error`}>
        {errors[field]}
      </span>
    ) : null;
  }

  return (
    <section
      className="lead-capture-section"
      id="lead-capture"
      aria-labelledby="lead-capture-title"
    >
      <div className="container lead-capture-inner">
        <div className="lead-capture-copy">
          <p className="eyebrow">A thoughtful first step</p>
          <h2 className="section-heading" id="lead-capture-title">
            Tell us what you’re exploring.
          </h2>
          <p>
            Share a little context about your Brussels plans or enquiry. This
            prototype validates your submission and then discards it: nothing
            is saved or forwarded, and it cannot deliver follow-up yet.
          </p>
        </div>
        <form
          className="lead-capture-form"
          noValidate
          onSubmit={handleSubmit}
          aria-busy={isSubmitting}
        >
          <div className="lead-form-field">
            <label htmlFor="lead-first-name">First name</label>
            <input
              autoComplete="given-name"
              id="lead-first-name"
              name="firstName"
              maxLength={80}
              required
              {...fieldAttributes("firstName")}
              onChange={() => clearFieldError("firstName")}
            />
            {errorMessage("firstName")}
          </div>
          <div className="lead-form-field">
            <label htmlFor="lead-last-name">Last name</label>
            <input
              autoComplete="family-name"
              id="lead-last-name"
              name="lastName"
              maxLength={80}
              required
              {...fieldAttributes("lastName")}
              onChange={() => clearFieldError("lastName")}
            />
            {errorMessage("lastName")}
          </div>
          <div className="lead-form-field">
            <label htmlFor="lead-email">Email</label>
            <input
              autoComplete="email"
              id="lead-email"
              name="email"
              maxLength={254}
              required
              type="email"
              {...fieldAttributes("email")}
              onChange={() => clearFieldError("email")}
            />
            {errorMessage("email")}
          </div>
          <div className="lead-form-field">
            <label htmlFor="lead-phone">Phone (optional)</label>
            <input
              autoComplete="tel"
              id="lead-phone"
              name="phone"
              maxLength={40}
              type="tel"
              {...fieldAttributes("phone")}
              onChange={() => clearFieldError("phone")}
            />
            {errorMessage("phone")}
          </div>
          <div className="lead-form-field lead-form-field-full">
            <label htmlFor="lead-interest">I am:</label>
            <select
              defaultValue=""
              id="lead-interest"
              name="interest"
              required
              {...fieldAttributes("interest")}
              onChange={() => clearFieldError("interest")}
            >
              <option disabled value="">
                Select an option
              </option>
              {leadInterests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            {errorMessage("interest")}
          </div>
          <div className="lead-form-field">
            <label htmlFor="lead-neighborhood">Neighborhood of interest</label>
            <input
              id="lead-neighborhood"
              name="neighborhood"
              maxLength={100}
              required
              {...fieldAttributes("neighborhood")}
              onChange={() => clearFieldError("neighborhood")}
            />
            {errorMessage("neighborhood")}
          </div>
          <div className="lead-form-field lead-form-field-full">
            <label htmlFor="lead-message">Message</label>
            <textarea
              id="lead-message"
              name="message"
              maxLength={2000}
              required
              rows={4}
              {...fieldAttributes("message")}
              onChange={() => clearFieldError("message")}
            />
            {errorMessage("message")}
          </div>
          <div className="lead-form-consent">
            <input
              id="lead-consent"
              name="consent"
              required
              type="checkbox"
              {...fieldAttributes("consent")}
              onChange={() => clearFieldError("consent")}
            />
            <label htmlFor="lead-consent">
              I understand and consent to this prototype validating and
              discarding my submission. It is not saved or forwarded and cannot
              deliver follow-up yet.
            </label>
            {errorMessage("consent")}
          </div>
          <button
            className="button-primary lead-form-submit"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Sending…" : "Submit enquiry"}{" "}
            {!isSubmitting && <span aria-hidden="true">↗</span>}
          </button>
          <p
            className={`lead-form-feedback${isSuccess ? " is-success" : ""}`}
            role={isSuccess ? "status" : "alert"}
            aria-live={isSuccess ? "polite" : "assertive"}
          >
            {feedback}
          </p>
        </form>
      </div>
    </section>
  );
}
