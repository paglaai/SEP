import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowUp, Menu, Plus, Square, Trash2, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PaglaFace } from "@/components/pagla-face";
import { RichText } from "@/components/rich-text";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { streamPaglaGPT } from "@/lib/chat-stream";
import { cn } from "@/lib/cn";
import {
  newId,
  useConversations,
  type ChatMessage,
} from "@/lib/conversations";
import { listing } from "@/lib/paglagpt/listing";

export function ChatApp({ initialPrompt }: { initialPrompt?: string }) {
  const conversations = useConversations((s) => s.conversations);
  const activeId = useConversations((s) => s.activeId);
  const ensureActive = useConversations((s) => s.ensureActive);
  const setActive = useConversations((s) => s.setActive);
  const newChat = useConversations((s) => s.newChat);
  const deleteConversation = useConversations((s) => s.deleteConversation);
  const appendMessage = useConversations((s) => s.appendMessage);
  const updateMessage = useConversations((s) => s.updateMessage);
  const renameIfUntitled = useConversations((s) => s.renameIfUntitled);

  const [sidebar, setSidebar] = useState(false);
  const [draft, setDraft] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const startedRef = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const id = activeId;
  const active = conversations.find((c) => c.id === id);
  const messages = active?.messages ?? [];

  useEffect(() => {
    const finish = () => setHydrated(true);
    const persistApi = useConversations.persist;
    if (persistApi.hasHydrated()) finish();
    const unsub = persistApi.onFinishHydration(finish);
    return unsub;
  }, []);

  useEffect(() => {
    if (hydrated) ensureActive();
  }, [hydrated, ensureActive]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages, streaming]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || streaming) return;
    const conversationId = ensureActive();
    setDraft("");
    setError(null);

    const userMsg: ChatMessage = { id: newId(), role: "user", content };
    const assistantId = newId();
    appendMessage(conversationId, userMsg);
    appendMessage(conversationId, { id: assistantId, role: "assistant", content: "" });
    renameIfUntitled(conversationId, content);
    setStreaming(true);

    const history = [
      ...useConversations
        .getState()
        .conversations.find((c) => c.id === conversationId)?.messages ?? [],
    ]
      .filter((m) => m.content.length > 0)
      .slice(-16);

    const controller = new AbortController();
    abortRef.current = controller;
    let assembled = "";

    try {
      await streamPaglaGPT(history, {
        signal: controller.signal,
        onDelta: (chunk) => {
          assembled += chunk;
          updateMessage(conversationId, assistantId, assembled);
        },
      });
      if (!assembled) {
        updateMessage(
          conversationId,
          assistantId,
          "PaglaGPT returned an empty reply. Try again.",
        );
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") {
        if (!assembled) {
          updateMessage(conversationId, assistantId, "Stopped.");
        }
      } else {
        const message =
          err instanceof Error ? err.message : "PaglaGPT could not reply.";
        setError(message);
        if (!assembled) updateMessage(conversationId, assistantId, message);
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }

  useEffect(() => {
    if (!hydrated || !initialPrompt || startedRef.current) return;
    startedRef.current = true;
    void send(initialPrompt);
    void navigate({ to: "/chat", search: {}, replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, initialPrompt]);

  function stop() {
    abortRef.current?.abort();
  }

  const sidebarList = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-2 p-3">
        <p className="px-2 text-caption font-medium uppercase tracking-[0.08em] text-muted">
          Chats
        </p>
        <Button variant="icon" aria-label="New chat" onClick={() => newChat()}>
          <Plus className="size-4" strokeWidth={1.75} />
        </Button>
      </div>
      <ul className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
        {conversations.length === 0 ? (
          <li className="px-3 py-2 text-small text-muted">No chats yet.</li>
        ) : (
          conversations.map((c) => (
            <li key={c.id} className="group flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  setActive(c.id);
                  setSidebar(false);
                }}
                className={cn(
                  "min-h-11 flex-1 truncate rounded-md px-3 text-left text-small",
                  c.id === id ? "bg-surface text-ink" : "text-muted hover:text-ink",
                )}
              >
                {c.title}
              </button>
              <button
                type="button"
                className="grid size-11 place-items-center text-muted opacity-0 hover:text-error group-hover:opacity-100 focus:opacity-100"
                aria-label={`Delete ${c.title}`}
                onClick={() => deleteConversation(c.id)}
              >
                <Trash2 className="size-3.5" strokeWidth={1.75} />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );

  return (
    <div className="flex h-dvh flex-col bg-paper text-ink">
      <SiteHeader compact />
      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-72 shrink-0 border-r border-border md:block">
          {sidebarList}
        </aside>

        {sidebar ? (
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-ink/30"
              aria-label="Close sidebar"
              onClick={() => setSidebar(false)}
            />
            <div className="relative h-full w-[min(20rem,88vw)] bg-paper shadow-border">
              <div className="flex items-center justify-between border-b border-border px-2">
                <p className="px-3 text-small font-medium">Chats</p>
                <Button variant="icon" aria-label="Close" onClick={() => setSidebar(false)}>
                  <X className="size-4" strokeWidth={1.75} />
                </Button>
              </div>
              {sidebarList}
            </div>
          </div>
        ) : null}

        <section className="flex min-w-0 flex-1 flex-col" id="main">
          <div className="flex items-center gap-2 border-b border-border px-2 md:hidden">
            <Button variant="icon" aria-label="Open chats" onClick={() => setSidebar(true)}>
              <Menu className="size-4" strokeWidth={1.75} />
            </Button>
            <p className="truncate text-small font-medium">
              {active?.title ?? listing.name}
            </p>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            {messages.length === 0 ? (
              <EmptyState onPick={(p) => void send(p)} />
            ) : (
              <ol className="mx-auto max-w-[44rem] space-y-8 px-4 py-8">
                {messages.map((m) => (
                  <MessageRow key={m.id} message={m} streaming={streaming && m === messages.at(-1)} />
                ))}
                <div ref={bottomRef} />
              </ol>
            )}
          </div>

          <div className="border-t border-border bg-paper px-4 py-3">
            <form
              className="mx-auto flex max-w-[44rem] items-end gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                void send(draft);
              }}
            >
              <label className="sr-only" htmlFor="composer">
                Message PaglaGPT
              </label>
              <textarea
                id="composer"
                rows={1}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send(draft);
                  }
                }}
                placeholder="Message PaglaGPT"
                className="max-h-40 min-h-11 flex-1 resize-none rounded-lg bg-surface px-3 py-2.5 text-[0.975rem] text-ink outline-none placeholder:text-muted"
              />
              {streaming ? (
                <Button variant="secondary" onClick={stop} aria-label="Stop">
                  <Square className="size-3.5 fill-current" />
                  Stop
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!draft.trim()}
                  aria-label="Send"
                  className="px-3"
                >
                  <ArrowUp className="size-4" strokeWidth={2} />
                </Button>
              )}
            </form>
            <p className="mx-auto mt-2 max-w-[44rem] text-caption text-muted">
              PaglaGPT may produce inaccurate information. Verify critical facts.
              {error ? <span className="text-error"> {error}</span> : null}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function EmptyState({ onPick }: { onPick: (prompt: string) => void }) {
  return (
    <div className="mx-auto flex max-w-[44rem] flex-col items-center px-4 py-16 text-center">
      <PaglaFace size="lg" />
      <h1 className="mt-6 text-h3 font-medium tracking-[-0.01em]">{listing.name}</h1>
      <p className="mt-2 max-w-md text-pretty text-small text-muted">
        {listing.shortDescription}
      </p>
      <ul className="mt-10 grid w-full gap-3 sm:grid-cols-2">
        {listing.conversationStarters.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onPick(s.prompt)}
              className="flex h-full min-h-24 w-full flex-col rounded-xl border border-border p-4 text-left hover:bg-surface"
            >
              <span className="text-caption font-medium uppercase tracking-[0.08em] text-muted">
                {s.title}
              </span>
              <span className="mt-2 text-small text-ink">{s.prompt}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-caption text-muted">
        Official PaglaAI listing.{" "}
        <Link to="/" className="underline underline-offset-4">
          Store page
        </Link>
      </p>
    </div>
  );
}

function MessageRow({
  message,
  streaming,
}: {
  message: ChatMessage;
  streaming: boolean;
}) {
  const isUser = message.role === "user";
  return (
    <li className={cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}>
      {isUser ? (
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-muted">
          <User className="size-3.5" strokeWidth={1.75} />
        </span>
      ) : (
        <PaglaFace size="sm" alt="" className="mt-0.5 shrink-0" />
      )}
      <div className={cn("min-w-0 max-w-[min(100%,36rem)]", isUser && "text-right")}>
        <p className="mb-1 text-caption font-medium uppercase tracking-[0.08em] text-muted">
          {isUser ? "You" : listing.name}
        </p>
        <div
          className={cn(
            "relative rounded-lg px-4 py-3 text-left",
            isUser ? "bg-surface" : "bg-transparent p-0",
          )}
        >
          {message.content ? (
            <RichText text={message.content} />
          ) : (
            <span className="text-small text-muted">Thinking…</span>
          )}
          {streaming && !isUser ? (
            <span
              className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-accent"
              aria-hidden="true"
            />
          ) : null}
        </div>
      </div>
    </li>
  );
}
