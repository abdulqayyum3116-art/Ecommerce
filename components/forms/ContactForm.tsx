"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    storeUrl: "",
    monthlyOrders: "< 100",
    primaryConcern: "Mobile Speed & CRO",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const concerns = [
    "Mobile Speed & CRO",
    "Shopify / Next.js Rebuild",
    "Google Shopping / GEO",
    "Klaviyo Cart Recovery",
    "Inventory & Warehouse Sync",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      // NOTE: In alignment with SCOPE RULES §7:
      // No external CRM or email API endpoint is currently configured in this repository.
      // TODO: Connect this form submission to CodeSquad CRM / Email API endpoint (e.g. HubSpot, Postmark, or Resend).
      
      // Simulate network request with validation
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (!formData.name || !formData.email || !formData.storeUrl) {
        throw new Error("Please fill in all required fields (Name, Email, Store URL).");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-8 sm:p-10 text-center shadow-sm">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-2xs">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-950 mb-2 font-serif">
          Audit Request Received
        </h3>
        <p className="text-emerald-800 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="font-semibold text-emerald-950">{formData.name}</strong>. Our engineering team will review{" "}
          <span className="font-mono font-semibold bg-emerald-100/70 px-2 py-0.5 rounded text-emerald-900">{formData.storeUrl}</span> and deliver your performance audit within [RESPONSE TIME — TO CONFIRM].
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              storeUrl: "",
              monthlyOrders: "< 100",
              primaryConcern: "Mobile Speed & CRO",
              message: "",
            });
          }}
          className="text-xs font-semibold text-emerald-900 underline hover:text-emerald-700 cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6"
    >
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <Sparkles className="w-4 h-4 text-blue-600" />
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
          Store Details &amp; Priority Diagnostic
        </span>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Primary Concern Pills */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2.5">
          Primary Growth Bottleneck
        </label>
        <div className="flex flex-wrap gap-2">
          {concerns.map((c) => {
            const isSelected = formData.primaryConcern === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFormData({ ...formData, primaryConcern: c })}
                className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Sarah Jenkins"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Work Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="sarah@yourbrand.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50"
        />
      </div>

      {/* Store URL */}
      <div>
        <label htmlFor="storeUrl" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Store Website URL <span className="text-red-500">*</span>
        </label>
        <input
          id="storeUrl"
          type="url"
          required
          value={formData.storeUrl}
          onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
          placeholder="https://yourstore.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50"
        />
      </div>

      {/* Monthly Orders Select */}
      <div>
        <label htmlFor="monthlyOrders" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Estimated Monthly Orders (Optional)
        </label>
        <select
          id="monthlyOrders"
          value={formData.monthlyOrders}
          onChange={(e) => setFormData({ ...formData, monthlyOrders: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 bg-slate-50/50"
        >
          <option value="< 100">&lt; 100 orders / month</option>
          <option value="100 - 500">100 – 500 orders / month</option>
          <option value="500 - 2,000">500 – 2,000 orders / month</option>
          <option value="2,000+">2,000+ orders / month</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          What is your primary conversion or technical challenge?
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. Our mobile product pages load in 4.5s and checkout abandonment is high..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center text-base font-semibold text-white bg-slate-950 hover:bg-slate-800 py-4 rounded-xl transition-all shadow-sm hover:shadow disabled:opacity-50 cursor-pointer"
      >
        {submitting ? "Analyzing Store..." : "Request Free Store Audit"}
        <ArrowRight className="ml-2 w-4 h-4 text-slate-400" />
      </button>

      <p className="text-center text-xs text-slate-400">
        Strict privacy: We never share store metrics or customer data with third parties.
      </p>
    </form>
  );
}
