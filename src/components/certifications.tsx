import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Section } from "@/components/section";
import { certifications } from "@/lib/site";

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          // Same-tab link: clicking the badge takes the visitor straight to
          // the issuer's verification page.
          <a
            key={cert.name}
            href={cert.verifyUrl}
            title={`Verify: ${cert.name}`}
            className="group flex items-center gap-5 rounded-lg border border-zinc-200 bg-white p-5 transition-all duration-200 hover:scale-[1.02] hover:border-zinc-300 dark:border-zinc-700/60 dark:bg-zinc-800/40 dark:hover:border-zinc-600"
          >
            <Image
              src={cert.badge}
              alt={`${cert.name} badge`}
              width={72}
              height={72}
              className="h-18 w-18 shrink-0 object-contain"
            />
            <div className="min-w-0">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {cert.issuer}
              </p>
              <p className="mt-2 flex items-center gap-1 text-xs text-zinc-400 transition-colors group-hover:text-emerald-600 dark:text-zinc-500 dark:group-hover:text-emerald-400">
                <BadgeCheck className="h-3.5 w-3.5" strokeWidth={1.75} />
                Click to verify
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
