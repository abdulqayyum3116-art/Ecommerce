"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight, Trash2, Plus, Search, Inbox, Zap, ShoppingCart } from "lucide-react";
import { Button, ButtonLink, TextLink } from "@/components/ui/Button";
import { Field, Input, Select, Textarea, Checkbox, Radio, Switch, ChoiceChip } from "@/components/ui/Field";
import { Card, IconTile } from "@/components/ui/Card";
import { Badge, StatusDot } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Dialog } from "@/components/ui/Dialog";
import { Alert, Toast, ToastRegion, EmptyState, Skeleton, SkeletonCard } from "@/components/ui/Feedback";
import { Table, Th, Td, Pagination } from "@/components/ui/Table";
import { icon } from "@/components/ui/icon";

/** Renders the same content in the light and the dark theme, side by side. */
export function ThemePair({ children, stack = false }: { children: ReactNode; stack?: boolean }) {
  return (
    <div className={stack ? "grid gap-4" : "grid gap-4 xl:grid-cols-2"}>
      {(["light", "dark"] as const).map((t) => (
        <div key={t} data-theme={t} className="min-w-0 rounded-lg border border-border bg-bg p-4 text-fg sm:p-6">
          <p className="mb-4 type-overline text-fg-muted">{t}</p>
          {children}
        </div>
      ))}
    </div>
  );
}

export function DemoBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-12">
      <h3 className="mb-4 type-h4 text-fg">{title}</h3>
      {children}
    </div>
  );
}

export function ButtonsDemo() {
  return (
    <ThemePair>
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive" leadingIcon={<Trash2 {...icon.sm} />}>
            Destructive
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Large
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button loading loadingLabel="Saving…">
            Save
          </Button>
          <Button variant="secondary" loading>
            Loading
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="ghost" leadingIcon={<Plus {...icon.sm} />}>
            With icon
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <ButtonLink href="/styleguide" variant="secondary" size="sm">
            Link styled as button
          </ButtonLink>
          <TextLink href="/styleguide">
            Text link <ArrowUpRight {...icon.sm} />
          </TextLink>
        </div>
        <p className="type-caption text-fg-muted">Hover, press and Tab to see interactive states.</p>
      </div>
    </ThemePair>
  );
}

export function FormsDemo() {
  const [on, setOn] = useState(true);
  const [chip, setChip] = useState("CRO");
  return (
    <ThemePair>
      <div className="grid gap-5">
        <Field label="Store URL" hint="Include https://">
          {(f) => <Input {...f} placeholder="https://yourstore.com" />}
        </Field>
        <Field label="Work email" required error="Work email is required.">
          {(f) => <Input {...f} type="email" placeholder="sarah@yourbrand.com" />}
        </Field>
        <Field label="Disabled">
          {(f) => <Input {...f} disabled value="Read only value" />}
        </Field>
        <Field label="Monthly orders" optional>
          {(f) => (
            <Select {...f} defaultValue="b">
              <option value="a">&lt; 100 orders / month</option>
              <option value="b">100 – 500 orders / month</option>
            </Select>
          )}
        </Field>
        <Field label="Message">{(f) => <Textarea {...f} rows={2} placeholder="What should we look at?" />}</Field>
        <fieldset className="flex flex-wrap gap-x-6 gap-y-3">
          <legend className="mb-2 type-body-sm font-bold text-fg">Choices</legend>
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Unchecked" />
          <Checkbox label="Disabled" disabled />
          <Radio name="r" label="Radio A" defaultChecked />
          <Radio name="r" label="Radio B" />
        </fieldset>
        <div className="flex flex-wrap items-center gap-6">
          <Switch checked={on} onCheckedChange={setOn} label={on ? "Notifications on" : "Notifications off"} />
          <Switch checked={false} onCheckedChange={() => {}} label="Disabled" disabled />
        </div>
        <div className="flex flex-wrap gap-2">
          {["CRO", "SEO / GEO", "Retention"].map((c) => (
            <ChoiceChip key={c} selected={chip === c} onClick={() => setChip(c)}>
              {c}
            </ChoiceChip>
          ))}
        </div>
      </div>
    </ThemePair>
  );
}

export function CardsDemo() {
  return (
    <ThemePair>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <IconTile className="mb-4">
            <Zap {...icon.lg} />
          </IconTile>
          <p className="type-h4">Default card</p>
          <p className="mt-2 type-body-sm text-fg-secondary">Surface, border, elevation-1.</p>
        </Card>
        <Card interactive tabIndex={0}>
          <IconTile tone="solid" className="mb-4">
            <ShoppingCart {...icon.lg} />
          </IconTile>
          <p className="type-h4">Interactive</p>
          <p className="mt-2 type-body-sm text-fg-secondary">Lifts to elevation-3 on hover.</p>
        </Card>
        <Card tone="subtle">
          <p className="type-h4">Subtle</p>
          <p className="mt-2 type-body-sm text-fg-secondary">For nested or secondary content.</p>
        </Card>
        <Card tone="accent">
          <p className="type-h4">Accent</p>
          <p className="mt-2 type-body-sm text-fg-secondary">Callouts and checklists.</p>
        </Card>
      </div>
    </ThemePair>
  );
}

