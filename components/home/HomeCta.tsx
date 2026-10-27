import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";

export default function HomeCta() {
  return (
    <CtaBand
      id="cta-heading"
      overline="Complimentary Assessment"
      title="Get an engineering audit of your online store."
      lead="We evaluate your Core Web Vitals, mobile PDP conversion bottlenecks, checkout ergonomics, and browse-abandonment flows — delivered with zero fluff."
      actions={
        <>
          <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Request Free Store Audit
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
            Explore All 6 Services
          </ButtonLink>
        </>
      }
      note="Typically delivered within [TURNAROUND TIME — TO CONFIRM] · No obligation"
    />
  );
}
