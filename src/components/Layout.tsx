import { type CSSProperties, type ReactNode, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Sun, X, Palette } from 'lucide-react'
import type { Theme } from '../App'
import { navItems } from '../App'

const accents = [
  { label: 'Periwinkle', value: '#7d9cff' }, { label: 'Lilac', value: '#b5a0ff' },
  { label: 'Coral', value: '#ff8179' }, { label: 'Mint', value: '#76d8b0' },
]
export function Layout({ children, theme, setTheme, accent, setAccent }: { children: ReactNode; theme: Theme; setTheme: (t: Theme) => void; accent: string; setAccent: (a: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  return <>
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Ditra — home"><span className="brand-mark">D.</span><span className="brand-name">ditra<span>khairunnufus</span></span></Link>
      <nav className={`main-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map(item => <NavLink key={item.path} to={item.path} end={item.path === '/'} onClick={() => setMobileOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{item.label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <div className="palette-wrap">
          <button className="icon-button" aria-label="Pilih warna aksen" aria-expanded={paletteOpen} onClick={() => setPaletteOpen(!paletteOpen)}><Palette size={17}/></button>
          {paletteOpen && <div className="palette-popover" role="group" aria-label="Warna aksen">{accents.map(a => <button key={a.value} title={a.label} aria-label={a.label} className={`swatch ${accent === a.value ? 'selected' : ''}`} style={{ '--swatch': a.value } as CSSProperties} onClick={() => { setAccent(a.value); setPaletteOpen(false) }}/>)}</div>}
        </div>
        <button className="icon-button" aria-label={theme === 'dark' ? 'Aktifkan light mode' : 'Aktifkan dark mode'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <button className="icon-button menu-toggle" aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
    </header>
    {mobileOpen && <button className="mobile-scrim" aria-label="Tutup menu" onClick={() => setMobileOpen(false)}/>}
    <main id="main-content">{children}</main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Ditra Khairunnufus</span><span className="footer-right"><span className="status-dot"/> Personal portfolio <span className="footer-divider">/</span> Indonesia</span></footer>
  </>
}
