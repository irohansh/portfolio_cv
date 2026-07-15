import { Section } from "@/components/section";
import { skills } from "@/lib/site";

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700/60 dark:bg-zinc-800/40 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
