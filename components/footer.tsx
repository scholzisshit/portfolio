"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      const milliseconds = now.getMilliseconds().toString().padStart(3, "0")
      setTime(`${hours}:${minutes}:${seconds}.${milliseconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative">
      {/* Main CTA */}
      <Link href="/contact" passHref legacyBehavior>
        <motion.a
          data-cursor-hover
          className="relative block overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Curtain */}
          <motion.div
            className="absolute inset-0 bg-[#2563eb]"
            initial={{ y: "100%" }}
            animate={{ y: isHovered ? "0%" : "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Content */}
          <div className="relative py-12 sm:py-16 md:py-24 px-6 sm:px-8 md:px-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <motion.h2
                className="font-sans text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-center md:text-left"
                animate={{
                  color: isHovered ? "#050505" : "#fafafa",
                }}
                transition={{ duration: 0.3 }}
              >
                Let&apos;s <span className="italic">Collaborate</span>
              </motion.h2>

              <motion.div
                animate={{
                  rotate: isHovered ? 45 : 0,
                  color: isHovered ? "#050505" : "#fafafa",
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
              </motion.div>
            </div>
          </div>
        </motion.a>
      </Link>

      {/* Footer Info */}
      <div className="px-6 sm:px-8 md:px-12 py-6 sm:py-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Local Time */}
          <div className="font-mono text-[11px] sm:text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">LOCAL TIME</span>
            <span className="text-white tabular-nums">{time}</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/nitish-sehgal-6461a4274" },
              { label: "GitHub", href: "https://github.com/scholzisshit" },
              { label: "Email", href: "mailto:nitishsehgal25@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-cursor-hover
                className="font-mono text-[11px] sm:text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-[11px] sm:text-xs tracking-widest text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
