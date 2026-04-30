import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent";
};

export function Card({ children, className, tone = "default" }: CardProps) {
  const classes = ["card", tone === "accent" ? "card--accent" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}