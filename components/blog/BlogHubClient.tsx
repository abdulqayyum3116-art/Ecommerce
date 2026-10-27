"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { blogPostsList, blogPillars } from "@/lib/blogData";

export default function BlogHubClient() {
  const [selectedPillar, setSelectedPillar] = useState<string>("All");

  const filteredPosts =
    selectedPillar === "All"
      ? blogPostsList
      : blogPostsList.filter((post) => post.pillar === selectedPillar);

  return (
    <div className="bg-[#FAFBFC]">
      {/* Header (Dark Mesh) */}
      <section className="pt-20 pb-24 border-b border-white/[0.08] mesh-gradient-hero grain text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow-dark mb-6">
              Technical Insights &amp; Playbooks
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Practical guides on ecommerce engineering, CRO, and AI search.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              No generic fluff or AI-spun filler. Actionable checklists, architecture decisions, and code-level optimization strategies written for store operators.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pillar Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
            {blogPillars.map((pillar) => {
              const isSelected = selectedPillar === pillar;
              return (
                <button
                  key={pillar}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-950 text-white shadow-sm"
                      : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {pillar}
                </button>
              );
            })}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="card-light p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">
                      {post.pillar}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950 mb-3 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Read article
                    <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
