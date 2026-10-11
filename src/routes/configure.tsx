import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy } from "lucide-react";
import { useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  charCounts,
  complianceChecks,
  instructions,
  kitMarkdown,
  knowledge,
  listing,
} from "@/lib/paglagpt/listing";

export const Route = createFileRoute("/configure")({
  component: ConfigurePage,
});

function ConfigurePage() {
  const counts = charCounts();
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-[75rem] px-4 py-12 sm:py-16">
        <p className="text-caption font-medium uppercase tracking-[0.08em] text-muted">
          GPT editor fields
        </p>
        <h1 className="mt-2 text-title font-light tracking-[-0.02em] text-balance">
          Configuration kit
        </h1>
        <p className="mt-4 max-w-reading text-pretty text-small text-muted">
          Paste-ready values for the OpenAI GPT editor, written to the GPT Store
          listing rules: clear name, accurate description, realistic starters,
          instructions that define behavior, published privacy policy, and no
          implied OpenAI endorsement.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CopyButton label="Copy entire kit" text={kitMarkdown()} />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.7fr)]">
          <div className="space-y-8">
            <Field
              label="Profile picture"
              hint="Square canvas. Pagla Face only — never circled."
            >
              <div className="size-24 overflow-hidden rounded-lg bg-icon-canvas">
                <img
                  src="/brand/paglaai-dp.png"
                  alt="PaglaGPT profile picture"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
            </Field>

            <Field
              label="Name"
              hint={`${counts.name} / 50 characters`}
              copy={listing.name}
            >
              <p className="text-h4 font-medium">{listing.name}</p>
            </Field>

            <Field
              label="Description"
              hint={`${counts.description} / 300 characters`}
              copy={listing.shortDescription}
            >
              <p className="text-pretty text-small leading-relaxed">
                {listing.shortDescription}
              </p>
            </Field>

            <Field label="Category" copy={listing.category}>
              <p className="text-small">{listing.category}</p>
            </Field>

            <Field label="Conversation starters" hint="Four high-value prompts">
              <ol className="space-y-3">
                {listing.conversationStarters.map((s, i) => (
                  <li
                    key={s.id}
                    className="flex items-start justify-between gap-3 rounded-lg border border-border px-4 py-3"
                  >
                    <p className="text-small">
                      <span className="text-muted">{i + 1}.</span> {s.prompt}
                    </p>
                    <CopyButton text={s.prompt} />
                  </li>
                ))}
              </ol>
            </Field>

            <Field
              label="Instructions"
              hint={`${counts.instructions} characters · under the 8 000 editor budget`}
              copy={instructions}
            >
              <pre className="max-h-[28rem] overflow-auto whitespace-pre-wrap rounded-lg bg-surface p-4 font-sans text-small leading-relaxed">
                {instructions}
              </pre>
            </Field>

            <Field
              label="Knowledge"
              hint={`${counts.knowledge} characters · ecosystem snapshot`}
              copy={knowledge}
            >
              <pre className="max-h-72 overflow-auto whitespace-pre-wrap rounded-lg bg-surface p-4 font-sans text-small leading-relaxed">
                {knowledge}
              </pre>
            </Field>

            <Field label="Capabilities">
              <ul className="divide-y divide-border rounded-lg border border-border">
                {listing.capabilities.map((c) => (
                  <li
                    key={c.id}
                    className="flex items-start justify-between gap-4 px-4 py-3 text-small"
                  >
                    <span>
                      <span className="font-medium">{c.label}</span>
                      <span className="mt-1 block text-muted">{c.note}</span>
                    </span>
                    <span className={c.on ? "text-ink" : "text-muted"}>
                      {c.on ? "On" : "Off"}
                    </span>
                  </li>
                ))}
              </ul>
            </Field>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border p-5">
              <p className="text-caption font-medium uppercase tracking-[0.08em] text-muted">
                Publishing
              </p>
              <dl className="mt-4 space-y-3 text-small">
                <Row k="Visibility" v={listing.visibility} />
                <Row k="Builder" v={listing.builder.name} />
                <Row k="Website" v="paglaai.space" />
                <Row k="Support" v={listing.builder.support} />
                <Row k="Privacy URL" v={listing.privacyPath} />
                <Row k="Model" v={listing.recommendedModel} />
              </dl>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="text-caption font-medium uppercase tracking-[0.08em] text-muted">
                Store checks
              </p>
              <ul className="mt-4 space-y-3">
                {complianceChecks.map((c) => (
                  <li key={c.id} className="flex gap-2 text-small">
                    <Check
                      className="mt-0.5 size-4 shrink-0"
                      strokeWidth={1.75}
                    />
                    <span>
                      <span className="font-medium">{c.label}.</span>{" "}
                      <span className="text-muted">{c.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  hint,
  copy,
  children,
}: {
  label: string;
  hint?: string;
  copy?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h2 className="text-small font-medium">{label}</h2>
          {hint ? <p className="text-caption text-muted">{hint}</p> : null}
        </div>
        {copy ? <CopyButton text={copy} /> : null}
      </div>
      {children}
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-muted">{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}

function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <Button
      variant="ghost"
      className="min-h-11 px-3 text-caption"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setDone(true);
        window.setTimeout(() => setDone(false), 1500);
      }}
    >
      {done ? (
        <Check className="size-3.5" strokeWidth={1.75} />
      ) : (
        <Copy className="size-3.5" strokeWidth={1.75} />
      )}
      {done ? "Copied" : label}
    </Button>
  );
}
