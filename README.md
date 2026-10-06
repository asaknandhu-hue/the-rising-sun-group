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
npx tsc --noEmit
npm run build
```

The homepage is built with the Next.js App Router and server-rendered React
components. Styling uses Tailwind CSS 4's global import with focused custom CSS.
The reusable enquiry form posts to the same-origin `POST /api/leads` endpoint.
That prototype endpoint validates the form, returns an acceptance response,
and immediately discards the submitted data; it does not persist or forward
submissions, and cannot provide follow-up. No CRM, database, or external form
service is connected.

## Deploying to Vercel: step by step

Vercel is a hosting platform that builds and serves Next.js applications. When
you connect a GitHub repository, Vercel can build a preview for changes and
deploy the configured production branch. These instructions prepare you for a
deployment; they do not create accounts, change GitHub, or deploy the site.

### 1. Check the source repository on GitHub

Vercel must be able to read the repository containing the app's `package.json`,
`app/`, and `public/` folders. This workspace contains the app in
`the-rising-sun-group/`, and that app directory has its own Git repository
separate from the outer workspace repository.

Choose the GitHub repository that actually contains the app source:

- If you push the standalone app repository, use that repository in Vercel and
  set **Root Directory** to `.`.
- If you intentionally prepare a monorepo where the outer repository tracks
  the app as an ordinary `the-rising-sun-group/` folder, use that repository
  and set **Root Directory** to `the-rising-sun-group`.

**Important:** The current outer repository does not track the nested app
contents as ordinary source. Selecting `the-rising-sun-group` as Root Directory
does not make untracked or nested-repository files available to Vercel. Confirm
the app files are present in the GitHub repository before importing it. Do not
remove or restructure Git metadata without first choosing which repository
should own the app.

### 2. Import the repository

1. Sign in to Vercel and choose **Add New...** > **Project**.
2. Connect GitHub if asked, and grant Vercel access to the repository that
   contains the app.
3. Select that repository and choose **Import**.
4. Confirm **Root Directory** points to the folder containing this app's
   `package.json`.

### 3. Check the build settings

Use these project settings:

| Setting | What it means | Value for this app |
| --- | --- | --- |
| Framework Preset | Tells Vercel which framework build rules to use. | Next.js (normally detected automatically) |
| Root Directory | The repository folder Vercel builds from. | `.` for the standalone app repository; otherwise the tracked app subfolder |
| Install Command | Installs the dependencies listed in `package.json`. | Leave automatic detection enabled |
| Build Command | Creates the production build. | `npm run build` (normally detected automatically) |
| Output Directory | Where framework build output is located. | Leave the override empty; Next.js manages `.next` |

The app does not need a `vercel.json` for the standard Next.js deployment.
There are currently no required Vercel environment variables. Do not add
placeholder secrets or copy values from a different project.

### 4. Deploy and test the generated URL

1. Choose **Deploy** and wait for the build to finish.
2. Open the generated `*.vercel.app` URL from the Vercel project dashboard.
3. Check the homepage and these important routes:
   - `/relocation/moving-to-brussels`
   - `/resources` and `/resources/moving-to-brussels`
   - `/neighborhoods` and `/neighborhoods/etterbeek`
   - `/partners` and `/partners/moving`
   - `/contact`
   - `/robots.txt` and `/sitemap.xml`
4. Test the navigation and responsive layout at a narrow mobile width.
5. If testing the lead form, use synthetic test details. Its API currently
   validates submissions and then discards them: it does not save, forward, or
   notify anyone. The confirmation message is not evidence that a person will
   follow up.

For a local production build before importing, open PowerShell in the app
directory and run:

```powershell
npm ci
npm run lint
npx tsc --noEmit
npm run build
npm start
```

With `npm start` running, open `http://localhost:3000` and repeat the route
smoke checks above.

### 5. Configure preview and production deployments

In Vercel's Git settings, confirm the **Production Branch** is the branch you
intend to publish (commonly `main`). Commits or pull requests from other
branches can generate **Preview Deployments** with separate URLs. Changes
merged or pushed to the configured production branch create a **Production
Deployment**. Test a preview before merging changes intended for the live site.

### 6. Connect the domain

After a successful production deployment:

1. In the Vercel project, open **Settings** > **Domains** and add
   `therisingsungroup.com`.
2. Follow Vercel's current instructions for the DNS provider where the domain
   is managed. DNS values can differ by project; use the exact records Vercel
   displays rather than guessing.
3. Wait for Vercel to verify the domain, then open it over HTTPS and repeat
   the smoke checks.
4. If you also add `www.therisingsungroup.com`, configure it in Vercel and
   select the preferred redirect behavior.

The app's canonical site URL is `https://therisingsungroup.com`.

### Content readiness

The partner directory entries are explicitly illustrative placeholders, not
real businesses, vetted providers, recommendations, or confirmed affiliations;
keep that disclosure and verify any future listing before publication.
Neighborhood guides are also marked as unverified placeholders. Review any
legal or regulatory statements against current, relevant official sources
before making public claims or presenting them as current guidance. These
content checks are separate from a successful technical deployment.

The detailed moving guide and rental deposit/contract article outlines display
an “Information last reviewed” date alongside official or primary-source
links. The date records when those references were checked; it is not a legal
opinion or a guarantee that the guidance covers every case. When publishing or
updating legal/property guidance, verify each substantive statement against
the current responsible authority, link the relevant primary sources, and
update the review date only after completing that review. Leave unverified
guides clearly marked as placeholders rather than assigning them a review date.

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
