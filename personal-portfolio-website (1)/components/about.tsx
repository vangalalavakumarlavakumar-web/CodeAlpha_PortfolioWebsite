import Image from "next/image"
import { GraduationCap, Building2, Award, Sparkles } from "lucide-react"
import { Section } from "@/components/section"
import { about } from "@/lib/portfolio-data"

const cards = [
  { icon: GraduationCap, label: "Degree", value: about.degree },
  { icon: Building2, label: "College", value: about.college },
  { icon: Award, label: "CGPA", value: about.cgpa },
]

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-primary/20 blur-2xl" />
            <div className="relative w-48 overflow-hidden rounded-full border-2 border-primary/50">
              <Image
                src="/hero2.png"
                alt="Lava Kumar Vangala"
                width={192}
                height={240}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>
            I&apos;m Lava Kumar, a Computer Science student passionate about Cyber
            Security, Full-Stack Development, and emerging technologies. My
            experience includes developing real-world projects in web development,
            security, and software engineering while continuously strengthening my
            problem-solving and programming skills.
          </p>
          <p>
            Through academic projects, internships, and certifications, I have
            gained hands-on experience in Java, web technologies, database
            management, and modern development practices. I enjoy building secure,
            scalable, and user-focused applications while exploring the latest
            advancements in technology.
          </p>
          <p>
            My goal is to leverage my technical expertise, creativity, and
            dedication to contribute to innovative solutions that make a meaningful
            impact in the technology industry.
          </p>
          <div>
            <p className="mb-3 flex items-center gap-2 font-medium text-foreground">
              <Sparkles className="size-4 text-primary" />
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {about.interests.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <card.icon className="size-7 text-primary" aria-hidden="true" />
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {card.label}
                </p>
                <p className="mt-1 font-semibold text-card-foreground">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
