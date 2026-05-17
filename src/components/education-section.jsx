import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { getCredentialsInfo } from "@/lib/data";

export function EducationSection() {
  const { education } = getCredentialsInfo();

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <GraduationCap className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Education</h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={100 * (index + 1)}
            >
              <div className="bg-zinc-800/30 p-3 sm:p-4 rounded-lg space-y-3">
                <h4 className="text-sm font-medium">{edu.degree}</h4>
                <p className="text-xs text-zinc-400">
                  {edu.institution} • {edu.year}
                </p>

                {edu.projects?.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-zinc-700/50">
                    <p className="text-xs font-medium text-zinc-400">
                      Relevant coursework projects
                    </p>
                    <ul className="space-y-2">
                      {edu.projects.map((project, i) => (
                        <li key={i} className="text-sm text-zinc-300">
                          <span className="font-medium text-white">
                            {project.name}
                          </span>
                          <span className="text-zinc-400">
                            {" "}
                            - {project.technologies.join(", ")}
                          </span>
                          {project.goal && (
                            <p className="text-xs text-zinc-400 mt-0.5">
                              {project.goal}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
