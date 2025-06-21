"use client"

import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ankan-mukherjee",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        />
        <circle cx="4" cy="4" r="2" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/ankanz1",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "Twitter/X",
    url: "https://twitter.com/_ankz01",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/__ankzzz",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
        />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Discord",
    url: "https://discord.gg/mWnQA8VYQT",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"
        />
        <circle cx="8.5" cy="12" r="1.5" strokeWidth={1.5} />
        <circle cx="15.5" cy="12" r="1.5" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/ankanz1",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.64 6.8c.15-.38-.22-.73-.61-.59l-8.89 3.26c-.38.14-.37.65.02.77L9.5 11l.97 3.81c.05.2.27.28.43.16l1.62-1.22c.16-.12.38-.12.54 0l2.85 2.18c.16.12.4.03.42-.16l1.31-6.99z"
        />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:ankan.work01@gmail.com?subject=Hello%20Ankan%20-%20Let's%20Connect&body=Hi%20Ankan,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ABest%20regards,",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

export function SocialMediaLinks() {
  return (
    <div className="text-center mt-12">
      <motion.h3
        className="text-xl md:text-2xl font-semibold text-zinc-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Connect with me on social platforms
      </motion.h3>

      {/* Horizontal Social Bar */}
      <motion.div
        className="inline-flex items-center justify-center bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-full px-8 py-4 shadow-2xl"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex items-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target={social.name === "Email" ? "_self" : "_blank"}
              rel={social.name === "Email" ? undefined : "noopener noreferrer"}
              className="group relative p-3 rounded-full transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              whileHover={{
                scale: 1.15,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon */}
              <div className="text-white/70 group-hover:text-white transition-colors duration-300">{social.icon}</div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />

              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                {social.name === "Email"
                  ? "Send Email"
                  : social.name === "Discord"
                    ? "Join AnkTiQ Server"
                    : social.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
              </motion.div>

              {/* Active indicator dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
      </motion.div>

      {/* Professional tagline */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/30 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-zinc-400">Available for collaborations and opportunities</span>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${40 + Math.random() * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
