import { l as listing } from "./theme-BW0WOISB.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader } from "./site-header-Bu71GHSR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-CO5fonQW.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			className: "mx-auto max-w-reading px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-caption font-medium uppercase tracking-[0.08em] text-muted",
					children: "Required for GPT Store"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-title font-light tracking-[-0.02em]",
					children: "Privacy policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-small text-muted",
					children: ["Last updated 11 September 2026 · Builder: ", listing.builder.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "prose-pagla mt-10 space-y-8 text-pretty",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-h4 font-medium",
							children: "Who we are"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-small leading-relaxed text-ink",
							children: [
								"PaglaGPT is the official assistant of PaglaAI (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: listing.builder.website,
									children: listing.builder.website
								}),
								"). This policy explains what happens to information you provide when you use this listing. PaglaGPT is not made or endorsed by OpenAI."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-h4 font-medium",
							children: "Categories of data"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-small leading-relaxed",
							children: "We process the text you type into a chat, including any files you paste as text. We do not ask for accounts, payment card data, government identifiers, health information, or access credentials. Do not send those. If you paste a secret, rotate it."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-h4 font-medium",
							children: "Purposes of use"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-small leading-relaxed",
							children: "Conversation text is used only to generate a reply from PaglaGPT. We do not build advertising profiles, sell data, or train a separate public model from your chats in this app."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-h4 font-medium",
							children: "Recipients"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-small leading-relaxed",
							children: [
								"Prompts are sent to the model provider that powers this preview (xAI) so a reply can be generated. Hosting for the app may see standard request logs (time, path, status). PaglaAI staff may review a report you send to",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: listing.supportPath,
									children: listing.builder.support
								}),
								"."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-h4 font-medium",
							children: "Retention"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-small leading-relaxed",
							children: "Chats in this app are stored on your device in local browser storage. They stay until you delete a conversation or clear site data. Server-side prompts are not kept as a product database in this listing."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-h4 font-medium",
							children: "Your controls"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-small leading-relaxed",
							children: [
								"Delete any conversation from the chat sidebar. Clear this site’s data in your browser to remove remaining local history. Contact",
								" ",
								listing.builder.support,
								" for privacy questions."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-h4 font-medium",
							children: "Children"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-small leading-relaxed",
							children: "PaglaGPT is designed for a general audience 13 and older. It is not directed at children under 13."
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-small text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "underline underline-offset-4",
						children: "Back to the listing"
					})
				})
			]
		})]
	});
}
//#endregion
export { PrivacyPage as component };
