import { Linkedin, Mail, MessageCircle } from "lucide-react"

export function Socials() {
  return (
    <>
      {/* Left sidebar - Social Links (no line) */}
      <div className="hidden lg:flex fixed bottom-8 left-8 xl:left-12 flex-col items-center gap-5">
        <a
          href="https://www.linkedin.com/in/antonio-kiepert"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-muted-foreground hover:text-primary transition-all"
          aria-label="LinkedIn"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/0 group-hover:bg-primary/10 rounded-lg blur transition-all" />
            <Linkedin className="relative h-5 w-5 group-hover:scale-110 transition-transform" />
          </div>
        </a>
        <a
          href="https://wa.me/5527988770632"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-muted-foreground hover:text-primary transition-all"
          aria-label="WhatsApp"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/0 group-hover:bg-primary/10 rounded-lg blur transition-all" />
            <MessageCircle className="relative h-5 w-5 group-hover:scale-110 transition-transform" />
          </div>
        </a>
        <a
          href="mailto:antoniohenriquekiepert@gmail.com"
          className="group text-muted-foreground hover:text-primary transition-all"
          aria-label="Email"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/0 group-hover:bg-primary/10 rounded-lg blur transition-all" />
            <Mail className="relative h-5 w-5 group-hover:scale-110 transition-transform" />
          </div>
        </a>
      </div>

      {/* Right sidebar - Email (no line) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 xl:right-12">
        <a
          href="mailto:antoniohenriquekiepert@gmail.com"
          className="group font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-all"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="group-hover:tracking-wider transition-all">antoniohenriquekiepert@gmail.com</span>
        </a>
      </div>
    </>
  )
}
