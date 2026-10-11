import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { listing } from "@/lib/paglagpt/listing";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-reading px-4 py-16">
        <p className="text-caption font-medium uppercase tracking-[0.08em] text-muted">
          Required for GPT Store
        </p>
        <h1 className="mt-2 text-title font-light tracking-[-0.02em]">
          Privacy policy
        </h1>
        <p className="mt-3 text-small text-muted">
          Last updated 11 September 2026 · Builder: {listing.builder.name}
        </p>

        <div className="prose-pagla mt-10 space-y-8 text-pretty">
          <section>
            <h2 className="text-h4 font-medium">Who we are</h2>
            <p className="mt-2 text-small leading-relaxed text-ink">
              PaglaGPT is the official assistant of PaglaAI (
              <a href={listing.builder.website}>{listing.builder.website}</a>
              ). This policy explains what happens to information you provide
              when you use this listing. PaglaGPT is not made or endorsed by
              OpenAI.
            </p>
          </section>

          <section>
            <h2 className="text-h4 font-medium">Categories of data</h2>
            <p className="mt-2 text-small leading-relaxed">
              We process the text you type into a chat, including any files you
              paste as text. We do not ask for accounts, payment card data,
              government identifiers, health information, or access credentials.
              Do not send those. If you paste a secret, rotate it.
            </p>
          </section>

          <section>
            <h2 className="text-h4 font-medium">Purposes of use</h2>
            <p className="mt-2 text-small leading-relaxed">
              Conversation text is used only to generate a reply from PaglaGPT.
              We do not build advertising profiles, sell data, or train a
              separate public model from your chats in this app.
            </p>
          </section>

          <section>
            <h2 className="text-h4 font-medium">Recipients</h2>
            <p className="mt-2 text-small leading-relaxed">
              Prompts are sent to the model provider that powers this preview
              (xAI) so a reply can be generated. Hosting for the app may see
              standard request logs (time, path, status). PaglaAI staff may
              review a report you send to{" "}
              <a href={listing.supportPath}>{listing.builder.support}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-h4 font-medium">Retention</h2>
            <p className="mt-2 text-small leading-relaxed">
              Chats in this app are stored on your device in local browser
              storage. They stay until you delete a conversation or clear site
              data. Server-side prompts are not kept as a product database in
              this listing.
            </p>
          </section>

          <section>
            <h2 className="text-h4 font-medium">Your controls</h2>
            <p className="mt-2 text-small leading-relaxed">
              Delete any conversation from the chat sidebar. Clear this site’s
              data in your browser to remove remaining local history. Contact{" "}
              {listing.builder.support} for privacy questions.
            </p>
          </section>

          <section>
            <h2 className="text-h4 font-medium">Children</h2>
            <p className="mt-2 text-small leading-relaxed">
              PaglaGPT is designed for a general audience 13 and older. It is
              not directed at children under 13.
            </p>
          </section>
        </div>

        <p className="mt-12 text-small text-muted">
          <Link to="/" className="underline underline-offset-4">
            Back to the listing
          </Link>
        </p>
      </main>
    </div>
  );
}
