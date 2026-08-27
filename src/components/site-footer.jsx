import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { getNavItems, getPersonalInfo } from "@/lib/data";

export function SiteFooter() {
  const navItems = getNavItems();
  const personalInfo = getPersonalInfo();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-8 sm:mt-12 border-t border-border bg-card/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
        <div className="space-y-3">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-heading font-bold text-lg">
            {personalInfo.name}
          </div>
          <p className="text-sm text-zinc-400">{personalInfo.title}</p>
          <div className="flex items-center text-xs text-zinc-500">
            <span
              className={`w-2 h-2 rounded-full mr-2 ${personalInfo.availableForWork ? "bg-green-500" : "bg-red-500"}`}
            />
            {personalInfo.availableForWork
              ? "Available for new projects"
              : "Not available for new projects"}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-sm font-semibold text-zinc-300">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={
                  item.href.startsWith("#") ? `/${item.href}` : item.href
                }
                className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors w-fit"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-sm font-semibold text-zinc-300">
            Connect
          </h3>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors w-fit"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span className="break-all">{personalInfo.email}</span>
          </a>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <MapPin className="w-4 h-4 shrink-0" />
            {personalInfo.location}
          </div>
          <SocialLinks socialLinks={personalInfo.social} />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 text-center text-xs sm:text-sm text-zinc-500">
          © {year} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
