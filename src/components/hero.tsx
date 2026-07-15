import { Download, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  return (
    <section className="pt-24 pb-20 sm:pt-32 sm:pb-24">
      <p className="mb-3 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
        <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
        {site.location}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        {site.name}
      </h1>
      <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
        {site.role}
      </p>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        {site.tagline}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href={site.resume}
            download
            className="flex items-center gap-1.5 rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-all duration-200 hover:scale-[1.02] hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
          >
            <Download className="h-4 w-4" strokeWidth={1.75} />
            Resume
          </a>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
