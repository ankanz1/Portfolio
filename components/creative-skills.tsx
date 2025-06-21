"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, Video, Palette, Layers, Zap, Award, Users, Instagram, ExternalLink } from "lucide-react"

const creativeSkills = [
  {
    id: "photography",
    title: "Photography",
    icon: Camera,
    description: "Capturing moments and stories through my Lens",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Portrait Photography", level: 95, icon: "👤" },
      { name: "Landscape Photography", level: 88, icon: "🏔️" },
      { name: "Event Photography", level: 72, icon: "🎉" },
      { name: "Street Photography", level: 90, icon: "🏙️" },
      { name: "Photo Editing", level: 93, icon: "✨" },
    ],
    tools: ["Adobe Lightroom", "Adobe Photoshop"],
    achievements: [
      "50+ Professional Shoots",
      "Wedding & Event Specialist",
      "Commercial Photography",
      "Social Media Content",
    ],
    gallery: [
      {
        id: 1,
        title: "Portrait Session",
        category: "Portrait",
        placeholder: "/images/Photography/potrait.JPG",
      },
      {
        id: 2,
        title: "Portrait Moments",
        category: "Street Potrait",
        placeholder: "/images/Photography/oldwomen.jpg",
      },
      {
        id: 3,
        title: "Street Life",
        category: "Street",
        placeholder: "/images/Photography/bwman.jpg",
      },
      {
        id: 4,
        title: "Nature Landscape",
        category: "Landscape",
        placeholder: "/images/Photography/bok.jpg",
      },
      {
        id: 5,
        title: "Asthetic Appeal",
        category: "Color",
        placeholder: "/images/Photography/butterfly.jpg",
      },
      {
        id: 6,
        title: "Event Coverage",
        category: "Event",
        placeholder: "/images/Photography/Event.jpg",
      },
    ],
  },
  {
    id: "video",
    title: "Video Editing",
    icon: Video,
    description: "Creating compelling visual narratives through professional video production",
    color: "from-red-500 to-pink-500",
    skills: [
      { name: "Video Editing", level: 94, icon: "🎬" },
      { name: "Motion Graphics", level: 87, icon: "🎭" },
      { name: "Color Grading", level: 89, icon: "🎨" },
      { name: "Audio Mixing", level: 82, icon: "🎵" },
      { name: "Visual Effects", level: 85, icon: "✨" },
      { name: "Storytelling", level: 96, icon: "📖" },
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cap Cut", "VN Mobile"],
    achievements: ["50+ Video Projects", "Corporate Video Production", "Social Media Content", "Documentary Editing"],
  },
  {
    id: "design",
    title: "Graphic Design",
    icon: Palette,
    description: "Designing visual solutions that communicate and inspire",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Brand Identity", level: 91, icon: "🏷️" },
      { name: "Logo Design", level: 93, icon: "🎯" },
      { name: "Print Design", level: 88, icon: "📄" },
      { name: "Digital Design", level: 95, icon: "💻" },
      { name: "UI/UX Design", level: 87, icon: "📱" },
      { name: "Typography", level: 90, icon: "🔤" },
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva"],
    achievements: ["50+ Design Projects", "Brand Identity Specialist", "Print & Digital Media", "UI/UX Design"],
  },
]

export function CreativeSkills() {
  const [activeSkill, setActiveSkill] = useState("photography")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const activeSkillData = creativeSkills.find((skill) => skill.id === activeSkill) || creativeSkills[0]

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Creative Expertise</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Beyond code, I bring stories to life through visual creativity and digital artistry
          </p>
        </motion.div>

        {/* Skill Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {creativeSkills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <motion.button
                key={skill.id}
                onClick={() => setActiveSkill(skill.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSkill === skill.id
                    ? `bg-gradient-to-r ${skill.color} text-white shadow-lg`
                    : "bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
                {skill.title}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Active Skill Details */}
        <motion.div
          key={activeSkill}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Photography Gallery Section */}
          {activeSkill === "photography" && activeSkillData.gallery && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Photography Portfolio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeSkillData.gallery.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-800"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => setSelectedImage(selectedImage === image.id ? null : image.id)}
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={image.placeholder || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-bold text-lg">{image.title}</h4>
                        <p className="text-sm text-zinc-300">{image.category}</p>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Instagram Contact */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-zinc-400 mb-4">For further details and more photography work</p>
                <motion.a
                  href="https://www.instagram.com/__ankzzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white rounded-full font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                  Contact me on Instagram
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Overview */}
            <div className="space-y-8">
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${activeSkillData.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${activeSkillData.color} flex items-center justify-center`}
                    >
                      <activeSkillData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{activeSkillData.title}</h3>
                      <p className="text-zinc-400">Professional Level</p>
                    </div>
                  </div>

                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">{activeSkillData.description}</p>

                  {/* Tools */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5" />
                      Professional Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeSkillData.tools.map((tool, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
                          transition={{ duration: 0.2 }}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {activeSkillData.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2 text-sm text-zinc-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Zap className="w-4 h-4 text-yellow-400" />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Skills Breakdown */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Skill Proficiency
              </h4>

              {activeSkillData.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden group"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${activeSkillData.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-zinc-400">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${activeSkillData.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Portfolio CTA */}
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">View My Creative Portfolio</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Explore my latest work in {activeSkillData.title.toLowerCase()}
                </p>
                <motion.a
                  href="https://www.instagram.com/__ankzzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${activeSkillData.color} text-white rounded-lg font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-4 h-4" />
                  View Portfolio
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Creative Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-sm text-zinc-400">Photos Captured</div>
          </div>
          <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-sm text-zinc-400">Videos Edited</div>
          </div>
          <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              200+
            </div>
            <div className="text-sm text-zinc-400">Designs Created</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
