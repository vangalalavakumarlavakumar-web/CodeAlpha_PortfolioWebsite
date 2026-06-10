"use client"

import { useMemo } from "react"
import {
  ArrowLeft,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  Printer,
  Sparkles,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"

const objective =
  "Aspiring Cyber Security undergraduate with knowledge of network security, ethical hacking, vulnerability assessment, and Python programming. Passionate about identifying security threats, protecting digital systems, and applying technical skills to solve real-world cybersecurity challenges. Seeking opportunities to contribute and grow in the field of information security."

const education = {
  institution: "Sphoorthy Engineering College (Autonomous)",
  location: "Hyderabad, India",
  period: "2023 - 2027",
  degree: "B.Tech Computer Science and Engineering (Cyber Security)",
  cgpa: "8.45",
}

const experience = [
  {
    role: "Ethical Hacking Virtual Internship",
    org: "EduSkills Foundation",
    period: "June 2024",
    points: [
      "Completed a virtual internship in Ethical Hacking and Cyber Security.",
      "Learned network security, vulnerability assessment, and penetration testing fundamentals.",
      "Performed network scanning and information gathering using security tools.",
      "Analyzed common security vulnerabilities and mitigation techniques.",
      "Gained hands-on exposure to cybersecurity concepts and threat detection methods.",
    ],
  },
]

const skillGroups = [
  { category: "Languages", skills: ["C", "Python", "Java", "NumPy"] },
  { category: "Frontend", skills: ["HTML", "CSS", "React.js"] },
  { category: "Backend", skills: ["Node.js", "Express.js"] },
  { category: "Database", skills: ["MySQL", "MongoDB"] },
  { category: "Tools", skills: ["Git/GitHub", "VS Code", "Antigravity"] },
  { category: "Concepts", skills: ["MLOps", "Security Fundamentals", "Problem Solving"] },
]

const projects = [
  {
    title: "Smart AI Trip Planning System",
    meta: "Python, Machine Learning, Flask, JavaScript · 2025",
    description:
      "Developed an intelligent trip planning system that recommends optimized travel itineraries based on user preferences, budget, location, and time constraints. Implemented machine learning algorithms to analyze travel patterns and suggest destinations, hotels, and activities. Integrated APIs for maps, weather updates, and route optimization while providing a user-friendly interface.",
  },
  {
    title: "Student Management System",
    meta: "Java, MySQL, HTML, CSS, JavaScript · 2024",
    description:
      "Developed a web-based student management system to manage student records, attendance, marks, course details, and administrative operations. Implemented secure login functionality for administrators, faculty, and students with role-based access control. Designed an efficient database system for storing, managing, and retrieving academic information.",
  },
  {
    title: "Network Intrusion Detection System (NIDS)",
    meta: "Python, Machine Learning, Scikit-learn, Pandas, Streamlit · 2025",
    description:
      "Developed a machine learning-based Network Intrusion Detection System to monitor network traffic and detect malicious activities such as unauthorized access, DoS attacks, and suspicious patterns. Implemented classification algorithms to analyze network traffic and generate real-time alerts. Built a Streamlit dashboard for visualizing network activity and threat detection results.",
  },
]

const certifications = [
  "HackerRank - Java Basics",
  "HackerRank - Python Basics",
  "EduSkills - Ethical Hacking",
  "Google Developer Program Certificate",
  "Saylor - AI Foundations",
  "AWS Forage - Product Owner Simulation",
]

const achievements = [
  "Science Fair - Got First Prize - Two-Bit Arithmetic Operation.",
  "Team Lead - Smart AI Trip Planning System 2025; built and maintained the website.",
]

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description: string
}) {
  return (
    <div className="mb-5">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">{kicker}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
        {description}
      </p>
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground">
      {children}
    </span>
  )
}

