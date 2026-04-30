import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  year?: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, year, title, children }: SectionShellProps) {
  return (
    <section className="section-shell" id={id} aria-labelledby={`${id}-title`}>
      <header className="section-shell__header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        {year ? <p className="section-shell__year">{year}</p> : null}
      </header>

      <div className="section-shell__body">{children}</div>
    </section>
  );
}