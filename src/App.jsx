import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Objectives from './components/Objectives.jsx'
import Challenges from './components/Challenges.jsx'
import Framework from './components/Framework.jsx'
import Publications from './components/Publications.jsx'
import CodeResources from './components/CodeResources.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Objectives />
        <div className="section-divider" />
        <Challenges />
        <div className="section-divider" />
        <Framework />
        <div className="section-divider" />
        <Publications />
        <div className="section-divider" />
        <CodeResources />
        <div className="section-divider" />
        <Team />
        <div className="section-divider" />
        <Contact />
      </main>
      <footer className="text-center py-8 px-4 text-slate-600 text-sm border-t border-slate-800/50">
        <p>
          DeDT Research Project &copy; 2024&ndash;2026 &middot;{' '}
          <span className="text-slate-500">Masaryk University, Czech Republic</span>
          {' '}&middot;{' '}
          <span className="text-slate-500">Dr. Seyed Mojtaba Hosseini Bamakan</span>
        </p>
        <p className="mt-1 text-slate-700">
          Funded under the Marie Skłodowska-Curie Actions (MSCA) Fellowship Programme
        </p>
      </footer>
    </div>
  )
}
