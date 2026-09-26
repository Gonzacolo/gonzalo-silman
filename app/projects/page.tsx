import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects · Gonzalo Silman",
  description:
    "Selected work from Gonzalo Silman: products, ops, and side projects.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader variant="inner" />

      <main className="mx-auto w-full max-w-[880px] flex-1 px-6 py-12 sm:px-10 sm:py-16">
        <h1 className="text-[32px] font-medium leading-[1.1] tracking-tight text-fg sm:text-[40px]">
          Selected Work
        </h1>
        <p className="mt-4 max-w-xl text-[17px] leading-[1.55] text-muted">
          Products, operating systems, and experiments built as founder,
          operator, and side-project builder.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="mt-12">
          <Link
            href="/"
            className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted underline-offset-[3px] transition-colors duration-150 hover:text-accent hover:underline"
          >
            Back to home
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
