"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const education = [
  {
    institution: "Shoolini University",
    location: "Solan, HP",
    degree: "B.Tech — Computer Science Engineering (AI & ML)",
    duration: "2025 — 2029",
    detail: "CGPA: 8.94 / 10",
  },
  {
    institution: "IIT Madras",
    location: "Online Degree Program",
    degree: "B.S. — Data Science & Applications (Dual Degree)",
    duration: "2025 — 2030",
    detail: "Expected",
  },
]

export function AboutEducation() {
  return (
    <section id="about-me" className="relative py-24 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Grid: photo + bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0 overflow-hidden rounded-sm">
              <Image
                src="/nitish.jpg"
                alt="Nitish Sehgal"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ filter: "contrast(1.05)" }}
              />
              {/* Blue overlay */}
              <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay pointer-events-none" />
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-12 h-px bg-[#2563eb]" />
              <div className="absolute bottom-0 left-0 w-px h-12 bg-[#2563eb]" />
            </div>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mt-4">
              NITISH SEHGAL — SOLAN, HP
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">03 — WHO I AM</p>
            <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-8">
              Backend engineer. <br />ML builder.
            </h2>
            <p className="text-white/60 font-sans text-base leading-relaxed mb-6">
              Backend-focused developer building scalable systems, real-time analytics platforms, and data-driven applications.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Interested in quantitative finance systems, machine learning infrastructure, distributed architectures, and performance-oriented backend engineering. Strong focus on Data Structures &amp; Algorithms, systems design, and real-world ML deployment.
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-12">04 — EDUCATION</p>
          <div className="space-y-0">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border-t border-white/10 py-8 md:py-10 flex flex-col md:flex-row md:items-start justify-between gap-4 group hover:pl-2 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] flex-shrink-0" />
                    <h3 className="font-sans text-xl md:text-2xl font-light tracking-tight">
                      {edu.institution}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground tracking-wider ml-[18px]">
                    {edu.location}
                  </p>
                  <p className="font-sans text-white/70 text-sm mt-3 ml-[18px] leading-relaxed">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-right flex-shrink-0 md:w-40">
                  <p className="font-mono text-xs tracking-widest text-white">{edu.duration}</p>
                  <p className="font-mono text-xs tracking-wider text-muted-foreground mt-1">{edu.detail}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
