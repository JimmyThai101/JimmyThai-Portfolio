import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-100 text-zinc-950 hover:bg-white border border-transparent",
  secondary:
    "bg-transparent text-zinc-100 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900",
  ghost:
    "bg-transparent text-zinc-300 border border-transparent hover:text-zinc-50 hover:bg-zinc-900",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
    variantClasses[variant],
    className,
  ].join(" ");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
