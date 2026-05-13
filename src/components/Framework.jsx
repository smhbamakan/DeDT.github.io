import { motion } from 'framer-motion'
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi'

const LAYERS = [
  'Blockchain smart contracts for data integrity and auditability',
  'Federated learning modules for privacy-preserving model training',
  'IP-NFT layer for provenance tracking and decentralized fundraising',
  'DAO governance for multi-stakeholder decision making',
  'Predictive analytics engine with on-chain result verification',
]

export default function Framework() {
  const imgSrc = `${import.meta.env.BASE_URL}Figure_1.png`

  return (
    <section id="framework" className="section-container">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 items-center">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-3"
          >
            Framework Architecture
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading mb-6"
          >
            The{' '}
            <span className="gradient-text">DeDT</span>
            {' '}Architecture
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 leading-relaxed mb-7"
          >
            The proposed DeDT framework is a layered, modular architecture that orchestrates
            blockchain primitives, federated machine learning, and token-based IP management
            into a unified decentralized digital twin platform.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 mb-8"
          >
            {LAYERS.map((layer, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-3 text-sm text-slate-400"
              >
                <FiCheckCircle className="w-4 h-4 text-cyan-brand flex-shrink-0 mt-0.5" />
                {layer}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <a
              href="https://www.sciencedirect.com/science/article/pii/S2772918424000304"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              Read Full Paper <FiExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right: figure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-20 -z-10"
            style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.6), rgba(6,182,212,0.3))' }}
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="cursor-zoom-in"
          >
            <img
              src={imgSrc}
              alt="DeDT Framework Architecture — blockchain-powered digital twin platform layers"
              className="w-full rounded-3xl border border-slate-700/40 shadow-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Caption */}
          <p className="text-center text-xs text-slate-600 mt-3">
            Figure 1 — DeDT Framework Architecture Overview
          </p>
        </motion.div>
      </div>
    </section>
  )
}
