"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SignatureLoaderProps {
  onComplete: () => void
  enableSound?: boolean
}

export function SignatureLoader({ onComplete, enableSound = false }: SignatureLoaderProps) {
  const [isComplete, setIsComplete] = useState(false)
  const [showGlow, setShowGlow] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initialize audio if enabled
    if (enableSound && typeof window !== "undefined") {
      audioRef.current = new Audio("/sounds/pen-writing.mp3") // You'd need to add this sound file
      audioRef.current.volume = 0.3
    }

    // Start the signature animation
    const timer = setTimeout(() => {
      if (enableSound && audioRef.current) {
        audioRef.current.play().catch(() => {
          // Handle audio play failure silently
        })
      }
    }, 500)

    // Show glow effect after writing
    const glowTimer = setTimeout(() => {
      setShowGlow(true)
    }, 2800)

    // Complete animation
    const completeTimer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(onComplete, 800)
    }, 3200)

    return () => {
      clearTimeout(timer)
      clearTimeout(glowTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete, enableSound])

  const handleReplay = () => {
    if (isComplete) {
      window.location.reload() // Simple replay by reloading
    }
  }

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-900 via-black to-slate-800 flex items-center justify-center overflow-hidden"
          exit={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Radial spotlight background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Main signature container */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Signature SVG */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <svg
                width="600"
                height="250"
                viewBox="0 0 600 250"
                className="w-full max-w-lg md:max-w-xl lg:max-w-3xl"
                style={{
                  filter: showGlow
                    ? "drop-shadow(0 0 25px rgba(139, 92, 246, 0.9)) drop-shadow(0 0 50px rgba(236, 72, 153, 0.6))"
                    : "none",
                }}
              >
                {/* Letter A */}
                <motion.path
                  d="M80 180 Q100 100 120 180 M95 140 L105 140"
                  stroke="url(#signatureGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.6, ease: "easeInOut", delay: 0.3 },
                    opacity: { duration: 0.3, delay: 0.3 },
                  }}
                />

                {/* Letter n */}
                <motion.path
                  d="M150 180 L150 120 Q150 100 170 100 Q190 100 190 120 L190 180"
                  stroke="url(#signatureGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.6, ease: "easeInOut", delay: 0.9 },
                    opacity: { duration: 0.3, delay: 0.9 },
                  }}
                />

                {/* Letter k */}
                <motion.path
                  d="M220 180 L220 100 M220 140 L250 110 M220 140 L250 180"
                  stroke="url(#signatureGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.6, ease: "easeInOut", delay: 1.5 },
                    opacity: { duration: 0.3, delay: 1.5 },
                  }}
                />

                {/* Letter a */}
                <motion.path
                  d="M280 180 Q280 160 300 160 Q320 160 320 180 Q320 200 300 200 Q280 200 280 180 M320 180 L320 160"
                  stroke="url(#signatureGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.6, ease: "easeInOut", delay: 2.1 },
                    opacity: { duration: 0.3, delay: 2.1 },
                  }}
                />

                {/* Letter n */}
                <motion.path
                  d="M350 180 L350 120 Q350 100 370 100 Q390 100 390 120 L390 180"
                  stroke="url(#signatureGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.6, ease: "easeInOut", delay: 2.7 },
                    opacity: { duration: 0.3, delay: 2.7 },
                  }}
                />

                {/* Signature flourish */}
                <motion.path
                  d="M410 170 Q430 150 450 170 Q470 190 490 170 Q510 150 530 170"
                  stroke="url(#signatureGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.4, ease: "easeInOut", delay: 3.3 },
                    opacity: { duration: 0.3, delay: 3.3 },
                  }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="30%" stopColor="#a855f7" />
                    <stop offset="60%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>

                  {/* Enhanced glow filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Animated pen tip */}
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                style={{
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.9), 0 0 40px rgba(236, 72, 153, 0.6)",
                }}
                initial={{ x: 80, y: 180, opacity: 0 }}
                animate={{
                  x: [80, 120, 150, 190, 220, 250, 280, 320, 350, 390, 530],
                  y: [180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 170],
                  opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 3.5,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1],
                }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-16 text-lg md:text-xl text-zinc-400 font-light tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              Crafting Digital Experiences
            </motion.p>

            {/* Loading dots */}
            <motion.div
              className="flex gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Replay button (appears after completion) */}
          <motion.button
            onClick={handleReplay}
            className="absolute bottom-8 right-8 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: showGlow ? 1 : 0,
              scale: showGlow ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </motion.button>

          {/* Progress indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
