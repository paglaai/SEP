import { i as __toESM } from "../_runtime.mjs";
import { l as listing, r as cn } from "./theme-BW0WOISB.mjs";
import { B as require_react, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$3, r as PaglaFace } from "./router-DqkDd-ZF.mjs";
import { a as Square, l as Menu, n as User, p as ArrowUp, r as Trash2, s as Plus, t as X } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as Button } from "./site-header-Bu71GHSR.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-ByGlxtog.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function inline(text) {
	return text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
		if (part.startsWith("**") && part.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: part.slice(2, -2) }, i);
		if (part.startsWith("`") && part.endsWith("`")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: part.slice(1, -1) }, i);
		const link = part.match(/^\[([^\]]+)\]\((https?:[^)]+)\)$/);
		if (link) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: link[2],
			target: "_blank",
			rel: "noreferrer",
			children: link[1]
		}, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: part }, i);
	});
}
function RichText({ text }) {
	const blocks = text.split(/```/g);
	const nodes = [];
	blocks.forEach((block, i) => {
		if (i % 2 === 1) {
			const nl = block.indexOf("\n");
			const code = nl === -1 ? block : block.slice(nl + 1).replace(/\n$/, "");
			nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: code }) }, `c${i}`));
			return;
		}
		block.split(/\n{2,}/).forEach((para, pi) => {
			const trimmed = para.trim();
			if (!trimmed) return;
			const lines = trimmed.split("\n");
			if (lines.every((l) => /^[-*]\s+/.test(l))) {
				nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: lines.map((l, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: inline(l.replace(/^[-*]\s+/, "")) }, li)) }, `u${i}-${pi}`));
				return;
			}
			if (lines.every((l) => /^\d+\.\s+/.test(l))) {
				nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: lines.map((l, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: inline(l.replace(/^\d+\.\s+/, "")) }, li)) }, `o${i}-${pi}`));
				return;
			}
			if (/^#{1,3}\s/.test(trimmed)) {
				const m = trimmed.match(/^(#{1,3})\s+([\s\S]+)$/);
				if (m) {
					const Tag = m[1].length === 1 ? "h1" : m[1].length === 2 ? "h2" : "h3";
					nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						className: "mt-4 mb-2 first:mt-0",
						children: inline(m[2])
					}, `h${i}-${pi}`));
					return;
				}
			}
			nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 last:mb-0",
				children: inline(trimmed)
			}, `p${i}-${pi}`));
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "prose-pagla text-[0.975rem] leading-[1.55]",
		children: nodes
	});
}
async function streamPaglaGPT(messages, handlers) {
	const res = await fetch("/api/chat", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ messages: messages.map((m) => ({
			role: m.role,
			content: m.content
		})) }),
		signal: handlers.signal
	});
	if (!res.ok) {
		let detail = `PaglaGPT could not reply (${res.status}).`;
		try {
			const body = await res.json();
			if (body.error) detail = body.error;
		} catch {}
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
				const delta = JSON.parse(payload).choices?.[0]?.delta?.content;
				if (delta) handlers.onDelta(delta);
			} catch {}
		}
	}
}
function uid() {
	return crypto.randomUUID();
}
function titleFrom(text) {
	const t = text.replace(/\s+/g, " ").trim();
	if (!t) return "New chat";
	return t.length > 42 ? `${t.slice(0, 42)}…` : t;
}
var useConversations = create()(persist((set, get) => ({
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
		const conversation = {
			id: uid(),
			title: "New chat",
			messages: [],
			updatedAt: Date.now()
		};
		set((s) => ({
			conversations: [conversation, ...s.conversations].slice(0, 50),
			activeId: conversation.id
		}));
		return conversation.id;
	},
	deleteConversation: (id) => set((s) => {
		const conversations = s.conversations.filter((c) => c.id !== id);
		return {
			conversations,
			activeId: s.activeId === id ? conversations[0]?.id ?? null : s.activeId
		};
	}),
	appendMessage: (id, message) => set((s) => ({ conversations: s.conversations.map((c) => c.id === id ? {
		...c,
		messages: [...c.messages, message].slice(-80),
		updatedAt: Date.now()
	} : c) })),
	updateMessage: (conversationId, messageId, content) => set((s) => ({ conversations: s.conversations.map((c) => c.id === conversationId ? {
		...c,
		messages: c.messages.map((m) => m.id === messageId ? {
			...m,
			content
		} : m),
		updatedAt: Date.now()
	} : c) })),
	renameIfUntitled: (id, firstUserText) => set((s) => ({ conversations: s.conversations.map((c) => c.id === id && c.title === "New chat" ? {
		...c,
		title: titleFrom(firstUserText)
	} : c) }))
}), { name: "paglagpt.conversations.v1" }));
function newId() {
	return uid();
}
function ChatApp({ initialPrompt }) {
	const conversations = useConversations((s) => s.conversations);
	const activeId = useConversations((s) => s.activeId);
	const ensureActive = useConversations((s) => s.ensureActive);
	const setActive = useConversations((s) => s.setActive);
	const newChat = useConversations((s) => s.newChat);
	const deleteConversation = useConversations((s) => s.deleteConversation);
	const appendMessage = useConversations((s) => s.appendMessage);
	const updateMessage = useConversations((s) => s.updateMessage);
	const renameIfUntitled = useConversations((s) => s.renameIfUntitled);
	const [sidebar, setSidebar] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [streaming, setStreaming] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const abortRef = (0, import_react.useRef)(null);
	const startedRef = (0, import_react.useRef)(false);
	const bottomRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const id = activeId;
	const active = conversations.find((c) => c.id === id);
	const messages = active?.messages ?? [];
	(0, import_react.useEffect)(() => {
		const finish = () => setHydrated(true);
		const persistApi = useConversations.persist;
		if (persistApi.hasHydrated()) finish();
		return persistApi.onFinishHydration(finish);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) ensureActive();
	}, [hydrated, ensureActive]);
	(0, import_react.useEffect)(() => {
		bottomRef.current?.scrollIntoView({ block: "end" });
	}, [messages, streaming]);
	async function send(text) {
		const content = text.trim();
		if (!content || streaming) return;
		const conversationId = ensureActive();
		setDraft("");
		setError(null);
		const userMsg = {
			id: newId(),
			role: "user",
			content
		};
		const assistantId = newId();
		appendMessage(conversationId, userMsg);
		appendMessage(conversationId, {
			id: assistantId,
			role: "assistant",
			content: ""
		});
		renameIfUntitled(conversationId, content);
		setStreaming(true);
		const history = [...useConversations.getState().conversations.find((c) => c.id === conversationId)?.messages ?? []].filter((m) => m.content.length > 0).slice(-16);
		const controller = new AbortController();
		abortRef.current = controller;
		let assembled = "";
		try {
			await streamPaglaGPT(history, {
				signal: controller.signal,
				onDelta: (chunk) => {
					assembled += chunk;
					updateMessage(conversationId, assistantId, assembled);
				}
			});
			if (!assembled) updateMessage(conversationId, assistantId, "PaglaGPT returned an empty reply. Try again.");
		} catch (err) {
			if (err.name === "AbortError") {
				if (!assembled) updateMessage(conversationId, assistantId, "Stopped.");
			} else {
				const message = err instanceof Error ? err.message : "PaglaGPT could not reply.";
				setError(message);
				if (!assembled) updateMessage(conversationId, assistantId, message);
			}
		} finally {
			setStreaming(false);
			abortRef.current = null;
		}
	}
	(0, import_react.useEffect)(() => {
		if (!hydrated || !initialPrompt || startedRef.current) return;
		startedRef.current = true;
		send(initialPrompt);
		navigate({
			to: "/chat",
			search: {},
			replace: true
		});
	}, [hydrated, initialPrompt]);
	function stop() {
		abortRef.current?.abort();
	}
	const sidebarList = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-2 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-2 text-caption font-medium uppercase tracking-[0.08em] text-muted",
				children: "Chats"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "icon",
				"aria-label": "New chat",
				onClick: () => newChat(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "size-4",
					strokeWidth: 1.75
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "min-h-0 flex-1 overflow-y-auto px-2 pb-4",
			children: conversations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "px-3 py-2 text-small text-muted",
				children: "No chats yet."
			}) : conversations.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "group flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setActive(c.id);
						setSidebar(false);
					},
					className: cn("min-h-11 flex-1 truncate rounded-md px-3 text-left text-small", c.id === id ? "bg-surface text-ink" : "text-muted hover:text-ink"),
					children: c.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-11 place-items-center text-muted opacity-0 hover:text-error group-hover:opacity-100 focus:opacity-100",
					"aria-label": `Delete ${c.title}`,
					onClick: () => deleteConversation(c.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
						className: "size-3.5",
						strokeWidth: 1.75
					})
				})]
			}, c.id))
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden w-72 shrink-0 border-r border-border md:block",
					children: sidebarList
				}),
				sidebar ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-50 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute inset-0 bg-ink/30",
						"aria-label": "Close sidebar",
						onClick: () => setSidebar(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-full w-[min(20rem,88vw)] bg-paper shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border px-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-3 text-small font-medium",
								children: "Chats"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "icon",
								"aria-label": "Close",
								onClick: () => setSidebar(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-4",
									strokeWidth: 1.75
								})
							})]
						}), sidebarList]
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex min-w-0 flex-1 flex-col",
					id: "main",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 border-b border-border px-2 md:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "icon",
								"aria-label": "Open chats",
								onClick: () => setSidebar(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "size-4",
									strokeWidth: 1.75
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-small font-medium",
								children: active?.title ?? listing.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0 flex-1 overflow-y-auto",
							children: messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onPick: (p) => void send(p) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "mx-auto max-w-[44rem] space-y-8 px-4 py-8",
								children: [messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageRow, {
									message: m,
									streaming: streaming && m === messages.at(-1)
								}, m.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: bottomRef })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border bg-paper px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mx-auto flex max-w-[44rem] items-end gap-2",
								onSubmit: (e) => {
									e.preventDefault();
									send(draft);
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: "composer",
										children: "Message PaglaGPT"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "composer",
										rows: 1,
										value: draft,
										onChange: (e) => setDraft(e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter" && !e.shiftKey) {
												e.preventDefault();
												send(draft);
											}
										},
										placeholder: "Message PaglaGPT",
										className: "max-h-40 min-h-11 flex-1 resize-none rounded-lg bg-surface px-3 py-2.5 text-[0.975rem] text-ink outline-none placeholder:text-muted"
									}),
									streaming ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "secondary",
										onClick: stop,
										"aria-label": "Stop",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3.5 fill-current" }), "Stop"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: !draft.trim(),
										"aria-label": "Send",
										className: "px-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
											className: "size-4",
											strokeWidth: 2
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mx-auto mt-2 max-w-[44rem] text-caption text-muted",
								children: ["PaglaGPT may produce inaccurate information. Verify critical facts.", error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-error",
									children: [" ", error]
								}) : null]
							})]
						})
					]
				})
			]
		})]
	});
}
function EmptyState({ onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-[44rem] flex-col items-center px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaglaFace, { size: "lg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 text-h3 font-medium tracking-[-0.01em]",
				children: listing.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-pretty text-small text-muted",
				children: listing.shortDescription
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid w-full gap-3 sm:grid-cols-2",
				children: listing.conversationStarters.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(s.prompt),
					className: "flex h-full min-h-24 w-full flex-col rounded-xl border border-border p-4 text-left hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-caption font-medium uppercase tracking-[0.08em] text-muted",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 text-small text-ink",
						children: s.prompt
					})]
				}) }, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-caption text-muted",
				children: [
					"Official PaglaAI listing.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "underline underline-offset-4",
						children: "Store page"
					})
				]
			})
		]
	});
}
function MessageRow({ message, streaming }) {
	const isUser = message.role === "user";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row"),
		children: [isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-8 shrink-0 place-items-center rounded-full border border-border text-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
				className: "size-3.5",
				strokeWidth: 1.75
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaglaFace, {
			size: "sm",
			alt: "",
			className: "mt-0.5 shrink-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("min-w-0 max-w-[min(100%,36rem)]", isUser && "text-right"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-caption font-medium uppercase tracking-[0.08em] text-muted",
				children: isUser ? "You" : listing.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative rounded-lg px-4 py-3 text-left", isUser ? "bg-surface" : "bg-transparent p-0"),
				children: [message.content ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: message.content }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-small text-muted",
					children: "Thinking…"
				}), streaming && !isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-accent",
					"aria-hidden": "true"
				}) : null]
			})]
		})]
	});
}
function ChatPage() {
	const { q } = Route$3.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatApp, { initialPrompt: q });
}
//#endregion
export { ChatPage as component };
