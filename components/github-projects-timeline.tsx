"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Star, GitFork, ExternalLink, Github, Code2 } from "lucide-react"

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

export function GitHubProjectsTimeline() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true)
        // Replace 'ankanz1' with your actual GitHub username
        const response = await fetch(
          "https://api.github.com/users/ankanz1/repos?sort=created&direction=desc&per_page=50",
        )

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data: GitHubRepo[] = await response.json()

        // Filter out forks and sort by creation date (newest first)
        const filteredRepos = data
          .filter((repo) => !repo.name.includes("fork") && repo.name.toLowerCase() !== "ankanz1")
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

        setRepos(filteredRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch repositories")
        console.error("Error fetching GitHub repos:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubRepos()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getProjectCategory = (repo: GitHubRepo): "blockchain" | "ai" | "web" | "mobile" | "other" => {
    const name = repo.name.toLowerCase()
    const description = (repo.description || "").toLowerCase()
    const topics = repo.topics.join(" ").toLowerCase()
    const content = `${name} ${description} ${topics}`

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "blockchain":
        return "from-orange-500 to-yellow-500"
      case "ai":
        return "from-cyan-500 to-blue-500"
      case "web":
        return "from-purple-500 to-pink-500"
      case "mobile":
        return "from-green-500 to-emerald-500"
      default:
        return "from-gray-500 to-gray-400"
    }
  }

  const getCategoryIcon = (category: string) => {
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

  if (loading) {
    return (
      <div className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Timeline
          </motion.h2>

          <div className="flex justify-center items-center py-20">
            <motion.div
              className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <span className="ml-4 text-xl text-zinc-400">Loading GitHub repositories...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Timeline
          </motion.h2>

          <div className="text-center py-20">
            <div className="text-red-400 text-xl mb-4">⚠️ Unable to load repositories</div>
            <div className="text-zinc-400">{error}</div>
            <div className="text-sm text-zinc-500 mt-2">
              Make sure your GitHub username is correct and repositories are public
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Project Timeline
          <div className="text-lg font-normal text-zinc-400 mt-2">
            {repos.length} repositories • Fetched from GitHub
          </div>
        </motion.h2>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 h-full rounded-full opacity-30" />

          <div className="space-y-12">
            {repos.map((repo, index) => {
              const category = getProjectCategory(repo)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={repo.id}
                  className={`relative flex items-center ${isEven ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {getCategoryIcon(category)}
                    </motion.div>
                  </div>

                  {/* Project card */}
                  <motion.div
                    className={`w-full max-w-md ${isEven ? "mr-auto pr-8" : "ml-auto pl-8"}`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(category)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                              {repo.name
                                .replace(/-/g, " ")
                                .replace(/_/g, " ")
                                .split(" ")
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(" ")}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                              <Calendar className="w-4 h-4" />
                              {formatDate(repo.created_at)}
                            </div>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(category)} text-white`}
                          >
                            {category.toUpperCase()}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                          {repo.description || "No description available"}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {repo.language && (
                            <span
                              className="px-2 py-1 rounded-full text-xs font-medium text-white"
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            >
                              {repo.language}
                            </span>
                          )}
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span key={topic} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                              {topic}
                            </span>
                          ))}
                        </div>

                        {/* Stats and links */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-zinc-400">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {repo.stargazers_count}
                            </div>
                            <div className="flex items-center gap-1">
                              <GitFork className="w-4 h-4" />
                              {repo.forks_count}
                            </div>
                            <div className="flex items-center gap-1">
                              <Code2 className="w-4 h-4" />
                              {(repo.size / 1024).toFixed(1)}MB
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <motion.a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github className="w-4 h-4" />
                            </motion.a>
                            {repo.homepage && (
                              <motion.a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {repos.length}
              </div>
              <div className="text-sm text-zinc-400">Total Projects</div>
            </div>
            <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                {repos.filter((repo) => getProjectCategory(repo) === "blockchain").length}
              </div>
              <div className="text-sm text-zinc-400">Blockchain</div>
            </div>
            <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {repos.filter((repo) => getProjectCategory(repo) === "ai").length}
              </div>
              <div className="text-sm text-zinc-400">AI/ML</div>
            </div>
            <div className="text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
              </div>
              <div className="text-sm text-zinc-400">Total Stars</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
