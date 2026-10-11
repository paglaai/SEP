import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PaglaFace } from "@/components/pagla-face";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center text-ink">
      <p className="text-caption font-medium uppercase tracking-[0.08em] text-muted">
        Error
      </p>
      <h1 className="text-h3 font-medium tracking-[-0.01em]">Something went wrong</h1>
      <p className="max-w-md text-pretty text-small text-muted break-words">
        {errorMessage(error)}
      </p>
      <Link
        to="/"
        className="inline-flex min-h-11 items-center rounded-md bg-ink px-4 text-small font-medium text-paper"
      >
        Return to PaglaGPT
      </Link>
    </main>
  );
}

export function NotFoundComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center text-ink">
      <PaglaFace size="lg" alt="" />
      <h1 className="text-h3 font-medium tracking-[-0.01em]">Page not found</h1>
      <p className="max-w-md text-pretty text-small text-muted">
        This path is not part of the PaglaGPT listing. Return to the store page
        or start a chat.
      </p>
      <div className="flex gap-3">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded-md bg-ink px-4 text-small font-medium text-paper"
        >
          Store listing
        </Link>
        <Link
          to="/chat"
          className="inline-flex min-h-11 items-center rounded-md border border-border px-4 text-small font-medium text-ink"
        >
          Start chat
        </Link>
      </div>
    </main>
  );
}
