import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
const schools = [
 { n:'01', level:'SEKOLAH DASAR', name:'SDN 0195176 Bukti Rejo', status:'SELESAI', detail:'Langkah pertama di perjalanan sekolah.' },
 { n:'02', level:'SEKOLAH MENENGAH PERTAMA', name:'SMP Swasta Islam BB Ulu', status:'SELESAI', detail:'Belajar hal baru dan tumbuh lebih jauh.' },
 { n:'03', level:'SEKOLAH MENENGAH KEJURUAN', name:'SMK S Teladan Siantar', status:'SAAT INI · KELAS XI TKJ', detail:'Mendalami Teknik Komputer dan Jaringan.' },
]
export function Education() { return <div className="container inner-page"><SectionHeading index="04" eyebrow="EDUCATION / TIMELINE" title={<>Masih di tengah<br/><span className="muted-title">perjalanan.</span></>} description="Tiga tahap sekolah, satu langkah pada satu waktu."/>
 <div className="education-layout"><div className="education-aside"><div className="education-icon"><GraduationCap size={25}/></div><span className="eyebrow-text">LEARNING PATH</span><p>Setiap tempat punya pelajaran sendiri. Sekarang waktunya lanjut bertumbuh.</p><div className="education-aside-line"/><span className="mono-index">2010s — NOW</span></div><div className="timeline">{schools.map((s,i)=><Reveal key={s.n} delay={i*.08} className="timeline-item"><div className="timeline-marker"><span>{s.n}</span></div><div className="timeline-content"><div className="timeline-top"><span className="eyebrow-text">{s.level}</span><span className={`school-status ${i===2?'current':''}`}>{s.status}</span></div><h2>{s.name}</h2><p>{s.detail}</p></div></Reveal>)}</div></div>
 <Reveal className="future-card"><div><span className="eyebrow-text">NEXT CHAPTER</span><h2>Target berikutnya: <em>tentara.</em></h2><p>Terus belajar disiplin dan persiapkan diri.</p></div><div className="future-symbol"><ArrowUpRight size={28}/></div></Reveal>
 </div> }
