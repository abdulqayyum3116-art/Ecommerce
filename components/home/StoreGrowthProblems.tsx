import { ArrowUpRight } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TextLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";
import GrowthProblemIllustration from "./GrowthProblemIllustration";

const problems = [
  {
    title: "Ad spend is rising. Sales aren’t keeping up.",
    check: "Check conversion tracking and which products and campaigns generate sales at a sustainable cost.",
    help: "We review tracking, product feeds and campaign performance to identify wasted spend and prioritize improvements.",
  },
  {
    title: "Shoppers visit. Too few buy.",
    check: "Check whether ads match the product page, product information answers buying questions, and abandoned carts receive follow-up.",
    help: "We improve ad-to-product relevance, create product videos and set up cart-recovery emails and texts.",
  },
  {
    title: "Customers buy once. Then disappear.",
    check: "Check what customers receive after checkout and whether follow-up gives them a relevant reason to return.",
    help: "We set up order updates, review requests and email and SMS flows that encourage another purchase.",
  },
];

export default function StoreGrowthProblems() {
  return (
    <Section tone="band" aria-labelledby="store-growth-problems-heading">
      <Container>
        <SectionHeader
          id="store-growth-problems-heading"
          align="center"
          overline="Find your starting point"
          title="What’s holding your store back?"
          lead="More traffic isn’t always the first fix. Start with the problem you’re seeing, then check what’s behind it."
        />
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Card as="li" key={problem.title} tilt={false} reveal={false} className="flex flex-col">
              <span aria-hidden="true" className="mb-4 type-overline numeric text-accent-text">0{index + 1}</span>
              <h3 className="mb-6 type-h3 text-fg">{problem.title}</h3>
              <GrowthProblemIllustration variant={index as 0 | 1 | 2} />
              <dl className="flex flex-1 flex-col gap-6">
                <div>
                  <dt className="mb-2 type-overline text-fg-muted">Check first</dt>
                  <dd className="type-body-sm text-fg-secondary">{problem.check}</dd>
                </div>
                <div className="mt-auto border-t border-border pt-6">
                  <dt className="mb-2 type-overline text-accent-text">How we help</dt>
                  <dd className="type-body-sm text-fg-secondary">{problem.help}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </ul>
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="mb-4 type-body text-fg-secondary">
            Not sure where to start? Our free audit gives you a prioritized list of what to fix first.
          </p>
          <TextLink href="/contact">Get my free audit <ArrowUpRight {...icon.sm} /></TextLink>
        </div>
      </Container>
    </Section>
  );
}
