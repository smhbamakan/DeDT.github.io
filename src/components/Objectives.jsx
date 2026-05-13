import { motion } from 'framer-motion'
import { FiSearch, FiShield, FiAward, FiBarChart2 } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const OBJECTIVES = [
  {
    id: 'O1',
    icon: FiSearch,
    title: 'Challenge Analysis & Web3 Evaluation',
    text: 'Identifying the crucial challenges of digital twin projects and evaluating the applicability of emerging Web 3.0 technologies to resolve them.',
    color: 'from-blue-500 to-cyan-400',
    glow: 'rgba(59,130,246,0.15)',
  },
  {
    id: 'O2',
    icon: FiShield,
    title: 'Decentralized Collaboration Platform',
    text: 'Developing a tamper-proof and decentralized collaboration platform for digital twin data sharing and federated learning.',
    color: 'from-cyan-500 to-teal-400',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    id: 'O3',
    icon: FiAward,
    title: 'IP-NFT Framework Design',
    text: 'Designing an Intellectual Property-based NFT framework (IP-NFT) for digital twin provenance and decentralized fundraising.',
    color: 'from-violet-500 to-blue-400',
    glow: 'rgba(139,92,246,0.15)',
  },
  {
    id: 'O4',
    icon: FiBarChart2,
    title: 'Blockchain-based Predictive Analytics',
    text: 'Providing a blockchain-based predictive analytics platform for enabling trust, transparency, and auditability in DT projects.',
    color: 'from-blue-600 to-indigo-400',
    glow: 'rgba(99,102,241,0.15)',
  },
]

export default function Objectives() {
  return (
    <section id="objectives" className="section-container">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          Research Objectives
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading"
        >
          Four Core{' '}
          <span className="gradient-text">Research Goals</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 mt-4 max-w-2xl mx-auto"
        >
          Each objective maps to a distinct technical challenge in modern digital twin deployments,
          addressed through decentralized Web3 primitives.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {OBJECTIVES.map((obj, i) => {
          const Icon = obj.icon
          return (
            <motion.div
              key={obj.id}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -8, boxShadow: `0 20px 40px ${obj.glow}` }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden cursor-default"
            >
              {/* Decorative gradient corner */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 blur-2xl"
                style={{ background: `linear-gradient(135deg, ${obj.glow.replace('0.15', '1')}, transparent)` }}
              />

              {/* Header row */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${obj.glow}, rgba(15,31,61,0.5))`, border: `1px solid ${obj.glow}` }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span
                  className="inline-flex items-center justify-center h-8 px-3 rounded-full text-xs font-bold"
                  style={{
                    background: `linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))`,
                    border: '1px solid rgba(59,130,246,0.25)',
                    color: '#60A5FA',
                  }}
                >
                  {obj.id}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-3">{obj.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{obj.text}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
