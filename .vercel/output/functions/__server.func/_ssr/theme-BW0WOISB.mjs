import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-BW0WOISB.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/**
* Official PaglaGPT GPT Store listing.
* Source of truth for name, description, starters, instructions,
* knowledge, capabilities, builder, and privacy — the fields OpenAI
* asks for when publishing a GPT.
*
* Character budgets follow the GPT editor (name ≤50, description ≤300,
* four starters, instructions kept well under 8 000).
*/
var listing = {
	name: "PaglaGPT",
	version: "1.0",
	visibility: "GPT Store",
	category: "Programming",
	tagline: "Intelligence, Unhinged.",
	shortDescription: "Official PaglaAI architect for local-first systems. Designs Apple Silicon inference, SANCTUM Runtime, Cloudflare Workers, Swift, and Bangla engineering with PaglaDESIGN discipline.",
	longDescription: `PaglaGPT is the official PaglaAI assistant. It designs local-first AI systems — Apple Silicon inference (PaglaMLX), SANCTUM Runtime, Cloudflare Workers, Swift/SwiftUI, and Bangla-language engineering — in the PaglaDESIGN voice: precise first, playful second.

It is a PaglaAI product. It is not made, affiliated with, or endorsed by OpenAI.`,
	recommendedModel: "grok-4.5",
	conversationStarters: [
		{
			id: "mlx",
			title: "Local MLX stack",
			prompt: "Design a local-first MLX inference stack for an M4 Mac that serves PaglaGPT through an OpenAI-compatible proxy."
		},
		{
			id: "swiftui",
			title: "SwiftUI review",
			prompt: "Review a SwiftUI chat composer against PaglaDESIGN tokens and fix the radius nesting."
		},
		{
			id: "router",
			title: "Cloudflare routing",
			prompt: "Draft a Cloudflare Worker that routes grok-4.5 and local MLX through PaglaROUTER."
		},
		{
			id: "bangla",
			title: "Bangla onboarding",
			prompt: "Write a Bangla-first onboarding for PaglaGPT that still reads as precise architecture notes."
		}
	],
	capabilities: [
		{
			id: "architecture",
			label: "Architecture",
			on: true,
			note: "Local-first system design, not generic chatbot filler."
		},
		{
			id: "code",
			label: "Code & review",
			on: true,
			note: "Swift, TypeScript, Workers, MLX orchestration."
		},
		{
			id: "bangla",
			label: "Bangla engineering",
			on: true,
			note: "Replies in Bangla when asked; architecture terms stay precise."
		},
		{
			id: "web",
			label: "Web search",
			on: false,
			note: "Off. Knowledge is the PaglaAI ecosystem snapshot in this listing."
		},
		{
			id: "images",
			label: "Image generation",
			on: false,
			note: "Off. PaglaAI identity is monochrome; the mark is never regenerated."
		},
		{
			id: "actions",
			label: "External actions",
			on: false,
			note: "None. A public GPT with actions would still need this privacy URL."
		}
	],
	builder: {
		name: "PaglaAI",
		official: true,
		website: "https://paglaai.space",
		github: "https://github.com/paglaai",
		support: "brand@paglaai.space",
		location: "Dhaka",
		house: "AYNAGHOR — House of Mirrors"
	},
	privacyPath: "/privacy",
	supportPath: "mailto:brand@paglaai.space",
	icon: {
		light: "/brand/pagla-face-black.png",
		dark: "/brand/pagla-face-white.png",
		avatar: "/brand/paglaai-dp.png"
	}
};
var ecosystemProducts = [
	{
		id: "paglamlx",
		name: "PaglaMLX",
		role: "Local inference for Apple Silicon",
		href: "https://github.com/paglaai/PaglaMLX"
	},
	{
		id: "paglarouter",
		name: "PaglaROUTER",
		role: "Unified LLM gateway",
		href: "https://github.com/paglaai/PaglaROUTER"
	},
	{
		id: "pagladesign",
		name: "PaglaDESIGN",
		role: "Canonical design authority",
		href: "https://github.com/paglaai/pagladesign"
	},
	{
		id: "sanctum",
		name: "SANCTUM Runtime",
		role: "Architecture substrate",
		href: "https://github.com/paglaai/sanctum"
	}
];
var complianceChecks = [
	{
		id: "name",
		pass: true,
		label: "Name is brand-tied",
		detail: "PaglaGPT is a PaglaAI product name, not a generic dictionary word."
	},
	{
		id: "description",
		pass: true,
		label: "Description is accurate",
		detail: "States purpose, audience, and tasks. Does not disparage other services."
	},
	{
		id: "endorsement",
		pass: true,
		label: "No OpenAI impersonation",
		detail: "Copy states PaglaGPT is not made or endorsed by OpenAI."
	},
	{
		id: "starters",
		pass: true,
		label: "Conversation starters match intent",
		detail: "Four realistic, high-value prompts for the intended engineering use."
	},
	{
		id: "audience",
		pass: true,
		label: "General audience (13+)",
		detail: "No mature content, ads, or prohibited categories."
	},
	{
		id: "privacy",
		pass: true,
		label: "Privacy policy published",
		detail: "Required for public GPTs and for any future actions."
	},
	{
		id: "ip",
		pass: true,
		label: "Intellectual property owned",
		detail: "Pagla Face, wordmark, and name are PaglaAI brand assets."
	},
	{
		id: "ads",
		pass: true,
		label: "No advertising",
		detail: "The GPT delivers standalone value. No unrelated CTAs or affiliate push."
	},
	{
		id: "builder",
		pass: true,
		label: "Builder profile",
		detail: "PaglaAI · paglaai.space · brand@paglaai.space"
	},
	{
		id: "secrets",
		pass: true,
		label: "No restricted data collection",
		detail: "Does not solicit PCI, PHI, government IDs, or access credentials."
	}
];
var knowledge = `PaglaAI ecosystem (canonical as of 2026-09).

Authority: PaglaDESIGN — tokens, brand, typography, components, FERN / MACHINE / ARCHITECT renderers. Repo: paglaai/pagladesign.

Active products:
- PaglaMLX — local LLM orchestration for Apple Silicon; MLX models through a reverse proxy with Auto-Router, BYOK, OpenAI-compatible targets.
- PaglaROUTER — unified LLM gateway (OpenAI + Anthropic shapes), weighted multi-provider routing, Cloudflare Worker.
- PaglaSHELL — CLI / execution kernel.
- PaglaCHAT — conversational interface.
- PaglaOS (KolponaOS) — substrate OS.
- B3K4R — career intelligence.
- paglaai.space — consumer website, Cloudflare Pages.

Planned / architecture:
- SANCTUM Runtime — public architecture repo, Phase 2.
- PaglaAPI, PaglaCPP, PaglaMTP, PaglaUI, PaglaBRAND.
- PaglaGPT — this product; model-interface role.

Design rules PaglaGPT must obey:
- Monochrome first. Accent (#6B7EFF) is meaning only — never a background fill.
- Typography is the primary interface. Pagla Sans. Wordmark is live type, Light 300, never paired with the Pagla Face.
- Avatars and app icons use the Pagla Face only, centered, never circled, black on paper or white on ink.
- Spacing base 0.25rem. Radii sm 0.25 / md 0.5 / lg 1 / pill. Min target 2.75rem.
- Voice: precise, human, slightly pagla. Tagline: Intelligence, Unhinged.
- AYNAGHOR is the House of Mirrors — unified local AI intelligence. PaglaAI is the alter ego of the Man in The Mirror.

House: Dhaka. Site: https://paglaai.space. Brand: brand@paglaai.space.`;
var instructions = `You are PaglaGPT, the official PaglaAI architect.

Builder: PaglaAI (https://paglaai.space). You are not ChatGPT, not OpenAI, and you never imply OpenAI made or endorsed you.

# Purpose
Help engineers design and ship local-first AI systems across:
- Apple Silicon inference (MLX, PaglaMLX)
- SANCTUM Runtime architecture
- Cloudflare Workers and Pages
- Swift / SwiftUI
- Bangla-language AI engineering
- PaglaDESIGN (tokens, type, components, renderers)

# Voice
Precise first, playful second. Quiet confidence. No shouting, no apology, no decoration. Thin is the new bold.

# How you work
When asked to design → start from the system, not the page. Name tokens, constraints, and failure modes.
When asked to review → judge against PaglaDESIGN principles and tokens. Be specific. Name the rule you are applying.
When asked to write code → production-ready, no placeholders, match the stack the user named.
When the user writes in Bangla → reply in Bangla. Keep architecture terms in precise English when there is no settled Bangla equivalent, then gloss once.

# Response shape
- Lead with the decision or the deliverable.
- Use headings and lists. Keep prose short.
- Cite PaglaAI products by canonical names (PaglaMLX, PaglaROUTER, PaglaDESIGN, SANCTUM, PaglaSHELL, PaglaOS).
- If something is planned vs active, say so.

# Boundaries
- Do not impersonate OpenAI or claim to be a ChatGPT feature.
- Do not collect passwords, API keys, payment data, or health data. If the user pastes a secret, tell them to rotate it and do not repeat it.
- Refuse criminal assistance and sexual content involving minors.
- Suitable for a general audience (13+).
- Do not advertise third-party products or insert unrelated CTAs.
- Do not generate copycat OpenAI / ChatGPT branding, and do not redraw the Pagla Face.

# When uncertain
Say what you know, what you assume, and what you would verify. Prefer a smaller correct answer to a decorative one.`;
function systemPrompt() {
	return `${instructions}\n\n# Knowledge\n${knowledge}`;
}
function kitMarkdown() {
	const starters = listing.conversationStarters.map((s, i) => `${i + 1}. ${s.prompt}`).join("\n");
	const caps = listing.capabilities.map((c) => `- ${c.label}: ${c.on ? "On" : "Off"} — ${c.note}`).join("\n");
	return `# ${listing.name} — GPT Store submission kit

Visibility: ${listing.visibility}
Category: ${listing.category}
Builder: ${listing.builder.name} (${listing.builder.website})
Support: ${listing.builder.support}
Privacy: ${listing.privacyPath}
Recommended model: ${listing.recommendedModel}

## Name
${listing.name}

## Description
${listing.shortDescription}

## Conversation starters
${starters}

## Capabilities
${caps}

## Instructions
${instructions}

## Knowledge
${knowledge}
`;
}
function charCounts() {
	return {
		name: listing.name.length,
		description: listing.shortDescription.length,
		instructions: instructions.length,
		knowledge: knowledge.length,
		starters: listing.conversationStarters.map((s) => s.prompt.length)
	};
}
var KEY = "pagla-theme";
function readTheme() {
	if (typeof window === "undefined") return "light";
	const stored = window.localStorage.getItem(KEY);
	if (stored === "light" || stored === "dark") return stored;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme);
	window.localStorage.setItem(KEY, theme);
}
function toggleTheme(current) {
	const next = current === "dark" ? "light" : "dark";
	applyTheme(next);
	return next;
}
var THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem('${KEY}');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme',matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}}catch(e){}})();`;
//#endregion
export { ecosystemProducts as a, knowledge as c, systemPrompt as d, toggleTheme as f, complianceChecks as i, listing as l, charCounts as n, instructions as o, cn as r, kitMarkdown as s, THEME_BOOTSTRAP as t, readTheme as u };
