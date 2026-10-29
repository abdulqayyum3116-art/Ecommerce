import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";

export default function HomeCta() {
  return (
    <CtaBand
      id="cta-heading"
      overline="Free, no obligation"
      title="Get a free marketing audit."
      lead="We review your ad accounts, product feed, search and AI visibility, and email flows, then send you a clear list of what to fix first."
      actions={
        <>
          <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Get My Free Audit
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
            See All Services
          </ButtonLink>
        </>
      }
      note="Free and no obligation"
    />
  );
}
