import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg" | "hero";

const sizes: Record<Size, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
  hero: "h-28 w-28 sm:h-36 sm:w-36",
};

export function PaglaFace({
  size = "md",
  className,
  alt = "PaglaGPT",
}: {
  size?: Size;
  className?: string;
  alt?: string;
}) {
  return (
    <span className={cn("relative inline-grid place-items-center", sizes[size], className)}>
      <img
        src="/brand/pagla-face-black.png"
        alt={alt}
        width={144}
        height={144}
        className="col-start-1 row-start-1 h-full w-full object-contain [html[data-theme=dark]_&]:hidden"
      />
      <img
        src="/brand/pagla-face-white.png"
        alt=""
        width={144}
        height={144}
        className="col-start-1 row-start-1 hidden h-full w-full object-contain [html[data-theme=dark]_&]:block"
      />
    </span>
  );
}
