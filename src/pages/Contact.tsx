import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
const phone = '+6285376854176'
export function Contact() {
 const [copied,setCopied] = useState(false)
 const copy = async () => { try { await navigator.clipboard.writeText(phone); setCopied(true); window.setTimeout(()=>setCopied(false),1800) } catch { window.open(`https://wa.me/${phone.replace('+','')}`,'_blank','noopener,noreferrer') } }
 return <div className="container inner-page contact-page"><SectionHeading index="05" eyebrow="CONTACT / SAY HELLO" title={<>Ada yang mau<br/><span className="muted-title">diobrolin?</span></>} description="Paling gampang, tinggal kirim pesan."/>
 <div className="contact-layout"><Reveal className="contact-primary"><div className="contact-primary-top"><span className="eyebrow-text">OPEN TO A CHAT</span><div className="contact-live"><span className="status-dot"/> AVAILABLE</div></div><div className="contact-whatsapp-icon"><FontAwesomeIcon icon={faWhatsapp}/></div><h2>Chat lewat<br/>WhatsApp.</h2><p>Kalau mau menghubungi gue, langsung aja lewat WhatsApp.</p><a className="button button-primary" href={`https://wa.me/${phone.replace('+','')}`} target="_blank" rel="noreferrer">Kirim pesan <ArrowUpRight size={16}/></a><div className="contact-phone-row"><span>{phone}</span><button onClick={copy} className="copy-button" aria-label="Salin nomor WhatsApp">{copied?<Check size={16}/>:<Copy size={16}/>}<span>{copied?'Tersalin':'Salin'}</span></button></div></Reveal>
 <div className="contact-secondary"><Reveal className="social-row"><span className="social-icon instagram"><FontAwesomeIcon icon={faInstagram}/></span><div><span className="eyebrow-text">INSTAGRAM</span><h3>Belum ditambahkan</h3><p>Username Instagram bisa diisi nanti.</p></div><span className="social-muted"><ArrowUpRight size={18}/></span></Reveal><Reveal className="social-row" delay={.08}><span className="social-icon"><Mail size={21}/></span><div><span className="eyebrow-text">EMAIL</span><h3>Belum tersedia</h3><p>Belum ada alamat email publik.</p></div><span className="social-muted"><MessageCircle size={18}/></span></Reveal><Reveal className="contact-note" delay={.14}><span className="eyebrow-text">GOOD TO KNOW</span><p>Untuk sekarang, WhatsApp jadi jalur kontak utama.</p></Reveal></div></div>
 </div>
}
