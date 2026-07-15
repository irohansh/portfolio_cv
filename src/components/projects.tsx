import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/github";
import { site } from "@/lib/site";

export async function Projects() {
  const repos = await getProjects();

  return (
    <Section id="projects" title="Projects">
      {repos.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Projects are loading from GitHub — check back shortly or browse them
          directly on{" "}
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
          .
        </p>
      )}
      <div className="mt-8 flex justify-center">
        <a
          href={`${site.socials.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all duration-200 hover:scale-[1.02] hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700/60 dark:bg-zinc-800/40 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
        >
          Explore more repositories
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </a>
      </div>
    </Section>
  );
}
