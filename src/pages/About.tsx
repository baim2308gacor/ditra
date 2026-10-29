import { ArrowUpRight, Compass, Heart, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
export function About() {
 return <div className="container inner-page"><SectionHeading index="01" eyebrow="ABOUT ME" title={<>Bukan cuma<br/><span className="muted-title">nama di layar.</span></>} description="Sedikit kenalan sama orang di balik halaman ini."/>
  <div className="about-layout"><Reveal className="about-image-wrap"><img src="/images/dirta-keluarga.jpg" alt="Ditra menikmati pemandangan danau"/><span className="image-stamp">DITRA<br/>KH.</span><span className="image-bottom-label">PERSONAL / 2026</span></Reveal><Reveal className="about-copy" delay={.08}><span className="eyebrow-text">HELLO, I'M DITRA</span><h2>Masih belajar.<br/>Masih banyak mau.</h2><p>Gue Ditra Khairunnufus, siswa kelas XI TKJ di SMK S Teladan Siantar. Sekarang fokus belajar dan nyiapin diri buat langkah berikutnya.</p><p>Gue punya cita-cita jadi tentara. Bukan jalan yang instan, jadi gue pengin terus belajar disiplin dan memperbaiki diri.</p><div className="about-traits"><div><Compass size={18}/><span><strong>Terus belajar</strong><small>Pelan, tapi jalan.</small></span></div><div><Heart size={18}/><span><strong>Keluarga dulu</strong><small>Support paling dekat.</small></span></div><div><Target size={18}/><span><strong>Punya tujuan</strong><small>Menuju cita-cita.</small></span></div></div><Link to="/education" className="underlined-link">Perjalanan pendidikan <ArrowUpRight size={15}/></Link></Reveal></div>
  <div className="about-bottom-note"><span className="mono-index">NOTE / 001</span><p>“Nggak harus langsung sampai. Yang penting jangan berhenti jalan.”</p></div>
 </div>
}
