import { i as __toESM } from "../_runtime.mjs";
import { c as knowledge, i as complianceChecks, l as listing, n as charCounts, o as instructions, s as kitMarkdown } from "./theme-BW0WOISB.mjs";
import { B as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PaglaFace } from "./router-DqkDd-ZF.mjs";
import { d as Check, u as Copy } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as Button } from "./site-header-Bu71GHSR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/configure-BENeDcZB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConfigurePage() {
	const counts = charCounts();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			className: "mx-auto max-w-[75rem] px-4 py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-caption font-medium uppercase tracking-[0.08em] text-muted",
					children: "GPT editor fields"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-title font-light tracking-[-0.02em] text-balance",
					children: "Configuration kit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-reading text-pretty text-small text-muted",
					children: "Paste-ready values for the OpenAI GPT editor, written to the GPT Store listing rules: clear name, accurate description, realistic starters, instructions that define behavior, published privacy policy, and no implied OpenAI endorsement."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
						label: "Copy entire kit",
						text: kitMarkdown()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.7fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Profile picture",
								hint: "Square canvas. Pagla Face only — never circled.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-24 place-items-center rounded-lg bg-surface",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaglaFace, { size: "lg" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								hint: `${counts.name} / 50 characters`,
								copy: listing.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-h4 font-medium",
									children: listing.name
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Description",
								hint: `${counts.description} / 300 characters`,
								copy: listing.shortDescription,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-pretty text-small leading-relaxed",
									children: listing.shortDescription
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Category",
								copy: listing.category,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-small",
									children: listing.category
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Conversation starters",
								hint: "Four high-value prompts",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "space-y-3",
									children: listing.conversationStarters.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start justify-between gap-3 rounded-lg border border-border px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-small",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted",
													children: [i + 1, "."]
												}),
												" ",
												s.prompt
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: s.prompt })]
									}, s.id))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Instructions",
								hint: `${counts.instructions} characters · under the 8 000 editor budget`,
								copy: instructions,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "max-h-[28rem] overflow-auto whitespace-pre-wrap rounded-lg bg-surface p-4 font-sans text-small leading-relaxed",
									children: instructions
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Knowledge",
								hint: `${counts.knowledge} characters · ecosystem snapshot`,
								copy: knowledge,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "max-h-72 overflow-auto whitespace-pre-wrap rounded-lg bg-surface p-4 font-sans text-small leading-relaxed",
									children: knowledge
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Capabilities",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "divide-y divide-border rounded-lg border border-border",
									children: listing.capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start justify-between gap-4 px-4 py-3 text-small",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: c.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-muted",
											children: c.note
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: c.on ? "text-ink" : "text-muted",
											children: c.on ? "On" : "Off"
										})]
									}, c.id))
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-6 lg:sticky lg:top-24 lg:self-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-caption font-medium uppercase tracking-[0.08em] text-muted",
								children: "Publishing"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-4 space-y-3 text-small",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Visibility",
										v: listing.visibility
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Builder",
										v: listing.builder.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Website",
										v: "paglaai.space"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Support",
										v: listing.builder.support
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Privacy URL",
										v: listing.privacyPath
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Model",
										v: listing.recommendedModel
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-caption font-medium uppercase tracking-[0.08em] text-muted",
								children: "Store checks"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: complianceChecks.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-small",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-0.5 size-4 shrink-0",
										strokeWidth: 1.75
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium",
											children: [c.label, "."]
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: c.detail
										})
									] })]
								}, c.id))
							})]
						})]
					})]
				})
			]
		})]
	});
}
function Field({ label, hint, copy, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex flex-wrap items-baseline justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-small font-medium",
			children: label
		}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-caption text-muted",
			children: hint
		}) : null] }), copy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: copy }) : null]
	}), children] });
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right",
			children: v
		})]
	});
}
function CopyButton({ text, label = "Copy" }) {
	const [done, setDone] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		className: "min-h-11 px-3 text-caption",
		onClick: async () => {
			await navigator.clipboard.writeText(text);
			setDone(true);
			window.setTimeout(() => setDone(false), 1500);
		},
		children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-3.5",
			strokeWidth: 1.75
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
			className: "size-3.5",
			strokeWidth: 1.75
		}), done ? "Copied" : label]
	});
}
//#endregion
export { ConfigurePage as component };
