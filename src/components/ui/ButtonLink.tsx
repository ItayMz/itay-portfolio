import type { ReactNode } from "react";
import { Link } from "react-router";

type ButtonLinkProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ children, to, variant = "primary" }: ButtonLinkProps) {
  const styles = variant === "primary"
    ? "border border-brand/70 bg-gradient-to-r from-[#176fff] to-[#2f88ff] text-white shadow-[0_12px_32px_rgb(31_112_255_/_0.22)] hover:-translate-y-0.5 hover:brightness-110"
    : "border border-white/16 bg-[#111722]/75 text-copy hover:-translate-y-0.5 hover:border-white/26 hover:bg-white/[0.07]";

  return (
    <Link
      to={to}
      className={`focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-6 text-sm font-semibold transition duration-200 ${styles}`}
    >
      {children}
    </Link>
  );
}
