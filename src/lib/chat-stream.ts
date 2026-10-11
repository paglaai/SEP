import type { ChatMessage } from "./conversations";

export type StreamHandlers = {
  onDelta: (chunk: string) => void;
  signal?: AbortSignal;
};

export async function streamPaglaGPT(
  messages: Pick<ChatMessage, "role" | "content">[],
  handlers: StreamHandlers,
): Promise<void> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
    signal: handlers.signal,
  });

  if (!res.ok) {
    let detail = `PaglaGPT could not reply (${res.status}).`;
    try {
      const body = (await res.json()) as { error?: string };
      if (body.error) detail = body.error;
    } catch {
      /* keep fallback */
    }
    throw new Error(detail);
  }

  if (!res.body) throw new Error("PaglaGPT returned an empty stream.");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const frames = buffer.split("\n");
    buffer = frames.pop() ?? "";
    for (const line of frames) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data:")) continue;
      const payload = trimmed.slice(5).trim();
      if (payload === "[DONE]") return;
      try {
        const json = JSON.parse(payload) as {
          choices?: { delta?: { content?: string } }[];
        };
        const delta = json.choices?.[0]?.delta?.content;
        if (delta) handlers.onDelta(delta);
      } catch {
        /* ignore malformed keepalives */
      }
    }
  }
}
