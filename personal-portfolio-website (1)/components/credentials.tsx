import { BadgeCheck, Trophy } from "lucide-react"
import { Section } from "@/components/section"
import { certifications, achievements } from "@/lib/portfolio-data"

export function Credentials() {
  return (
    <Section
      id="certifications"
      kicker="// 05. recognition"
      title="Certifications & Achievements"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50"
              >
                <BadgeCheck className="size-5 shrink-0 text-primary" />
                <span className="text-sm text-card-foreground">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
            Achievements
          </h3>
          <div className="space-y-3">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center gap-2">
                  <Trophy className="size-5 text-accent" />
                  <p className="font-semibold text-card-foreground">
                    {item.title}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
