import Groq from 'groq-sdk'

const PROFILE = `Informasi yang sudah dikonfirmasi tentang pemilik portofolio:
- Nama: Ditra Khairunnufus.
- Kelas: XI TKJ di SMK S Teladan Siantar.
- Hobi: mancing, turu/istirahat, dan nonton kartun.
- Keluarga: ayah, ibu, kakak, dan Ditra.
- Pendidikan: SDN 0195176 Bukti Rejo; SMP Swasta Islam BB Ulu; SMK S Teladan Siantar (saat ini kelas XI TKJ).
- Cita-cita: tentara.
- Kontak WhatsApp disediakan pada halaman Contact.
Jangan mengarang informasi lain, proyek, prestasi, umur, alamat, atau detail pribadi yang tidak ada di data ini. Jika tidak tahu, katakan dengan jujur. Kamu adalah asisten portofolio, bukan Ditra; jangan mengaku sebagai Ditra atau menulis seolah-olah kamu adalah dia. Jawab singkat, santai, natural dalam bahasa Indonesia.`

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.GROQ_API_KEY) return res.status(503).json({ error: 'GROQ_API_KEY belum diatur di environment Vercel.' })
  const messages = req.body?.messages
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20) return res.status(400).json({ error: 'Format pesan tidak valid.' })
  const safeMessages = messages.filter(m => ['user', 'assistant'].includes(m?.role) && typeof m?.content === 'string').map(m => ({ role: m.role, content: m.content.slice(0, 1200) }))
  if (!safeMessages.length) return res.status(400).json({ error: 'Pesan kosong.' })
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
    const completion = await groq.chat.completions.create({
      // GPT-OSS model is selected in source, not an environment variable.
      model: 'openai/gpt-oss-20b',
      messages: [{ role: 'system', content: PROFILE }, ...safeMessages],
      temperature: 0.4,
      max_tokens: 450,
    })
    return res.status(200).json({ reply: completion.choices[0]?.message?.content || 'Aku belum bisa menemukan jawaban untuk itu.' })
  } catch (error) {
    console.error('Groq assistant error:', error?.message || error)
    return res.status(502).json({ error: 'Asisten sedang mengalami gangguan. Coba lagi sebentar.' })
  }
}
