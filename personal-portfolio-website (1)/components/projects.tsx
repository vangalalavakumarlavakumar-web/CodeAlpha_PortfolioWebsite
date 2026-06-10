import { ExternalLink, FolderGit2 } from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/brand-icons"
import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <Section id="projects" kicker="// 03. what i've built" title="Projects">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_0_30px_-10px_var(--primary)]"
          >
            <FolderGit2 className="size-8 text-primary transition-transform duration-300 group-hover:scale-110" />
            <h3 className="mt-4 text-lg font-semibold text-card-foreground">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild size="sm" variant="outline" className="flex-1">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="size-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" />
                  Demo
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
