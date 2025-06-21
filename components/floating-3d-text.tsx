"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const greetings = [
  "Hello",
  "नमस्ते",
  "নমস্কার",
  "こんにちは",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Olá",
  "Привет",
  "مرحبا",
  "안녕하세요",
]

export function Floating3DText() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <motion.div
        className="text-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: mousePosition.y * 0.05,
          rotateY: mousePosition.x * 0.05,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <motion.span
            key={currentGreeting}
            className="inline-block"
            initial={{ opacity: 0, rotateX: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, rotateX: 90, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {greetings[currentGreeting]}
          </motion.span>
          , I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Ankan Mukherjee
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-zinc-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          i'm a developer 
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            ...
          </span>

        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Solving real-world problems through code, innovation, and emerging technologies.
          <br />
          Passionate about blockchain, artificial intelligence, and machine learning solutions.
        </motion.p>
      </motion.div>

      {/* Tech-themed floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            i % 3 === 0
              ? "bg-gradient-to-r from-orange-400 to-yellow-500"
              : i % 3 === 1
                ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                : "bg-gradient-to-r from-purple-400 to-pink-500"
          }`}
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tech accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  )
}
