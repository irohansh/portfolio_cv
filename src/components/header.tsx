import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-700/50 dark:bg-zinc-900/80">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="transition-opacity hover:opacity-70"
        >
          <Image
            src="/monogram-r.svg"
            alt={`${site.name} logo`}
            width={40}
            height={40}
            priority
            className="h-10 w-auto dark:invert"
          />
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-1 hidden h-4 w-px bg-zinc-200 sm:block dark:bg-zinc-700" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
