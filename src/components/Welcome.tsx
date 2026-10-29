import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
export function Welcome({ onClose }: { onClose: () => void }) {
  return <motion.div className="welcome-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .35 } }}>
    <div className="welcome-orbit orbit-a"/><div className="welcome-orbit orbit-b"/>
    <motion.div className="welcome-content" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .12, duration: .5 }}>
      <div className="eyebrow"><span className="status-dot"/> PERSONAL SPACE · 2026</div>
      <div className="welcome-monogram">D<span>.</span></div>
      <p className="welcome-kicker">A LITTLE INTRODUCTION</p>
      <h1>Halo, gue <em>Ditra.</em></h1>
      <p className="welcome-copy">Senang mampir. Kenalan, yuk.</p>
      <button className="button button-primary welcome-button" onClick={onClose}>Masuk ke website <ArrowUpRight size={16}/></button>
      <button className="welcome-skip" onClick={onClose}>Lewati intro</button>
    </motion.div>
    <span className="welcome-index">01 — 06</span><span className="welcome-footnote">SCROLL LESS. KNOW MORE.</span>
  </motion.div>
}
