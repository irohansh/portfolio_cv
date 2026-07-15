import { MapPin } from "lucide-react";
import { Section } from "@/components/section";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((item) => (
          <li key={`${item.role}-${item.company}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {item.company}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-500 italic dark:text-zinc-400">
                  {item.role}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  {item.period}
                </p>
                <p className="mt-0.5 flex items-center justify-end gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {item.location}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {item.summary}
            </p>
            <ul className="mt-3 space-y-2">
              {item.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
