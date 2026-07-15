import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        <p>
          My curiosity has always lived one layer below the screen — in the
          routing, the queries, and the quiet machinery that decides whether
          an app feels instant or broken. A year at Cestrum took that
          curiosity into production: building APIs for a community of
          thousands taught me restraint, securing them taught me healthy
          caution, and the bugs that only appear under real traffic taught me
          more than any tutorial could.
        </p>
        <p>
          My habit is to think in trade-offs before thinking in code.
          Competitive programming taught me to ask{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            &quot;what does this cost?&quot;
          </span>{" "}
          before writing a single line, and system design keeps asking the
          same question at a larger scale — what to cache, what to queue, and
          what to let fail gracefully.
        </p>
        <p>
          My projects usually begin as complaints. Code reviews felt slow and
          inconsistent, so I built{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            MergeMind
          </span>
          , where five specialised AI agents split a pull request, review it
          in parallel, and return one coherent verdict. Incident response kept
          scattering across Slack threads and GitHub issues, so I&apos;m
          building{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            IncidentOS
          </span>{" "}
          to bring triage into a single, reliable place.
        </p>
        <p>
          Along the way I&apos;ve earned my stripes as an{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            AWS Solutions Architect
          </span>{" "}
          and an{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Oracle Certified Professional
          </span>
          . I treat them as a floor, not a ceiling — proof of the
          fundamentals, while the real learning happens in whatever I&apos;m
          building next.
        </p>
      </div>
    </Section>
  );
}
