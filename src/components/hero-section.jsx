import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";

export function HeroSection() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl sm:h-[36rem] sm:w-[36rem]"
      />

      <div className="relative z-10 container mx-auto px-3 sm:px-4 pt-28 sm:pt-36 pb-10 sm:pb-16">
        <div className="flex flex-col-reverse items-center gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 mb-4 sm:mb-6 backdrop-blur-sm">
              <span
                className={`w-2 h-2 rounded-full ${personalInfo.availableForWork ? "bg-green-500" : "bg-red-500"}`}
              />
              <span className="text-xs text-zinc-400">
                {personalInfo.availableForWork
                  ? "Available for new projects"
                  : "Not available for new projects"}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {personalInfo.name}
            </h1>

            <p className="mt-3 sm:mt-4 text-lg sm:text-xl font-medium text-zinc-200">
              {personalInfo.title}
            </p>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              {aboutInfo.bio}
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {personalInfo.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800/70 text-zinc-300 border border-border"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
              >
                View My Work
              </a>
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-input text-sm font-medium text-zinc-200 transition-colors hover:bg-accent"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              )}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col items-center lg:items-start gap-3">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.location}
              </div>
              <SocialLinks socialLinks={personalInfo.social} />
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-cyan-400/30 ring-4 ring-zinc-800/50">
              <Image
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
