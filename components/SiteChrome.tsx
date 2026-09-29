import Link from "next/link";
import { footerLinks, homeNav, site } from "@/data/site";

const externalRel = "noopener noreferrer";

export function ExtLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel={externalRel} className={className}>
      {children}
    </a>
  );
}

export function SiteHeader({
  variant = "home",
}: {
  variant?: "home" | "inner";
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-rule/80 bg-bg/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[880px] flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-10 sm:py-4"
      >
        <Link
          href={variant === "home" ? "#about" : "/"}
          className="group shrink-0 font-mono text-[12px] uppercase tracking-[0.08em] text-fg transition-[color,letter-spacing] duration-200 hover:tracking-[0.14em] hover:text-accent"
        >
          <span className="inline-block border-b border-transparent transition-colors duration-200 group-hover:border-accent">
            {site.name}
          </span>
        </Link>
        {variant === "home" ? (
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 sm:justify-end">
            {homeNav.map((item, i) => (
              <li key={item.href} className="flex items-center gap-1">
                {i > 0 ? (
                  <span className="text-muted" aria-hidden>
                    ·
                  </span>
                ) : null}
                <a
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors duration-150 hover:text-accent sm:text-[12px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors duration-150 hover:text-accent sm:text-[12px]"
          >
            Back to home
          </Link>
        )}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="mt-auto border-t border-rule bg-parchment/60"
    >
      <div className="mx-auto flex max-w-[880px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <div>
          <Link
            href="/"
            className="group inline-block text-[14px] font-semibold text-fg transition-colors duration-200 hover:text-accent"
          >
            <span className="border-b border-transparent transition-colors duration-200 group-hover:border-accent">
              {site.name}
            </span>
          </Link>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            {site.location}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
          {footerLinks.map((link, i) => (
            <li key={link.label} className="flex items-center gap-1">
              {i > 0 ? (
                <span className="text-muted" aria-hidden>
                  ·
                </span>
              ) : null}
              {link.href.startsWith("mailto:") ? (
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors duration-150 hover:text-accent"
                >
                  {link.label}
                </a>
              ) : (
                <ExtLink
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors duration-150 hover:text-accent"
                >
                  {link.label}
                </ExtLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
