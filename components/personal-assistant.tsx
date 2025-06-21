"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot, User, MessageCircle } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: Date
}

const assistantData = {
  personal: {
    name: "Ankan Mukherjee",
    location: "Kolkata, India",
    education: "B.Tech in Computer Science & Engineering at Sister Nivedita University (graduating 2028)",
    role: "Blockchain & AI/ML Developer",
    description:
      "Passionate technologist dedicated to solving real-world problems through code and emerging technologies",
  },
  skills: {
    blockchain: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "DeFi", "NFTs"],
    ai: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Neural Networks", "Python"],
    development: ["JavaScript", "React", "Node.js", "Git", "Docker", "APIs"],
    cloud: ["AWS", "Google Cloud", "Databases", "CI/CD", "Serverless", "Kubernetes"],
  },
  projects: [
    {
      name: "Medical Image Diagnosis AI",
      description: "Deep learning model for early detection of diseases from medical imaging",
      tech: ["PyTorch", "Computer Vision", "Healthcare"],
    },
    {
      name: "Decentralized Supply Chain",
      description: "Blockchain solution for transparent and efficient supply chain management",
      tech: ["Ethereum", "Smart Contracts", "Logistics"],
    },
    {
      name: "Predictive Crop Analysis",
      description: "ML system to predict crop yields and optimize agricultural practices",
      tech: ["TensorFlow", "Data Science", "Agriculture"],
    },
    {
      name: "Decentralized Identity",
      description: "Self-sovereign identity solution with privacy-preserving verification",
      tech: ["Blockchain", "Zero-Knowledge", "Identity"],
    },
    {
      name: "Disaster Response AI",
      description: "Real-time natural disaster detection and response coordination system",
      tech: ["NLP", "Computer Vision", "Emergency"],
    },
    {
      name: "Carbon Credit Marketplace",
      description: "Blockchain platform for transparent carbon credit trading and verification",
      tech: ["DeFi", "Sustainability", "Climate"],
    },
  ],
  contact: {
    email: "ankan.work01@gmail.com",
    github: "https://github.com/ankanz1",
  },
  stats: {
    blockchainProjects: "15+",
    aiModels: "10+",
    problemsSolved: "20+",
  },
}

export function PersonalAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Ankan's AI assistant. Ask me anything about his background, skills, projects, or experience! 🚀",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Personal information
    if (message.includes("name") || message.includes("who")) {
      return `I'm ${assistantData.personal.name}, a ${assistantData.personal.role} based in ${assistantData.personal.location}. ${assistantData.personal.description}.`
    }

    if (message.includes("education") || message.includes("study") || message.includes("university")) {
      return `I'm currently pursuing ${assistantData.personal.education}. I combine academic knowledge with hands-on experience in building practical applications.`
    }

    if (message.includes("location") || message.includes("where")) {
      return `I'm based in ${assistantData.personal.location}, India. I love the vibrant tech scene here!`
    }

    // Skills
    if (message.includes("skill") || message.includes("technology") || message.includes("tech stack")) {
      return `My expertise spans multiple domains:
      
🔗 **Blockchain**: ${assistantData.skills.blockchain.join(", ")}
🧠 **AI/ML**: ${assistantData.skills.ai.join(", ")}
💻 **Development**: ${assistantData.skills.development.join(", ")}
☁️ **Cloud**: ${assistantData.skills.cloud.join(", ")}

I'm particularly passionate about blockchain and AI/ML technologies!`
    }

    if (message.includes("blockchain")) {
      return `I'm deeply involved in blockchain development! My skills include: ${assistantData.skills.blockchain.join(", ")}. I've worked on ${assistantData.stats.blockchainProjects} blockchain projects focusing on real-world applications.`
    }

    if (message.includes("ai") || message.includes("machine learning") || message.includes("ml")) {
      return `AI and Machine Learning are my passion! I work with: ${assistantData.skills.ai.join(", ")}. I've built ${assistantData.stats.aiModels} AI/ML models for various applications including healthcare, agriculture, and disaster response.`
    }

    // Projects
    if (message.includes("project")) {
      const projectList = assistantData.projects
        .map((project, index) => `${index + 1}. **${project.name}**: ${project.description}`)
        .join("\n")

      return `Here are some of my key projects:

${projectList}

Each project focuses on solving real-world problems using cutting-edge technology. Would you like to know more about any specific project?`
    }

    if (message.includes("medical") || message.includes("healthcare")) {
      const project = assistantData.projects[0]
      return `${project.name}: ${project.description}. This project uses ${project.tech.join(", ")} to help doctors detect diseases earlier and more accurately.`
    }

    if (message.includes("supply chain")) {
      const project = assistantData.projects[1]
      return `${project.name}: ${project.description}. Built with ${project.tech.join(", ")}, it ensures transparency and efficiency in supply chain operations.`
    }

    // Experience and approach
    if (message.includes("experience") || message.includes("approach") || message.includes("method")) {
      return `My problem-solving approach follows 4 key steps:

1. **Identify & Research**: Deeply understand the problem and research existing solutions
2. **Design & Prototype**: Create innovative designs and build rapid prototypes
3. **Develop & Test**: Build robust, scalable solutions with comprehensive testing
4. **Deploy & Iterate**: Launch with monitoring and continuous improvement

I've solved ${assistantData.stats.problemsSolved} real-world problems using this methodology!`
    }

    // Contact
    if (message.includes("contact") || message.includes("email") || message.includes("reach")) {
      return `You can reach me at:
📧 Email: ${assistantData.contact.email}
💻 GitHub: ${assistantData.contact.github}

I'm always excited to discuss new opportunities and collaborate on innovative projects!`
    }

    // Stats
    if (message.includes("stats") || message.includes("numbers") || message.includes("achievements")) {
      return `Here are some key numbers:
🔗 ${assistantData.stats.blockchainProjects} Blockchain Projects
🧠 ${assistantData.stats.aiModels} AI/ML Models
🎯 ${assistantData.stats.problemsSolved} Problems Solved

I'm constantly working on new projects and expanding my expertise!`
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! You can ask me about my skills, projects, experience, education, or contact information.",
      "I'd love to help! Try asking about my blockchain projects, AI/ML work, or technical expertise.",
      "Feel free to ask about my background, projects, skills, or how to get in touch with me!",
      "I can tell you about my education, location, technical skills, or any of my projects. What interests you most?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const response = generateResponse(inputValue)
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: "assistant",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Floating Chat Bubble - Moved to right side */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <motion.button
          onClick={toggleChat}
          className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-purple-500/50 cursor-pointer select-none"
          style={{
            pointerEvents: "auto",
            touchAction: "manipulation",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            scale: { delay: 2, duration: 0.5 },
            opacity: { delay: 2, duration: 0.5 },
            y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulsing glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400 pointer-events-none"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </div>

      {/* Chat Window - Positioned from right side */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-zinc-900/95 backdrop-blur-md border border-zinc-700 rounded-2xl shadow-2xl z-[9998] flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: "auto" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white">Ankan's AI Assistant</h3>
                <p className="text-xs text-white/80">Ask me anything about Ankan!</p>
              </div>
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: "calc(100% - 140px)" }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-cyan-500 to-blue-500"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl p-3 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "bg-zinc-800 text-zinc-100"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line break-words">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-zinc-800 rounded-2xl p-3">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-zinc-400 rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-zinc-400 rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-zinc-400 rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-700 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects, experience..."
                  className="flex-1 bg-zinc-800 border border-zinc-600 rounded-full px-4 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-purple-500 transition-colors"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
