import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CertificationCard } from "@/components/certification-card";
import { PortfolioHeader } from "@/components/portfolio-header";
import { SiteFooter } from "@/components/site-footer";
import { getCredentialsInfo } from "@/lib/data";

export const metadata = {
  title: "Certifications",
  description: "Professional certifications and training credentials.",
};

export default function CertificationsPage() {
  const { certifications } = getCredentialsInfo();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0" />
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-8">
        <Link
          href="/#certifications"
          className="inline-flex items-center text-xs sm:text-sm text-zinc-400 hover:text-white mb-4 sm:mb-6 transition-colors"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Back to Portfolio
        </Link>

        <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
          <CardContent className="p-4 sm:p-6">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Certifications
            </h1>
            <p className="mt-2 text-sm sm:text-base text-zinc-400">
              Professional certifications and training credentials.
            </p>

            <section className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert) => (
                <CertificationCard
                  key={`${cert.name}-${cert.date}`}
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  category={cert.category}
                  pdfUrl={cert.pdfUrl}
                  thumbnailImage={cert.thumbnailImage}
                />
              ))}
            </section>
          </CardContent>
        </Card>
      </div>

      <SiteFooter />
    </main>
  );
}
