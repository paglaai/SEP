import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { systemPrompt } from "@/lib/paglagpt/listing";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(8000),
});

const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(24),
});

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body." }, { status: 400 });
        }

        const parsed = BodySchema.safeParse(json);
        if (!parsed.success) {
          return Response.json(
            { error: "Send one to twenty-four short chat messages." },
            { status: 400 },
          );
        }

        const apiKey = process.env.XAI_API_KEY?.trim();
        if (!apiKey) {
          return Response.json(
            {
              error:
                "PaglaGPT is unavailable in this environment. The model key is not configured.",
            },
            { status: 503 },
          );
        }

        const upstream = await fetch("https://api.x.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "grok-4.5",
            stream: true,
            max_tokens: 2048,
            messages: [
              { role: "system", content: systemPrompt() },
              ...parsed.data.messages,
            ],
          }),
        });

        if (!upstream.ok || !upstream.body) {
          let detail = `Model error ${upstream.status}`;
          try {
            const errBody = (await upstream.json()) as {
              error?: { message?: string };
            };
            if (errBody.error?.message) detail = errBody.error.message;
          } catch {
            /* keep status text */
          }
          return Response.json({ error: detail }, { status: 502 });
        }

        return new Response(upstream.body, {
          headers: {
            "Content-Type": "text/event-stream; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
            "X-Accel-Buffering": "no",
          },
        });
      },
    },
  },
});
