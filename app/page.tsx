import { AudienceSection } from "@/components/home/audience-section";
import { ExploreSections } from "@/components/home/explore-sections";
import { HeroSection } from "@/components/home/hero-section";
import { LeadCapture } from "@/components/lead-capture";
import { RelocationSection } from "@/components/home/relocation-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Brussels Relocation, Renting & Property Information",
  description:
    "Explore independent information about moving to Brussels, expat housing, renting, neighborhoods and property. The Rising Sun Group is not an estate agency.",
  path: "/",
});

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <AudienceSection />
      <RelocationSection />
      <ExploreSections />
      <LeadCapture />
    </main>
  );
}
