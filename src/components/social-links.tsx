import { Mail } from "lucide-react";
import {
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons";
import { site } from "@/lib/site";

const links = [
  {
    label: "GitHub",
    href: site.socials.github,
    icon: GithubIcon,
    hover: "hover:text-zinc-900 dark:hover:text-zinc-100",
  },
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    icon: LinkedinIcon,
    hover: "hover:text-[#0a66c2] dark:hover:text-[#70b5f9]",
  },
  {
    label: "Twitter",
    href: site.socials.twitter,
    icon: XIcon,
    hover: "hover:text-zinc-900 dark:hover:text-zinc-100",
  },
  {
    label: "LeetCode",
    href: site.socials.leetcode,
    icon: LeetcodeIcon,
    hover: "hover:text-[#FFA116] dark:hover:text-[#FFA116]",
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: Mail,
    hover: "hover:text-[#ea4335] dark:hover:text-[#f28b82]",
  },
] as const;

export function SocialLinks({
  className = "",
  exclude = [],
}: {
  className?: string;
  exclude?: string[];
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links
        .filter(({ label }) => !exclude.includes(label))
        .map(({ label, href, icon: Icon, hover }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(href.startsWith("mailto:")
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
          className={`text-zinc-400 transition-colors duration-200 dark:text-zinc-500 ${hover}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </a>
        ))}
    </div>
  );
}
