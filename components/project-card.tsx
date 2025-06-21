"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  image?: string
}

export function ProjectCard({ title, description, tags, demoUrl, repoUrl, image }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        rotateY: 5,
        rotateX: 5,
        z: 50,
      }}
      style={{ transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 p-6">
          <div className="aspect-video bg-zinc-800 rounded-lg mb-4 overflow-hidden relative">
            {image ? (
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="text-zinc-600 text-lg font-mono">{"{ }"}</div>
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-zinc-400 mb-4 text-sm">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-zinc-800 text-xs rounded-full text-zinc-300"
                whileHover={{ scale: 1.1, backgroundColor: "#7c3aed" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-2">
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            {repoUrl && (
              <motion.a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05, rotateZ: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                View Code
              </motion.a>
            )}
          </div>
        </div>

        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b, #10b981)",
            padding: "1px",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-zinc-900 rounded-xl" />
        </motion.div>
      </div>
    </motion.div>
  )
}
