"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Settings, Code, MessageSquare } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Settings, label: "Skills", href: "#skills" },
  { icon: Code, label: "Projects", href: "#projects" },
  { icon: MessageSquare, label: "Contact", href: "#contact" },
]

export function HorizontalNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling down from the home section (e.g., after 80vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-30 bg-black/80 backdrop-blur-md border border-zinc-800 rounded-full px-6 py-3 shadow-2xl ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-4">
        {/* Brand Name Section */}
        <motion.a
          href="#home"
          className="font-bold text-lg mr-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Ankan</span>
        </motion.a>

        {/* Resume Button - More visible and shifted left */}
        <motion.a
          href="https://drive.google.com/file/d/17f5UyffFuoGDRV-OVy-Gs2jR2WsPbsKV/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>

        {/* Navigation Items */}
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="relative flex items-center gap-2 px-3 py-2 rounded-full transition-colors group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
              {item.label}
            </span>

            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
                layoutId="navHover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}

            {hoveredIndex === index && (
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              />
            )}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}
