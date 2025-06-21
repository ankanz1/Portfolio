"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // In a real app, you'd update the theme here
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div animate={{ rotate: isDark ? 0 : 180 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-400" />}
      </motion.div>

      {/* Anime-style glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark ? "0 0 20px rgba(251, 191, 36, 0.5)" : "0 0 20px rgba(59, 130, 246, 0.5)",
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  )
}
