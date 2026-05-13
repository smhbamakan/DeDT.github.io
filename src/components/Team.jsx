import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'

const INTERESTS = [
  'Blockchain', 'Digital Twins', 'Federated Learning',
  'IP-NFTs', 'Web3', 'DeSci', 'Smart Contracts', 'Trustworthy AI',
]

export default function Team() {
  return (
    <section id="team" className="section-container">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          Research Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading"
        >
          Principal{' '}
          <span className="gradient-text">Investigator</span>
        </motion.h2>
      </div>

      {/* PI Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass-card rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto text-center"
      >
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)',
              }}
            >
              SMH
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-navy-900" />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold text-slate-100 mb-1">
          Dr. Seyed Mojtaba Hosseini Bamakan
        </h3>

        {/* Title badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          <span className="tag-pill">Principal Investigator</span>
          <span className="tag-pill" style={{ color: '#22D3EE', borderColor: 'rgba(6,182,212,0.3)', background: 'rgba(6,182,212,0.08)' }}>
            MSCA Fellow
          </span>
        </div>

        {/* Affiliation */}
        <p className="text-slate-400 text-sm mb-1">
          Senior Researcher, Department of Business Management
        </p>
        <p className="text-slate-500 text-sm mb-6">
          Masaryk University, Faculty of Economics and Administration, Brno, Czech Republic
        </p>

        {/* Divider */}
        <div className="section-divider max-w-xs mx-auto mb-6" />

        {/* Research interests */}
        <div className="mb-8">
          <p className="text-xs text-slate-600 uppercase tracking-widest mb-3">Research Interests</p>
          <div className="flex flex-wrap justify-center gap-2">
            {INTERESTS.map((interest) => (
              <span key={interest} className="tag-pill text-xs">{interest}</span>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/smhbamakan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm gap-2"
          >
            <FiGithub className="w-4 h-4" />
            GitHub Profile
          </a>
          <a
            href="https://scholar.google.com/citations?user=YqXUN0AAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm gap-2"
          >
            <SiGooglescholar className="w-4 h-4" />
            Google Scholar
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
