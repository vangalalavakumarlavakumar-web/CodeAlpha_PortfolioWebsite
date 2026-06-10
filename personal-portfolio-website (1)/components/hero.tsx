"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { profile, typingRoles } from "@/lib/portfolio-data"

function useTyping(words: string[]) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1))
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1400)
          }
        } else {
          setText(current.slice(0, text.length - 1))
          if (text.length === 0) {
            setDeleting(false)
            setWordIndex((i) => i + 1)
          }
        }
      },
      deleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}

export function Hero() {
  const typed = useTyping(typingRoles)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden cyber-grid"
    >
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-[1.2fr_0.8fr]">
        <div className="text-center md:text-left">
          <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 font-mono text-xs tracking-widest text-primary">
            {profile.subtitle}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span className="text-2xl font-medium md:text-3xl">Hi, I&apos;m</span>
            <br />
            <span className="text-primary glow-text">Lava Kumar</span>
            <br />
            <span className="text-primary glow-text">Vangala</span>
          </h1>
          <p className="mt-4 flex min-h-8 items-center justify-center gap-1 font-mono text-lg text-accent md:justify-start md:text-xl">
            <span>{typed}</span>
            <span className="cursor-blink h-6" aria-hidden="true" />
          </p>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:mx-0">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Button asChild size="lg">
              <a href="/resume">
                <Download className="size-4" />
                View Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="size-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative size-56 overflow-hidden rounded-full border-2 border-primary/50 md:size-72">
              <Image
                src="/hero2.png"
                alt="Portrait of Lava Kumar Vangala"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 224px, 288px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
