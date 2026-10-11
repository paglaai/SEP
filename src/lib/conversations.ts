import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export type Conversation = {
  id: string;
  title: string;
  messages: ChatMessage[];
  updatedAt: number;
};

type Store = {
  conversations: Conversation[];
  activeId: string | null;
  ensureActive: () => string;
  setActive: (id: string) => void;
  newChat: () => string;
  deleteConversation: (id: string) => void;
  appendMessage: (id: string, message: ChatMessage) => void;
  updateMessage: (conversationId: string, messageId: string, content: string) => void;
  renameIfUntitled: (id: string, firstUserText: string) => void;
};

function uid() {
  return crypto.randomUUID();
}

function titleFrom(text: string) {
  const t = text.replace(/\s+/g, " ").trim();
  if (!t) return "New chat";
  return t.length > 42 ? `${t.slice(0, 42)}…` : t;
}

export const useConversations = create<Store>()(
  persist(
    (set, get) => ({
      conversations: [],
      activeId: null,
      ensureActive: () => {
        const { activeId, conversations } = get();
        if (activeId && conversations.some((c) => c.id === activeId)) return activeId;
        if (conversations[0]) {
          set({ activeId: conversations[0].id });
          return conversations[0].id;
        }
        return get().newChat();
      },
      setActive: (id) => set({ activeId: id }),
      newChat: () => {
        const conversation: Conversation = {
          id: uid(),
          title: "New chat",
          messages: [],
          updatedAt: Date.now(),
        };
        set((s) => ({
          conversations: [conversation, ...s.conversations].slice(0, 50),
          activeId: conversation.id,
        }));
        return conversation.id;
      },
      deleteConversation: (id) =>
        set((s) => {
          const conversations = s.conversations.filter((c) => c.id !== id);
          const activeId =
            s.activeId === id ? (conversations[0]?.id ?? null) : s.activeId;
          return { conversations, activeId };
        }),
      appendMessage: (id, message) =>
        set((s) => ({
          conversations: s.conversations.map((c) =>
            c.id === id
              ? {
                  ...c,
                  messages: [...c.messages, message].slice(-80),
                  updatedAt: Date.now(),
                }
              : c,
          ),
        })),
      updateMessage: (conversationId, messageId, content) =>
        set((s) => ({
          conversations: s.conversations.map((c) =>
            c.id === conversationId
              ? {
                  ...c,
                  messages: c.messages.map((m) =>
                    m.id === messageId ? { ...m, content } : m,
                  ),
                  updatedAt: Date.now(),
                }
              : c,
          ),
        })),
      renameIfUntitled: (id, firstUserText) =>
        set((s) => ({
          conversations: s.conversations.map((c) =>
            c.id === id && c.title === "New chat"
              ? { ...c, title: titleFrom(firstUserText) }
              : c,
          ),
        })),
    }),
    { name: "paglagpt.conversations.v1" },
  ),
);

export function newId() {
  return uid();
}
