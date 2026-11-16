"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Github, Linkedin, ArrowLeft } from "lucide-react"
import Link from "next/link"

const HEADPHONES_ASCII = `                        ┌────────── [0637 // WIRE] ──────────┐
                   . · : ░ ▒ ▓ █ █ █ █ █ █ █ █ █ █ █ ▓ ▒ ░ : · .
               . : ░ ▓ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ ▓ ░ : .
             : ░ ▓ █ █ █ ▓ ▒ ░ · · · · · · · · · · ░ ▒ ▓ █ █ █ ▓ ░ :
           + ▒ █ █ ▓ ░                                   ░ ▓ █ █ ▒ +
         · ▓ █ █ ░                                           ░ █ █ ▓ ·
        : ▓ █ ▒                                                 ▒ █ ▓ :
       + █ █ ░       ┌─ [1007 // SIGNAL] ────────────┐           ░ █ █ +
      · ▓ █ ·        │ VOICE OF SOUL                 │            · █ ▓ ·
      : █ ▓          │ MASK OF COMPOSURE             │             ▓ █ :
     · ▓ █           │ ORDERLY CROWD CLAMOR          │              █ ▓ ·
     · █ ▓           │ RINGS OUTSIDE                 │              ▓ █ ·
     : █ ▓           └───────────────────────────────┘              ▓ █ :
    ┌┴─────┴┐                                                     ┌┴─────┴┐
   ┌┤ ░ ▒ ▓ ├┐                                                   ┌┤ ▓ ▒ ░ ├┐
   ││ ▒ ▓ █ ││                                                   ││ █ ▓ ▒ ││
   ││ ▓ █ █ ││     + · · · · · · · · · · · · · · · · · · · +     ││ █ █ ▓ ││
   ││ █ █ █ ││     :  FREQUENCY: 2.40 GHz                  :     ││ █ █ █ ││
   ││ ▓ █ █ ││     :  CHANNEL:   STEREO // 0dB             :     ││ █ █ ▓ ││
   ││ ▒ ▓ █ ││     :  STATUS:    LISTENING FOR INCOMING    :     ││ █ ▓ ▒ ││
   └┤ ░ ▒ ▓ ├┘     + · · · · · · · · · · · · · · · · · · · +     └┤ ▓ ▒ ░ ├┘
    └┬─────┬┘                                                     └┬─────┬┘
     · ▒ ░                                                           ░ ▒ ·`

const links = [
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/nitish-sehgal-6461a4274",
    href: "https://linkedin.com/in/nitish-sehgal-6461a4274",
    icon: Linkedin,
  },
  {
    label: "Email",
    sub: "nitishsehgal25@gmail.com",
    href: "mailto:nitishsehgal25@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    sub: "github.com/scholzisshit",
    href: "https://github.com/scholzisshit",
    icon: Github,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col justify-between">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-8 md:p-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300 py-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          BACK TO PORTFOLIO
        </Link>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 py-8 sm:py-12 max-w-5xl w-full mx-auto">
        {/* Heading & Cyber ASCII Art */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">06 — CONTACT</p>
            <h1 className="font-sans text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
              don&apos;t
              <br />
              <span className="italic text-white/40">wanna?</span>
            </h1>
            <p className="mt-6 sm:mt-8 font-mono text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              That&apos;s fine. But if you do — here&apos;s where to find me.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono tracking-wider text-[#60a5fa] border border-[#60a5fa]/30 bg-[#60a5fa]/5 px-3 py-2 rounded-sm w-fit mt-6">
              <span className="text-white/50">[0637]</span>
              <span>// FREQ: 2.40 GHz</span>
              <span className="text-white/30">•</span>
              <span>STATUS: LISTENING</span>
            </div>
          </motion.div>

          {/* ASCII Wireframe Headphones Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-6 border border-white/10 bg-white/[0.02] p-4 sm:p-5 rounded-sm relative overflow-hidden group hover:border-[#60a5fa]/40 transition-colors duration-500"
          >
            {/* Corner Crosshairs */}
            <div className="absolute top-2 left-2 font-mono text-[10px] text-white/30 select-none">+</div>
            <div className="absolute top-2 right-2 font-mono text-[10px] text-white/30 select-none">+</div>
            <div className="absolute bottom-2 left-2 font-mono text-[10px] text-white/30 select-none">+</div>
            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-white/30 select-none">+</div>

            <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-white/40 tracking-widest border-b border-white/10 pb-2 mb-3">
              <span>VOICE OF SOUL // MASK OF COMPOSURE</span>
              <span className="text-[#60a5fa]">[1007]</span>
            </div>

            <pre className="font-mono text-[7px] sm:text-[8px] md:text-[9px] leading-[1.1] text-[#93c5fd] select-none overflow-x-auto whitespace-pre">
              {HEADPHONES_ASCII}
            </pre>

            <div className="flex items-center justify-between font-mono text-[9px] text-white/40 tracking-wider pt-2 mt-2 border-t border-white/10">
              <span>ORDERLY CROWD CLAMOR RINGS OUTSIDE</span>
              <span>2026 // STEREO</span>
            </div>
          </motion.div>
        </div>

        {/* Contact links */}
        <div className="space-y-0 w-full">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.12 }}
              className="group flex items-center justify-between border-t border-white/10 py-6 sm:py-8 md:py-10 hover:pl-2 sm:hover:pl-4 transition-all duration-300"
            >
              <div className="flex items-center gap-4 sm:gap-6 min-w-0 pr-4">
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-sans text-2xl sm:text-4xl md:text-5xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300">
                    {link.label}
                  </p>
                  <p className="font-mono text-[11px] sm:text-xs text-muted-foreground mt-1 tracking-wider break-all sm:break-normal">
                    {link.sub}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-white group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
            </motion.a>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="px-6 sm:px-8 md:px-12 py-6 sm:py-8 border-t border-white/5"
      >
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground/50 text-center sm:text-left">
          © {new Date().getFullYear()} NITISH SEHGAL — SOLAN, HIMACHAL PRADESH
        </p>
      </motion.div>
    </main>
  )
}
