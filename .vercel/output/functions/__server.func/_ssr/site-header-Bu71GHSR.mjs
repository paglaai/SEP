import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { f as toggleTheme, r as cn, u as readTheme } from "./theme-BW0WOISB.mjs";
import { B as require_react, d as useRouterState, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Moon, i as Sun, l as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-Bu71GHSR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 min-h-11 px-4 text-small font-medium transition-[background-color,border-color,opacity,transform] duration-[var(--pagla-duration-fast)] ease-[var(--pagla-ease)] disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98]", {
	variants: { variant: {
		primary: "bg-ink text-paper rounded-md hover:opacity-90",
		secondary: "border border-border text-ink rounded-md bg-transparent hover:bg-surface",
		ghost: "text-ink rounded-md hover:bg-surface",
		icon: "size-11 p-0 rounded-md text-ink hover:bg-surface"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
var links = [
	{
		to: "/",
		label: "Store"
	},
	{
		to: "/chat",
		label: "Chat"
	},
	{
		to: "/configure",
		label: "Configuration"
	}
];
function SiteHeader({ compact = false }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setTheme(readTheme());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex items-center justify-between gap-3 px-4", compact ? "h-14 max-w-none" : "h-16 max-w-[75rem]"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-[1.125rem] font-light tracking-tight text-ink",
					"aria-label": "PaglaAI",
					children: "PaglaAI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("inline-flex min-h-11 items-center px-3 text-small", pathname === l.to ? "text-ink" : "text-muted hover:text-ink"),
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "icon",
							"aria-label": theme === "dark" ? "Switch to light" : "Switch to dark",
							onClick: () => setTheme(toggleTheme(theme)),
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
								className: "size-4",
								strokeWidth: 1.75
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
								className: "size-4",
								strokeWidth: 1.75
							})
						}),
						pathname !== "/chat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chat",
							className: "hidden min-h-11 items-center rounded-md bg-ink px-4 text-small font-medium text-paper sm:inline-flex",
							children: "Start chat"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "icon",
							className: "md:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-5",
								strokeWidth: 1.75
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								strokeWidth: 1.75
							})
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border px-4 py-3 md:hidden",
			"aria-label": "Mobile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center text-small text-ink",
					children: l.label
				}) }, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/privacy",
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center text-small text-muted",
					children: "Privacy"
				}) })]
			})
		}) : null]
	});
}
//#endregion
export { SiteHeader as n, Button as t };
