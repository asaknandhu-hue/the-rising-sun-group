# The Rising Sun Group

A homepage-first launch for an independent Brussels information platform. The
site introduces the platform, points people toward relocation, neighbourhood
and property information, and makes clear that The Rising Sun Group is not an
estate agency. Rising Sun Relocation is the initial focus; Rising Sun
Properties is identified as a future part of the platform.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

## Checks

```bash
npm run lint
npm run build
```

The homepage is built with the Next.js App Router and server-rendered React
components. Styling uses Tailwind CSS 4's global import with focused custom CSS.
The reusable enquiry form posts to the same-origin `POST /api/leads` endpoint.
That prototype endpoint validates the form, returns an acceptance response,
and immediately discards the submitted data; it does not persist or forward
submissions, and cannot provide follow-up. No CRM, database, or external form
service is connected.

## Search metadata and structured data

Route metadata, canonical URLs, robots directives and the sitemap cover the
existing published route structure; the sitemap omits placeholder dates rather
than implying unverified update timestamps. No social-share image is set because
the project has no suitable existing share image. Organization/WebSite and
page-appropriate breadcrumb, Article and visible-FAQ structured data are used.
LocalBusiness schema is intentionally omitted: there is no verifiable business
address, phone number or local storefront in the project content, and The
Rising Sun Group is an independent information platform rather than a broker or
estate agency.
