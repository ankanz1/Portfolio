"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Award, Users, Code, Briefcase, GraduationCap } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    id: "snu-btech",
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Sister Nivedita University",
    location: "Kolkata, West Bengal, India",
    period: "2024 - 2028",
    status: "Current",
    description:
      "Pursuing Bachelor of Technology with specialization in Computer Science & Engineering. Focusing on emerging technologies including Blockchain, AI/ML, and Software Development.",
    highlights: [
      "Computer Networks & Security",
      "Software Engineering & System Design",
      "Advanced studies in Machine Learning & AI",
      "Blockchain Technology & Smart Contract Development",
      "Specialized coursework in Core Computer Science",
      "Participated in hackathons and coding competitions",
      "Active member of the University Photography Club 'Aperture Alchemist'",
    ],
    skills: ["C", "C++", "Python", "Machine Learning", "Blockchain"],
    color: "from-blue-500 to-indigo-500",
    icon: GraduationCap,
  },
  {
    id: "freelance-dev",
    type: "work",
    title: "Intership In SDE, WebDev & Genaretive AI",
    organization: "Self-Employed",
    location: "Kolkata, West Bengal, India",
    period: "2024 - Present",
    status: "Current",
    description:
      "As an intern, I worked at the intersection of software development, modern web technologies, and cutting-edge generative AI. I contributed to building responsive web applications, explored AI-powered tools and models (like GPT and diffusion models), and gained hands-on experience in full-stack development, API integration, and real-world problem-solving using emerging technologies.",
    highlights: [
      "Developed 15+ blockchain applications using Solidity & Web3",
      "Built AI/ML models for healthcare and agriculture sectors",
      "Created decentralized applications (DApps) for various industries",
      "Implemented smart contracts for supply chain management",
      "Delivered predictive analytics solutions using TensorFlow",
      "Collaborated with international clients on innovative projects",
    ],
    skills: ["Solidity", "Ethereum", "Web3.js", "TensorFlow", "PyTorch", "Python", "JavaScript", "React"],
    color: "from-orange-500 to-yellow-500",
    icon: Code,
  },
  {
    id: "creative-professional",
    type: "work",
    title: "Creative Professional",
    organization: "Freelance",
    location: "Kolkata, West Bengal, India",
    period: "2021 - Present",
    status: "Current",
    description:
      "Providing comprehensive creative services including photography, video editing, graphic design, and digital marketing solutions for businesses and individuals.",
    highlights: [
      "Completed 50+ professional photography shoots",
      "Edited 100+ videos for social media and corporate clients",
      "Designed 200+ graphics for branding and marketing campaigns",
      "Managed 50+ digital marketing campaigns with measurable ROI",
      "Specialized in wedding, event, and portrait photography",
      "Created visual content for social media influencers and brands",
    ],
    skills: ["Photography", "Video Editing", "Graphic Design", "Social Media Marketing"],
    color: "from-purple-500 to-pink-500",
    icon: Award,
  },
  {
    id: "tech-projects",
    type: "projects",
    title: "Open Source Contributor & Project Developer",
    organization: "GitHub & Personal Projects",
    location: "Remote",
    period: "2025 - Present",
    status: "Ongoing",
    description:
      "Actively contributing to open source projects and developing innovative solutions for real-world problems using cutting-edge technologies.",
    highlights: [
      "Developed Medical Image Diagnosis AI for early disease detection",
      "Created Decentralized Supply Chain Management System",
      "Built Predictive Crop Analysis ML model for agriculture",
      "Implemented Carbon Credit Marketplace on blockchain",
      "Contributed to various open source blockchain projects",
      "Mentored junior developers in blockchain and AI/ML technologies",
    ],
    skills: ["Open Source", "Project Management", "Technical Leadership", "Innovation"],
    color: "from-green-500 to-teal-500",
    icon: Users,
  },
  {
    id: "certifications",
    type: "achievements",
    title: "Professional Certifications & Achievements",
    organization: "Various Platforms",
    location: "Online",
    period: "2024 - Present",
    status: "Ongoing",
    description:
      "Continuously upskilling through professional certifications and achieving recognition in blockchain and AI/ML domains.",
    highlights: [
      "Blockchain Development Certification",
      "Machine Learning Specialization",
      "AWS Cloud Practitioner (In Progress)",
      "Google Cloud Platform Fundamentals",
      "Ethereum Smart Contract Security",
      "Deep Learning with TensorFlow & PyTorch",
    ],
    skills: ["Continuous Learning", "Professional Development", "Industry Recognition"],
    color: "from-cyan-500 to-blue-500",
    icon: Award,
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "education":
      return GraduationCap
    case "work":
      return Briefcase
    case "projects":
      return Code
    case "achievements":
      return Award
    default:
      return Briefcase
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "education":
      return "from-blue-500 to-indigo-500"
    case "work":
      return "from-orange-500 to-yellow-500"
    case "projects":
      return "from-green-500 to-teal-500"
    case "achievements":
      return "from-cyan-500 to-blue-500"
    default:
      return "from-gray-500 to-gray-400"
  }
}

