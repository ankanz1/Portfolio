"use client"

import { motion } from "framer-motion"

export function FloatingAvatar() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 w-16 h-16 rounded-full overflow-hidden z-40 cursor-pointer border-2 border-purple-500/50"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.8 }}
    >
      <img
        src="/images/ankan-profile.png"
        alt="Ankan Mukherjee"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
      />
      {/* Glowing ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-400"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
