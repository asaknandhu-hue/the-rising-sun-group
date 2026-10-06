import type { Article } from "./types";

const editorialPlaceholder =
  "Editorial placeholder: this article outline is not a verified guide and should be completed with current, attributable sources before publication.";

export const localArticles = [
  {
    title: "Moving to Brussels: The Practical Expat Guide Outline",
    slug: "moving-to-brussels",
    description:
      "An editorial placeholder for a practical relocation guide. The existing detailed guide remains available on the Relocation page.",
    category: "Relocation",
    author: "Author attribution pending",
    publicationDate: null,
    updatedDate: null,
    heroImage: null,
    readingTimeMinutes: 3,
    tags: ["relocation", "Brussels", "moving"],
    content: [
      { type: "callout", title: "Editorial status", content: editorialPlaceholder },
      {
        type: "paragraph",
        content: [
          "This resource entry is a placeholder rather than a replacement for the existing full guide: ",
          {
            type: "article-link",
            slug: "moving-to-brussels",
            label: "Moving to Brussels: The Practical Expat Guide",
            href: "/relocation/moving-to-brussels",
          },
          ".",
        ],
      },
      { type: "heading", level: 2, text: "Planned guide outline" },
      {
        type: "paragraph",
        content:
          "A future article outline may cover preparing for a move, housing questions, local administration and everyday arrangements. Each topic should be checked against the reader's circumstances and current official information before publication.",
      },
      {
        type: "list",
        items: [
          "Confirm which questions require an answer from an official authority.",
          "Keep housing, provider and personal-administration questions distinct.",
          "Add current, attributable sources before treating any detail as guidance.",
        ],
      },
    ],
    faq: [
      {
        question: "Is this the existing detailed relocation guide?",
        answer:
          "No. This is an editorial placeholder in the Resources collection. The existing guide remains at /relocation/moving-to-brussels.",
      },
      {
        question: "Can I rely on this placeholder for official requirements?",
        answer:
          "No. Verify requirements for your own situation with the relevant official federal, regional or commune source.",
      },
    ],
    relatedArticles: [
      "brussels-rental-deposits-explained",
      "understanding-belgian-rental-contracts",
    ],
  },
  {
    title: "Brussels Rental Deposits Explained",
    slug: "brussels-rental-deposits-explained",
    description:
      "A clearly marked editorial placeholder about questions to verify before arranging a rental deposit in Brussels.",
    category: "Renting",
    author: "Author attribution pending",
    publicationDate: null,
    updatedDate: null,
    heroImage: null,
    readingTimeMinutes: 2,
    tags: ["renting", "deposit", "verification"],
    content: [
      {
        type: "callout",
        title: "Editorial placeholder",
        tone: "caution",
        content:
          "No Belgian legal rule, permitted amount, account structure or deadline is stated here. Requirements depend on current official rules and the reader's situation. Verify the applicable details with current official Brussels regional information or an independent qualified adviser.",
      },
      { type: "heading", level: 2, text: "Questions to verify" },
      {
        type: "paragraph",
        content:
          "Before paying anything, establish what the written agreement says the payment is for, how it will be documented, who receives it and what evidence you will keep. These are questions to ask, not a statement of legal requirements.",
      },
      {
        type: "list",
        items: [
          "Ask for the proposed arrangement and relevant terms in writing.",
          "Verify the recipient and payment instructions through a trusted channel.",
          "Keep copies of documents and proof of any payment.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "For contract context, see ",
          {
            type: "article-link",
            slug: "understanding-belgian-rental-contracts",
            label: "Understanding Belgian Rental Contracts",
          },
          ".",
        ],
      },
    ],
    faq: [
      {
        question: "How much can a rental deposit be?",
        answer:
          "This placeholder does not state an amount. Applicable rules and arrangements depend on current official rules and the reader's situation; confirm them through current official Brussels regional information or an independent qualified adviser.",
      },
      {
        question: "When must a deposit be returned?",
        answer:
          "No deadline is given here. Confirm the applicable procedure and timing with a current official source or an independent qualified adviser.",
      },
    ],
    relatedArticles: [
      "understanding-belgian-rental-contracts",
      "brussels-rental-viewing-checklist",
    ],
  },
  {
    title: "Understanding Belgian Rental Contracts",
    slug: "understanding-belgian-rental-contracts",
    description:
      "An editorial placeholder outlining what readers may want to review in a rental agreement without asserting legal rules.",
    category: "Renting",
    author: "Author attribution pending",
    publicationDate: null,
    updatedDate: null,
    heroImage: null,
    readingTimeMinutes: 2,
    tags: ["renting", "contracts", "verification"],
    content: [
      {
        type: "callout",
        title: "Not legal advice",
        tone: "caution",
        content:
          "The applicable rules depend on current official requirements, the agreement and the reader's situation. This placeholder does not interpret Belgian law. Verify legal questions with current official Brussels regional information or an independent qualified adviser.",
      },
      { type: "heading", level: 2, text: "Review the written terms" },
      {
        type: "paragraph",
        content:
          "Before signing, read the complete agreement and ask for any unclear wording to be explained in writing. The points below are a general reading checklist, not a statement about what Belgian law requires or permits.",
      },
      {
        type: "list",
        items: [
          "Identify the parties and the property described in the document.",
          "Review the written terms for duration, payments, charges and responsibilities.",
          "Check whether annexes or condition records are referenced.",
          "Keep a complete copy of the signed agreement and written exchanges.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "Deposit questions are covered separately in ",
          {
            type: "article-link",
            slug: "brussels-rental-deposits-explained",
            label: "Brussels Rental Deposits Explained",
          },
          ".",
        ],
      },
    ],
    faq: [
      {
        question: "Does this outline explain my legal rights?",
        answer:
          "No. It is an editorial placeholder and does not provide legal advice. Confirm how current rules apply to your own agreement with an official source or an independent qualified adviser.",
      },
      {
        question: "What if a contract clause is unclear?",
        answer:
          "Ask for an explanation in writing and seek independent advice before relying on an interpretation. Verify any legal point using current official information.",
      },
    ],
    relatedArticles: [
      "brussels-rental-deposits-explained",
      "brussels-rental-viewing-checklist",
    ],
  },
  {
    title: "Etterbeek vs Ixelles for Expats",
    slug: "etterbeek-vs-ixelles-for-expats",
    description:
      "A placeholder comparison outline. No neighborhood characteristics, rental prices or local claims have been verified for this article.",
    category: "Neighborhoods",
    author: "Author attribution pending",
    publicationDate: null,
    updatedDate: null,
    heroImage: null,
    readingTimeMinutes: 2,
    tags: ["neighborhoods", "Etterbeek", "Ixelles"],
    content: [
      {
        type: "callout",
        title: "Place-specific details are not verified",
        content:
          "This is a structure-only placeholder. It makes no claims about either neighborhood, housing costs, amenities, transport or suitability. Add current, attributable sources before publishing any comparison.",
      },
      { type: "heading", level: 2, text: "Compare what matters to you" },
      {
        type: "paragraph",
        content:
          "A useful comparison should start with a reader's own priorities rather than an unsupported ranking. The factors below are prompts for research, not factual descriptions of Etterbeek or Ixelles.",
      },
      {
        type: "list",
        items: [
          "Check current travel options for the specific addresses and times that matter to you.",
          "Compare total housing costs using current, attributable information.",
          "Visit the relevant streets and verify amenities directly before making a decision.",
          "Consider individual requirements and accessibility needs.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "The broader ",
          {
            type: "article-link",
            slug: "moving-to-brussels",
            label: "Moving to Brussels resource",
          },
          " is also an editorial placeholder; the existing full relocation guide is linked there.",
        ],
      },
    ],
    faq: [
      {
        question: "Which neighborhood is better for expats?",
        answer:
          "This placeholder does not rank the neighborhoods. Suitability depends on individual priorities and verified, current information about the specific locations being considered.",
      },
      {
        question: "Are rental prices or neighborhood details included?",
        answer:
          "No. Place-specific information and prices have not been verified and are intentionally not stated.",
      },
    ],
    relatedArticles: ["brussels-rental-viewing-checklist", "moving-to-brussels"],
  },
  {
    title: "Brussels Rental Viewing Checklist",
    slug: "brussels-rental-viewing-checklist",
    description:
      "A placeholder checklist of questions to consider when viewing a rental home; it does not state legal or market requirements.",
    category: "Renting",
    author: "Author attribution pending",
    publicationDate: null,
    updatedDate: null,
    heroImage: null,
    readingTimeMinutes: 2,
    tags: ["renting", "checklist", "viewing"],
    content: [
      {
        type: "callout",
        title: "Editorial placeholder",
        content:
          "Use these as optional observation prompts, not as verified property standards, legal requirements or guarantees. Confirm specific concerns with the relevant provider or an independent qualified adviser.",
      },
      { type: "heading", level: 2, text: "Questions to consider at a viewing" },
      {
        type: "paragraph",
        content:
          "A viewing checklist can help you record your own observations and questions. What matters will depend on the property and your circumstances.",
      },
      {
        type: "list",
        items: [
          "Note the condition of areas and items that matter to you.",
          "Ask which costs are included and which are separate, then request written details.",
          "Ask how maintenance questions are handled and who to contact.",
          "Check the specific address against your own travel and daily needs.",
          "Keep your notes and any written answers together for later comparison.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "Before making commitments, review the written terms in ",
          {
            type: "article-link",
            slug: "understanding-belgian-rental-contracts",
            label: "Understanding Belgian Rental Contracts",
          },
          " and verify legal questions through current official information.",
        ],
      },
    ],
    faq: [
      {
        question: "Does this checklist confirm whether a property meets legal standards?",
        answer:
          "No. It is a set of general observation prompts and does not assess compliance or replace a qualified inspection or independent advice.",
      },
      {
        question: "Should I rely on verbal answers given at a viewing?",
        answer:
          "For important terms or commitments, request written information and verify anything consequential through an appropriate independent or official source.",
      },
    ],
    relatedArticles: [
      "etterbeek-vs-ixelles-for-expats",
      "understanding-belgian-rental-contracts",
    ],
  },
] satisfies readonly Article[];
