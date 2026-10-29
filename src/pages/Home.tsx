import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
const img = '/images/dirta-main.jpg'
export function Home() {
  return <div className="container home-page">
    <section className="hero-grid">
      <div className="hero-copy">
        <Reveal><div className="eyebrow"><span className="status-dot"/> SISWA XI TKJ · SMK S TELADAN</div></Reveal>
        <Reveal delay={.08}><h1 className="hero-title">Ditra<br/><span>Khairunnufus</span><i className="title-period">.</i></h1></Reveal>
        <Reveal delay={.16}><p className="hero-description">Lagi belajar, banyak penasaran, dan pelan-pelan nyiapin masa depan.</p></Reveal>
        <Reveal delay={.22}><div className="hero-actions"><Link to="/about" className="button button-primary">Kenal lebih dekat <MoveUpRight size={16}/></Link><Link to="/family" className="text-link">Lihat keluarga <ArrowUpRight size={15}/></Link></div></Reveal>
        <Reveal delay={.3}><div className="hero-bottom-note"><span className="note-line"/><span>SEDANG TUMBUH, MASIH BERPROSES.</span></div></Reveal>
      </div>
      <Reveal className="hero-visual" delay={.12}><div className="hero-photo-frame"><div className="photo-topline"><span>DITRA / 001</span><span>PERSONAL ARCHIVE</span></div><img src={img} alt="Ditra berdiri di tepi danau" className="hero-photo"/><div className="photo-caption"><div><span className="caption-label">ON MY WAY</span><p>One step at a time.</p></div><span className="photo-number">01</span></div><span className="photo-ring" aria-hidden="true"/></div><div className="hero-floating-tag"><span className="tag-dot"/> Based in Indonesia</div></Reveal>
    </section>
    <section className="home-lower-grid">
      <Reveal className="mini-intro"><span className="eyebrow-text">SEDIKIT TENTANG GUE</span><p>Di luar sekolah, biasanya gue mancing, nonton kartun, atau ya… <em>turu.</em></p><Link to="/hobbies" className="underlined-link">Lihat hal yang gue suka <ArrowDownRight size={15}/></Link></Reveal>
      <Reveal className="quick-facts" delay={.1}><div className="fact-cell"><span className="fact-number">01</span><span className="fact-label">NOW</span><strong>XI TKJ</strong><small>SMK S Teladan</small></div><div className="fact-cell"><span className="fact-number">02</span><span className="fact-label">DREAM</span><strong>Tentara</strong><small>Tujuan masa depan</small></div><div className="fact-cell"><span className="fact-number">03</span><span className="fact-label">MY PEOPLE</span><strong>Keluarga</strong><small>Tempat pulang</small></div></Reveal>
    </section>
    <Reveal className="home-family-banner"><div className="banner-copy"><span className="eyebrow-text">YANG PALING DEKAT</span><h2>Semua cerita<br/>punya rumah.</h2><Link to="/family" className="circle-arrow" aria-label="Buka halaman keluarga"><ArrowUpRight size={21}/></Link></div><div className="banner-photo banner-photo-one"><img src="/images/ortu-keluarga.jpg" alt="Foto keluarga"/></div><div className="banner-photo banner-photo-two"><img src="/images/kakak-keluarga.jpg" alt="Foto kakak"/></div><span className="banner-side-label">FAMILY / ARCHIVE</span></Reveal>
  </div>
}
