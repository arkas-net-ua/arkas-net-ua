import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, FileText, GraduationCap, Mail, MapPin, Menu, Microscope, Music2, Phone, ShieldCheck, Sparkles, Trophy, Users } from 'lucide-react'
import { FitScreen } from '../components/FitScreen'
import { ReferenceHero } from '../components/ReferenceHero'
import { Admissions } from '../components/Admissions'

const sourceNews = 'https://sites.google.com/arkasgymn1.com.ua/arkasgymn1/%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8'
const quickLinks = [
  { icon: GraduationCap, title: 'Вступнику', text: 'Правила, документи, реєстрація', href: '#vstup' },
  { icon: Users, title: 'Батькам', text: 'Організація навчання та комунікація', href: '#kontakty' },
  { icon: BookOpen, title: 'Учням', text: 'Освітній процес і ресурси', href: '#osvita' },
  { icon: ShieldCheck, title: 'Безпечне середовище', text: 'Психологічна підтримка та доброчесність', href: '#bezpeka' },
  { icon: FileText, title: 'Прозорість', text: 'Статут, звіти, нормативні документи', href: sourceNews },
  { icon: MapPin, title: 'Контакти', text: 'Телефони, адреса, електронна пошта', href: '#kontakty' },
]
const timeline: [string, string, string][] = [
  ['1892', 'Історична будівля', 'Споруджено будівлю Маріїнської гімназії'],
  ['1993', 'Українська педагогічна гімназія', 'Народження сучасного закладу'],
  ['2003', 'Ім’я Миколи Аркаса', 'Формування власної культурної ідентичності'],
  ['2022', 'Миколаївський ліцей', 'Перейменування гімназії на ліцей'],
]
const education = [
  { icon: BookOpen, title: 'Глибокі знання', text: 'Профільне навчання, гуманітарні дисципліни, високий академічний рівень.' },
  { icon: Users, title: 'Мови та комунікація', text: 'Українська, англійська, німецька або французька, латина та культура мовлення.' },
  { icon: Microscope, title: 'Наука і дослідження', text: 'МАН, наукове товариство «Інтелектуал», дослідницькі роботи та конференції.' },
  { icon: Sparkles, title: 'Критичне мислення', text: 'Медіаграмотність, журналістика, цифрові технології та проєктне навчання.' },
]
const results: [string, string, string][] = [
  ['МАН', 'Наукові дослідження', 'Учнівські роботи, конкурси та дослідницькі проєкти'],
  ['2024', 'Золота медаль', 'XVI виставка «Інноватика в сучасній освіті»'],
  ['1994', 'Аркасівські читання', 'Рік започаткування ліцейної наукової традиції'],
  ['1993', 'Початок сучасного закладу', 'Створення української педагогічної гімназії'],
]
const life: [string, string][] = [
  ['Учнівське самоврядування', 'Ініціативність, відповідальність і справжній голос учнів.'],
  ['Аркасівські читання', 'Щорічна конференція та культура самостійного дослідження.'],
  ['Творчі колективи', 'Хор, «Джерельце», «Краяни», театр, танець і народні інструменти.'],
  ['Спорт і здоров’я', 'Волейбол, футбол, шахи та звичка дбати про себе.'],
]
const navLinks: [string, string][] = [
  ['Про ліцей', '#pro-licei'],
  ['Освіта', '#osvita'],
  ['Досягнення', '#rezultaty'],
  ['Життя ліцею', '#zhyttia'],
  ['Новини', '#novyny'],
  ['Контакти', '#kontakty'],
]

