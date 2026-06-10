"use client"

import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  kicker?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, kicker, children, className }: SectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id={id} className={cn("scroll-mt-20 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div ref={ref} className={cn("reveal mb-12", visible && "is-visible")}>
          {kicker && (
            <p className="mb-2 font-mono text-sm tracking-widest text-primary">
              {kicker}
            </p>
          )}
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>
        {children}
      </div>
    </section>
  )
}
