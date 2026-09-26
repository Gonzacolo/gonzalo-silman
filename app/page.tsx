import Image from "next/image";
import {
  about,
  investments,
  nav,
  projects,
  site,
  writing,
} from "@/data/site";

const externalRel = "noopener noreferrer";

function ExtLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={externalRel}
      className={className}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-20 border-b border-rule/80 bg-bg/90 backdrop-blur-sm">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[720px] items-center justify-between gap-4 px-6 py-4 sm:px-10"
        >
          <a
            href="#top"
            className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg"
          >
            {site.name}
          </a>
          <ul className="hidden items-center gap-1 sm:flex">
            {nav.map((item, i) => (
              <li key={item.href} className="flex items-center gap-1">
                {i > 0 ? (
                  <span className="text-muted" aria-hidden>
                    ·
                  </span>
                ) : null}
                <a
                  href={item.href}
                  className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted transition-colors duration-150 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ExtLink
            href={site.meeting}
            className="inline-flex items-center rounded-lg bg-accent px-4 py-2.5 font-mono text-[12px] uppercase tracking-[0.08em] text-on-accent transition-colors duration-150 hover:bg-accent-hover"
          >
            Book a meeting
          </ExtLink>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[720px] flex-1 px-6 sm:px-10">
        <section
          id="top"
          className="grid gap-10 py-16 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-12 sm:py-20"
        >
          <div>
            <h1 className="text-[40px] leading-[0.96] tracking-[-0.04em] sm:text-[48px]">
              <span className="font-extralight text-fg">Gonzalo</span>{" "}
              <span className="font-semibold text-fg">Silman</span>
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-[1.55] text-fg">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ExtLink
                href={site.meeting}
                className="inline-flex items-center rounded-lg bg-accent px-5 py-3 font-mono text-[12px] uppercase tracking-[0.08em] text-on-accent transition-colors duration-150 hover:bg-accent-hover"
              >
                Book a meeting
              </ExtLink>
              <a
                href="#projects"
                className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg underline-offset-[3px] transition-colors duration-150 hover:text-accent hover:underline"
              >
                See my work
              </a>
            </div>
          </div>
          <div
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface text-center sm:h-36 sm:w-36"
            aria-hidden
          >
            <span className="font-mono text-[18px] uppercase tracking-[0.12em] text-accent">
              GS
            </span>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-12 sm:py-16">
          <h2 className="text-[24px] font-medium leading-[1.2] tracking-tight text-fg">
            About
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-[1.55] text-fg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <h3 className="mt-10 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            What I&apos;m looking for now
          </h3>
          <p className="mt-3 text-[17px] leading-[1.55] text-fg">
            {about.lookingFor}
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-[17px] leading-[1.55] text-fg">
            {about.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="scroll-mt-24 py-12 sm:py-16">
          <h2 className="text-[24px] font-medium leading-[1.2] tracking-tight text-fg">
            Projects
          </h2>
          <div className="mt-8 space-y-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="overflow-hidden rounded-xl border border-rule bg-surface shadow-[0_1px_2px_rgba(28,24,20,0.06)]"
              >
                {project.image ? (
                  <div className="relative aspect-[2/1] w-full border-b border-rule bg-parchment">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 720px) 100vw, 720px"
                    />
                  </div>
                ) : null}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    {project.href ? (
                      <ExtLink
                        href={project.href}
                        className="text-[18px] font-medium text-fg underline-offset-[3px] hover:text-accent hover:underline"
                      >
                        {project.name}
                      </ExtLink>
                    ) : (
                      <h3 className="text-[18px] font-medium text-fg">
                        {project.name}
                      </h3>
                    )}
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                      {project.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-[15px] font-medium text-muted">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-[16px] leading-[1.55] text-fg">
                    {project.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="investments" className="scroll-mt-24 py-12 sm:py-16">
          <h2 className="text-[24px] font-medium leading-[1.2] tracking-tight text-fg">
            Investments &amp; Advisory
          </h2>
          <div className="mt-8 space-y-6">
            {investments.map((item) => (
              <article
                key={item.name}
                className="flex flex-col gap-4 overflow-hidden rounded-xl border border-rule bg-surface shadow-[0_1px_2px_rgba(28,24,20,0.06)] sm:flex-row sm:items-stretch"
              >
                {item.image ? (
                  <div className="relative aspect-[16/10] w-full shrink-0 border-b border-rule bg-parchment sm:aspect-auto sm:w-44 sm:border-b-0 sm:border-r">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="176px"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  <ExtLink
                    href={item.href}
                    className="text-[18px] font-medium text-fg underline-offset-[3px] hover:text-accent hover:underline"
                  >
                    {item.name}
                  </ExtLink>
                  <p className="mt-2 text-[16px] leading-[1.55] text-fg">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="writing"
          className="scroll-mt-24 border-t border-rule py-12 sm:py-16"
        >
          <h2 className="text-[24px] font-medium leading-[1.2] tracking-tight text-fg">
            Writing
          </h2>
          <ul className="mt-8 divide-y divide-rule">
            {writing.map((piece) => (
              <li key={piece.href} className="py-5 first:pt-0 last:pb-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {piece.source}
                </span>
                <div className="mt-1">
                  <ExtLink
                    href={piece.href}
                    className="text-[17px] font-medium text-fg underline-offset-[3px] hover:text-accent hover:underline"
                  >
                    {piece.title}
                  </ExtLink>
                </div>
                <p className="mt-2 text-[15px] leading-[1.5] text-muted">
                  {piece.blurb}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer
        id="footer"
        className="mt-auto border-t border-rule bg-parchment/60"
      >
        <div className="mx-auto flex max-w-[720px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-10">
          <div>
            <p className="text-[14px] font-semibold text-fg">{site.name}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
              {site.location}
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
            {(
              [
                { href: site.social.x, label: "X" },
                { href: site.social.linkedin, label: "LinkedIn" },
                { href: `mailto:${site.email}`, label: "Email" },
                { href: site.meeting, label: "Book a meeting" },
              ] as const
            ).map((link, i) => (
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
    </div>
  );
}
