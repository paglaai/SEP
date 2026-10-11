import { Fragment, type ReactNode } from "react";

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    const link = part.match(/^\[([^\]]+)\]\((https?:[^)]+)\)$/);
    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noreferrer">
          {link[1]}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function RichText({ text }: { text: string }) {
  const blocks = text.split(/```/g);
  const nodes: ReactNode[] = [];

  blocks.forEach((block, i) => {
    if (i % 2 === 1) {
      const nl = block.indexOf("\n");
      const code = nl === -1 ? block : block.slice(nl + 1).replace(/\n$/, "");
      nodes.push(
        <pre key={`c${i}`}>
          <code>{code}</code>
        </pre>,
      );
      return;
    }

    const paras = block.split(/\n{2,}/);
    paras.forEach((para, pi) => {
      const trimmed = para.trim();
      if (!trimmed) return;
      const lines = trimmed.split("\n");
      if (lines.every((l) => /^[-*]\s+/.test(l))) {
        nodes.push(
          <ul key={`u${i}-${pi}`}>
            {lines.map((l, li) => (
              <li key={li}>{inline(l.replace(/^[-*]\s+/, ""))}</li>
            ))}
          </ul>,
        );
        return;
      }
      if (lines.every((l) => /^\d+\.\s+/.test(l))) {
        nodes.push(
          <ol key={`o${i}-${pi}`}>
            {lines.map((l, li) => (
              <li key={li}>{inline(l.replace(/^\d+\.\s+/, ""))}</li>
            ))}
          </ol>,
        );
        return;
      }
      if (/^#{1,3}\s/.test(trimmed)) {
        const m = trimmed.match(/^(#{1,3})\s+([\s\S]+)$/);
        if (m) {
          const Tag = (m[1].length === 1 ? "h1" : m[1].length === 2 ? "h2" : "h3") as
            | "h1"
            | "h2"
            | "h3";
          nodes.push(
            <Tag key={`h${i}-${pi}`} className="mt-4 mb-2 first:mt-0">
              {inline(m[2])}
            </Tag>,
          );
          return;
        }
      }
      nodes.push(
        <p key={`p${i}-${pi}`} className="mb-3 last:mb-0">
          {inline(trimmed)}
        </p>,
      );
    });
  });

  return <div className="prose-pagla text-[0.975rem] leading-[1.55]">{nodes}</div>;
}
