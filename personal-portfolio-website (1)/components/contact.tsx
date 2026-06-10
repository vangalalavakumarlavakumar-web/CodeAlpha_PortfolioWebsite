"use client"

import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <Section id="contact" kicker="// 06. say hello" title="Get In Touch">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <p className="leading-relaxed text-muted-foreground">
            Have an opportunity, a question, or just want to connect? Feel free
            to reach out through any of the channels below or send a message
            directly.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-card">
                <Mail className="size-5 text-primary" />
              </span>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-card">
                <Phone className="size-5 text-primary" />
              </span>
              {profile.phone}
            </a>
          </div>

          <div className="flex gap-3">
            <Button asChild variant="outline">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-border bg-card p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
              placeholder="Write your message..."
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="size-4" />
            {sent ? "Message Sent!" : "Send Message"}
          </Button>
          {sent && (
            <p className="text-center text-sm text-accent" role="status">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}
