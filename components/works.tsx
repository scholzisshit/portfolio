"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const projects = [
  {
    title: "Bharat Monitor",
    tags: ["Rust", "Axum", "FastAPI", "Next.js", "WebSockets"],
    image: `${basePath}/abstract-neural-network-visualization-dark-theme.jpg`,
    year: "2024",
  },
  {
    title: "QuantFrame Pro",
    tags: ["React", "FastAPI", "Ollama", "Python", "yfinance"],
    image: `${basePath}/futuristic-data-dashboard-dark-minimal.jpg`,
    year: "2024",
  },
  {
    title: "Delhi House Predictor",
    tags: ["Python", "XGBoost", "Scikit-learn", "Streamlit"],
    image: `${basePath}/abstract-memory-storage-visualization.jpg`,
    year: "2024",
  },
  {
    title: "Healthcare Analytics",
    tags: ["Python", "SQL", "Machine Learning", "Pandas"],
    image: `${basePath}/sound-wave-visualization-dark-theme.jpg`,
    year: "2023",
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
            className="relative border-t border-white/10 py-6 sm:py-8 md:py-12"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4"
            >
              {/* Year */}
              <span className="font-mono text-[11px] sm:text-xs text-muted-foreground tracking-widest order-1 md:order-none">
                {project.year}
              </span>

              {/* Title */}
              <motion.h3
                className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 flex-1"
                animate={{
                  x: hoveredIndex === index ? 12 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h3>

              {/* Tags */}
              <div className="flex gap-1.5 sm:gap-2 flex-wrap order-2 md:order-none">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] sm:text-[10px] tracking-wider px-2.5 py-1 border border-white/20 rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Floating Image (Only on large screens with mouse) */}
        <motion.div
          className="hidden lg:block absolute pointer-events-none z-50 w-72 h-44 md:w-80 md:h-48 overflow-hidden rounded-lg shadow-2xl"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                filter: "grayscale(50%) contrast(1.1)",
              }}
            />
          )}
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
