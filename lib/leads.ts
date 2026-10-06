export const leadInterests = [
  "Moving to Brussels",
  "Looking for a rental",
  "Looking to buy",
  "Property owner",
  "Looking to sell",
  "Business / service provider",
] as const;

export type LeadInterest = (typeof leadInterests)[number];

export type LeadSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: LeadInterest;
  neighborhood: string;
  message: string;
  consent: boolean;
};

export type LeadField = keyof LeadSubmission;
export type LeadErrors = Partial<Record<LeadField, string>>;

export type LeadValidation =
  | { success: true; data: LeadSubmission }
  | { success: false; errors: LeadErrors };

const fieldLimits: Record<Exclude<LeadField, "consent" | "interest">, number> = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 40,
  neighborhood: 100,
  message: 2000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(
  input: Record<string, unknown>,
  field: Exclude<LeadField, "consent" | "interest">,
  errors: LeadErrors,
  required: boolean,
) {
  const value = input[field];

  if (typeof value !== "string") {
    if (required || value !== undefined) {
      errors[field] = required ? "This field is required." : "Enter valid text.";
    }
    return "";
  }

  const trimmed = value.trim();
  if (required && !trimmed) {
    errors[field] = "This field is required.";
  } else if (value.length > fieldLimits[field]) {
    errors[field] = `Use ${fieldLimits[field]} characters or fewer.`;
  }
  return trimmed;
}

export function validateLeadSubmission(input: unknown): LeadValidation {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { success: false, errors: { firstName: "Enter valid form details." } };
  }

  const values = input as Record<string, unknown>;
  const errors: LeadErrors = {};
  const firstName = readString(values, "firstName", errors, true);
  const lastName = readString(values, "lastName", errors, true);
  const email = readString(values, "email", errors, true);
  const phone = readString(values, "phone", errors, false);
  const neighborhood = readString(values, "neighborhood", errors, true);
  const message = readString(values, "message", errors, true);
  const interest = values.interest;

  if (email && !emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (
    interest !== undefined &&
    (typeof interest !== "string" ||
      !leadInterests.includes(interest as LeadInterest))
  ) {
    errors.interest = "Choose an option from the list.";
  } else if (!interest) {
    errors.interest = "Choose an option from the list.";
  }
  if (values.consent !== true) {
    errors.consent = "Consent is required to submit this form.";
  }

  if (
    Object.keys(errors).length > 0 ||
    typeof interest !== "string" ||
    !leadInterests.includes(interest as LeadInterest)
  ) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      firstName,
      lastName,
      email,
      phone,
      interest: interest as LeadInterest,
      neighborhood,
      message,
      consent: true,
    },
  };
}
