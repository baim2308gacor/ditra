import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
export type GalleryImage = { src: string; alt: string; caption: string }
export function Lightbox({ images, index, onClose, onChange }: { images: GalleryImage[]; index: number; onClose: () => void; onChange: (i: number) => void }) {
 const item = images[index]
 if (!item) return null
 return <AnimatePresence><motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeri foto" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={onClose}><button className="lightbox-close" onClick={onClose} aria-label="Tutup galeri"><X/></button><motion.figure initial={{ scale:.96, y:12 }} animate={{ scale:1, y:0 }} exit={{ scale:.97 }} onClick={e=>e.stopPropagation()}><img src={item.src} alt={item.alt}/><figcaption>{item.caption}</figcaption>{images.length>1 && <div className="lightbox-controls"><button onClick={()=>onChange((index-1+images.length)%images.length)}>Sebelumnya</button><span>{String(index+1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}</span><button onClick={()=>onChange((index+1)%images.length)}>Berikutnya</button></div>}</motion.figure></motion.div></AnimatePresence>
}
