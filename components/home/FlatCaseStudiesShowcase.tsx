import { ArrowUpRight } from "lucide-react";
import { caseStudiesList } from "@/lib/caseStudiesData";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";

export default function FlatCaseStudiesShowcase() {
  return (
    <Section tone="subtle" aria-labelledby="cases-heading">
      <Container>
        <SectionHeader
          id="cases-heading"
          overline="Results"
          title="Real stores. Real numbers."
          lead="See what changed for stores like yours, and how we did it."
          action={
            <TextLink href="/case-studies">
              See all case studies
              <ArrowUpRight {...icon.sm} />
            </TextLink>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudiesList.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
