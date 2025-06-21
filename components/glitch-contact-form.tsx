"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function GlitchContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  const glitchVariants = {
    normal: { x: 0, textShadow: "none" },
    glitch: {
      x: [-2, 2, -2, 2, 0],
      textShadow: [
        "2px 0 #ff0000, -2px 0 #00ffff",
        "-2px 0 #ff0000, 2px 0 #00ffff",
        "2px 0 #ff0000, -2px 0 #00ffff",
        "-2px 0 #ff0000, 2px 0 #00ffff",
        "none",
      ],
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="max-w-md mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        variants={glitchVariants}
        initial="normal"
        whileHover="glitch"
      >
        Let's Connect
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-zinc-600"
            required
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-zinc-600"
            required
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
          <textarea
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-zinc-600 resize-none"
            required
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </span>

          {/* Binary burst effect */}
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-zinc-400 text-sm">
          Or reach me directly at{" "}
          <a href="mailto:ankan.work01@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
            ankan.work01@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
