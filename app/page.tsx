"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SignatureLoader } from "@/components/signature-loader"
import { StarfieldBackground } from "@/components/starfield-background"
import { Floating3DText } from "@/components/floating-3d-text"
import { SocialMediaLinks } from "@/components/social-media-links"
import { MagneticButton } from "@/components/magnetic-button"
import { HorizontalNav } from "@/components/horizontal-nav"
import { SkillBadge } from "@/components/skill-badge"
import { BlogCarousel } from "@/components/blog-carousel"
import { GlitchContactForm } from "@/components/glitch-contact-form"
import { CustomCursor } from "@/components/custom-cursor"
import { PersonalAssistant } from "@/components/personal-assistant"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProblemSolvingProjects } from "@/components/problem-solving-projects"
import { CreativeSkills } from "@/components/creative-skills"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  if (isLoading) {
    return <SignatureLoader onComplete={handleLoadingComplete} enableSound={false} />
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <StarfieldBackground />
      <HorizontalNav />
      <PersonalAssistant />

      {showContent && (
        <>
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto text-center">
                <Floating3DText />

                <motion.div
                  className="mt-16 space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex flex-wrap gap-4 justify-center">
                    <MagneticButton onClick={() => scrollToSection("projects")}>View My Solutions</MagneticButton>
                    <motion.a
                      href="#contact"
                      className="px-8 py-4 border border-zinc-600 hover:border-purple-500 rounded-full font-medium text-zinc-300 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Let's Solve Together
                    </motion.a>
                  </div>

                  <SocialMediaLinks />
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
              <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, rotateX: -15 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* About Text */}
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <motion.h2 className="text-4xl font-bold mb-6 text-white" whileHover={{ scale: 1.02 }}>
                        About Me
                      </motion.h2>

                      <div className="text-lg text-zinc-300 space-y-4 leading-relaxed">
                        <p>
                          I'm a passionate technologist based in Kolkata, dedicated to solving real-world problems
                          through code and emerging technologies. My expertise spans blockchain, artificial
                          intelligence, and machine learning solutions.
                        </p>
                        <p>
                          Currently pursuing B.Tech in Computer Science & Engineering at Sister Nivedita University
                          (graduating 2028), I combine academic knowledge with hands-on experience in building practical
                          applications that address meaningful challenges.
                        </p>
                        <p>
                          Beyond coding, I'm a creative professional with expertise in visual storytelling through
                          photography, video editing, and graphic design. I believe in technology's power to transform
                          lives and industries, whether through innovative software solutions or compelling visual
                          content.
                        </p>

                        {/* Tech stats */}
                        <motion.div
                          className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-zinc-800"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                              15+
                            </div>
                            <div className="text-sm text-zinc-500">Blockchain Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                              10+
                            </div>
                            <div className="text-sm text-zinc-500">AI/ML Models</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                              50+
                            </div>
                            <div className="text-sm text-zinc-500">Creative Projects</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Image with Tech Stack Visualization */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-full max-w-md mx-auto">
                      <motion.div
                        className="aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black"
                        whileHover={{ rotateY: 10, rotateX: 10 }}
                        style={{ transformStyle: "preserve-3d" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <img
                          src="/images/ankan-profile.png"
                          alt="Ankan Mukherjee - Developer"
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="text-white font-bold text-xl mb-2">Creative Technologist</div>
                          <div className="text-zinc-300 text-sm">Code • Design • Visual Storytelling</div>
                        </div>
                      </motion.div>

                      {/* Floating tech badges around the image */}
                      <motion.div
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-sm font-bold text-black"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        Blockchain
                      </motion.div>

                      <motion.div
                        className="absolute top-1/4 -right-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold text-white"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        AI/ML
                      </motion.div>

                      <motion.div
                        className="absolute bottom-1/4 -left-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white"
                        animate={{ x: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        Creative
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Technical Expertise
              </motion.h2>

              <div className="space-y-12 max-w-5xl mx-auto">
                {/* Blockchain Skills */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    Blockchain Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <SkillBadge name="Solidity" icon="💎" level="🔥" category="blockchain" />
                    <SkillBadge name="Ethereum" icon="⟠" level="🔥" category="blockchain" />
                    <SkillBadge name="Web3.js" icon="🌐" level="⚡" category="blockchain" />
                    <SkillBadge name="Smart Contracts" icon="📜" level="🔥" category="blockchain" />
                    <SkillBadge name="DeFi" icon="💰" level="⚡" category="blockchain" />
                    <SkillBadge name="NFTs" icon="🖼️" level="🚀" category="blockchain" />
                  </div>
                </div>

                {/* AI/ML Skills */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    AI & Machine Learning
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <SkillBadge name="TensorFlow" icon="🧠" level="🔥" category="ai" />
                    <SkillBadge name="PyTorch" icon="🔥" level="⚡" category="ai" />
                    <SkillBadge name="Computer Vision" icon="👁️" level="🚀" category="ai" />
                    <SkillBadge name="NLP" icon="💬" level="⚡" category="ai" />
                    <SkillBadge name="Neural Networks" icon="🕸️" level="🔥" category="ai" />
                    <SkillBadge name="Python" icon="🐍" level="🔥" category="ai" />
                  </div>
                </div>

                {/* Development Skills */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Development & Tools
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <SkillBadge name="JavaScript" icon="⚡" level="🔥" category="dev" />
                    <SkillBadge name="React" icon="⚛️" level="🔥" category="dev" />
                    <SkillBadge name="Node.js" icon="🟢" level="⚡" category="dev" />
                    <SkillBadge name="Git" icon="🌿" level="🔥" category="dev" />
                    <SkillBadge name="Docker" icon="🐳" level="⚡" category="dev" />
                    <SkillBadge name="APIs" icon="🔌" level="🚀" category="dev" />
                  </div>
                </div>

                {/* Cloud & Infrastructure */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Cloud & Infrastructure
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <SkillBadge name="AWS" icon="☁️" level="⚡" category="cloud" />
                    <SkillBadge name="Google Cloud" icon="🌩️" level="🚀" category="cloud" />
                    <SkillBadge name="Databases" icon="🗄️" level="🔥" category="cloud" />
                    <SkillBadge name="CI/CD" icon="🔄" level="⚡" category="cloud" />
                    <SkillBadge name="Serverless" icon="⚡" level="🚀" category="cloud" />
                    <SkillBadge name="Kubernetes" icon="🚢" level="⚡" category="cloud" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem-Solving Projects Section */}
          <ProblemSolvingProjects />

          {/* GitHub Projects Timeline */}
          <ExperienceTimeline />

          {/* Creative Skills Section */}
          <CreativeSkills />

          {/* Blog Section */}
          <section className="py-32 relative z-10">
            <div className="container mx-auto px-6">
              <BlogCarousel />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
              <GlitchContactForm />
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-zinc-800 relative z-10">
            <div className="container mx-auto px-6 text-center">
              <motion.p className="text-zinc-400" whileHover={{ color: "#8b5cf6" }}>
                © 2024 Ankan Mukherjee. Solving real-world problems through code and innovation.
              </motion.p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}
