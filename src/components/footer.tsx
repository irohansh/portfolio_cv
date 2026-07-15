import { site } from "@/lib/site";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700/50">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-8">
        <SocialLinks exclude={["LeetCode"]} />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
