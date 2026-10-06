import {
  GuideChecklist,
  GuideCta,
  GuideFaq,
  GuideInfoBox,
  GuideSection,
} from "@/components/guides/guide-primitives";
import {
  InformationReviewed,
  InformationSources,
} from "@/components/guides/information-sources";
import {
  ArticleStructuredData,
  Breadcrumbs,
  FaqStructuredData,
} from "@/components/structured-data";
import { createPageMetadata } from "@/lib/seo";
import { movingGuideReview } from "@/lib/editorial";

const guideTitle = "Moving to Brussels: The Practical Expat Guide";
const guideDescription =
  "Independent Brussels relocation guide to housing, renting, neighborhoods and arrival planning. Verify current requirements with official sources.";

export const metadata = createPageMetadata({
  title: guideTitle,
  description: guideDescription,
  path: "/relocation/moving-to-brussels",
  type: "article",
});

const contents = [
  ["welcome", "Welcome to Brussels"],
  ["before-you-arrive", "Before You Arrive"],
  ["accommodation", "Finding Accommodation"],
  ["rental-contracts", "Understanding Brussels Rental Contracts"],
  ["deposit", "Rental Deposit"],
  ["domiciliation", "Domiciliation"],
  ["commune", "Registering With the Commune"],
  ["utilities", "Utilities"],
  ["internet-mobile", "Internet and Mobile"],
  ["banking", "Banking"],
  ["health-insurance", "Health Insurance"],
  ["transport", "Transport"],
  ["neighborhoods", "Neighborhood Selection"],
  ["first-month", "First 30 Days Checklist"],
  ["common-mistakes", "Common Mistakes Expats Make"],
  ["resources", "Useful Brussels Resources"],
  ["faq", "FAQ"],
] as const;

const firstMonthTasks = [
  {
    label: "Confirm your accommodation arrangements",
    detail: "Keep copies of your agreement, handover notes and key contacts.",
  },
  {
    label: "Check your address and registration steps",
    detail:
      "Ask your commune which process applies to your circumstances and what evidence it currently accepts.",
  },
  {
    label: "Plan essential services",
    detail:
      "Clarify utility responsibilities, connectivity options and any account setup with the relevant providers.",
  },
  {
    label: "Review health coverage",
    detail:
      "Contact the relevant insurer or mutuality and check how your existing cover applies during the move.",
  },
  {
    label: "Make a workable transport plan",
    detail:
      "Compare routes and current products directly with the public transport operators.",
  },
  {
    label: "Organize key personal records",
    detail:
      "Store important documents securely and note renewal dates, reference numbers and follow-up actions.",
  },
] satisfies { label: string; detail: string }[];

const faqs = [
  {
    question: "Do I need to speak French or Dutch to settle in Brussels?",
    answer:
      "Language needs depend on your circumstances, service and neighborhood. French and Dutch are both used in public administration, while other languages may be available in some everyday settings. Ask each commune, provider or insurer what support it offers, and do not assume that a particular service can be handled in English.",
  },
  {
    question: "Can I sign a rental contract before I arrive?",
    answer:
      "Arrangements differ between landlords and properties. Before committing remotely, verify who you are dealing with, review the complete written terms, understand the payment and handover process, and seek independent advice if anything is unclear. This guide is not legal advice.",
  },
  {
    question: "How much is a rental deposit in Brussels?",
    answer:
      "There is no single figure in this guide: the applicable rules and arrangements can depend on the tenancy, property and current requirements. Check the current official Brussels regional information and make sure any proposed arrangement is documented before paying.",
  },
  {
    question: "How long does commune registration take?",
    answer:
      "Timing and steps can vary with your personal situation and the commune's current process. Contact the commune responsible for your address, ask what applies to you, and verify any relevant timing directly with it or the appropriate official source.",
  },
  {
    question: "Is domiciliation the same as a mailing address?",
    answer:
      "Not necessarily. Domiciliation relates to registering a residence; it should not be treated as a simple mail-forwarding service. Confirm what address arrangements are accepted for your situation with your commune and the relevant official authority.",
  },
  {
    question: "Can I use my existing health insurance?",
    answer:
      "Coverage depends on your country of origin, status, existing policy and circumstances. Ask your insurer and the relevant Belgian health insurance body or mutuality to explain what applies to you and when any change is needed.",
  },
];