export function ExperienceTimeline() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)
  const isMobile = useMobile()

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Professional Journey
          <div className="text-lg font-normal text-zinc-400 mt-2">Education • Experience • Achievements</div>
        </motion.h2>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 h-full rounded-full opacity-30" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0
              const IconComponent = getTypeIcon(experience.type)

              return (
                <motion.div
                  key={experience.id}
                  className={`relative flex items-center ${isEven ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center text-white shadow-lg border-4 border-black`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Experience card */}
                  <motion.div
                    className={`w-full max-w-lg ${isEven ? "mr-auto pr-8" : "ml-auto pl-8"}`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedExperience(selectedExperience === experience.id ? null : experience.id)}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experience.color} text-white`}
                              >
                                {experience.type.toUpperCase()}
                              </span>
                              {experience.status === "Current" && (
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                                  Current
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                              {experience.title}
                            </h3>
                            <div className="text-purple-400 font-medium mb-2">{experience.organization}</div>
                            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {experience.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {experience.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{experience.description}</p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {experience.skills.slice(0, 4).map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {experience.skills.length > 4 && (
                            <span className="px-2 py-1 bg-zinc-700 text-zinc-400 rounded-full text-xs">
                              +{experience.skills.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Expandable highlights */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: selectedExperience === experience.id ? "auto" : 0,
                            opacity: selectedExperience === experience.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-zinc-800 pt-4 mt-4">
                            <h4 className="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
                            <ul className="space-y-2">
                              {experience.highlights.map((highlight, idx) => (
                                <motion.li
                                  key={idx}
                                  className="text-sm text-zinc-300 flex items-start gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                  {highlight}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>

                        {/* Expand indicator */}
                        <div className="flex items-center justify-center mt-4">
                          <motion.div
                            className="text-xs text-zinc-500 flex items-center gap-1 cursor-pointer"
                            animate={{ rotate: selectedExperience === experience.id ? 180 : 0 }}
                          >
                            <span>{selectedExperience === experience.id ? "Show Less" : "Show More"}</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                4+
              </div>
              <div className="text-sm text-zinc-400">Years Experience</div>
            </div>
            <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-zinc-400">Projects Completed</div>
            </div>
            <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-sm text-zinc-400">Technologies Mastered</div>
            </div>
            <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-zinc-400">Client Satisfaction</div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5" />

              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  A passionate and dedicated Computer Science student with hands-on experience in blockchain
                  development, AI/ML implementation, and creative digital solutions. Currently pursuing B.Tech while
                  actively working as a freelance developer, delivering innovative solutions that solve real-world
                  problems. Combining technical expertise with creative skills to provide comprehensive digital
                  services.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/ankan-mukherjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    LinkedIn Profile
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/1UXfL0nVvCmP710AGt39nyZQHNMjqtdRn/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating "View Resume" Button */}
        {/* <motion.a
          href="https://drive.google.com/file/d/1UXfL0nVvCmP710AGt39nyZQHNMjqtdRn/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-20 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg flex items-center gap-2"
        >
          View Resume
        </motion.a> */}
      </div>
    </section>
  )
}
