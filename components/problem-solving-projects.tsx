"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Star, GitFork, ExternalLink, Github } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  topics: string[]
  size: number
}

interface Project {
  title: string
  description: string
  tags: string[]
  category: string
  demoUrl: string | null
  repoUrl: string
  featured: boolean
  image: string
  githubData?: GitHubRepo
}

const featuredProjects: Project[] = [
  {
    title: "Medical Image Diagnosis AI",
    description:
      "Deep learning model for early detection of diseases from medical imaging using PyTorch and computer vision techniques",
    tags: ["PyTorch 🔥", "Computer Vision 👁️", "Healthcare 🏥", "Python 🐍"],
    category: "ai",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/ankanz1",
    featured: true,
    image: "/images/ComingSoon.png",
  },
  {
    title: "Decentralized Supply Chain",
    description: "Blockchain solution for transparent and efficient supply chain management with smart contracts",
    tags: ["Ethereum ⟠", "Smart Contracts 📜", "Logistics 🚚", "Solidity 💎"],
    category: "blockchain",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/ankanz1",
    featured: true,
    image: "/images/ComingSoon.png",
  },
  {
    title: "Predictive Crop Analysis",
    description: "ML system to predict crop yields and optimize agricultural practices using data science",
    tags: ["TensorFlow 🧠", "Data Science 📊", "Agriculture 🌾", "Python 🐍"],
    category: "ai",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/ankanz1",
    featured: true,
    image: "/images/ComingSoon.png",
  },
]

const getLanguageColor = (language: string | null): string => {
  const colors: { [key: string]: string } = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    HTML: "#e34c26",
    CSS: "#563d7c",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Go: "#00ADD8",
    Rust: "#dea584",
    Swift: "#ffac45",
    Kotlin: "#F18E33",
    Dart: "#00B4AB",
    Shell: "#89e051",
    Solidity: "#AA6746",
    Jupyter: "#DA5B0B",
  }
  return colors[language || ""] || "#8b5cf6"
}

const getProjectCategory = (repo: GitHubRepo): "blockchain" | "ai" | "web" | "mobile" | "other" => {
  const name = repo.name.toLowerCase()
  const description = (repo.description || "").toLowerCase()
  const topics = repo.topics.join(" ").toLowerCase()
  const content = `${name} ${description} ${topics}`

  // Manual overrides for specific projects
  if (name === "circlo") {
    return "web"
  }
  if (name === "devault") {
    return "blockchain"
  }
  if (name === "aurora") {
    return "ai"
  }
  if (name === "farmsense") {
    return "ai"
  }
  if (name === "budz") {
    return "blockchain"
  }
  if (name === "3d-model-generator") {
    return "ai"
  }

  // Automatic categorization for other projects
  if (
    content.includes("blockchain") ||
    content.includes("solidity") ||
    content.includes("web3") ||
    content.includes("ethereum") ||
    content.includes("smart") ||
    content.includes("defi") ||
    content.includes("nft")
  ) {
    return "blockchain"
  }
  if (
    content.includes("ai") ||
    content.includes("ml") ||
    content.includes("machine") ||
    content.includes("neural") ||
    content.includes("tensorflow") ||
    content.includes("pytorch") ||
    content.includes("model")
  ) {
    return "ai"
  }
  if (
    content.includes("react") ||
    content.includes("next") ||
    content.includes("web") ||
    content.includes("frontend") ||
    content.includes("backend") ||
    content.includes("api")
  ) {
    return "web"
  }
  if (
    content.includes("mobile") ||
    content.includes("android") ||
    content.includes("ios") ||
    content.includes("flutter") ||
    content.includes("react-native")
  ) {
    return "mobile"
  }
  return "other"
}

const getCategoryEmoji = (category: string) => {
  switch (category) {
    case "blockchain":
      return "⟠"
    case "ai":
      return "🧠"
    case "web":
      return "🌐"
    case "mobile":
      return "📱"
    default:
      return "💻"
  }
}

const getProjectPlaceholder = (repo: GitHubRepo, category: string): string => {
  const name = repo.name.toLowerCase()

  // Specific project placeholders
  if (name === "devault") {
    return "/images/devault-banner.jpg"
  }
  if (name === "aurora") {
    return "/images/Aurora.png"
  }
  if (name === "farmsense") {
    return "/images/Farmsensee.png"
  }
  if (name === "budz") {
    return "/images/Budz.jpg"
  }
  if (name === "coreid") {
    return "/images/coreid.png"
  }
  if (name === "3d-model-generator") {
    return "/images/ModelGeneretor .png"
  }
  if (name === "circlo") {
    return "/images/circlo.png"
  }
  if (name === "ankan-portfolio") {
    return "/images/ComingSoon.png"
  }

  // Category-based placeholders
  switch (category) {
    case "blockchain":
      return `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(repo.name.replace(/-/g, " ").toUpperCase())}+Blockchain`
    case "ai":
      return `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(repo.name.replace(/-/g, " ").toUpperCase())}+AI+Model`
    case "web":
      return `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(repo.name.replace(/-/g, " ").toUpperCase())}+Web+App`
    case "mobile":
      return `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(repo.name.replace(/-/g, " ").toUpperCase())}+Mobile+App`
    default:
      return `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(repo.name.replace(/-/g, " ").toUpperCase())}+Project`
  }
}

