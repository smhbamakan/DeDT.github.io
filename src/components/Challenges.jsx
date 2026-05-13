import { motion } from 'framer-motion'
import { FiDatabase, FiLock, FiDollarSign, FiShield, FiUsers } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const CHALLENGES = [
  {
    num: '01',
    icon: FiDatabase,
    title: 'Managing Big Data Flows',
    text: 'Digital twins continuously generate massive, high-velocity data streams from IoT sensors, simulations, and telemetry. Traditional centralized pipelines struggle with throughput, latency, and consistency at scale.',
    accent: '#3B82F6',
  },
  {
    num: '02',
    icon: FiLock,
    title: 'Protecting IP & Commercial Information',
    text: 'Proprietary models, simulation logic, and operational data embedded in digital twins represent significant intellectual assets. Without cryptographic provenance, ownership and licensing remain opaque.',
    accent: '#06B6D4',
  },
  {
    num: '03',
    icon: FiDollarSign,
    title: 'Fundraising for DT Projects',
    text: 'Developing high-fidelity digital twins demands substantial R&D investment. Conventional funding mechanisms are ill-suited for open, distributed DT ecosystems lacking centralized accountability structures.',
    accent: '#8B5CF6',
  },
  {
    num: '04',
    icon: FiShield,
    title: 'Security and Privacy Concerns',
    text: 'Sensitive operational data — from healthcare systems to critical infrastructure — requires end-to-end confidentiality. Current DT architectures frequently expose data to untrusted intermediaries.',
    accent: '#10B981',
  },
  {
    num: '05',
    icon: FiUsers,
    title: 'Decentralized Collaboration Platforms',
    text: 'Multi-stakeholder DT projects spanning organizations and geographies lack neutral collaboration infrastructure. Centralized platforms introduce single points of failure, vendor lock-in, and governance disputes.',
    accent: '#F59E0B',
  },
]

export default function Challenges() {
  return (
    <section id="challenges" className="section-container">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          Existing Challenges
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading"
        >
          Why Traditional Digital Twins{' '}
          <span className="gradient-text">Fall Short</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 mt-4 max-w-2xl mx-auto"
        >
          Five critical barriers that limit the full potential of digital twin systems
          in real-world multi-party deployments.
        </motion.p>
      </div>

      {/* Cards grid — 3 cols, last 2 centered */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHALLENGES.map((ch, i) => {
          const Icon = ch.icon
          const isLast = i === CHALLENGES.length - 1
          return (
            <motion.div
              key={ch.num}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass-card rounded-3xl p-7 relative overflow-hidden cursor-default ${
                isLast ? 'sm:col-start-1 lg:col-start-auto sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0' : ''
              }`}
            >
              {/* Decorative number */}
              <span
                className="absolute top-4 right-5 text-6xl font-black leading-none select-none"
                style={{ color: ch.accent, opacity: 0.08 }}
              >
                {ch.num}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${ch.accent}15`, border: `1px solid ${ch.accent}25` }}
              >
                <Icon className="w-5 h-5" style={{ color: ch.accent }} />
              </div>

              <h3 className="text-base font-bold text-slate-100 mb-3">{ch.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{ch.text}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
