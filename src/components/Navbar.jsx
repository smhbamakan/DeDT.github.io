import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Objectives', href: '#objectives' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Framework', href: '#framework' },
  { label: 'Publications', href: '#publications' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/90 backdrop-blur-md border-b border-slate-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
              <span className="text-white font-black text-xs">DT</span>
            </div>
            <span className="font-bold text-lg gradient-text">DeDT</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-electric group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/smhbamakan"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200 text-sm"
            >
              <FiGithub className="w-4 h-4" />
              <span className="hidden md:inline">GitHub</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-navy-900/95 backdrop-blur-md border-b border-slate-800/50"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="py-2.5 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-150 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/smhbamakan"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-2.5 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-150 text-sm font-medium flex items-center gap-2"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
