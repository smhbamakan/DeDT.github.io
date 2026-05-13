import { motion } from 'framer-motion'
import { FiLayers, FiShield, FiZap, FiBook } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const STATS = [
  { value: '2026', label: 'Publication Year', icon: FiBook, color: 'from-blue-500 to-cyan-500' },
  { value: 'O1–O4', label: 'Research Objectives', icon: FiZap, color: 'from-violet-500 to-blue-500' },
  { value: '5', label: 'Challenges Addressed', icon: FiShield, color: 'from-cyan-500 to-teal-500' },
  { value: 'Elsevier', label: 'Publisher', icon: FiLayers, color: 'from-blue-600 to-indigo-500' },
]

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="eyebrow mb-3"
          >
            About the Project
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section-heading mb-6"
          >
            A{' '}
            <span className="gradient-text">Decentralized & Trustworthy</span>
            {' '}Digital Twin Platform
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              The <strong className="text-slate-200">DeDT project</strong> (Decentralized Digital Twins) proposes a
              next-generation platform that fuses the power of{' '}
              <span className="text-electric-light">blockchain technology</span> with{' '}
              <span className="text-cyan-brand">digital twin systems</span> to address deep-rooted
              challenges in data security, IP protection, and multi-party collaboration.
            </p>
            <p>
              Digital twins — virtual replicas of physical systems — are becoming critical infrastructure
              across manufacturing, healthcare, smart cities, and logistics. Yet their adoption is hindered
              by centralized trust models, opaque data pipelines, and lack of verifiable provenance.
              DeDT addresses these barriers through a Web3-native architectural approach.
            </p>
            <p>
              By integrating <span className="text-electric-light">smart contracts</span>,{' '}
              <span className="text-cyan-brand">federated learning</span>,{' '}
              <span className="text-electric-light">IP-based NFTs (IP-NFTs)</span>, and{' '}
              <span className="text-cyan-brand">decentralized autonomous organizations (DAOs)</span>,
              DeDT creates a tamper-proof, auditable, and self-sovereign ecosystem for digital twin
              data sharing, fundraising, and analytics.
            </p>
          </motion.div>
        </div>

        {/* Right: stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i * 0.8}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className={`icon-box bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
