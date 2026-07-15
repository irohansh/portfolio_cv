import { featuredRepos, site } from "@/lib/site";

/** A repo enriched with the hand-curated tech stack from `featuredRepos`. */
export type Project = Repo & { stack?: readonly string[] };

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

/** Repos to never show (profile README, config dumps, etc.). */
const EXCLUDED_REPOS = new Set([site.githubUsername.toLowerCase()]);
const MAX_PROJECTS = 6;

/**
 * Returns the repos curated in `featuredRepos` (in that order, with their
 * hand-written descriptions), falling back to star/recency ranking if none
 * of the curated names exist. Revalidated hourly via ISR.
 */
export async function getProjects(): Promise<Project[]> {
  const res = await fetch(
    `https://api.github.com/users/${site.githubUsername}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return [];

  const repos: Repo[] = await res.json();
  const byName = new Map(repos.map((repo) => [repo.name, repo]));

  const featured = Object.entries(featuredRepos)
    .map(([name, meta]) => {
      const repo = byName.get(name);
      return repo
        ? { ...repo, description: meta.description, stack: meta.stack }
        : null;
    })
    .filter((repo) => repo !== null);

  if (featured.length > 0) return featured;

  return repos
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        !EXCLUDED_REPOS.has(repo.name.toLowerCase())
    )
    .sort((a, b) => {
      if (a.stargazers_count !== b.stargazers_count)
        return b.stargazers_count - a.stargazers_count;
      return (
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    })
    .slice(0, MAX_PROJECTS);
}

/** GitHub's linguist colors for the languages likely to appear. */
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Go: "#00ADD8",
  Python: "#3572A5",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  CSS: "#663399",
  Shell: "#89e051",
  Dockerfile: "#384d54",
};

export function getLanguageColor(language: string | null): string {
  return (language && LANGUAGE_COLORS[language]) || "#8b8b8b";
}
