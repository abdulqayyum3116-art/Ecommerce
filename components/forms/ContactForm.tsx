"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea, ChoiceChip } from "@/components/ui/Field";
import { Alert } from "@/components/ui/Feedback";
import { icon } from "@/components/ui/icon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    storeUrl: "",
    phone: "",
    primaryConcern: "Google Ads",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const concerns = [
    "Google Ads",
    "Meta Ads",
    "SEO & AI Search",
    "Social Media Handling",
    "Email & SMS",
    "Order Automation",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErrorMessage("");

    try {
      if (!formData.name || !formData.email || !formData.phone.trim()) {
        throw new Error("Please fill in all required fields (Name, Email, Phone Number).");
      }

      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "We couldn't save your inquiry. Please try again.");
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
          Thank you, <strong className="font-bold">{formData.name}</strong>. Our marketing team will review{" "}
          {formData.storeUrl ? (
            <code className="rounded-sm bg-surface-raised px-2 py-0.5 type-code">{formData.storeUrl}</code>
          ) : (
            "your request"
          )} and get back to you with your audit.
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
              phone: "",
              primaryConcern: "Google Ads",
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
        <ClipboardList {...icon.sm} className="text-accent-text" />
        <span className="type-overline text-fg">Your Store &amp; Marketing Goals</span>
      </div>

      {errorMessage && (
        <Alert tone="danger" title="Please check the form">
          {errorMessage}
        </Alert>
      )}

      {/* Primary concern */}
      <fieldset>
        <legend className="mb-3 type-body-sm font-bold text-fg">Where do you want to grow first?</legend>
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

      <Field label="Phone Number" required error={requiredError(formData.phone.trim(), "Phone number")}>
        {(field) => (
          <Input
            {...field}
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +1 555 123 4567"
          />
        )}
      </Field>

      <Field label="Store Website URL" optional>
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

      <Field label="What is your biggest marketing challenge right now?">
        {(field) => (
          <Textarea
            {...field}
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="e.g. Our Meta ads stopped performing and we have no abandoned cart emails..."
          />
        )}
      </Field>

      <Button
        type="submit"
        size="lg"
        fullWidth
        loading={submitting}
        loadingLabel="Sending..."
        trailingIcon={<ArrowRight {...icon.sm} />}
      >
        Request Free Marketing Audit
      </Button>

      <p className="text-center type-caption text-fg-muted">
        Strict privacy: We never share store metrics or customer data with third parties.
      </p>
    </form>
  );
}
