import { ArrowUpRight, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Lightbox } from '../components/Lightbox'
const hobbies = [
 { n:'01', title:'Mancing', note:'Biar santai, sekalian cari strike.', image:'/images/mancing.jpg', alt:'Meme mancing yang disertakan dalam aset', kind:'OUTDOOR / SLOW TIME' },
 { n:'02', title:'Turu', note:'Kadang istirahat adalah agenda utama.', image:'/images/turu.jpg', alt:'Gambar hamster sedang tidur', kind:'REST / RECHARGE' },
 { n:'03', title:'Nonton kartun', note:'Hiburan simpel yang nggak pernah gagal.', image:'/images/nonton-kartun.jpg', alt:'Layar pilihan kartun', kind:'WATCH / UNWIND' },
]
export function Hobbies() {
 const [active, setActive] = useState<number | null>(null)
 return <div className="container inner-page"><SectionHeading index="02" eyebrow="OFF THE CLOCK" title={<>Waktu luang,<br/><span className="muted-title">cara gue recharge.</span></>} description="Tiga hal sederhana yang sering gue lakuin di luar sekolah."/>
 <div className="hobby-grid">{hobbies.map((h,i)=><Reveal key={h.n} delay={i*.08} className={`hobby-item hobby-item-${i+1}`}><button className="hobby-image-button" onClick={()=>setActive(i)} aria-label={`Perbesar foto ${h.title}`}><img src={h.image} alt={h.alt}/><span className="image-expand"><Maximize2 size={15}/></span><span className="hobby-index">{h.n}</span></button><div className="hobby-meta"><span className="eyebrow-text">{h.kind}</span><span className="hobby-title-arrow"><ArrowUpRight size={16}/></span></div><h2>{h.title}</h2><p>{h.note}</p></Reveal>)}</div>
 <div className="hobby-foot"><span className="mono-index">NO. 02 — 04</span><p>Nggak semua hal harus produktif. Kadang cukup bikin kepala lebih adem.</p></div>
 {active !== null && <Lightbox images={[{ src:hobbies[active].image, alt:hobbies[active].alt, caption:hobbies[active].title }]} index={0} onClose={()=>setActive(null)} onChange={()=>{}}/>}
 </div>
}