export default function MovingToBrusselsPage() {
  return (
    <main className="guide-page" id="main-content">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Relocation", path: "/relocation" },
          {
            name: "Moving to Brussels: The Practical Expat Guide",
            path: "/relocation/moving-to-brussels",
          },
        ]}
      />
      <ArticleStructuredData
        title={guideTitle}
        description={guideDescription}
        path="/relocation/moving-to-brussels"
      />
      <FaqStructuredData items={faqs} />
      <header className="guide-hero">
        <div className="container guide-hero-inner">
          <p className="eyebrow">Relocation · Brussels</p>
          <h1>Moving to Brussels: The Practical Expat Guide</h1>
          <p className="guide-hero-intro">
            A grounded starting point for the practical decisions around
            relocating: planning your arrival, finding a place to live and
            getting everyday essentials in order.
          </p>
          <div className="guide-hero-meta">
            <span>Independent information</span>
            <span aria-hidden="true">·</span>
            <span>Practical, not legal advice</span>
            <span aria-hidden="true">·</span>
            <InformationReviewed date={movingGuideReview.lastReviewed} />
          </div>
        </div>
      </header>

      <div className="container guide-layout">
        <aside className="guide-toc" aria-labelledby="guide-toc-title">
          <p className="eyebrow" id="guide-toc-title">
            In this guide
          </p>
          <nav aria-label="Guide contents">
            <ol>
              {contents.map(([id, title], index) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact-rising-sun">
                  <span aria-hidden="true">18</span>
                  Contact The Rising Sun Group
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <article className="guide-article">
          <p className="guide-disclaimer">
            Brussels-specific rules and administrative processes can change and
            may differ by personal situation. Use this guide for orientation,
            then confirm requirements with the relevant official federal,
            regional or commune source, or with your provider or insurer. This
            is general information, not legal advice, brokerage or a guarantee
            of an outcome.
          </p>

          <GuideSection id="welcome" number="01" title="Welcome to Brussels">
            <p>
              A move to Brussels brings a new rhythm as well as a new address.
              Housing, administration, insurance and everyday services are
              handled by different organizations, so it helps to approach the
              move as a sequence of small tasks rather than one large
              transaction.
            </p>
            <p>
              Start by identifying what is specific to your situation: where
              you will live, how long you expect to stay, what arrangements you
              already have and which questions need an official answer. French
              and Dutch appear across public-facing information; check which
              languages each organization can support and ask for clarification
              when a document is unclear.
            </p>
            <GuideInfoBox title="A useful starting point">
              Keep one secure folder—digital or paper—for identity and housing
              documents, official correspondence, provider details and
              follow-up notes. Share sensitive documents only through channels
              you have verified.
            </GuideInfoBox>
          </GuideSection>

          <GuideSection
            id="before-you-arrive"
            number="02"
            title="Before You Arrive"
          >
            <p>
              Work backwards from your intended arrival and separate decisions
              you can make now from those that need a local address or
              in-person appointment. Ask your employer, school or other
              relevant organization what it can confirm, and independently
              verify any official steps that apply to you.
            </p>
            <GuideChecklist
              title="Preparation list"
              items={[
                {
                  label: "Gather essential records",
                  detail:
                    "Check with the organizations you will deal with about the documents and formats they accept.",
                },
                {
                  label: "Set a realistic housing brief",
                  detail:
                    "Note your budget range, preferred timing, commute, space needs and non-negotiables.",
                },
                {
                  label: "Plan your first address",
                  detail:
                    "Confirm how your initial accommodation relates to any registration or correspondence needs.",
                },
                {
                  label: "Review coverage and accounts",
                  detail:
                    "Ask current insurers, banks and service providers what changes when you move country.",
                },
                {
                  label: "Keep a relocation buffer",
                  detail:
                    "Allow for setup costs and timing uncertainty without relying on a particular quote or outcome.",
                },
              ]}
            />
            <GuideInfoBox title="Verify before you travel" variant="caution">
              Immigration, residence and other administrative requirements
              depend on individual circumstances and current rules. Confirm
              them with the relevant Belgian federal authority or official
              regional and commune sources; do not rely on a general checklist
              alone.
            </GuideInfoBox>
          </GuideSection>

          <GuideSection
            id="accommodation"
            number="03"
            title="Finding Accommodation"
          >
            <p>
              Decide whether you need a short initial stay or are ready to
              commit to a longer-term home. A temporary base can give you time
              to view areas and understand daily travel, while a longer
              commitment may require more research before signing. Neither
              approach suits everyone.
            </p>
            <p>
              Compare the full monthly cost, not just the headline rent. Ask
              what is included, which charges are separate, how heating and
              building costs are handled, what condition the property is in,
              and who manages repairs or questions. Confirm the property,
              representative and payment instructions independently before
              transferring money.
            </p>
            <p>
              At a viewing, check natural light, noise at different times if
              possible, ventilation, water pressure, appliances, storage,
              mobile reception and the route to the places you will visit
              regularly. Write down answers rather than relying on memory.
            </p>
          </GuideSection>

          <GuideSection
            id="rental-contracts"
            number="04"
            title="Understanding Brussels Rental Contracts"
          >
            <p>
              Read the complete agreement before signing. Make sure you
              understand the parties, property, intended use, duration,
              payment schedule, included or separate charges, responsibilities
              for upkeep, notice arrangements and any annexes or inventory.
              Ask for unclear points to be explained in writing.
            </p>
            <p>
              Rental rules can depend on the type of tenancy, property,
              contract wording and current regional requirements. Do not
              assume a clause is standard or that a verbal explanation changes
              the written document. For a question about your rights or
              obligations, consult current official Brussels regional
              information or an independent qualified adviser.
            </p>
            <GuideInfoBox title="Keep a complete record">
              Save the signed agreement and every annex, inventory, payment
              record and written exchange. Record the condition of the home at
              handover and ask how any concerns should be reported.
            </GuideInfoBox>
          </GuideSection>

          <GuideSection id="deposit" number="05" title="Rental Deposit">
            <p>
              Before paying a deposit, confirm in the written agreement what
              the payment is for, how it is to be held, how the arrangement
              will be documented and what steps apply at the end of the
              tenancy. Keep proof of payment and verify the recipient and
              account details through a trusted channel.
            </p>
            <p>
              Deposit rules, permitted structures and procedures can depend on
              the tenancy and current law. No amount or release timeline is
              stated here as a universal rule. Check current official Brussels
              regional guidance or seek independent advice if the proposed
              arrangement is unclear or disputed.
            </p>
          </GuideSection>

          <GuideSection
            id="domiciliation"
            number="06"
            title="Domiciliation"
          >
            <p>
              Domiciliation is commonly used to describe registering a
              residence at an address with the relevant commune. It is not
              simply a forwarding address, and an accommodation arrangement
              should not be assumed to qualify automatically.
            </p>
            <p>
              Ask the commune for your address what evidence and procedure it
              currently requires, and confirm how your type of accommodation
              fits the process. Requirements and steps can vary with
              circumstances and current rules. Check official sources rather
              than relying only on a landlord, online discussion or this
              overview.
            </p>
          </GuideSection>

          <GuideSection
            id="commune"
            number="07"
            title="Registering With the Commune"
          >
            <p>
              The commune is the municipal authority connected to your
              residential address. The relevant process, documents,
              appointments and follow-up can depend on your personal status
              and the commune&apos;s current procedure. Contact the commune
              directly to establish which steps apply to you and how to
              arrange them.
            </p>
            <p>
              Before an appointment, ask for its current document list and
              accepted formats. Keep copies of what you submit and note the
              date, reference and any next action. If your circumstances
              change, ask the commune or relevant official federal authority
              whether that affects your file.
            </p>
            <GuideInfoBox title="Do not assume a universal timeline" variant="caution">
              Any deadline, eligibility condition or sequence depends on the
              person and current rules. Verify it with your commune or the
              responsible official federal or regional source.
            </GuideInfoBox>
          </GuideSection>

          <GuideSection id="utilities" number="08" title="Utilities">
            <p>
              Find out which services are already active and which arrangements
              are your responsibility. The lease, building setup and provider
              arrangements determine whether electricity, gas, water or other
              charges are arranged individually, included, shared or handled
              another way.
            </p>
            <p>
              Ask for meter readings and a clear handover record where
              applicable. Compare provider terms, billing methods, contract
              duration and any setup or exit conditions directly with the
              provider. If a service is managed through a building or
              landlord, ask how usage and charges are calculated and where to
              direct questions.
            </p>
          </GuideSection>

          <GuideSection
            id="internet-mobile"
            number="09"
            title="Internet and Mobile"
          >
            <p>
              Check connectivity at the exact address before choosing a home
              internet plan: availability and installation options may differ
              from one building to another. Ask about speed, equipment,
              installation, contract terms, billing and what happens if you
              move.
            </p>
            <p>
              For mobile service, compare coverage where you live and work,
              data needs, roaming conditions, calling options and the
              identification or payment details a provider requests. Offers
              change, so use each provider&apos;s current information and get
              the important terms in writing.
            </p>
          </GuideSection>

          <GuideSection id="banking" number="10" title="Banking">
            <p>
              Bank account eligibility and onboarding requirements vary by
              institution and personal circumstances. Ask the bank what
              identification, address evidence, residency information and
              payment details it currently accepts, and whether an account can
              be opened before you have completed other local steps.
            </p>
            <p>
              Compare account fees, card and transfer options, access to
              support, and how the bank handles your existing accounts.
              Protect account credentials and verify requests for money or
              personal information through the bank&apos;s own trusted
              channels.
            </p>
          </GuideSection>

          <GuideSection
            id="health-insurance"
            number="11"
            title="Health Insurance"
          >
            <p>
              Do not assume your current cover automatically continues or that
              one arrangement applies to every newcomer. Coverage and any
              registration obligations may depend on your status, work,
              existing policy and current rules.
            </p>
            <p>
              Contact your existing insurer and the relevant Belgian health
              insurance body or mutuality to ask about eligibility, effective
              dates, dependants, reimbursement, waiting or transition
              arrangements and any documents needed in your case. For
              regulatory questions, confirm details with the appropriate
              official federal source.
            </p>
          </GuideSection>

          <GuideSection id="transport" number="12" title="Transport">
            <p>
              Build a routine around your actual destinations: home, work,
              study, childcare or regular appointments. Brussels public
              transport includes the STIB/MIVB network; rail journeys and
              connections can be checked with SNCB/NMBS. Confirm current
              routes, service changes, fares, ticket options and accessibility
              information directly with the operator before travelling.
            </p>
            <p>
              A trial commute at the time you expect to travel can reveal
              transfers, walking distances and the effect of disruptions.
              Cycling, walking and other options may suit particular routes;
              assess the route and conditions that matter to you rather than
              relying on a neighborhood label.
            </p>
          </GuideSection>

          <GuideSection
            id="neighborhoods"
            number="13"
            title="Neighborhood Selection"
          >
            <p>
              Choose an area by testing how it fits your everyday life.
              Consider commute and connections, shops and services you use,
              green space, noise, building type, accessibility, budget and
              where you expect to spend time. Priorities differ, so there is no
              single best neighborhood for every newcomer.
            </p>
            <p>
              Visit at different times of day if you can. Walk the route from
              likely transit stops, check the immediate streets and compare
              actual homes rather than relying on broad reputations. For
              current local services or public information, consult the
              commune and relevant regional sources.
            </p>
          </GuideSection>

          <GuideSection
            id="first-month"
            number="14"
            title="First 30 Days Checklist"
          >
            <p>
              Use the first month as a planning window, not a statement of
              statutory deadlines. The order and timing of administrative
              actions can depend on your situation; check any applicable
              deadlines directly with the responsible official source.
            </p>
            <GuideChecklist title="A practical first-month list" items={firstMonthTasks} />
            <p>
              Add the tasks that matter to your household, then track who you
              contacted, what they asked for and when you plan to follow up.
            </p>
          </GuideSection>

          <GuideSection
            id="common-mistakes"
            number="15"
            title="Common Mistakes Expats Make"
          >
            <ul className="guide-bullet-list">
              <li>
                <strong>Rushing a housing decision.</strong> Compare complete
                costs, contract terms, condition and location before committing.
              </li>
              <li>
                <strong>Paying before verifying.</strong> Independently confirm
                the property, representative and payment details, especially
                when arrangements happen remotely.
              </li>
              <li>
                <strong>Assuming one guide fits everyone.</strong> Personal
                status, address, contract and current rules can change what
                applies.
              </li>
              <li>
                <strong>Leaving administration until later.</strong> Identify
                which official authority to ask and check its current process
                early, without assuming a universal deadline.
              </li>
              <li>
                <strong>Overlooking recurring costs.</strong> Clarify which
                utilities, building charges, connectivity and insurance are
                separate from rent.
              </li>
              <li>
                <strong>Keeping no written record.</strong> Save agreements,
                inventories, correspondence and payment confirmations securely.
              </li>
              <li>
                <strong>Taking a location on reputation alone.</strong> Visit
                the area and test your actual routes and daily needs.
              </li>
            </ul>
          </GuideSection>

          <GuideSection
            id="resources"
            number="16"
            title="Useful Brussels Resources"
          >
            <p>
              Start with the source responsible for the question. The links
              below point to official or primary references; verify current
              information for your circumstances before acting.
            </p>
            <ul className="guide-resource-list">
              <li>
                <strong>STIB/MIVB and SNCB/NMBS</strong>
                <span>
                  For current public transport routes, services, tickets and
                  travel information.
                </span>
              </li>
              <li>
                <strong>Your landlord, building manager and service providers</strong>
                <span>
                  For property-specific arrangements, utility responsibilities
                  and current product terms.
                </span>
              </li>
            </ul>
            <InformationSources sources={movingGuideReview.sources} />
          </GuideSection>

          <GuideSection id="faq" number="17" title="FAQ">
            <GuideFaq items={faqs} />
          </GuideSection>

          <div id="contact-rising-sun" className="guide-contact-anchor">
            <span className="guide-section-number" aria-hidden="true">
              18
            </span>
            <GuideCta
              title="Continue the conversation"
              description="The Rising Sun Group shares independent information to help people make sense of relocation and everyday decisions in Brussels."
              note="The Contact page is currently being developed and does not yet offer a submission form or published contact details."
            />
          </div>
        </article>
      </div>
    </main>
  );
}
