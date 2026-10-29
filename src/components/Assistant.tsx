import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
type Message = { role: 'user'|'assistant'; content: string }
const greeting = 'Hai! Aku asisten portofolio Ditra. Aku bisa bantu menjelaskan info yang memang tersedia di website ini.'
export function Assistant() {
 const [open,setOpen] = useState(false)
 const [input,setInput] = useState('')
 const [busy,setBusy] = useState(false)
 const [messages,setMessages] = useState<Message[]>([{ role:'assistant', content:greeting }])
 const send = async (value = input) => {
  const prompt = value.trim(); if (!prompt || busy) return
  const next: Message[] = [...messages,{role:'user',content:prompt}]
  setMessages(next); setInput(''); setBusy(true)
  try {
   const response = await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:next.map(m=>({role:m.role,content:m.content}))})})
   const data = await response.json()
   if (!response.ok) throw new Error(data.error || 'Assistant belum tersedia.')
   setMessages([...next,{role:'assistant',content:data.reply}])
  } catch {
   setMessages([...next,{role:'assistant',content:'Maaf, asisten AI belum terhubung. Kamu tetap bisa menjelajahi halaman About, Hobbies, Family, dan Education untuk melihat informasi yang tersedia.'}])
  } finally { setBusy(false) }
 }
 return <><button className="assistant-trigger" onClick={()=>setOpen(!open)} aria-label={open?'Tutup asisten':'Buka asisten'}>{open?<X size={20}/>:<MessageCircle size={20}/>}<span>{open?'Tutup':'Tanya AI'}</span></button><AnimatePresence>{open && <motion.aside className="assistant-panel" initial={{opacity:0,y:12,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:8,scale:.98}} transition={{duration:.2}} aria-label="AI Portfolio Assistant"><div className="assistant-head"><span className="assistant-avatar"><Bot size={18}/></span><div><strong>Portfolio Assistant</strong><small><span className="status-dot"/> Based on Ditra's profile</small></div><button onClick={()=>setOpen(false)} aria-label="Tutup chatbot"><X size={17}/></button></div><div className="assistant-messages" aria-live="polite">{messages.map((m,i)=><div key={i} className={`chat-bubble ${m.role}`}>{m.content}</div>)}{busy&&<div className="chat-bubble assistant typing">Lagi mikir…</div>}</div><div className="assistant-suggestions"><button onClick={()=>send('Apa hobi Ditra?')}>Hobi Ditra</button><button onClick={()=>send('Ceritakan pendidikan Ditra')}>Pendidikan</button></div><form className="assistant-form" onSubmit={e=>{e.preventDefault();void send()}}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Tanya sesuatu…" aria-label="Pesan untuk asisten" maxLength={500}/><button disabled={busy||!input.trim()} aria-label="Kirim pesan"><Send size={17}/></button></form><p className="assistant-disclaimer">Asisten, bukan Ditra. Jawaban dibatasi pada info yang tersedia.</p></motion.aside>}</AnimatePresence></>
}
