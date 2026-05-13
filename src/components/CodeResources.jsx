import { motion } from 'framer-motion'
import { FiGithub, FiGlobe, FiBook, FiDatabase, FiArrowUpRight } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const RESOURCES = [
  {
    icon: FiGithub,
    title: 'Source Code',
    description: 'Explore the full DeDT platform implementation, smart contracts, and protocol modules on GitHub.',
    link: 'https://github.com/smhbamakan',
    linkLabel: 'View on GitHub',
    accent: '#3B82F6',
  },
  {
    icon: FiGlobe,
    title: 'Project Website',
    description: 'The official DeDT research project website with updates, announcements, and results.',
    link: 'https://smhbamakan.github.io/DeDT.github.io/',
    linkLabel: 'Visit Site',
    accent: '#06B6D4',
  },
  {
    icon: FiBook,
    title: 'Documentation',
    description: 'Technical documentation covering the architecture, API references, and deployment guides.',
    link: 'https://github.com/smhbamakan',
    linkLabel: 'Read Docs',
    accent: '#8B5CF6',
  },
  {
    icon: FiDatabase,
    title: 'Research Data',
    description: 'Datasets, experimental results, and benchmarks used in the DeDT research evaluation.',
    link: 'https://www.sciencedirect.com/science/article/pii/S2772918424000304',
    linkLabel: 'Access Data',
    accent: '#10B981',
  },
]

export default function CodeResources() {
  return (
    <section id="resources" className="section-container">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          Project Code & Resources
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading"
        >
          Open{' '}
          <span className="gradient-text">Research & Code</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 mt-4 max-w-xl mx-auto"
        >
          All project artifacts, source code, and research data are being made available
          to the research community progressively.
        </motion.p>
      </div>

      {/* Resource cards */}
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {RESOURCES.map((res, i) => {
          const Icon = res.icon
          return (
            <motion.a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 flex gap-4 items-start group cursor-pointer"
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${res.accent}15`, border: `1px solid ${res.accent}25` }}
              >
                <Icon className="w-5 h-5" style={{ color: res.accent }} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-semibold text-slate-100 text-base">{res.title}</h3>
                  <FiArrowUpRight
                    className="w-4 h-4 text-slate-500 group-hover:text-electric-light transition-colors flex-shrink-0"
                  />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{res.description}</p>
                <span
                  className="text-xs font-medium"
                  style={{ color: res.accent }}
                >
                  {res.linkLabel} →
                </span>
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
