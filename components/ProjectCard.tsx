import Image from "next/image";
import type { Project } from "@/data/site";
import { ExtLink } from "@/components/SiteChrome";

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-rule bg-surface shadow-[0_1px_2px_rgba(28,24,20,0.06)]">
      <div
        className={`relative w-full shrink-0 border-b border-rule ${
          project.imageFit === "contain" ? "bg-white" : "bg-parchment"
        } ${compact ? "aspect-[16/10]" : "aspect-[2/1]"}`}
        aria-hidden={!project.image}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            className={
              project.imageFit === "contain"
                ? "object-contain p-6 sm:p-8"
                : "object-cover"
            }
            sizes={
              compact
                ? "(max-width: 640px) 100vw, 420px"
                : "(max-width: 880px) 100vw, 880px"
            }
          />
        ) : null}
      </div>
      <div
        className={`flex flex-1 flex-col ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6"}`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          {project.href ? (
            <ExtLink
              href={project.href}
              className="text-[18px] font-medium text-fg underline-offset-[3px] hover:text-accent hover:underline"
            >
              {project.name}
            </ExtLink>
          ) : (
            <h3 className="text-[18px] font-medium text-fg">{project.name}</h3>
          )}
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            {project.tag}
          </span>
        </div>
        <p className="mt-1 text-[15px] font-medium text-muted">
          {project.subtitle}
        </p>
        {!compact ? (
          <p className="mt-3 text-[16px] leading-[1.55] text-fg">
            {project.body}
          </p>
        ) : null}
      </div>
    </article>
  );
}
