import { Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { getLanguageColor, type Project } from "@/lib/github";

export function ProjectCard({ repo }: { repo: Project }) {
  return (
    <article className="group flex flex-col rounded-lg border border-zinc-200 bg-white p-5 transition-all duration-200 hover:scale-[1.02] hover:border-zinc-300 dark:border-zinc-700/60 dark:bg-zinc-800/40 dark:hover:border-zinc-600">
      <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
        {repo.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {repo.description ?? "View the repository on GitHub for details."}
      </p>

      {repo.stack && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {repo.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}
        {/* Starring requires GitHub auth, so this opens the repo on GitHub
            where the visitor can star it — the count updates here within an
            hour via ISR. */}
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          title={`Star ${repo.name} on GitHub`}
          className="flex items-center gap-1 transition-colors hover:text-amber-500 dark:hover:text-amber-400"
        >
          <Star className="h-3.5 w-3.5" strokeWidth={1.75} />
          {repo.stargazers_count}
        </a>
        {/* Fork count — re-enable when wanted.
        <span className="flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5" strokeWidth={1.75} />
          {repo.forks_count}
        </span>
        (also re-add `GitFork` to the lucide-react import above) */}
      </div>

      <div className="mt-4 flex items-center gap-5 border-t border-zinc-100 pt-4 text-sm dark:border-zinc-700/60">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <GithubIcon className="h-4 w-4" />
          View Code
        </a>
        {/* Live Demo — re-enable once repos have a homepage URL set on GitHub.
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
            Live Demo
          </a>
        )}
        (also re-add `ExternalLink` to the lucide-react import above) */}
      </div>
    </article>
  );
}
