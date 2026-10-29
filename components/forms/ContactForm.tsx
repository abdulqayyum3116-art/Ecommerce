"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea, ChoiceChip } from "@/components/ui/Field";
import { Alert } from "@/components/ui/Feedback";
import { icon } from "@/components/ui/icon";

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

  // Show field-level errors only after a failed submit.
  const showFieldErrors = Boolean(errorMessage);
  const requiredError = (value: string, label: string) =>
    showFieldErrors && !value ? `${label} is required.` : undefined;

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-success-border bg-success-bg p-8 text-center text-success-text sm:p-10"
      >
        <span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-surface-raised text-success-solid shadow-elevation-1">
          <CheckCircle2 {...icon.lg} size={28} />
        </span>
        <h3 className="mb-2 type-h3">Audit Request Received</h3>
        <p className="mx-auto mb-6 max-w-md type-body-sm">
          Thank you, <strong className="font-bold">{formData.name}</strong>. Our engineering team will review{" "}
          <code className="rounded-sm bg-surface-raised px-2 py-0.5 type-code">{formData.storeUrl}</code> and deliver your performance audit within 4 weeks.
        </p>
        <Button
          variant="secondary"
          size="sm"
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
        >
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-border bg-surface-raised p-6 shadow-elevation-3 sm:p-10"
    >
      <div className="flex items-center gap-2 border-b border-border pb-4">
        <Sparkles {...icon.sm} className="text-accent-text" />
        <span className="type-overline text-fg">Store Details &amp; Priority Diagnostic</span>
      </div>

      {errorMessage && (
        <Alert tone="danger" title="Please check the form">
          {errorMessage}
        </Alert>
      )}

      {/* Primary concern */}
      <fieldset>
        <legend className="mb-3 type-body-sm font-bold text-fg">Primary Growth Bottleneck</legend>
        <div className="flex flex-wrap gap-2">
          {concerns.map((c) => (
            <ChoiceChip
              key={c}
              selected={formData.primaryConcern === c}
              onClick={() => setFormData({ ...formData, primaryConcern: c })}
            >
              {c}
            </ChoiceChip>
          ))}
        </div>
      </fieldset>

      <Field label="Full Name" required error={requiredError(formData.name, "Full name")}>
        {(field) => (
          <Input
            {...field}
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Sarah Jenkins"
          />
        )}
      </Field>

      <Field label="Work Email" required error={requiredError(formData.email, "Work email")}>
        {(field) => (
          <Input
            {...field}
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="sarah@yourbrand.com"
          />
        )}
      </Field>

      <Field label="Store Website URL" required error={requiredError(formData.storeUrl, "Store URL")}>
        {(field) => (
          <Input
            {...field}
            type="url"
            autoComplete="url"
            value={formData.storeUrl}
            onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
            placeholder="https://yourstore.com"
          />
        )}
      </Field>

      <Field label="Estimated Monthly Orders" optional>
        {(field) => (
          <Select
            {...field}
            value={formData.monthlyOrders}
            onChange={(e) => setFormData({ ...formData, monthlyOrders: e.target.value })}
          >
            <option value="< 100">&lt; 100 orders / month</option>
            <option value="100 - 500">100 – 500 orders / month</option>
            <option value="500 - 2,000">500 – 2,000 orders / month</option>
            <option value="2,000+">2,000+ orders / month</option>
          </Select>
        )}
      </Field>

      <Field label="What is your primary conversion or technical challenge?">
        {(field) => (
          <Textarea
            {...field}
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="e.g. Our mobile product pages load in 4.5s and checkout abandonment is high..."
          />
        )}
      </Field>

      <Button
        type="submit"
        size="lg"
        fullWidth
        loading={submitting}
        loadingLabel="Analyzing Store..."
        trailingIcon={<ArrowRight {...icon.sm} />}
      >
        Request Free Store Audit
      </Button>

      <p className="text-center type-caption text-fg-muted">
        Strict privacy: We never share store metrics or customer data with third parties.
      </p>
    </form>
  );
}
