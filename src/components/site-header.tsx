import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { readTheme, toggleTheme, type Theme } from "@/lib/theme";

const links = [
  { to: "/", label: "Store" },
  { to: "/chat", label: "Chat" },
  { to: "/configure", label: "Configuration" },
] as const;

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [theme, setTheme] = useState<Theme>("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur-md">
      <div
        className={cn(
          "mx-auto flex items-center justify-between gap-3 px-4",
          compact ? "h-14 max-w-none" : "h-16 max-w-[75rem]",
        )}
      >
        <Link
          to="/"
          className="text-[1.125rem] font-light tracking-tight text-ink"
          aria-label="PaglaAI"
        >
          PaglaAI
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "inline-flex min-h-11 items-center px-3 text-small",
                pathname === l.to ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="icon"
            aria-label={theme === "dark" ? "Switch to light" : "Switch to dark"}
            onClick={() => setTheme(toggleTheme(theme))}
          >
            {theme === "dark" ? (
              <Sun className="size-4" strokeWidth={1.75} />
            ) : (
              <Moon className="size-4" strokeWidth={1.75} />
            )}
          </Button>
          {pathname !== "/chat" ? (
            <Link
              to="/chat"
              className="hidden min-h-11 items-center rounded-md bg-ink px-4 text-small font-medium text-paper sm:inline-flex"
            >
              Start chat
            </Link>
          ) : null}
          <Button
            variant="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-5" strokeWidth={1.75} />
            ) : (
              <Menu className="size-5" strokeWidth={1.75} />
            )}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center text-small text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/privacy"
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-small text-muted"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
