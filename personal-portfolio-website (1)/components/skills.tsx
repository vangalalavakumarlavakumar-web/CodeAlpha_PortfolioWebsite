"use client"

import { Section } from "@/components/section"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"
import { skillGroups } from "@/lib/portfolio-data"

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <Section id="skills" kicker="// 02. my toolkit" title="Skills">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className={cn(
              "rounded-xl border border-border bg-card p-6",
              "transition-colors hover:border-primary/40",
            )}
          >
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-primary">
              {group.category}
            </h3>
            <div className="space-y-5">
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
