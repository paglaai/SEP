import { a as ecosystemProducts, i as complianceChecks, l as listing } from "./theme-BW0WOISB.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PaglaFace } from "./router-DqkDd-ZF.mjs";
import { f as BadgeCheck, m as ArrowUpRight, o as Shield } from "../_libs/lucide-react.mjs";
import { n as SiteHeader } from "./site-header-Bu71GHSR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BDrKG7N0.js
var import_jsx_runtime = require_jsx_runtime();
function FieldLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-caption font-medium uppercase tracking-[0.08em] text-muted",
		children
	});
}
function StoreListing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-[75rem] px-4 py-12 sm:py-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex shrink-0 items-start gap-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-32 place-items-center rounded-xl bg-surface sm:size-40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaglaFace, {
										size: "hero",
										alt: "PaglaGPT profile"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "GPT Store listing" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 text-display font-light tracking-[-0.02em] text-balance",
										children: listing.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5 text-ink",
												children: [
													"By ",
													listing.builder.name,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
														className: "size-4 text-ink",
														strokeWidth: 1.75,
														"aria-label": "Official PaglaAI builder"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: listing.category }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Official listing" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-reading text-pretty text-bodyLarge text-ink sm:text-[1.125rem]",
										children: listing.shortDescription
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-small text-muted",
										children: listing.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/chat",
											className: "inline-flex min-h-11 items-center rounded-md bg-ink px-5 text-small font-medium text-paper",
											children: "Start chat"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/configure",
											className: "inline-flex min-h-11 items-center rounded-md border border-border px-5 text-small font-medium text-ink",
											children: "View configuration"
										})]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-[75rem] px-4 py-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Conversation starters" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-h3 font-medium tracking-[-0.01em]",
									children: "How this GPT is meant to be used"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid gap-3 sm:grid-cols-2",
									children: listing.conversationStarters.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/chat",
										search: { q: s.prompt },
										className: "flex h-full min-h-28 flex-col justify-between rounded-xl border border-border bg-paper p-5 transition-[background-color] duration-[var(--pagla-duration-fast)] hover:bg-surface",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-small font-medium text-muted",
											children: s.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-pretty text-[0.975rem] leading-snug text-ink",
											children: s.prompt
										})]
									}) }, s.id))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-[75rem] gap-12 px-4 py-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "About this GPT" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-h3 font-medium tracking-[-0.01em]",
									children: "Local-first architect, official PaglaAI app"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "prose-pagla mt-6 space-y-4 text-pretty text-[1.05rem] text-ink",
									children: listing.longDescription.split("\n\n").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 space-y-3",
									children: listing.capabilities.filter((c) => c.on).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-small",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-pill bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-medium",
												children: [c.label, "."]
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: c.note
											})
										] })]
									}, c.id))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Builder" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-h4 font-medium",
												children: listing.builder.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-small text-muted",
												children: listing.builder.house
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-small text-muted",
												children: listing.builder.location
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: listing.builder.website,
												className: "mt-4 inline-flex min-h-11 items-center gap-1 text-small text-ink underline-offset-4 hover:underline",
												target: "_blank",
												rel: "noreferrer",
												children: ["paglaai.space", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													className: "size-3.5",
													strokeWidth: 1.75
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Capabilities" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-4 space-y-2",
											children: listing.capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center justify-between text-small",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: c.on ? "text-ink" : "text-muted",
													children: c.on ? "On" : "Off"
												})]
											}, c.id))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Trust" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-3 flex items-start gap-2 text-small text-muted",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
													className: "mt-0.5 size-4 shrink-0",
													strokeWidth: 1.75
												}), "Public listing. Privacy policy published. No ads. No OpenAI endorsement implied."]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/privacy",
												className: "mt-3 inline-flex min-h-11 items-center text-small text-ink underline-offset-4 hover:underline",
												children: "Privacy policy"
											})
										]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-[75rem] px-4 py-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "GPT Store checklist" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-h3 font-medium tracking-[-0.01em]",
									children: "Built to the public listing bar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid gap-3 sm:grid-cols-2",
									children: complianceChecks.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "rounded-lg border border-border px-4 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-small font-medium text-ink",
											children: c.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-small text-muted",
											children: c.detail
										})]
									}, c.id))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-[75rem] px-4 py-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Ecosystem" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-h3 font-medium tracking-[-0.01em]",
									children: "Same mark, many surfaces"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
									children: ecosystemProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.href,
										target: "_blank",
										rel: "noreferrer",
										className: "flex min-h-24 flex-col justify-between rounded-lg border border-border p-4 hover:bg-surface",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-small font-medium",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-caption text-muted",
											children: p.role
										})]
									}) }, p.id))
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[75rem] flex-col gap-3 px-4 py-8 text-caption text-muted sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						listing.name,
						" · ",
						listing.builder.name,
						" · Not affiliated with OpenAI"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/configure",
								className: "hover:text-ink",
								children: "Configuration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-ink",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: listing.builder.github,
								className: "hover:text-ink",
								children: "GitHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: listing.supportPath,
								className: "hover:text-ink",
								children: "Support"
							})
						]
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreListing, {});
}
//#endregion
export { Home as component };
