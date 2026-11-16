"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Award, ExternalLink, X, ShieldCheck } from "lucide-react"
import Link from "next/link"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

type Certificate = {
  title: string
  issuer: string
  date: string
  category: "Cloud & AI" | "Awards & Hackathons" | "Internships"
  badge: string
  image: string
  description: string
  verifyCode?: string
  verifyUrl?: string
}

const certificates: Certificate[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "March 2026",
    category: "Cloud & AI",
    badge: "AI-900",
    verifyUrl: "https://verify.certiport.com",
    verifyCode: "waQx4-H9uQ",
    image: `${basePath}/certificates/azure-ai-fundamentals.jpg`,
    description: "Official Microsoft certification validating foundational knowledge of machine learning, NLP, computer vision, and AI workloads on Azure.",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "September 2026",
    category: "Cloud & AI",
    badge: "AZ-900",
    verifyUrl: "https://verify.certiport.com",
    verifyCode: "w9Snv-Fa44",
    image: `${basePath}/certificates/azure-fundamentals.jpg`,
    description: "Official Microsoft certification validating cloud concepts, core Azure architectural components, compute, networking, and governance.",
  },
  {
    title: "Emerging Innovator Award",
    issuer: "Shoolini University • Glitch Tech Fest",
    date: "2026",
    category: "Awards & Hackathons",
    badge: "Tech Fest",
    image: `${basePath}/certificates/glitch-tech-fest.jpg`,
    description: "Recognized for technical excellence, innovation, and practical software engineering at Glitch Tech Fest 2026.",
  },
  {
    title: "SPRINT 2nd Place Finish",
    issuer: "Shoolini University • Team 19",
    date: "October 2024",
    category: "Awards & Hackathons",
    badge: "2nd Position",
    image: `${basePath}/certificates/shoolini-sprint-2nd-place.jpg`,
    description: "Secured Second Position in overall technical and team-building activities during the university-wide SPRINT competition.",
  },
  {
    title: "HacXLerate 2026 — AI Health Copilot",
    issuer: "ByteXL National Hackathon",
    date: "2026",
    category: "Awards & Hackathons",
    badge: "Team BREAD",
    image: `${basePath}/certificates/hacxlerate-hackathon.jpg`,
    description: "Engineered Setu, an AI-powered personal health copilot bridging clinical records and ABDM FHIR interoperability in a 24-hr national hackathon.",
  },
  {
    title: "Innovate To Excel '26 National Summit",
    issuer: "Jaypee University of Information Technology (JUIT)",
    date: "February 2026",
    category: "Awards & Hackathons",
    badge: "National Summit",
    image: `${basePath}/certificates/juit-innovate-to-excel.jpg`,
    description: "Certificate of participation in Innovate To Excel '26 and Problem-Solving Bootcamp at JUIT Solan.",
  },
  {
    title: "AI/ML Workshop & Campus Ambassador",
    issuer: "IIT Ropar • Advitiya (Ethical Edufabrica)",
    date: "Jan – Feb 2026",
    category: "Cloud & AI",
    badge: "IIT Ropar",
    image: `${basePath}/certificates/iit-ropar-aiml.jpg`,
    description: "Completed intensive offline workshop on AIML with Data Science at IIT Ropar Advitiya and represented as Campus Ambassador.",
  },
  {
    title: "Machine Learning Internship",
    issuer: "CodeAlpha",
    date: "June – July 2026",
    category: "Internships",
    badge: "ML Intern",
    verifyCode: "CA/DF1/161554",
    image: `${basePath}/certificates/codealpha-ml-internship.jpg`,
    description: "Engineered predictive models, conducted feature extraction, and deployed end-to-end machine learning pipelines in Python.",
  },
  {
    title: "Data Science Internship",
    issuer: "Thiranex",
    date: "June – July 2026",
    category: "Internships",
    badge: "Data Science",
    verifyCode: "THX-JUN1726-724",
    image: `${basePath}/certificates/thiranex-data-science.jpg`,
    description: "Built supervised predictive models, cleaned large-scale datasets, and implemented statistical analytics workflows.",
  },
  {
    title: "AI Internship & Project Completion",
    issuer: "EdiGlobe",
    date: "2025 – 2026",
    category: "Internships",
    badge: "AI & ML",
    image: `${basePath}/certificates/ediglobe-ai-internship.jpg`,
    description: "Completed mentorship-guided AI internship and successfully shipped one minor and one major artificial intelligence project.",
  },
  {
    title: "Blockchain for Productivity Forum",
    issuer: "BFPF Think-Tank",
    date: "January 2026",
    category: "Cloud & AI",
    badge: "Member",
    verifyCode: "BFPF/SM/2026/001",
    image: `${basePath}/certificates/bfpf-blockchain-membership.jpg`,
    description: "Enrolled student member in the exclusive Blockchain for Productivity Forum non-profit knowledge sharing think-tank.",
  },
  {
    title: "Youth Parliament 2026",
    issuer: "Shoolini Business School • Team Vox",
    date: "2026",
    category: "Awards & Hackathons",
    badge: "Team Vox",
    image: `${basePath}/certificates/youth-parliament.jpg`,
    description: "Active parliamentary debate, governance strategy, and policy formulation with Team Vox in Youth Parliament 2026.",
  },
]

