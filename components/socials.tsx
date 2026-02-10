import { Linkedin, Mail, MessageCircle } from "lucide-react"

export function Socials() {
  return (
    <>
      {/* Left sidebar - Social Links */}
      <div className="hidden lg:flex fixed bottom-0 left-8 xl:left-12 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a
          href="https://www.linkedin.com/in/antonio-kiepert"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/5527988770632"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href="mailto:antoniohenriquekiepert@gmail.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      {/* Right sidebar - Email */}
      <div className="hidden lg:flex fixed bottom-0 right-8 xl:right-12 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a
          href="mailto:antoniohenriquekiepert@gmail.com"
          className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
          style={{ writingMode: "vertical-rl" }}
        >
          antoniohenriquekiepert@gmail.com
        </a>
      </div>
    </>
  )
}
