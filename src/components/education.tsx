import { Section } from "@/components/section";
import { education } from "@/lib/site";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-8">
        {education.map((item) => (
          <li key={item.degree}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {item.degree}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                  {item.institution}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  {item.period}
                </p>
                <p className="mt-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  CGPA : {item.cgpa}
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {item.intro}
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Relevant coursework
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {item.coursework.map((course) => (
                <li
                  key={course}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {course}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
