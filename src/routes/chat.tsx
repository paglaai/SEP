import { createFileRoute } from "@tanstack/react-router";
import { ChatApp } from "@/components/chat/chat-app";

type ChatSearch = {
  q?: string;
};

export const Route = createFileRoute("/chat")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>): ChatSearch => ({
    q: typeof search.q === "string" && search.q.trim() ? search.q : undefined,
  }),
  component: ChatPage,
});

function ChatPage() {
  const { q } = Route.useSearch();
  return <ChatApp initialPrompt={q} />;
}
