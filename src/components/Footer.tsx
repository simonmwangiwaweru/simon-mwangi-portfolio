import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-bold">{site.name}</p>
          <p className="text-sm text-muted">{site.location}</p>
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email Simon"
              className="text-ink/70 transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Simon's GitHub profile"
              className="text-ink/70 transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Simon's LinkedIn profile"
              className="text-ink/70 transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
          </li>
        </ul>

        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
