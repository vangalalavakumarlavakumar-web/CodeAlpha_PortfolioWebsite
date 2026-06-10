import { Briefcase, CircleCheck } from "lucide-react"
import { Section } from "@/components/section"
import { experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <Section id="experience" kicker="// 04. my journey" title="Experience">
      <div className="relative border-l border-border pl-8">
        {experience.map((item) => (
          <div key={item.role} className="relative">
            <span className="absolute -left-[41px] flex size-6 items-center justify-center rounded-full border border-primary/50 bg-background">
              <Briefcase className="size-3 text-primary" />
            </span>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground">
                {item.role}
              </h3>
              <p className="font-mono text-sm text-primary">{item.org}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
