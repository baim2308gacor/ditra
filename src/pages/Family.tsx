import { useState } from 'react'
import { ArrowUpRight, Heart, Maximize2 } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Lightbox, type GalleryImage } from '../components/Lightbox'
const family: GalleryImage[] = [
 { src:'/images/ortu-keluarga.jpg', alt:'Foto bersama orang tua di tepi danau', caption:'Ayah & Ibu' },
 { src:'/images/kakak-keluarga.jpg', alt:'Foto kakak', caption:'Kakak' },
 { src:'/images/dirta-keluarga.jpg', alt:'Foto Ditra di tepi danau', caption:'Ditra' },
]
export function Family() {
 const [active, setActive] = useState<number | null>(null)
 return <div className="family-page"><div className="container family-container"><SectionHeading index="03" eyebrow="MY PEOPLE · FAMILY ARCHIVE" title={<>Tempat pulang,<br/><span className="muted-title">dalam satu frame.</span></>} description="Ayah, Ibu, Kakak, dan gue. Nggak harus sempurna untuk jadi berarti."/>
  <Reveal className="family-stage"><div className="family-stage-backdrop"/><div className="family-stage-grid" aria-hidden="true"/><div className="family-stage-label label-left">THE PEOPLE<br/>BEHIND MY STORY</div><div className="family-stage-label label-right">ARCHIVE / 003</div>
   <button className="family-photo family-photo-main" onClick={()=>setActive(0)} aria-label="Perbesar foto ayah dan ibu"><img src={family[0].src} alt={family[0].alt}/><span className="family-photo-label"><span>01 / PARENTS</span><Maximize2 size={14}/></span></button>
   <button className="family-photo family-photo-sibling" onClick={()=>setActive(1)} aria-label="Perbesar foto kakak"><img src={family[1].src} alt={family[1].alt}/><span className="family-photo-label"><span>02 / SIBLING</span><Maximize2 size={14}/></span></button>
   <button className="family-photo family-photo-me" onClick={()=>setActive(2)} aria-label="Perbesar foto Ditra"><img src={family[2].src} alt={family[2].alt}/><span className="family-photo-label"><span>03 / ME</span><Maximize2 size={14}/></span></button>
   <div className="family-orbit orbit-one"/><div className="family-orbit orbit-two"/><div className="family-center-note"><Heart size={15}/><span>MY HOME BASE</span></div>
  </Reveal>
  <div className="family-caption-row"><Reveal><span className="eyebrow-text">ORANG-ORANG TERDEKAT</span><h2>Foto boleh beda.<br/><em>Cerita tetap satu.</em></h2></Reveal><Reveal delay={.1} className="family-caption-side"><p>Beberapa momen bareng keluarga yang pengin gue simpan di sini. Sisanya biar foto yang cerita.</p><button className="underlined-link" onClick={()=>setActive(0)}>Buka galeri keluarga <ArrowUpRight size={15}/></button></Reveal></div>
  <div className="family-strip">{family.map((f,i)=><button key={f.src} className="family-strip-item" onClick={()=>setActive(i)}><img src={f.src} alt={f.alt}/><span><small>0{i+1}</small>{f.caption}</span><ArrowUpRight size={15}/></button>)}</div>
 </div>{active !== null && <Lightbox images={family} index={active} onClose={()=>setActive(null)} onChange={setActive}/>}</div>
}
