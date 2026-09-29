import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ExtLink, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import {
  about,
  brands,
  featuredProjects,
  investments,
  mentions,
  writing,
} from "@/data/site";

export default function Home() {
  return (
    <div className="relative z-0 flex min-w-0 flex-1 flex-col">
      <SiteHeader variant="home" />

      <main className="mx-auto w-full min-w-0 max-w-[880px] flex-1 px-5 sm:px-10">
        <section id="about" className="scroll-mt-24 py-10 sm:py-16">
          <h1 className="sr-only">Gonzalo Silman</h1>
          <h2 className="text-[22px] font-medium leading-[1.2] tracking-tight text-fg sm:text-[24px]">
            About
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-[1.55] text-fg sm:text-[17px]">
            <p>
              I have fun challenging myself with ambitious projects, especially
              when people say they can&apos;t be done.
            </p>
            <p>
              I studied economics at{" "}
              <ExtLink href={brands.utdt} className="prose-link">
                Universidad Torcuato Di Tella
              </ExtLink>{" "}
              to understand the mistakes Argentina made in economic policy.
            </p>
            <p>
              I built{" "}
              <ExtLink href={brands.wakeup} className="prose-link">
                WakeUp Labs
              </ExtLink>
              , a software development company that helped startups and
              fintechs. We ran 25+ people at once, and worked with clients
              around the world like{" "}
              <ExtLink href={brands.coinbase} className="prose-link">
                Coinbase
              </ExtLink>
              ,{" "}
              <ExtLink href={brands.arbitrum} className="prose-link">
                Arbitrum
              </ExtLink>{" "}
              and{" "}
              <ExtLink href={brands.cocaCola} className="prose-link">
                The Coca-Cola Company
              </ExtLink>
              .
            </p>
          </div>
          <h3 className="mt-10 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            What I&apos;m looking for now
          </h3>
          <p className="mt-3 text-[16px] leading-[1.55] text-fg sm:text-[17px]">
            {about.lookingFor}
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-[16px] leading-[1.55] text-fg sm:text-[17px]">
            {about.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="scroll-mt-24 py-10 sm:py-16">
          <h2 className="text-[22px] font-medium leading-[1.2] tracking-tight text-fg sm:text-[24px]">
            Featured Projects
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-3 font-mono text-[12px] uppercase tracking-[0.08em] text-on-accent transition-colors duration-150 hover:bg-accent-hover"
            >
              See more
            </Link>
          </div>
        </section>

        <section id="investments" className="scroll-mt-24 py-10 sm:py-16">
          <h2 className="text-[22px] font-medium leading-[1.2] tracking-tight text-fg sm:text-[24px]">
            Investments &amp; Advisory
          </h2>
          <div className="mt-8 space-y-6">
            {investments.map((item) => (
              <article
                key={item.name}
                className="flex flex-col overflow-hidden rounded-xl border border-rule bg-surface shadow-[0_1px_2px_rgba(28,24,20,0.06)] sm:flex-row sm:items-stretch"
              >
                <div
                  className="relative aspect-[16/10] w-full shrink-0 border-b border-rule bg-parchment sm:aspect-auto sm:w-44 sm:min-h-[7.5rem] sm:border-b-0 sm:border-r"
                  aria-hidden={!item.image}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 176px"
                    />
                  ) : null}
                </div>
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
          className="scroll-mt-24 border-t border-rule py-10 sm:py-16"
        >
          <h2 className="text-[22px] font-medium leading-[1.2] tracking-tight text-fg sm:text-[24px]">
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

        <section
          id="mentions"
          className="scroll-mt-24 border-t border-rule py-10 sm:py-16"
        >
          <h2 className="text-[22px] font-medium leading-[1.2] tracking-tight text-fg sm:text-[24px]">
            Mentions, interviews &amp; talks
          </h2>
          <ul className="mt-8 divide-y divide-rule">
            {mentions.map((item) => (
              <li key={item.href} className="py-5 first:pt-0 last:pb-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {item.source}
                </span>
                <div className="mt-1">
                  <ExtLink
                    href={item.href}
                    className="text-[17px] font-medium text-fg underline-offset-[3px] hover:text-accent hover:underline"
                  >
                    {item.title}
                  </ExtLink>
                </div>
                <p className="mt-2 text-[15px] leading-[1.5] text-muted">
                  {item.blurb}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
