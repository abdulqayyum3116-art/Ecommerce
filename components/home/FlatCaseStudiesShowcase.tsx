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
          overline="Verified Technical Case Studies"
          title="Measurable systems. Zero vanity numbers."
          lead="Explore how we design, develop, and automate high-conversion ecommerce infrastructure."
          action={
            <TextLink href="/case-studies">
              Browse all case studies
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
