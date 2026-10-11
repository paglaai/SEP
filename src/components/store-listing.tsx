import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Shield } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import {
  complianceChecks,
  ecosystemProducts,
  listing,
} from "@/lib/paglagpt/listing";

function FieldLabel({ children }: { children: string }) {
  return (
    <p className="text-caption font-medium uppercase tracking-[0.08em] text-muted">
      {children}
    </p>
  );
}

export function StoreListing() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main id="main">
        <section className="mx-auto max-w-[75rem] px-4 py-12 sm:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex shrink-0 items-start gap-6">
              <div className="size-32 overflow-hidden rounded-xl bg-icon-canvas sm:size-40">
                <img
                  src="/brand/paglaai-dp.png"
                  alt="PaglaGPT profile"
                  width={160}
                  height={160}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <FieldLabel>GPT Store listing</FieldLabel>
              <h1 className="mt-2 text-display font-light tracking-[-0.02em] text-balance">
                {listing.name}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-muted">
                <span className="inline-flex items-center gap-1.5 text-ink">
                  By {listing.builder.name}
                  <BadgeCheck
                    className="size-4 text-ink"
                    strokeWidth={1.75}
                    aria-label="Official PaglaAI builder"
                  />
                </span>
                <span aria-hidden="true">·</span>
                <span>{listing.category}</span>
                <span aria-hidden="true">·</span>
                <span>Official listing</span>
              </div>
              <p className="mt-5 max-w-reading text-pretty text-bodyLarge text-ink sm:text-[1.125rem]">
                {listing.shortDescription}
              </p>
              <p className="mt-3 text-small text-muted">{listing.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/chat"
                  className="inline-flex min-h-11 items-center rounded-md bg-ink px-5 text-small font-medium text-paper"
                >
                  Start chat
                </Link>
                <Link
                  to="/configure"
                  className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-small font-medium text-ink"
                >
                  View configuration
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[75rem] px-4 py-12">
            <FieldLabel>Conversation starters</FieldLabel>
            <h2 className="mt-2 text-h3 font-medium tracking-[-0.01em]">
              How this GPT is meant to be used
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {listing.conversationStarters.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/chat"
                    search={{ q: s.prompt }}
                    className="flex h-full min-h-28 flex-col justify-between rounded-xl border border-border bg-paper p-5 transition-[background-color] duration-[var(--pagla-duration-fast)] hover:bg-surface"
                  >
                    <p className="text-small font-medium text-muted">{s.title}</p>
                    <p className="mt-3 text-pretty text-[0.975rem] leading-snug text-ink">
                      {s.prompt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto grid max-w-[75rem] gap-12 px-4 py-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
            <div>
              <FieldLabel>About this GPT</FieldLabel>
              <h2 className="mt-2 text-h3 font-medium tracking-[-0.01em]">
                Local-first architect, official PaglaAI app
              </h2>
              <div className="prose-pagla mt-6 space-y-4 text-pretty text-[1.05rem] text-ink">
                {listing.longDescription.split("\n\n").map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ul className="mt-8 space-y-3">
                {listing.capabilities
                  .filter((c) => c.on)
                  .map((c) => (
                    <li key={c.id} className="flex gap-3 text-small">
                      <span className="mt-2 size-1.5 shrink-0 rounded-pill bg-ink" />
                      <span>
                        <span className="font-medium">{c.label}.</span>{" "}
                        <span className="text-muted">{c.note}</span>
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl border border-border p-5">
                <FieldLabel>Builder</FieldLabel>
                <p className="mt-3 text-h4 font-medium">{listing.builder.name}</p>
                <p className="mt-1 text-small text-muted">
                  {listing.builder.house}
                </p>
                <p className="mt-1 text-small text-muted">
                  {listing.builder.location}
                </p>
                <a
                  href={listing.builder.website}
                  className="mt-4 inline-flex min-h-11 items-center gap-1 text-small text-ink underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  paglaai.space
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                </a>
              </div>

              <div className="rounded-xl border border-border p-5">
                <FieldLabel>Capabilities</FieldLabel>
                <ul className="mt-4 space-y-2">
                  {listing.capabilities.map((c) => (
                    <li
                      key={c.id}
                      className="flex items-center justify-between text-small"
                    >
                      <span>{c.label}</span>
                      <span className={c.on ? "text-ink" : "text-muted"}>
                        {c.on ? "On" : "Off"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border p-5">
                <FieldLabel>Trust</FieldLabel>
                <p className="mt-3 flex items-start gap-2 text-small text-muted">
                  <Shield className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
                  Public listing. Privacy policy published. No ads. No OpenAI
                  endorsement implied.
                </p>
                <Link
                  to="/privacy"
                  className="mt-3 inline-flex min-h-11 items-center text-small text-ink underline-offset-4 hover:underline"
                >
                  Privacy policy
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[75rem] px-4 py-12">
            <FieldLabel>GPT Store checklist</FieldLabel>
            <h2 className="mt-2 text-h3 font-medium tracking-[-0.01em]">
              Built to the public listing bar
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {complianceChecks.map((c) => (
                <li
                  key={c.id}
                  className="rounded-lg border border-border px-4 py-4"
                >
                  <p className="text-small font-medium text-ink">{c.label}</p>
                  <p className="mt-1 text-small text-muted">{c.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[75rem] px-4 py-12">
            <FieldLabel>Ecosystem</FieldLabel>
            <h2 className="mt-2 text-h3 font-medium tracking-[-0.01em]">
              Same mark, many surfaces
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystemProducts.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-24 flex-col justify-between rounded-lg border border-border p-4 hover:bg-surface"
                  >
                    <span className="text-small font-medium">{p.name}</span>
                    <span className="text-caption text-muted">{p.role}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[75rem] flex-col gap-3 px-4 py-8 text-caption text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {listing.name} · {listing.builder.name} · Not affiliated with OpenAI
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/configure" className="hover:text-ink">
              Configuration
            </Link>
            <Link to="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <a href={listing.builder.github} className="hover:text-ink">
              GitHub
            </a>
            <a href={listing.supportPath} className="hover:text-ink">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

