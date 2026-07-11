import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CertificationCard } from "./certification-card";
import { getCredentialsInfo } from "@/lib/data";

export function CertificationsSection() {
  const { certifications, skills } = getCredentialsInfo();

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {certifications.map((cert, index) => (
            <AnimatedSection
              key={`${cert.name}-${cert.date}`}
              animation="zoom-in"
              delay={100 * (index + 1)}
            >
              <CertificationCard
                name={cert.name}
                issuer={cert.issuer}
                date={cert.date}
                category={cert.category}
                pdfUrl={cert.pdfUrl}
              />
            </AnimatedSection>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