export function BadgesDemo() {
  return (
    <ThemePair>
      <div className="flex flex-wrap gap-2">
        <Badge>Neutral</Badge>
        <Badge tone="accent">Accent</Badge>
        <Badge tone="outline">Outline</Badge>
        <Badge tone="success" icon={<StatusDot />}>
          Live
        </Badge>
        <Badge tone="warning">To confirm</Badge>
        <Badge tone="danger">Failed</Badge>
        <Badge tone="info">Info</Badge>
        <Badge tone="accent" shape="tag">
          Tag shape
        </Badge>
      </div>
    </ThemePair>
  );
}

export function TabsDemo() {
  const items = [
    { id: "attract", label: "Attract", meta: "01" },
    { id: "convert", label: "Convert", meta: "02" },
    { id: "retain", label: "Retain", meta: "03" },
    { id: "repeat", label: "Repeat", meta: "04" },
  ];
  const [a, setA] = useState("attract");
  const [b, setB] = useState("convert");
  return (
    <ThemePair>
      <Tabs label="Underline tabs" items={items} value={a} onChange={setA}>
        <p className="type-body-sm text-fg-secondary">Panel for “{a}”. Use ← → Home End.</p>
      </Tabs>
      <div className="mt-8">
        <Tabs label="Card tabs" variant="cards" items={items} value={b} onChange={setB}>
          <p className="type-body-sm text-fg-secondary">Panel for “{b}”.</p>
        </Tabs>
      </div>
    </ThemePair>
  );
}

export function OverlaysDemo() {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [toasts, setToasts] = useState<number[]>([]);
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary" onClick={() => setModal(true)}>
          Open modal
        </Button>
        <Button variant="secondary" onClick={() => setDrawer(true)}>
          Open drawer
        </Button>
        <Button variant="secondary" onClick={() => setToasts((t) => [...t, Date.now()])}>
          Show toast
        </Button>
      </div>
      <Dialog
        open={modal}
        onClose={() => setModal(false)}
        title="Delete saved audit?"
        description="This removes the report for yourstore.com."
        footer={
          <>
            <Button variant="ghost" onClick={() => setModal(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setModal(false)}>
              Delete
            </Button>
          </>
        }
      >
        <p className="type-body-sm text-fg-secondary">Focus is trapped inside; Esc or the backdrop closes it.</p>
      </Dialog>
      <Dialog open={drawer} onClose={() => setDrawer(false)} title="Filters" variant="drawer">
        <p className="type-body-sm text-fg-secondary">Side drawer — used for the mobile navigation.</p>
      </Dialog>
      <ToastRegion>
        {toasts.map((id) => (
          <Toast key={id} title="Audit request sent" onDismiss={() => setToasts((t) => t.filter((x) => x !== id))}>
            We’ll reply within one business day.
          </Toast>
        ))}
      </ToastRegion>

      <div className="mt-6">
        <ThemePair>
          <div className="grid gap-3">
            <Toast title="Audit request sent">We’ll reply within one business day.</Toast>
            <Toast tone="danger" title="Couldn’t send request" onDismiss={() => {}}>
              Check your connection and try again.
            </Toast>
          </div>
        </ThemePair>
      </div>
    </>
  );
}

export function FeedbackDemo() {
  return (
    <ThemePair>
      <div className="grid gap-3">
        <Alert tone="info" title="Platform architecture">Shopify Plus is the lead platform.</Alert>
        <Alert tone="success">Your audit request has been received.</Alert>
        <Alert tone="warning">Results awaiting client verification.</Alert>
        <Alert tone="danger" title="Please check the form">Store URL is required.</Alert>
      </div>
    </ThemePair>
  );
}

export function DataDemo() {
  const rows = [
    { metric: "Mobile LCP", before: "4.52 s", after: "0.78 s" },
    { metric: "Checkout completion", before: "41.0 %", after: "58.3 %" },
    { metric: "Repeat rate (90-day)", before: "12.4 %", after: "19.1 %" },
  ];
  return (
    <ThemePair>
      <Table>
        <caption className="sr-only">Example metrics (illustrative only)</caption>
        <thead>
          <tr>
            <Th>Metric</Th>
            <Th numeric>Before</Th>
            <Th numeric>After</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.metric} className="transition-colors duration-150 hover:bg-bg-subtle">
              <Td className="font-medium text-fg">{r.metric}</Td>
              <Td numeric>{r.before}</Td>
              <Td numeric>{r.after}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="mt-2 type-caption text-fg-muted">Illustrative values for the styleguide only.</p>
    </ThemePair>
  );
}

export function PaginationDemo() {
  return (
    <div className="rounded-lg border border-border bg-bg p-6">
      <Pagination page={2} pageCount={4} href={() => "/styleguide"} label="Pagination example" />
    </div>
  );
}

export function EmptyLoadingDemo() {
  return (
    <ThemePair>
      <div className="grid gap-6">
        <EmptyState
          icon={<Inbox {...icon.md} />}
          title="No articles in this topic yet"
          action={
            <Button variant="secondary" size="sm" leadingIcon={<Search {...icon.sm} />}>
              Show all articles
            </Button>
          }
        >
          Try another topic or check back soon.
        </EmptyState>
        <div className="grid gap-4 sm:grid-cols-2">
          <SkeletonCard />
          <div className="space-y-3 rounded-lg border border-border bg-surface p-6">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-10 w-1/2 rounded-full" />
          </div>
        </div>
      </div>
    </ThemePair>
  );
}