export default function Home() {
  const headerRef = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = headerRef.current
    if (!el) return
    const apply = () => document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    apply()
    const observer = new ResizeObserver(apply)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <main id="top">
      <header className="site-header home-fixed-header" ref={headerRef}>
        <a className="brand" href="#top" aria-label="На початок сторінки"><span className="brand-mark">А</span><span><b>Миколаївський ліцей</b><small>імені Миколи Аркаса</small></span></a>
        <nav aria-label="Головна навігація">{navLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <a className="header-cta" href="#vstup">Вступ 2026 <ArrowRight size={16} /></a>
        <details className="mobile-menu"><summary aria-label="Відкрити меню"><Menu /></summary><div>{navLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></details>
      </header>
      <div className="topline home-topline"><span>Миколаїв · Україна</span><a href="#vstup">Вступ 2026–2027 <ArrowRight size={14} /></a></div>
      <FitScreen className="screen-intro"><ReferenceHero /></FitScreen>

      <FitScreen className="screen-quick" autoFit={false}>
        <section className="quick" id="quick">
          <header className="section-heading horizontal"><div><span>Швидкий доступ</span><h2>Усе важливе — поруч</h2></div><p>Зрозуміла навігація для учнів, батьків і майбутніх ліцеїстів.</p></header>
          <div className="quick-grid">{quickLinks.map(({ icon: Icon, title, text, href }) => (
            <a className="quick-card" href={href} key={title} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
              <Icon /><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="arrow" />
            </a>
          ))}</div>
        </section>
      </FitScreen>

      <FitScreen className="screen-history" autoFit={false}>
        <section className="history" id="pro-licei">
          <div className="history-copy">
            <span className="eyebrow">Ліцей із характером · Історія</span>
            <h2>Місце, де історія<br />продовжується</h2>
            <p className="large-copy">Українська педагогічна гімназія почала працювати у 1993 році в будівлі колишньої Маріїнської жіночої гімназії, спорудженій у 1892 році. Сьогодні цю освітню історію продовжує ліцей імені Миколи Аркаса.</p>
            <p>Сьогодні ліцей поєднує академічну підготовку, українську культурну спадщину та сучасні освітні підходи.</p>
            <p className="history-quote">Традиції. Знання. Люди. Майбутнє.</p>
          </div>
          <div className="history-visual">
            <span className="history-watermark" aria-hidden="true">1892</span>
            <div className="history-photo">
              <img src="/lyceum-hero-day.jpg" alt="Історична будівля Миколаївського ліцею імені Миколи Аркаса" />
              <span>Фасад закладу · Миколаїв</span>
            </div>
          </div>
          <ol className="history-eras">{timeline.map(([year, title, text]) => <li key={year}><b>{year}</b><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </section>
      </FitScreen>

        <section className="arkas arkas-natural" id="arkas">
          <div className="arkas-image"><img src="/mykola-arkas.jpg" alt="Микола Аркас — історик, композитор і просвітник" /></div>
          <div className="arkas-copy">
            <Music2 />
            <span className="eyebrow">Ім’я, яке визначає нашу ідентичність · Спадщина</span>
            <strong className="arkas-years">1853 — 1909</strong>
            <h2>Микола Аркас</h2>
            <p className="large-copy">Історик, композитор, просвітник і громадський діяч, для якого українська культура була справою життя.</p>
            <p>Його ім’я для ліцею — не формальність, а філософія освіти. Тут проводять Аркасівські читання, працюють із музеєм історії закладу, створюють краєзнавчі й науково-дослідницькі проєкти.</p>
            <blockquote className="arkas-quote">Спадщина, що надихає нове покоління вчитися, досліджувати й берегти Україну.</blockquote>
            <div className="arkas-tags"><span>Історія України-Русі</span><span>Опера «Катерина»</span><span>Миколаївська «Просвіта»</span></div>
          </div>
        </section>

      <FitScreen className="screen-education">
        <section className="education-editorial" id="osvita">
          <div className="education-art"><img src="/education-library.png" alt="Бібліотека як простір знань і досліджень" /><span className="education-art-words">Люди<br />Ідеї<br />Розвиток<br />Майбутнє</span><span className="education-art-a" aria-hidden="true">А</span></div>
          <div className="education-content">
            <header className="education-editorial-head"><div><span className="eyebrow">Освітній простір</span><h2>Освіта, яка вчить<br /><em>думати</em></h2></div><p>Чотири напрямки розвитку особистості — від ґрунтовних знань до вміння самостійно досліджувати світ.</p></header>
            <div className="education-columns">{education.map(({ icon: Icon, title, text }, i) => <article key={title}><span>0{i + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
          <div className="education-editorial-quote"><strong>“</strong><em>Традиції. Знання. Люди. Майбутнє.</em><i /><span>Ми більше, ніж школа</span></div>
        </section>
      </FitScreen>

        <section className="results results-natural" id="rezultaty">
          <div className="section-shell">
            <header className="section-heading light"><span>Результати</span><h2>Досягнення, які говорять самі за себе</h2><p>Понад три десятиліття педагогічного пошуку, освітніх інновацій і командної праці.</p></header>
            <div className="results-grid">{results.map(([value, title, text]) => <article key={title}><strong>{value}</strong><h3>{title}</h3><p>{text}</p></article>)}</div>
            <div className="award-story">
              <div><Trophy /><span>Професійне визнання</span><h3>Золота медаль «Інноватика в сучасній освіті»</h3><p>У 2024 році ліцей знову відзначили за створення та впровадження інноваційних освітніх проєктів.</p></div>
              <div className="award-image"><img src="/lyceum-hero-real.png" alt="Будівля Миколаївського ліцею імені Миколи Аркаса" /></div>
            </div>
          </div>
        </section>

      <FitScreen className="screen-community">
        <section id="spilnota" className="community">
          <div><span className="eyebrow">Ліцей — це люди · Спільнота</span><h2>Будівлі створюють простір.<br /><em>Люди створюють школу.</em></h2></div>
          <div className="community-image"><img src="/lyceum-building.jpg" alt="Будівля Миколаївського ліцею імені Миколи Аркаса з учнями та педагогами в парку" /></div>
          <div className="community-cards">
            <Link to="/uchni"><Users /><div><h3>Наші учні</h3><p>Ідеї, відкриття, перемоги.</p></div><ArrowRight /></Link>
            <Link to="/vchyteli"><Sparkles /><div><h3>Наші вчителі</h3><p>Досвід, підтримка, натхнення.</p></div><ArrowRight /></Link>
            <Link to="/vypusknyky"><GraduationCap /><div><h3>Наші випускники</h3><p>Історії, що продовжуються.</p></div><ArrowRight /></Link>
          </div>
        </section>
      </FitScreen>

      <FitScreen className="screen-life">
        <section className="life" id="zhyttia">
          <div className="section-shell">
            <header className="section-heading horizontal"><div><span>Ліцейне життя</span><h2>Не лише уроки</h2></div><p>Середовище, у якому хочеться зростати, дружити, творити й брати відповідальність.</p></header>
            <div className="life-layout">
              <div className="life-image"><img src="/life-workshop.jpg" alt="Учні ліцею на майстер-класі з виготовлення різдвяної зірки" /></div>
              <div className="life-list">{life.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
            </div>
          </div>
        </section>
      </FitScreen>

      <FitScreen className="screen-resilience">
        <section className="resilience-story" id="bezpeka" aria-labelledby="resilience-title">
          <div className="resilience-photo"><img src="/lyceum-destruction-2022.jpg" alt="Історична будівля гімназії імені Миколи Аркаса після російського обстрілу у 2022 році" /></div>
          <div className="resilience-shade" aria-hidden="true" />
          <div className="resilience-content">
            <span className="resilience-kicker">Ліцей, що вистояв · Незламність</span>
            <h2 id="resilience-title"><em>Історію</em>{' '}<br />неможливо{' '}<br />зруйнувати.</h2>
            <p>У 2022 році російська ракета зруйнувала центральну частину історичної будівлі ліцею. Та разом зі стінами не зникли пам’ять, традиції й люди.</p>
            <p>Ми продовжуємо навчати, досліджувати й творити. Бо історія ліцею живе в людях — і триває з кожним новим поколінням.</p>
          </div>
          <div className="resilience-bottom">
            <div className="resilience-motto"><span>Пам’ятаємо.</span><i /><span>Навчаємо.</span><i /><span>Відновлюємо.</span></div>
            <span className="resilience-credit">Миколаїв · Листопад 2022<br />Фото: Віталій Носач / <a href="https://www.rbc.ua/" target="_blank" rel="noreferrer">РБК-Україна</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a><br />Адаптивне кадрування й затемнення</span>
          </div>
        </section>
      </FitScreen>

      <FitScreen className="screen-admission">
        <section className="admission-2026" id="vstup"><Admissions /></section>
      </FitScreen>

      <FitScreen className="screen-news" autoFit={false}>
        <section className="news" id="novyny">
          <header className="section-heading horizontal"><div><span>Актуальні новини · Життя ліцею</span><h2>Події, досягнення, перемоги</h2></div><a className="text-link" href={sourceNews} target="_blank" rel="noreferrer">Усі новини <ArrowRight /></a></header>
          <div className="news-grid">
            <article className="news-main"><span>Головна подія · Традиції</span><h3>З днем народження, любий ліцею!</h3><p>Свято пам’яті поколінь, сили спільноти та віри у майбутнє Аркасівської родини.</p><a href={sourceNews} target="_blank" rel="noreferrer">Читати <ArrowRight /></a></article>
            <article><span>Творчість</span><h3>Канікули проводимо весело</h3><p>Майстер-клас із виготовлення різдвяної зірки для учнів 5 класу.</p></article>
            <article><span>Освіта</span><h3>Google for Education</h3><p>Розвиток цифрових компетентностей і безпечної роботи в мережі.</p></article>
            <article><span>Наука</span><h3>Аркасівські читання</h3><p>Щорічна учнівська наукова конференція та презентація досліджень.</p></article>
          </div>
        </section>
      </FitScreen>

      <FitScreen className="screen-footer">
        <footer id="kontakty">
          <div className="footer-main section-shell">
            <div className="footer-brand"><span className="brand-mark">А</span><h2>Миколаївський ліцей<br />імені Миколи Аркаса</h2><p>Традиції, що формують майбутнє.</p></div>
            <div><h3>Адреса</h3><p><MapPin />54006, м. Миколаїв<br />вул. Вадима Благовісного, 34</p></div>
            <div><h3>Телефони</h3><a href="tel:+380512378606"><Phone /> (0512) 37-86-06</a><a href="tel:+380512378626">37-86-26</a><a href="tel:+380512378617">37-86-17</a></div>
            <div><h3>Електронна пошта</h3><a href="mailto:arkasgymn1@ukr.net"><Mail /> arkasgymn1@ukr.net</a></div>
          </div>
          <div className="footer-bottom section-shell"><span>© 2026 Миколаївський ліцей імені Миколи Аркаса</span><a href="#top">На початок ↑</a></div>
        </footer>
      </FitScreen>
    </main>
  )
}
