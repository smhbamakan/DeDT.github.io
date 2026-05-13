import { motion } from 'framer-motion'
import { FiExternalLink, FiFileText, FiBookOpen } from 'react-icons/fi'

const PAPER = {
  title: 'DeDTs: A Decentralized Digital Twins Platform Based on Blockchain Technology and Web3',
  authors: 'Seyed Mojtaba Hosseini Bamakan, et al.',
  journal: 'Blockchain: Research and Applications',
  publisher: 'Elsevier',
  year: '2024',
  issn: '2772-9184',
  doi: 'S2772918424000304',
  url: 'https://www.sciencedirect.com/science/article/pii/S2772918424000304',
  abstract:
    'This paper proposes a comprehensive decentralized digital twin (DeDT) platform powered by blockchain and Web3 technologies. The framework addresses critical challenges in digital twin ecosystems including data integrity, IP protection, decentralized fundraising via IP-NFTs, and trustworthy collaborative analytics. A layered architecture integrating smart contracts, federated learning, and DAO governance is presented and evaluated.',
  tags: ['Blockchain', 'Digital Twins', 'Web3', 'Federated Learning', 'IP-NFT', 'DAO'],
}

export default function Publications() {
  return (
    <section id="publications" className="section-container">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          Research Outputs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading"
        >
          Publications &{' '}
          <span className="gradient-text">Research Papers</span>
        </motion.h2>
      </div>

      {/* Paper card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="glass-card rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto"
      >
        {/* Journal badge row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric/10 border border-electric/20 text-electric-light">
            <FiBookOpen className="w-3 h-3" />
            {PAPER.journal}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
            {PAPER.publisher}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-brand/10 text-cyan-light border border-cyan-brand/20">
            {PAPER.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 leading-snug">
          {PAPER.title}
        </h3>

        {/* Authors */}
        <p className="text-slate-400 text-sm mb-5">
          <span className="text-slate-300 font-medium">{PAPER.authors}</span>
          {' '}·{' '}ISSN {PAPER.issn}
        </p>

        {/* Abstract */}
        <div className="border-l-2 border-electric/30 pl-4 mb-6">
          <p className="text-slate-400 text-sm leading-relaxed italic">{PAPER.abstract}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PAPER.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={PAPER.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm justify-center sm:justify-start"
          >
            <FiExternalLink className="w-4 h-4" />
            View on ScienceDirect
          </a>
          <a
            href={PAPER.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm justify-center sm:justify-start"
          >
            <FiFileText className="w-4 h-4" />
            Access Full Paper
          </a>
        </div>
      </motion.div>

      {/* More papers note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-slate-600 text-sm mt-8"
      >
        Additional publications and preprints will be listed here as the project progresses.
      </motion.p>
    </section>
  )
}