const categories = ["All", "Cloud & AI", "Awards & Hackathons", "Internships"] as const

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const filtered = activeCategory === "All"
    ? certificates
    : certificates.filter((c) => c.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 px-6 sm:px-8 md:px-12 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300 py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BACK TO PORTFOLIO
          </Link>

          <span className="font-mono text-xs tracking-widest text-white/50 hidden sm:inline-block">
            NITISH SEHGAL / CREDENTIALS
          </span>
        </div>
      </header>

      {/* Hero Header */}
      <section className="px-6 sm:px-8 md:px-12 pt-16 pb-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground mb-4">
            07 — PROOF OF WORK &amp; VALIDATION
          </p>
          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-light tracking-tight mb-6">
            Certifications &amp; <span className="italic text-white/70">Honors</span>
          </h1>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Verified credentials in Microsoft Azure Cloud &amp; AI, machine learning engineering internships, national hackathon builds, and academic honors. Click any certificate to inspect full resolution.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap gap-2 sm:gap-3 mt-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 opacity-60">
                  ({certificates.filter((c) => c.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Certificates Grid */}
      <section className="px-6 sm:px-8 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((cert, index) => (
            <motion.div
              key={cert.title + cert.date}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60 border-b border-white/10">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

                {/* Badge top-right */}
                <div className="absolute top-3 right-3 font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white/90">
                  {cert.badge}
                </div>

                {/* Click hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="font-mono text-xs tracking-widest px-3 py-1.5 rounded-full border border-white/40 bg-black/80 text-white flex items-center gap-1.5">
                    VIEW <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-muted-foreground text-xs font-mono mb-2">
                    <span className="tracking-wider text-[#60a5fa]">{cert.issuer}</span>
                    <span className="tracking-widest">{cert.date}</span>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl font-light tracking-tight group-hover:text-white transition-colors duration-300 mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="font-sans text-xs text-white/60 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Verification Code Footer */}
                {cert.verifyCode && (
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" /> ID: {cert.verifyCode}
                    </span>
                    {cert.verifyUrl && (
                      <span className="text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1">
                        Verify <ArrowUpRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Inspection */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#0c0c0c] border border-white/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/50">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#60a5fa] block mb-1">
                    {selectedCert.issuer} • {selectedCert.date}
                  </span>
                  <h2 className="font-sans text-lg sm:text-2xl font-light tracking-tight">
                    {selectedCert.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/70">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-black/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                <p className="text-white/60 font-sans text-xs flex-1">
                  {selectedCert.description}
                </p>
                {selectedCert.verifyCode && (
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-emerald-400">ID: {selectedCert.verifyCode}</span>
                    {selectedCert.verifyUrl && (
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-[#60a5fa] flex items-center gap-1"
                      >
                        Verify online <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Banner */}
      <footer className="border-t border-white/10 py-12 px-6 sm:px-8 md:px-12 text-center">
        <p className="font-mono text-xs text-muted-foreground mb-4">WANT TO COLLABORATE OR SEE ORIGINAL CREDENTIALS?</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-full border border-white/20 font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          GET IN TOUCH
        </Link>
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground/40 mt-8">
          © {new Date().getFullYear()} NITISH SEHGAL — ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  )
}
