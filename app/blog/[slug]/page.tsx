import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckSquare, ArrowUpRight } from "lucide-react";
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
      <article className="bg-[#FAFBFC]">
        {/* Top Header Banner (Dark Mesh) */}
        <section className="pt-20 pb-24 border-b border-white/[0.08] mesh-gradient-hero grain text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back to Blog */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-1.5 w-4 h-4" />
                Back to Ecommerce Insights
              </Link>
            </div>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mb-6">
              <span className="font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
                {post.pillar}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">{post.summary}</p>
          </div>
        </section>

        {/* Content Body */}
        <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. The Core Problem */}
          <section className="mb-14">
            <span className="eyebrow-light mb-3">
              The Context
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 mt-2">
              The Real Bottleneck
            </h2>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-slate-700 text-base leading-relaxed shadow-2xs">
              {post.problem}
            </div>
          </section>

          {/* 2. Practical Steps */}
          <section className="mb-14">
            <span className="eyebrow-light mb-3">
              Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 mt-2">
              Practical Implementation Steps
            </h2>
            <div className="space-y-6">
              {post.steps.map((step, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl p-7 bg-white shadow-2xs">
                  <h3 className="text-xl font-bold text-slate-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Actionable Checklist */}
          <section className="mb-16">
            <span className="eyebrow-light mb-3">
              Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 mt-2">
              Verification &amp; Deployment Checklist
            </h2>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <ul className="space-y-3.5">
                {post.checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. CTA Back to /contact */}
          <section className="p-8 sm:p-12 rounded-2xl bg-[#0B0F1A] text-white grain border border-white/[0.08] text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
                Want us to implement this for your store?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-6">
                Request a free engineering audit. We will review your current technical setup and provide an actionable growth roadmap.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-white btn-glow px-7 py-3.5 rounded-xl transition-all shadow-sm"
              >
                Request Free Store Audit
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-blue-100" />
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
