import { Shield } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2 font-mono font-semibold">
          <Shield className="size-5 text-primary" aria-hidden="true" />
          <span>{profile.name}</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. Built with security
          in mind.
        </p>
      </div>
    </footer>
  )
}
