"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar, FileSearch, MousePointerClick, ScanSearch, Mail, PackageCheck, BookOpen } from "lucide-react";
import { blogPostsList, blogPillars } from "@/lib/blogData";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChoiceChip } from "@/components/ui/Field";
import { EmptyState } from "@/components/ui/Feedback";
import { icon } from "@/components/ui/icon";
import { TopicCover, type TopicTone } from "@/components/ui/TopicCover";

/** Same colour per topic as the matching service card on /services. */
const TOPICS: Record<string, { tone: TopicTone; icon: React.ElementType }> = {
  "Google Ads": { tone: "amber", icon: MousePointerClick },
  "Search & AI Visibility": { tone: "teal", icon: ScanSearch },
  "Email & SMS Marketing": { tone: "blue", icon: Mail },
  "Order Automation": { tone: "green", icon: PackageCheck },
};
const DEFAULT_TOPIC = { tone: "teal" as const, icon: BookOpen };

export default function BlogHubClient() {
  const [selectedPillar, setSelectedPillar] = useState<string>("All");

  const filteredPosts =
    selectedPillar === "All"
      ? blogPostsList
      : blogPostsList.filter((post) => post.pillar === selectedPillar);

  return (
    <div className="bg-bg">
      <PageHero
        overline="Marketing Insights & Playbooks"
        title="Practical guides on ecommerce ads, AI search, email and automation."
        lead="No generic fluff or AI-spun filler. Step-by-step checklists and strategies for growing an online store, written for store owners and marketers."
      />

      <Section tone="subtle" aria-label="Articles">
        <Container>
          {/* Pillar filter */}
          <div
            role="group"
            aria-label="Filter articles by topic"
            className="-mx-[var(--gutter)] mb-10 flex gap-2 overflow-x-auto px-[var(--gutter)] pb-2 md:mx-0 md:flex-wrap md:px-0"
          >
            {blogPillars.map((pillar) => (
              <ChoiceChip
                key={pillar}
                selected={selectedPillar === pillar}
                onClick={() => setSelectedPillar(pillar)}
                className="shrink-0 whitespace-nowrap"
              >
                {pillar}
              </ChoiceChip>
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} shown
          </p>

          {filteredPosts.length === 0 ? (
            <EmptyState
              icon={<FileSearch {...icon.md} />}
              title="No articles in this topic yet"
              action={
                <Button variant="secondary" size="sm" onClick={() => setSelectedPillar("All")}>
                  Show all articles
                </Button>
              }
            />
          ) : (
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card
                  as="li"
                  key={post.slug}
                  padding="none"
                  interactive
                  className="group flex flex-col overflow-hidden"
                >
                  <TopicCover
                    {...(TOPICS[post.pillar] ?? DEFAULT_TOPIC)}
                    label={post.pillar}
                    meta={
                      <>
                        <Clock {...icon.sm} size={14} />
                        {post.readTime}
                      </>
                    }
                  />
                  <article className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <h2 className="mb-3 type-h4 text-fg">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="rounded-sm after:absolute after:inset-0 after:rounded-lg after:content-['']"
                        >
                          {post.title}
                        </Link>
                      </h2>

                      <p className="mb-6 type-body-sm text-fg-secondary">{post.summary}</p>
                    </div>

                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <span className="flex items-center gap-1 type-caption text-fg-muted">
                        <Calendar {...icon.sm} size={14} />
                        {post.date}
                      </span>
                      <span aria-hidden className="inline-flex items-center gap-1 type-body-sm font-bold text-accent-text">
                        Read article
                        <ArrowUpRight
                          {...icon.sm}
                          className="transition-transform duration-200 ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </article>
                </Card>
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </div>
  );
}
