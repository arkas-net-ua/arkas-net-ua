import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, Mail, MapPin, Menu, Phone, type LucideIcon } from 'lucide-react'

export type SectionItem = { icon: LucideIcon; title: string; text: string; label: string }
type Props = {
  eyebrow: string; title: string; accent: string; intro: string; image: string; imageAlt: string
  sections: SectionItem[]; featureLabel: string; featureTitle: string; featureText: string; featureLinks: string[]
}
const audienceLinks: [string, string][] = [['Учні', '/uchni'], ['Вчителі', '/vchyteli'], ['Випускники', '/vypusknyky']]

export function CommunityPage({ eyebrow, title, accent, intro, image, imageAlt, sections, featureLabel, featureTitle, featureText, featureLinks }: Props) {
  return (
    <main className="inner-page" id="top">
      <div className="topline"><span>Миколаїв · Україна</span><a href="/#vstup">Вступ 2026–2027 <ArrowRight size={14} /></a></div>
      <header className="site-header inner-header">
        <Link className="brand" to="/" aria-label="На головну сторінку"><span className="brand-mark">А</span><span><b>Миколаївський ліцей</b><small>імені Миколи Аркаса</small></span></Link>
        <nav aria-label="Навігація спільноти">{audienceLinks.map(([label, href]) => <Link to={href} key={href}>{label}</Link>)}</nav>
        <a className="header-cta" href="/#kontakty">Контакти <ArrowRight size={16} /></a>
        <details className="mobile-menu"><summary aria-label="Відкрити меню"><Menu /></summary><div><Link to="/">Головна</Link>{audienceLinks.map(([label, href]) => <Link to={href} key={href}>{label}</Link>)}<a href="/#kontakty">Контакти</a></div></details>
      </header>
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <Link className="back-link" to="/"><ArrowLeft /> Головна</Link>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}<br /><em>{accent}</em></h1>
          <p>{intro}</p>
          <a className="button button-accent" href="#rozdily">Переглянути розділи <ArrowRight size={18} /></a>
        </div>
        <div className="inner-hero-image"><img src={image} alt={imageAlt} /></div>
      </section>
      <section className="inner-map section-shell" id="rozdily">
        <header className="section-heading horizontal"><div><span>Карта розділу</span><h2>Усе головне —<br />в одному просторі</h2></div><p>Розділ уже має повну структуру. Матеріали, документи та історії будуть поступово доповнюватися редакцією ліцею.</p></header>
        <div className="inner-card-grid">{sections.map(({ icon: Icon, title: textTitle, text, label }, i) => (
          <article key={textTitle}><span className="number">0{i + 1}</span><Icon /><small>{label}</small><h3>{textTitle}</h3><p>{text}</p><span className="card-status">Розділ формується</span></article>
        ))}</div>
      </section>
      <section className="inner-feature"><div className="section-shell inner-feature-grid"><div><span className="eyebrow">{featureLabel}</span><h2>{featureTitle}</h2><p>{featureText}</p></div><div className="feature-list">{featureLinks.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></div></section>
      <section className="inner-contact section-shell"><div><span className="eyebrow">Аркасівська спільнота</span><h2>Долучайтеся до життя ліцею</h2></div><div><p>Маєте матеріал, історію або ініціативу для цього розділу? Напишіть ліцею — зміст сторінки зростатиме разом зі спільнотою.</p><a className="button button-accent" href="mailto:arkasgymn1@ukr.net">Написати ліцею <Mail size={18} /></a></div></section>
      <footer><div className="footer-main section-shell"><div className="footer-brand"><span className="brand-mark">А</span><h2>Миколаївський ліцей<br />імені Миколи Аркаса</h2><p>Традиції, що формують майбутнє.</p></div><div><h3>Навігація</h3><Link to="/"><BookOpen /> Головна сторінка</Link><a href="/#vstup"><GraduationCap /> Вступ до ліцею</a></div><div><h3>Адреса</h3><p><MapPin />54006, м. Миколаїв<br />вул. Вадима Благовісного, 34</p></div><div><h3>Контакти</h3><a href="tel:+380512378606"><Phone /> (0512) 37-86-06</a><a href="mailto:arkasgymn1@ukr.net"><Mail /> arkasgymn1@ukr.net</a></div></div><div className="footer-bottom section-shell"><span>© 2026 Миколаївський ліцей імені Миколи Аркаса</span><a href="#top">На початок ↑</a></div></footer>
    </main>
  )
}
