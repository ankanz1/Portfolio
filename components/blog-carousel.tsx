"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const blogPosts = [
  {
    title: "Combining AI & Blockchain for Supply Chain Transparency",
    excerpt:
      "How machine learning and distributed ledgers can work together to solve real-world supply chain challenges",
    readTime: "8 min read",
    fullText: `🌍 Introduction
In today's interconnected world, supply chains span countries, oceans, and countless stakeholders. From raw material sourcing to final product delivery, tracking every step of the journey is increasingly complex. Issues like fraud, counterfeiting, inefficiency, and lack of visibility continue to plague industries.

Now imagine a world where every product's journey is traceable, every decision in the process is optimized, and every stakeholder can trust the data. That's the power of combining Artificial Intelligence (AI) and Blockchain in supply chain systems.

This blog explores how these two cutting-edge technologies can complement each other to revolutionize supply chain transparency.

🔗 Blockchain: The Trust Layer
Blockchain acts as a decentralized, tamper-proof ledger that records every transaction or event in a supply chain. Here's how it brings transparency:

Immutable Records: Once data is entered, it cannot be changed — perfect for auditing.

Decentralization: No single party controls the data, reducing the chance of manipulation.

Smart Contracts: Automated rules can execute actions (like payments or alerts) when certain conditions are met.

Imagine a coffee bean tracked from farm to cup — with every step recorded on-chain: harvesting, transport, roasting, packaging, and delivery. Customers can scan a QR code to verify the bean's entire journey.

🤖 AI: The Intelligence Layer
Where blockchain records, AI analyzes. Machine learning can add predictive power and decision-making capabilities:

Demand Forecasting: AI can predict product demand using historical and real-time data.

Anomaly Detection: Catch irregularities in shipments, delays, or supplier behaviors.

Route Optimization: AI algorithms can find the most efficient shipping paths based on weather, traffic, and costs.

Quality Control: AI-powered vision systems can inspect goods and flag defects.

Together, these insights help make the supply chain not only transparent but also smart and self-healing.

🤝 Where AI & Blockchain Intersect
Let's break down how the two technologies can work together:

Function	Blockchain Role	AI Role
Product Traceability	Stores origin and movement data	Predicts risk of delay or fraud
Inventory Management	Validates supplier data	Forecasts stock levels
Quality Assurance	Confirms inspection logs	Uses computer vision to analyze defects
Compliance & Audits	Provides immutable history	Flags suspicious activity

The combination ensures that:

Data is accurate (thanks to blockchain), and

Insights are actionable (thanks to AI).

🚚 Real-World Applications
Here are a few industries already using this synergy:

Food & Agriculture: IBM's Food Trust network helps track produce from farm to shelf. AI predicts spoilage while blockchain ensures authenticity.

Pharmaceuticals: Ensuring temperature-sensitive drugs maintain their integrity through verified tracking and AI-based alerts.

Luxury Goods: Fighting counterfeiting in fashion and watches through blockchain-verified ownership and AI-driven fraud detection.

🧠 Challenges to Consider
Of course, combining AI and blockchain isn't plug-and-play. You'll face:

Data Quality: AI is only as good as the data — and garbage in means garbage out.

Integration Complexity: Connecting IoT, blockchain networks, and AI models requires robust engineering.

Scalability: Blockchain networks can be slow; layer-2 solutions and off-chain storage may help.

Privacy Concerns: Not all supply chain data should be public — hybrid blockchains or zero-knowledge proofs might help.

💡 The Future of Transparent Supply Chains
We're entering an era where customers, partners, and regulators demand transparency. AI and blockchain together offer a path forward — one where machines don't just record data, but make sense of it, verify it, and act on it.

In the next 5 years, expect to see:

More tokenized supply chains

AI agents negotiating and managing inventory autonomously

Real-time digital twins of entire supply chains

And it all begins with trust in the data — which is exactly what blockchain ensures.

🧾 Final Thoughts
Supply chains are no longer just about logistics — they're data ecosystems. By combining blockchain's integrity with AI's intelligence, we can move toward supply chains that are not only visible and efficient, but also resilient and trustworthy.

This isn't just digital transformation — it's a paradigm shift.`,
  },
  {
    title: "Solving Healthcare Data Challenges with ML",
    excerpt: "Using machine learning to improve patient outcomes while maintaining privacy and security",
    readTime: "6 min read",
    fullText: `🧠 Introduction
Healthcare is an industry built on data — from patient histories and lab results to imaging scans and treatment records. Yet, despite its richness, healthcare data remains fragmented, inconsistent, and often inaccessible, limiting its potential to improve patient outcomes.

Machine learning (ML) is changing that narrative. By enabling systems to learn from data patterns, ML can assist in everything from early diagnosis to personalized treatment plans. But applying ML in healthcare comes with challenges — especially around data privacy, standardization, and security.

In this blog, we explore how machine learning is helping overcome these data hurdles and enabling smarter, safer healthcare.

🏥 The Challenges in Healthcare Data
Before ML can transform healthcare, it must tackle several long-standing issues:

Data Silos: Information is often stored across incompatible systems (EHRs, labs, insurers) with little interoperability.

Incomplete or Noisy Data: Missing fields, human errors, or inconsistencies can make training models difficult.

Privacy & Compliance: Regulations like HIPAA and GDPR limit how patient data can be used or shared.

Bias & Fairness: Unequal representation in training data can lead to biased outcomes, especially for underrepresented groups.

Data Security: Medical data is highly sensitive and often targeted by cyberattacks.

These problems make it difficult to harness data meaningfully — but ML is stepping in to help.

🤖 How ML Addresses These Issues
1. Data Cleaning & Normalization
ML techniques like autoencoders, clustering, and data imputation models can detect outliers, fill in missing values, and unify records from different formats. This creates cleaner datasets ready for accurate analysis.

2. Predictive Analytics
ML models trained on large, anonymized datasets can:

Predict patient readmission risks

Flag potential health issues based on symptoms or vitals

Optimize hospital resource allocation (e.g., ICU beds, staff schedules)

3. Natural Language Processing (NLP)
NLP extracts meaning from doctors' notes, prescriptions, and discharge summaries, converting unstructured text into usable data. This allows for:

Automatic diagnosis coding

Symptom pattern recognition

Automated summary generation

4. Privacy-Preserving Machine Learning
To meet compliance and ethics standards, techniques like:

Federated Learning (training on decentralized data without moving it)

Differential Privacy (adding noise to data for anonymity)

Homomorphic Encryption (running computations on encrypted data)

These allow hospitals to train ML models without exposing sensitive patient information.

🧪 Real-World Use Cases
Early Disease Detection
ML is being used to detect conditions like diabetic retinopathy, cancer, and Alzheimer's earlier than traditional methods, using pattern recognition in medical imaging and lab reports.

Clinical Decision Support
Tools like IBM Watson assist doctors by recommending treatment options based on patient history and global medical literature.

Remote Monitoring & Alerts
Wearables and smart devices feed real-time data to ML systems, which flag abnormalities (e.g., heart irregularities) and send alerts to doctors.

Hospital Operations Optimization
ML predicts surgery durations, bed occupancy rates, and no-shows to help hospitals plan efficiently.

🔒 The Balance: Accuracy vs. Privacy
The biggest challenge remains: how to innovate without compromising patient rights.

Transparency: Models must be explainable, especially in high-stakes medical decisions.

Consent: Patients should have control over how their data is used.

Security: Encryption, access control, and regular audits are crucial.

Balancing model performance with ethical responsibility is key to gaining trust and adoption in the healthcare sector.

🧭 Final Thoughts
Machine learning has the potential to be a lifesaver — literally — by making sense of the vast and messy world of healthcare data. While challenges exist, especially around privacy and fairness, the right approach can turn these roadblocks into breakthroughs.

The future of medicine isn't just human — it's human + machine working together for better care, faster insights, and healthier lives.`,
  },
  {
    title: "Smart Contracts for Social Impact",
    excerpt: "How blockchain technology can address social challenges and create positive change",
    readTime: "7 min read",
    fullText: `🌐 Introduction
Smart contracts are transforming the way we think about agreements, automation, and trust. While much of the spotlight has been on DeFi and NFTs, there's a growing wave of innovation aimed at using smart contracts to solve real-world social problems — from transparent aid distribution to decentralized identity for the unbanked.

This blog explores how smart contracts, powered by blockchain, can help drive positive social impact in a transparent, trustless, and scalable way.

🤖 What Are Smart Contracts?
A smart contract is a self-executing piece of code that runs on a blockchain. Once conditions are met, the contract executes automatically — without intermediaries. The logic is immutable and transparent, which makes it ideal for building trust in low-trust environments.

Key benefits include:

Transparency: Anyone can verify the code and logic.

Trustlessness: Removes the need for middlemen.

Immutability: Once deployed, the contract cannot be altered.

Programmability: You can create powerful logic that runs autonomously.

🌱 Use Cases for Social Good
1. Transparent Aid Distribution
Non-profits and NGOs can use smart contracts to ensure donations are distributed fairly and only when certain verifiable conditions are met. For example, funds could be released only when proof-of-impact data (like attendance logs or health metrics) is submitted on-chain.

2. Microfinancing and Loans
Decentralized finance (DeFi) protocols built on smart contracts can offer microloans to underserved populations without traditional credit scores. Terms are enforced automatically, reducing costs and fraud.

3. Identity & Voting Systems
Smart contracts can be used to create secure, tamper-proof digital identities. This enables access to government services, remote voting, and refugee assistance programs without relying on centralized databases.

4. Conditional Scholarships & Rewards
Students or communities could receive tokens or grants if they meet certain criteria — like passing tests, attending workshops, or achieving environmental goals. The contract ensures transparency and minimizes administrative burden.

5. Climate Action & Sustainability
Smart contracts can track and verify environmental metrics (e.g., carbon credits or tree planting) using IoT and oracles. They can automate incentives for eco-friendly behavior or release funds only when milestones are hit.

💥 Real Projects Making a Difference
Giveth: A donation platform that uses smart contracts to provide transparency in charitable giving.

UN World Food Programme: Piloted blockchain for food voucher distribution in refugee camps (Project Building Blocks).

Proof of Humanity: Combines Ethereum and identity validation to give universal basic income to verified humans.

⚠️ Challenges & Considerations
While powerful, using smart contracts for social impact comes with challenges:

Access: Many beneficiaries may lack internet or crypto wallets.

Regulatory Uncertainty: Local laws may conflict with smart contract enforcement.

Oracles: Real-world data must be reliably and securely input on-chain.

Education: Both users and organizations need training to safely interact with smart contracts.

🚀 The Future of Impact-Driven Blockchain
The combination of programmable trust and global accessibility makes smart contracts uniquely suited to tackle societal issues at scale. As tools improve and adoption grows, expect to see:

More DAO-driven community impact funds

Decentralized public goods financing

Blockchain-powered identity for marginalized populations

Smart contracts aren't just for profits — they're for people, too.

🧾 Final Thoughts
We stand at the edge of a new digital frontier where code can enforce fairness, tokens can incentivize progress, and transparency becomes the default. By focusing on mission-aligned applications, smart contracts can become a foundational tool for building a better, more inclusive future.`,
  },
  {
    title: "Ethical AI: Building Responsible Solutions",
    excerpt: "Ensuring artificial intelligence systems are fair, transparent, and beneficial for all",
    readTime: "10 min read",
    fullText: `🌐 Introduction
Artificial Intelligence (AI) is reshaping industries, economies, and everyday life. From recommendation systems to autonomous vehicles, AI promises efficiency and innovation — but it also raises critical ethical concerns. What happens when an algorithm makes a biased decision? Or when users aren't aware their data is being used to train AI?

Ethical AI means designing systems that are transparent, accountable, inclusive, and fair. It's not just about what AI can do, but what it should do.

This blog explores the principles of ethical AI, real-world challenges, and how developers and organizations can create AI that benefits everyone.

🤖 Why Ethics in AI Matters
AI systems are only as good as the data and design behind them. Without ethical consideration, these systems can cause real harm — reinforcing inequality, eroding privacy, or making unexplainable decisions that impact lives.

Key reasons ethical AI matters:

Fairness: Avoids discrimination and bias in decisions (e.g., hiring, loans, policing).

Transparency: Users and regulators should understand how an AI system works.

Accountability: There should be clear responsibility for AI outcomes.

Safety: AI should be robust and prevent misuse or unexpected behavior.

Privacy: Data collection must be respectful, secure, and consent-based.

📉 Real-World Failures of Unethical AI
Some examples where lack of ethics in AI led to serious consequences:

Hiring Algorithms: AI systems trained on biased historical data excluded women or minority candidates.

Facial Recognition: Studies showed some models had much lower accuracy for darker-skinned individuals.

Predictive Policing: Reinforced systemic biases by targeting specific communities based on flawed historical data.

Deepfakes: AI-generated media used maliciously for misinformation or harassment.

These cases highlight the urgent need for checks and balances.

⚖️ Core Principles of Ethical AI
Here are the key principles widely recommended by ethics councils and AI researchers:

1. Fairness
AI should treat all users equally. Datasets must be diverse, and bias mitigation techniques should be applied.

2. Transparency
People have the right to know how an AI system works, what data it uses, and how decisions are made.

3. Accountability
Clear mechanisms must exist to challenge or audit AI outcomes. Humans must remain in the loop.

4. Privacy Protection
Data used to train AI should be anonymized, securely stored, and consented to by the users.

5. Human-Centered Design
AI should empower users — not replace them. Decisions should consider user well-being and social good.

🛠️ How to Build Ethical AI
Developers and teams can take practical steps to make AI systems more ethical:

Use Diverse and Representative Datasets: Include data from multiple demographics to avoid biased outputs.

Bias Audits: Regularly test AI systems for unfair outcomes or disparate impact.

Explainable AI (XAI): Implement techniques that make the model's decisions interpretable to humans.

Open Documentation: Share how models are trained, their limitations, and intended use cases.

Ethics Committees: Have cross-functional teams evaluate the social impact of AI deployments.

🔧 Tools and Frameworks That Support Ethical AI
Fairlearn (Microsoft) – Helps evaluate and mitigate fairness issues in machine learning models.

IBM AI Fairness 360 – An open-source toolkit for detecting and mitigating bias.

LIME & SHAP – Tools for model interpretability.

Data Nutrition Labels – Describe datasets like food labels to improve transparency.

🌍 Ethical AI in the Real World
Google's AI Principles: A public commitment to not develop AI for surveillance or weapons.

Apple's On-Device AI: Focuses on user privacy by keeping processing local.

EU AI Act: A landmark legal framework to regulate AI based on risk categories.

Partnership on AI: Coalition of organizations promoting responsible AI development.

🚧 Challenges Ahead
Despite best intentions, ethical AI faces hurdles:

Black Box Models: Some deep learning systems are difficult to interpret.

Corporate Pressure: Companies may prioritize speed or profits over ethics.

Global Standards: Ethics varies culturally and politically, making universal regulation complex.

Access to Expertise: Not every team has ethicists or legal experts on staff.

🔮 The Future of Responsible AI
Ethical AI is not a destination — it's an evolving process. The future will require:

AI Literacy: Teaching users and developers to understand how AI works and its limitations.

Regulatory Standards: Governments and industries collaborating to set rules for safety and fairness.

Decentralized Oversight: Community-led review boards and open AI audits.

AI Alignment Research: Ensuring AI goals align with human values, especially for general-purpose AI.

✅ Final Thoughts
Ethical AI is not just a technical challenge — it's a societal one. The decisions we make now will define how AI impacts humanity for decades to come. By embedding fairness, transparency, and accountability into the heart of AI systems, we can build technology that uplifts rather than undermines.

Let's not just build intelligent machines — let's build responsible ones.`,
  },
]

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  const selectedPostData = selectedPost !== null ? blogPosts[selectedPost] : null

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Tech Insights & Solutions</h2>
        <div className="flex gap-2">
          <motion.button
            onClick={prevSlide}
            className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: -currentIndex * 320 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="min-w-[300px] h-[250px] bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col justify-between cursor-pointer group"
              onClick={() => setSelectedPost(index)}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">{post.title}</h3>
                <p className="text-zinc-400 text-sm mt-2">{post.excerpt}</p>
              </div>
              <div className="text-purple-400 text-sm font-medium">Read more →</div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPostData && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl h-full max-h-[90vh]"
              style={{ perspective: "1000px" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ rotateY: 180 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="absolute w-full h-full bg-zinc-900 border border-zinc-700 rounded-xl p-8 overflow-y-auto"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <motion.button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white z-10"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                  >
                    <X />
                  </motion.button>
                  <h3 className="text-3xl font-bold mb-4 pr-8">{selectedPostData.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
                    <span>{selectedPostData.readTime}</span>
                  </div>
                  <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed">
                    <p className="whitespace-pre-wrap">{selectedPostData.fullText}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
