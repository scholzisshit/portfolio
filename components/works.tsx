"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const projects = [
  {
    title: "Bharat Monitor",
    subtitle: "Geospatial Intelligence & Real-Time Telemetry Platform",
    tags: ["Rust", "Axum", "Tokio", "FastAPI", "Next.js", "WebSockets"],
    image: `${basePath}/projects/project-scanline.jpg`,
    year: "2026",
    link: "https://github.com/scholzisshit",
  },
  {
    title: "QuantFrame Pro",
    subtitle: "Privacy-First AI Quant Interview Platform with Local LLM",
    tags: ["React", "FastAPI", "Ollama", "Python", "yfinance"],
    image: `${basePath}/projects/project-touch.jpg`,
    year: "2026",
    link: "https://github.com/scholzisshit",
  },
  {
    title: "Agentic AI Lab",
    subtitle: "Autonomous Multi-Agent Software Engineering Coordination Lab",
    tags: ["CrewAI", "Gemini", "Groq", "Multi-Agent", "Python"],
    image: `${basePath}/projects/project-knight.jpg`,
    year: "2026",
    link: "https://github.com/scholzisshit/agentic-ai-engineering-lab",
  },
  {
    title: "Delhi House Predictor",
    subtitle: "ML Valuation with Quantitative Risk Analytics (VaR & CVaR)",
    tags: ["Python", "XGBoost", "Scikit-learn", "Plotly", "Streamlit"],
    image: `${basePath}/projects/project-icarus.jpg`,
    year: "2025",
    link: "https://github.com/scholzisshit",
  },
  {
    title: "Clickbait-Peak",
    subtitle: "CTR Prediction & Ad Click Behavioral Modeling",
    tags: ["Python", "Logistic Regression", "EDA", "Scikit-learn"],
    image: `${basePath}/projects/project-portal.jpg`,
    year: "2025",
    link: "https://github.com/scholzisshit/clickbait-peak",
  },
  {
    title: "Setu AI (सेतु)",
    subtitle: "Healthcare Analytics & AI Copilot • Multimodal OCR & FHIR",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Vision OCR", "ABDM / FHIR"],
    image: `${basePath}/projects/project-stairway.jpg`,
    year: "2024",
    link: "https://team-bread.vercel.app",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isRightSide, setIsRightSide] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 200, damping: 24 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 24 })

  // Preload project artwork into browser cache on mount
  useEffect(() => {
    projects.forEach((p) => {
      if (typeof window !== "undefined") {
        const img = new window.Image()
        img.src = p.image
      }
    })
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseX.set(x)
      mouseY.set(y)
      setIsRightSide(x > rect.width * 0.6)
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
            onMouseEnter={(e) => {
              handleMouseMove(e)
              setHoveredIndex(index)
            }}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 block"
            >
              {/* Left group: Mobile thumbnail + Year + Title */}
              <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                {/* Artwork Thumbnail for Mobile & iPad */}
                <div className="md:hidden relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-white/20 flex-shrink-0 bg-black/60 shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-screen pointer-events-none" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-widest block mb-1">
                    {project.year}
                  </span>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.h3
                      className="font-sans text-xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 truncate sm:overflow-visible"
                      animate={{
                        x: hoveredIndex === index ? 10 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {project.title}
                    </motion.h3>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                  </div>
                  <p className="font-mono text-[11px] sm:text-xs text-muted-foreground/80 mt-1 tracking-wide line-clamp-1 sm:line-clamp-none">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-1.5 sm:gap-2 flex-wrap md:flex-shrink-0 ml-20 md:ml-0">
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
          className="hidden md:block absolute top-0 left-0 pointer-events-none z-50 w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-xl border border-white/30 shadow-[0_0_60px_rgba(37,99,235,0.45)] bg-black/95 backdrop-blur-md"
          style={{
            x: springX,
            y: springY,
            translateX: isRightSide ? "-115%" : "35px",
            translateY: "-50%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.75,
            rotate: hoveredIndex !== null ? (isRightSide ? -2 : 2) : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {hoveredIndex !== null && (
            <motion.img
              key={projects[hoveredIndex].image}
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.15, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
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