export default function ResumePage() {
  const contactLinks = useMemo(
    () => [
      { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
      { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
      { label: "GitHub", href: profile.github, icon: GithubIcon },
    ],
    [],
  )

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_color-mix(in_oklch,var(--primary)_18%,transparent)_0%,_transparent_35%),linear-gradient(180deg,var(--background),color-mix(in_oklch,var(--background)_92%,black))] text-foreground">
      <section className="border-b border-border/70 bg-background/40 backdrop-blur-sm print:border-none print:bg-transparent">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </a>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
                Resume
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 max-w-2xl text-base text-muted-foreground md:text-lg">
                Aspiring Cyber Security undergraduate focused on secure systems,
                ethical hacking, and practical problem solving.
              </p>
            </div>
          </div>

          <div className="print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Printer className="size-4" />
              Print Resume
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="space-y-8">
          <section className="rounded-3xl border border-border bg-card/80 p-6 shadow-2xl shadow-primary/5 backdrop-blur md:p-8 print:border-none print:shadow-none">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs tracking-widest text-primary">
                  <Sparkles className="size-3.5" />
                  Ready for opportunities
                </p>
                <h2 className="text-2xl font-semibold md:text-3xl">{profile.title}</h2>
                <div className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground md:text-base">
                  <p><span className="font-semibold text-foreground">Email:</span> {profile.email}</p>
                  <p><span className="font-semibold text-foreground">Phone:</span> {profile.phone}</p>
                  <p><span className="font-semibold text-foreground">Location:</span> Hyderabad, India</p>
                  <p><span className="font-semibold text-foreground">LinkedIn:</span> {profile.linkedin}</p>
                  <p><span className="font-semibold text-foreground">GitHub:</span> {profile.github}</p>
                </div>
              </div>

              <div className="relative mx-auto size-40 overflow-hidden rounded-full border-2 border-primary/50 bg-secondary md:mx-0 md:size-48">
                <img
                  src="/hero2.png"
                  alt="Portrait of Lava Kumar Vangala"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 print:hidden">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur md:p-8 print:border-none print:bg-transparent">
            <SectionTitle
              kicker="Objective"
              title="Career objective"
              description="The opening paragraph from the uploaded resume document."
            />
            <p className="text-sm leading-7 text-muted-foreground md:text-base">{objective}</p>
          </section>

          <section className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur md:p-8 print:border-none print:bg-transparent">
            <SectionTitle
              kicker="Education"
              title="Academic background"
              description="Your current degree and performance as listed in the resume document."
            />
            <div className="rounded-2xl border border-border bg-secondary/60 p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/15 p-3 text-primary">
                  <GraduationCap className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{education.degree}</h3>
                      <p className="text-sm text-muted-foreground">{education.institution}</p>
                      <p className="text-sm text-muted-foreground">{education.location}</p>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                      CGPA {education.cgpa}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Current duration: {education.period}. Focused on Cyber Security,
                    networking, ethical hacking, and full-stack project work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur md:p-8 print:border-none print:bg-transparent">
            <SectionTitle
              kicker="Experience"
              title="Professional experience"
              description="The internship section from your resume document."
            />
            <div className="space-y-4">
              {experience.map((item) => (
                <article key={item.role} className="rounded-2xl border border-border bg-secondary/60 p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-primary">
                        <BriefcaseBusiness className="size-4" />
                        <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                      Internship
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur md:p-8 print:border-none print:bg-transparent">
            <SectionTitle
              kicker="Skills"
              title="Core capabilities"
              description="Skills were regrouped from the resume document for readability."
            />
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.category} className="rounded-2xl border border-border bg-secondary/60 p-5">
                  <h3 className="font-semibold">{group.category}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Pill key={skill}>{skill}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur md:p-8 print:border-none print:bg-transparent">
            <SectionTitle
              kicker="Projects"
              title="Selected work"
              description="Projects listed in the uploaded resume, kept concise for a clean frontend layout."
            />
            <div className="space-y-4">
              {projects.map((project) => (
                <article key={project.title} className="rounded-2xl border border-border bg-secondary/60 p-5">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary/80">{project.meta}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur md:p-8 print:border-none print:bg-transparent">
            <SectionTitle
              kicker="Certifications"
              title="Certifications"
              description="Certificates copied from the resume document."
            />
            <div className="flex flex-wrap gap-2">
              {certifications.map((certification) => (
                <Pill key={certification}>{certification}</Pill>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur md:p-8 print:border-none print:bg-transparent">
            <SectionTitle
              kicker="Achievements"
              title="Achievements"
              description="Accomplishments listed in the uploaded resume."
            />
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <article key={achievement} className="rounded-2xl border border-border bg-secondary/60 p-5">
                  <p className="text-sm leading-6 text-muted-foreground">{achievement}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}