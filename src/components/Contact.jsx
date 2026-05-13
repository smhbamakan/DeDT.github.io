import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiExternalLink } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative glass-card rounded-3xl overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.5) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.4) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 px-8 sm:px-14 py-14 sm:py-16 text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-3"
          >
            Get in Touch
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading mb-4"
          >
            Collaborate or{' '}
            <span className="gradient-text">Reach Out</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We welcome research collaborations, industry partnerships, and academic inquiries
            related to blockchain-powered digital twins, decentralized AI, and Web3 infrastructure.
            Reach out through any of the channels below — we aim to respond within 48 hours.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://github.com/smhbamakan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto justify-center"
            >
              <FiGithub className="w-5 h-5" />
              GitHub
              <FiExternalLink className="w-4 h-4 opacity-60" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=YqXUN0AAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <SiGooglescholar className="w-5 h-5" />
              Google Scholar
              <FiExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              {
                icon: FiMail,
                label: 'Research Inquiries',
                value: 'Academic & scientific collaboration',
              },
              {
                icon: FiGithub,
                label: 'Code & Issues',
                value: 'github.com/smhbamakan',
              },
              {
                icon: SiGooglescholar,
                label: 'Publications',
                value: 'Google Scholar profile',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Icon className="w-5 h-5 text-electric-light mx-auto mb-2" />
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <p className="text-sm text-slate-300 font-medium">{item.value}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
