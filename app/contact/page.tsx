"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Github, Linkedin, ArrowLeft } from "lucide-react"
import Link from "next/link"

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
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-3 h-3" />
          BACK
        </Link>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">06 — CONTACT</p>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-9xl font-light tracking-tight leading-none">
            don&apos;t
            <br />
            <span className="italic text-white/40">wanna?</span>
          </h1>
          <p className="mt-8 font-mono text-sm text-muted-foreground max-w-md">
            That&apos;s fine. But if you do — here&apos;s where to find me.
          </p>
        </motion.div>

        {/* Contact links */}
        <div className="space-y-0">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.12 }}
              className="group flex items-center justify-between border-t border-white/10 py-8 md:py-10 hover:pl-4 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                <div>
                  <p className="font-sans text-3xl md:text-5xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300">
                    {link.label}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground mt-1 tracking-wider">{link.sub}</p>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
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
        className="px-8 md:px-12 py-8 border-t border-white/5"
      >
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground/50">
          © {new Date().getFullYear()} NITISH SEHGAL — SOLAN, HIMACHAL PRADESH
        </p>
      </motion.div>
    </main>
  )
}
