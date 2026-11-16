"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function AboutEducation() {
  return (
    <section id="about-me" className="relative py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Grid: photo + bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[260px] sm:max-w-xs md:max-w-sm mx-auto md:mx-0 overflow-hidden rounded-sm shadow-2xl">
              <Image
                src={`${basePath}/nitish.jpg`}
                alt="Nitish Sehgal"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 384px"
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ filter: "contrast(1.05)" }}
              />
              {/* Blue overlay */}
              <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay pointer-events-none" />
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-10 sm:w-12 h-px bg-[#2563eb]" />
              <div className="absolute bottom-0 left-0 w-px h-10 sm:h-12 bg-[#2563eb]" />
            </div>
            <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mt-4 text-center md:text-left">
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
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">03 — WHO I AM</p>
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-light italic mb-6 leading-tight">
              Backend engineer. <br />ML builder.
            </h2>
            <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed mb-4">
              Backend-focused developer building scalable systems, real-time analytics platforms, and data-driven applications.
            </p>
            <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
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
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground mb-8 sm:mb-12">04 — EDUCATION</p>
          <div className="space-y-0">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border-t border-white/10 py-6 sm:py-8 md:py-10 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 group hover:pl-2 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] flex-shrink-0" />
                    <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-light tracking-tight">
                      {edu.institution}
                    </h3>
                  </div>
                  <p className="font-mono text-[11px] sm:text-xs text-muted-foreground tracking-wider ml-4 sm:ml-[18px]">
                    {edu.location}
                  </p>
                  <p className="font-sans text-white/75 text-xs sm:text-sm mt-2 sm:mt-3 ml-4 sm:ml-[18px] leading-relaxed">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 sm:w-44 ml-4 sm:ml-0 mt-1 sm:mt-0">
                  <p className="font-mono text-xs tracking-widest text-white">{edu.duration}</p>
                  <p className="font-mono text-xs tracking-wider text-muted-foreground mt-0.5 sm:mt-1">{edu.detail}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          {/* Link to Certifications Page */}
          <div className="mt-8 flex justify-start sm:justify-end">
            <Link
              href="/certifications"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#60a5fa] hover:text-white transition-colors duration-300 py-2"
            >
              <span>EXPLORE ALL 12 CERTIFICATIONS &amp; AWARDS</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
