import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-h-11 px-4 text-small font-medium transition-[background-color,border-color,opacity,transform] duration-[var(--pagla-duration-fast)] ease-[var(--pagla-ease)] disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-ink text-paper rounded-md hover:opacity-90",
        secondary:
          "border border-border text-ink rounded-md bg-transparent hover:bg-surface",
        ghost: "text-ink rounded-md hover:bg-surface",
        icon: "size-11 p-0 rounded-md text-ink hover:bg-surface",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export function Button({
  className,
  variant,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}
