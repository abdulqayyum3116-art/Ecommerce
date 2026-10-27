import { notFound } from "next/navigation";
import { Clock, Calendar, CheckSquare, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Overline } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";
import { blogPostsList } from "@/lib/blogData";
import { generateSeoMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return blogPostsList.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = blogPostsList.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return generateSeoMetadata({
    title: `${post.title} | CodeSquad Ecommerce Blog`,
    description: post.summary,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = blogPostsList.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: "2026-10-01",
    author: {
      "@type": "Organization",
      name: "CodeSquad Ecommerce Practice",
      url: "https://ecommerce.codesquad.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "CodeSquad",
      url: "https://codesquad.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ecommerce.codesquad.ai/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="bg-bg">
        <PageHero
          narrow
          back={{ href: "/blog", label: "Back to Ecommerce Insights" }}
          meta={
            <>
              <Badge tone="accent">{post.pillar}</Badge>
              <span className="inline-flex items-center gap-1 type-caption text-fg-muted">
                <Calendar {...icon.sm} size={14} />
                {post.date}
              </span>
              <span aria-hidden className="text-fg-muted">
                •
              </span>
              <span className="inline-flex items-center gap-1 type-caption text-fg-muted">
                <Clock {...icon.sm} size={14} />
                {post.readTime}
              </span>
            </>
          }
          title={post.title}
          lead={post.summary}
        />

        <Container narrow className="section-y">
          {/* 1. The core problem */}
          <section aria-labelledby="context-heading" className="mb-14">
            <Overline className="mb-3">The Context</Overline>
            <h2 id="context-heading" className="mb-4 type-h2 text-fg">
              The Real Bottleneck
            </h2>
            <p className="type-body-lg text-fg-secondary">{post.problem}</p>
          </section>

          {/* 2. Practical steps */}
          <section aria-labelledby="steps-heading" className="mb-14">
            <Overline className="mb-3">Execution</Overline>
            <h2 id="steps-heading" className="mb-6 type-h2 text-fg">
              Practical Implementation Steps
            </h2>
            <ol className="space-y-6">
              {post.steps.map((step, idx) => (
                <Card as="li" key={idx}>
                  <h3 className="mb-3 type-h4 text-fg">{step.title}</h3>
                  <p className="type-body text-fg-secondary">{step.description}</p>
                </Card>
              ))}
            </ol>
          </section>

          {/* 3. Actionable checklist */}
          <section aria-labelledby="checklist-heading" className="mb-16">
            <Overline className="mb-3">Checklist</Overline>
            <h2 id="checklist-heading" className="mb-4 type-h2 text-fg">
              Verification &amp; Deployment Checklist
            </h2>
            <Card tone="accent" padding="lg">
              <ul className="space-y-4">
                {post.checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckSquare {...icon.md} className="mt-0.5 shrink-0 text-accent-text" />
                    <span className="type-body-sm font-medium text-fg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          {/* 4. CTA */}
          <CtaBand
            inset
            id="post-cta-heading"
            title="Want us to implement this for your store?"
            lead="Request a free engineering audit. We will review your current technical setup and provide an actionable growth roadmap."
            actions={
              <ButtonLink href="/contact" trailingIcon={<ArrowUpRight {...icon.sm} />}>
                Request Free Store Audit
              </ButtonLink>
            }
          />
        </Container>
      </article>
    </>
  );
}
