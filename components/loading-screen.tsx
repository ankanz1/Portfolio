"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "হ্যালো",
  "Ciao",
  "नमस्ते",
  "こんにちは",
  "Hallo",
  "Olá",
  "Привет",
  "مرحبا",
  "안녕하세요",
  "Γεια σας",
]

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 200) // Reduced from 300ms to 200ms for faster greeting changes

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          clearInterval(greetingInterval)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onComplete, 300) // Reduced from 800ms to 300ms
          }, 200) // Reduced from 500ms to 200ms
          return 100
        }
        return prev + 3 // Increased from 2 to 3 for faster progress
      })
    }, 40) // Reduced from 50ms to 40ms for smoother/faster progress

    return () => {
      clearInterval(greetingInterval)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }} // Reduced from 0.8s to 0.5s
        >
          <div className="text-center">
            <motion.div
              key={currentGreeting}
              className="text-6xl md:text-8xl font-bold mb-8"
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.2 }} // Reduced from 0.3s to 0.2s
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {greetings[currentGreeting]}
              </span>
            </motion.div>

            <div className="w-80 h-2 bg-zinc-800 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                <div className="absolute right-0 top-0 w-4 h-full bg-white/30 rounded-full animate-pulse" />
              </motion.div>
            </div>

            <motion.div
              className="mt-4 text-zinc-400 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }} // Reduced from 1.5s to 1s
            >
              Loading the magic... {Math.round(progress)}%
            </motion.div>

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5, // Reduced from 2s to 1.5s
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 1.5, // Reduced from 2s to 1.5s
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
