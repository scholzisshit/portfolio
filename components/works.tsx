"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const projects = [
  {
    title: "Setu AI (सेतु)",
    subtitle: "AI Health Copilot • Multimodal OCR & ABDM FHIR R4",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Vision OCR", "ABDM / FHIR"],
    image: `${basePath}/projects/project-stairway.jpg`,
    year: "2024",
    link: "https://team-bread.vercel.app",
  },
  {
    title: "Bharat Monitor",
    subtitle: "Geospatial Intelligence & Real-Time Telemetry Platform",
    tags: ["Rust", "Axum", "Tokio", "FastAPI", "Next.js", "WebSockets"],
    image: `${basePath}/projects/project-scanline.jpg`,
    year: "2024",
    link: "https://github.com/scholzisshit",
  },
  {
    title: "QuantFrame Pro",
    subtitle: "Privacy-First AI Quant Interview Platform with Local LLM",
    tags: ["React", "FastAPI", "Ollama", "Python", "yfinance"],
    image: `${basePath}/projects/project-touch.jpg`,
    year: "2024",
    link: "https://github.com/scholzisshit",
  },
  {
    title: "Clickbait-Peak",
    subtitle: "CTR Prediction & Ad Click Behavioral Modeling",
    tags: ["Python", "Logistic Regression", "EDA", "Scikit-learn"],
    image: `${basePath}/projects/project-portal.jpg`,
    year: "2024",
    link: "https://github.com/scholzisshit/clickbait-peak",
  },
  {
    title: "Delhi House Predictor",
    subtitle: "ML Valuation with Quantitative Risk Analytics (VaR & CVaR)",
    tags: ["Python", "XGBoost", "Scikit-learn", "Plotly", "Streamlit"],
    image: `${basePath}/projects/project-icarus.jpg`,
    year: "2024",
    link: "https://github.com/scholzisshit",
  },
  {
    title: "Agentic AI Lab",
    subtitle: "Autonomous Multi-Agent Software Engineering Coordination Lab",
    tags: ["CrewAI", "Gemini", "Groq", "Multi-Agent", "Python"],
    image: `${basePath}/projects/project-knight.jpg`,
    year: "2024",
    link: "https://github.com/scholzisshit/agentic-ai-engineering-lab",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section id="works" className="relative py-20 sm:py-24 md:py-28 px-6 sm:px-8 md:px-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 sm:mb-16 md:mb-24"
      >
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4">04 — SELECTED WORKS</p>
        <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl font-light italic leading-tight">Projects That Ship</h2>
      </motion.div>

      {/* Projects List */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10 py-6 sm:py-8 md:py-10"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 block"
            >
              {/* Year */}
              <span className="font-mono text-[11px] sm:text-xs text-muted-foreground tracking-widest order-1 md:order-none">
                {project.year}
              </span>

              {/* Title & Subtitle */}
              <div className="flex-1 order-2 md:order-none">
                <div className="flex items-center gap-3">
                  <motion.h3
                    className="font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300"
                    animate={{
                      x: hoveredIndex === index ? 12 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {project.title}
                  </motion.h3>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                </div>
                <p className="font-mono text-[11px] sm:text-xs text-muted-foreground/80 mt-1 tracking-wide">
                  {project.subtitle}
                </p>
              </div>

              {/* Tags */}
              <div className="flex gap-1.5 sm:gap-2 flex-wrap order-3 md:order-none">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] sm:text-[10px] tracking-wider px-2.5 py-1 border border-white/20 rounded-full text-muted-foreground group-hover:border-white/40 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}

        {/* Floating Artwork Preview (Desktop mouse hover) */}
        <motion.div
          className="hidden lg:block absolute pointer-events-none z-50 w-60 h-60 md:w-72 md:h-72 overflow-hidden rounded-xl border border-white/20 shadow-[0_0_50px_rgba(37,99,235,0.35)] bg-black/80 backdrop-blur-sm"
          style={{
            x: springX,
            y: springY,
            translateX: "40px",
            translateY: "-50%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.75,
            rotate: hoveredIndex !== null ? 2 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.15, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
            />
          )}
          {/* Blue tint blend */}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-screen pointer-events-none" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
