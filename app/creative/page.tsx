"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Camera, Video, Type, Palette, Aperture, Film, ArrowLeft } from "lucide-react"
import { CreativeSkills } from "@/components/creative-skills"
import { StarfieldBackground } from "@/components/starfield-background"
import { CustomCursor } from "@/components/custom-cursor"

export default function CreativePortfolio() {
    const [showMain, setShowMain] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = "none"
        return () => {
            document.body.style.cursor = "auto"
        }
    }, [])

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <CustomCursor />
            <StarfieldBackground />

            <motion.div
                className="fixed top-6 left-6 z-50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <a
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-800 text-zinc-300 hover:text-white hover:border-purple-500 transition-all duration-300"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Tech Portfolio</span>
                </a>
            </motion.div>

            <div className="pt-24 pb-12">
                <motion.div
                    className="text-center mb-16 px-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                        Creative Portfolio
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
                        Beyond code, I express myself through pixels, frames, and visual storytelling.
                    </p>
                </motion.div>

                <CreativeSkills />

                <footer className="py-12 border-t border-zinc-800 relative z-10 mt-12">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-zinc-500">
                            © 2024 Ankan Mukherjee. Visual Arts & Creative Direction.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
