import { useState } from 'react'
import { ChevronRight, Mail, MapPin } from 'lucide-react'

export function Admissions() {
  const [open, setOpen] = useState(false)
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function submitInquiry(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ contact, message }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      setContact('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="admission-2026-content">
      <header className="admission-identity"><img src="/admission-lyre.png" alt="" width="104" height="120" /><div><p>Миколаївський ліцей<br />імені Миколи Аркаса</p><span>Традиції · Знання · Велике майбутнє</span></div></header>
      <div className="admission-stage">
        <div className="admission-headline"><h2>Вступ<strong>2026–2027</strong></h2><p>Тут починаються<br />більші можливості <i /></p></div>
        <img className="admission-2026-art" src="/admission-gold-a.png" alt="" width="1024" height="1536" />
        <p className="admission-generation">Аркас<br />об’єднує<br />покоління<span /></p>
      </div>
      <div className="admission-2026-cards">
        {([
          ['book', '5 класи', 'Англійська та французька або німецька'],
          ['cap', '10 класи', 'Українська філологія · Іноземна філологія · Історико-правовий профіль'],
          ['people', '6–11 класи', 'На вільні місця'],
        ] as const).map(([icon, title, copy]) => (
          <button key={icon} onClick={() => setOpen(true)} aria-controls="admission-documents" className="admission-card">
            <img src={`/admission-${icon}.png`} alt="" width="76" height="76" />
            <span><strong>{title}</strong><i /><span>{copy}</span></span>
            <ChevronRight className="card-chevron" aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="admission-actions">
        <p className="admission-location"><MapPin aria-hidden="true" /><b>Очне навчання</b><span>вул. Вадима Благовісного, 6</span></p>
        <button className="admission-gold-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="admission-documents">Перелік документів <ChevronRight aria-hidden="true" /></button>
        <a className="admission-question" href="mailto:arkasgymn1@ukr.net?subject=Вступ%202026–2027">Поставити запитання</a>
        <a className="admission-email" href="mailto:arkasgymn1@ukr.net"><Mail aria-hidden="true" />arkasgymn1@ukr.net</a>
      </div>
      <div id="admission-documents" className="admission-documents" hidden={!open}>
        <h3>Документи та умови вступу</h3>
        <ul><li>Заява про вступ — у паперовій або електронній формі.</li><li>Документ про освіту: свідоцтво або табель.</li></ul>
        <p>Заяви та запитання: <a href="mailto:arkasgymn1@ukr.net">arkasgymn1@ukr.net</a>.</p>
        <p>Напрями, адреса навчання та початковий перелік документів наведені за попереднім оголошенням ліцею. Наявність місць, строки та остаточні умови на 2026–2027 рік уточнюйте в адміністрації.</p>
        <form className="admission-inquiry-form" onSubmit={submitInquiry}>
          <h4>Або залиште запитання тут</h4>
          <input type="text" placeholder="Телефон або email для відповіді" value={contact} onChange={e => setContact(e.target.value)} required maxLength={150} />
          <textarea placeholder="Ваше запитання" value={message} onChange={e => setMessage(e.target.value)} required minLength={5} maxLength={3000} rows={3} />
          <button type="submit" className="admission-gold-button" disabled={status === 'sending'}>{status === 'sending' ? 'Надсилаємо…' : 'Надіслати'}</button>
          {status === 'sent' && <p className="admission-inquiry-status">Дякуємо, ми отримали запитання і зв’яжемось з вами.</p>}
          {status === 'error' && <p className="admission-inquiry-status admission-inquiry-error">Не вдалося надіслати. Спробуйте написати на пошту.</p>}
        </form>
      </div>
      <footer className="admission-signoff"><span>Миколаїв · Україна · Більше, ніж освіта</span><span>Миколаїв — назавжди в серці</span></footer>
    </div>
  )
}
