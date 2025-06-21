"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const greetings = [
  "Hello World 👋",
  "नमस्ते 🙏",
  "こんにちは 🎌",
  "Hola 🌮",
  "Bonjour 🥖",
  "হ্যালো 🇧🇩",
  "Ciao 🍝",
  "Hallo 🍺",
]

export function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = greetings[currentIndex]

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % greetings.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex])

  return (
    <div className="text-2xl md:text-4xl font-bold text-center mt-8">
      <span className="text-zinc-300">{currentText}</span>
      <motion.span
        className="text-purple-400"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
      >
        |
      </motion.span>
    </div>
  )
}