export function ProblemSolvingProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [showGitHubRepos, setShowGitHubRepos] = useState(false)

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          "https://api.github.com/users/ankanz1/repos?sort=updated&direction=desc&per_page=20",
        )

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data: GitHubRepo[] = await response.json()

        // Filter out forks and profile repos, prioritize recent and starred repos
        const filteredRepos = data
          .filter((repo) => !repo.name.includes("fork") && repo.name.toLowerCase() !== "ankanz1")
          .sort((a, b) => {
            // Prioritize repos with more stars and recent updates
            const scoreA = a.stargazers_count * 2 + new Date(a.updated_at).getTime() / 1000000000
            const scoreB = b.stargazers_count * 2 + new Date(b.updated_at).getTime() / 1000000000
            return scoreB - scoreA
          })
          .slice(0, 12) // Show top 12 repos

        setRepos(filteredRepos)
      } catch (err) {
        console.error("Error fetching GitHub repos:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubRepos()
  }, [])

  const categories = [
    { id: "all", name: "All Projects", emoji: "🎯" },
    { id: "blockchain", name: "Blockchain", emoji: "⟠" },
    { id: "ai", name: "AI/ML", emoji: "🧠" },
    { id: "web", name: "Web Dev", emoji: "🌐" },
    { id: "mobile", name: "Mobile", emoji: "📱" },
    { id: "other", name: "Other", emoji: "💻" },
  ]

  const getFilteredProjects = () => {
    const allProjects: Project[] = [
      ...featuredProjects,
      ...repos.map(
        (repo): Project => ({
          title: repo.name
            .replace(/-/g, " ")
            .replace(/_/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          description: repo.description || "A problem-solving project built with modern technologies",
          tags: [
            ...(repo.language ? [`${repo.language} ${getCategoryEmoji(getProjectCategory(repo))}`] : []),
            ...repo.topics.slice(0, 2).map((topic) => `${topic} 🔧`),
            `${repo.stargazers_count} ⭐`,
          ],
          category: getProjectCategory(repo),
          repoUrl: repo.html_url,
          demoUrl: repo.homepage,
          featured: false,
          githubData: repo,
          image: getProjectPlaceholder(repo, getProjectCategory(repo)),
        }),
      ),
    ]

    if (selectedCategory === "all") {
      return allProjects
    }

    return allProjects.filter((project) => project.category === selectedCategory)
  }

  const filteredProjects = getFilteredProjects()

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        {/* Clean Text Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Problem-Solving Projects</h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Real solutions for real problems. Each project addresses specific challenges using cutting-edge technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {project.featured ? (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  demoUrl={project.demoUrl ?? undefined}
                  repoUrl={project.repoUrl}
                  image={project.image}
                />
              ) : (
                <div className="relative group">
                  <motion.div
                    className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden"
                    whileHover={{
                      rotateY: 5,
                      rotateX: 5,
                      z: 50,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 p-6">
                      <div className="aspect-video bg-zinc-800 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-zinc-400 mb-4 text-sm">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="px-2 py-1 bg-zinc-800 text-xs rounded-full text-zinc-300"
                            whileHover={{ scale: 1.1, backgroundColor: "#7c3aed" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {project.githubData && (
                        <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {project.githubData.stargazers_count}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            {project.githubData.forks_count}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <motion.a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors"
                          whileHover={{ scale: 1.05, rotateZ: -1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </motion.a>
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                            whileHover={{ scale: 1.05, rotateZ: 1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Glowing border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b, #10b981)",
                        padding: "1px",
                        opacity: 0,
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-zinc-900 rounded-xl" />
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <motion.div
              className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <span className="ml-4 text-zinc-400">Loading GitHub projects...</span>
          </div>
        )}

        {/* Stats Summary */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {filteredProjects.length}
            </div>
            <div className="text-sm text-zinc-400">Total Projects</div>
          </div>
          <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              {filteredProjects.filter((p) => p.category === "blockchain").length}
            </div>
            <div className="text-sm text-zinc-400">Blockchain</div>
          </div>
          <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {filteredProjects.filter((p) => p.category === "ai").length}
            </div>
            <div className="text-sm text-zinc-400">AI/ML</div>
          </div>
          <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
            </div>
            <div className="text-sm text-zinc-400">GitHub Stars</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
