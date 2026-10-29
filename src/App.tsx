import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Welcome } from './components/Welcome'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Hobbies } from './pages/Hobbies'
import { Family } from './pages/Family'
import { Education } from './pages/Education'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { Assistant } from './components/Assistant'

export type Theme = 'dark' | 'light'
export const navItems = [
  { label: 'Home', path: '/' }, { label: 'About', path: '/about' },
  { label: 'Hobbies', path: '/hobbies' }, { label: 'Family', path: '/family' },
  { label: 'Education', path: '/education' }, { label: 'Contact', path: '/contact' },
]

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('ditra-theme') as Theme) || 'dark')
  const [accent, setAccent] = useState(() => localStorage.getItem('ditra-accent') || '#7d9cff')
  const [welcome, setWelcome] = useState(() => sessionStorage.getItem('ditra-welcomed') !== 'yes')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.setProperty('--accent', accent)
    localStorage.setItem('ditra-theme', theme)
    localStorage.setItem('ditra-accent', accent)
  }, [theme, accent])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const pages: Record<string, { title: string; description: string }> = {
      '/': { title: 'Ditra Khairunnufus — Portfolio', description: 'Portofolio pribadi Ditra Khairunnufus, siswa XI TKJ yang suka mancing, nonton kartun, dan punya cita-cita menjadi tentara.' },
      '/about': { title: 'About — Ditra Khairunnufus', description: 'Kenalan dengan Ditra Khairunnufus, siswa kelas XI TKJ di SMK S Teladan Siantar.' },
      '/hobbies': { title: 'Hobbies — Ditra Khairunnufus', description: 'Mancing, turu, dan nonton kartun — hal sederhana yang disukai Ditra.' },
      '/family': { title: 'Family — Ditra Khairunnufus', description: 'Galeri keluarga Ditra Khairunnufus.' },
      '/education': { title: 'Education — Ditra Khairunnufus', description: 'Riwayat pendidikan Ditra Khairunnufus.' },
      '/contact': { title: 'Contact — Ditra Khairunnufus', description: 'Hubungi Ditra Khairunnufus melalui WhatsApp.' },
    }
    const meta = pages[location.pathname] || { title: '404 — Ditra Khairunnufus', description: 'Halaman tidak ditemukan.' }
    document.title = meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', meta.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', meta.description)
  }, [location.pathname])
  const dismissWelcome = () => { sessionStorage.setItem('ditra-welcomed', 'yes'); setWelcome(false) }

  return <>
    <div className="ambient-grid" aria-hidden="true"><span className="cell cell-one"/><span className="cell cell-two"/><span className="cell cell-three"/><span className="cell cell-four"/><span className="cell cell-five"/></div>
    <Layout theme={theme} setTheme={setTheme} accent={accent} setAccent={setAccent}>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="page-shell" initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }} transition={{ duration: 0.28, ease: 'easeOut' }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
            <Route path="/hobbies" element={<Hobbies />} /><Route path="/family" element={<Family />} />
            <Route path="/education" element={<Education />} /><Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
    <Assistant />
    <AnimatePresence>{welcome && <Welcome onClose={dismissWelcome} />}</AnimatePresence>
  </>
}
