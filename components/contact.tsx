"use client"

import { useState, type FormEvent } from "react"
import { Send, MessageCircle, Mail, Linkedin } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const { lang } = useLang()
  const t = translations.contact[lang]
  const { ref, isVisible } = useScrollAnimation()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get("name") as string
    const email = data.get("email") as string
    const message = data.get("message") as string

    // Open mailto with pre-filled data
    const subject = encodeURIComponent(`Contact from Portfolio - ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.open(`mailto:antoniohenriquekiepert@gmail.com?subject=${subject}&body=${body}`, "_self")

    setTimeout(() => {
      setSending(false)
      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="max-w-2xl mx-auto">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-primary text-sm mb-4">
            {t.sectionNumber} {t.sectionLabel}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t.description}</p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-4 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder={t.formName}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              placeholder={t.formEmail}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t.formMessage}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-mono text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {sending ? t.formSending : t.formSend}
              <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="mt-3 text-primary font-mono text-xs">{t.formSuccess}</p>
            )}
          </div>
        </form>

        {/* Direct contact channels */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-center text-muted-foreground text-sm mb-4">{t.orReach}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/5527988770632?text=Oi%20Antonio!%20Vi%20seu%20portfolio%20e%20quero%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 text-sm text-foreground hover:border-emerald-500/40 hover:text-emerald-400 transition-colors w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-4 w-4" />
              {t.whatsappLabel}
            </a>
            <a
              href="mailto:antoniohenriquekiepert@gmail.com"
              className="flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 text-sm text-foreground hover:border-primary/40 hover:text-primary transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="h-4 w-4" />
              {t.emailLabel}
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-kiepert"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 text-sm text-foreground hover:border-sky-500/40 hover:text-sky-400 transition-colors w-full sm:w-auto justify-center"
            >
              <Linkedin className="h-4 w-4" />
              {t.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
