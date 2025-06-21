"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface SkillBadgeProps {
  name: string
  icon: string
  level: "🚀" | "⚡" | "🔥"
  category: "blockchain" | "ai" | "dev" | "cloud"
}

export function SkillBadge({ name, icon, level, category }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getCategoryColor = () => {
    switch (category) {
      case "blockchain":
        return "group-hover:border-orange-500"
      case "ai":
        return "group-hover:border-cyan-500"
      case "dev":
        return "group-hover:border-purple-500"
      case "cloud":
        return "group-hover:border-blue-500"
      default:
        return "group-hover:border-gray-500"
    }
  }

  const getCategoryGlow = () => {
    switch (category) {
      case "blockchain":
        return "from-orange-500/20 to-yellow-500/20"
      case "ai":
        return "from-cyan-500/20 to-blue-500/20"
      case "dev":
        return "from-purple-500/20 to-pink-500/20"
      case "cloud":
        return "from-blue-500/20 to-indigo-500/20"
      default:
        return "from-gray-500/20 to-gray-400/20"
    }
  }

  return (
    <motion.div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, rotateZ: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <div
        className={`bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-3 text-center transition-all duration-300 ${getCategoryColor()}`}
      >
        <motion.div
          className="text-2xl mb-2"
          animate={isHovered ? { rotateY: 360 } : {}}
          transition={{ duration: 0.6 }}
        >
          {isHovered ? level : icon}
        </motion.div>
        <div className="text-xs font-medium">{name}</div>
      </div>

      {/* Category-based glow effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${getCategoryGlow()} rounded-xl blur-xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
