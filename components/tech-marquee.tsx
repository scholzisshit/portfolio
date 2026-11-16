"use client"

import { motion } from "framer-motion"

const techItems = [
  "PYTHON",
  "RUST",
  "FASTAPI",
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "SCIKIT-LEARN",
  "XGBOOST",
  "PANDAS",
  "WEBSOCKETS",
  "DOCKER",
]

const concepts = [
  "DISTRIBUTED SYSTEMS",
  "REAL-TIME ANALYTICS",
  "MACHINE LEARNING",
  "QUANTITATIVE FINANCE",
  "DATA ENGINEERING",
  "ALGORITHMS",
  "BACKEND SYSTEMS",
  "ASYNC ARCHITECTURE",
  "AZURE",
  "PLOTLY",
  "STREAMLIT",
  "OLLAMA",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-2 sm:py-4">
      <motion.div
        className={`flex gap-4 sm:gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="group font-sans text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
              color: "transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white"
              e.currentTarget.style.WebkitTextStroke = "none"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "transparent"
              e.currentTarget.style.WebkitTextStroke = "1px rgba(255,255,255,0.3)"
            }}
          >
            {item}
            <span className="mx-4 sm:mx-8 text-white/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 sm:px-8 md:px-12 mb-8 sm:mb-16"
      >
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — TECHNICAL ARSENAL</p>
      </motion.div>

      {/* Marquee Rows */}
      <div className="space-y-4">
        <MarqueeRow items={techItems} direction="left" />
        <MarqueeRow items={concepts} direction="right" />
      </div>
    </section>
  )
}
