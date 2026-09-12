import Image from "next/image";
import { ArrowRight, BookOpen, CalendarDays, FileText, GraduationCap, Landmark, Mail, MapPin, Menu, Microscope, Music2, Phone, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";

const sourceNews = "https://sites.google.com/arkasgymn1.com.ua/arkasgymn1/%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8";
const quickLinks = [
  { icon: GraduationCap, title: "Вступнику", text: "Правила, документи, реєстрація", href: "#vstup" },
  { icon: Users, title: "Батькам", text: "Організація навчання та комунікація", href: "#kontakty" },
  { icon: BookOpen, title: "Учням", text: "Освітній процес і ресурси", href: "#osvita" },
  { icon: ShieldCheck, title: "Безпечне середовище", text: "Психологічна підтримка та доброчесність", href: "#bezpeka" },
  { icon: FileText, title: "Прозорість", text: "Статут, звіти, нормативні документи", href: sourceNews },
  { icon: MapPin, title: "Контакти", text: "Телефони, адреса, електронна пошта", href: "#kontakty" },
];
const timeline = [
  ["1863", "Маріїнська жіноча гімназія", "Початок освітньої історії будівлі"],
  ["1993", "Українська педагогічна гімназія", "Народження сучасного закладу"],
  ["2003", "Ім’я Миколи Аркаса", "Формування власної культурної ідентичності"],
  ["2023", "Миколаївський ліцей", "Новий етап розвитку закладу"],
];
const education = [
  { icon: BookOpen, title: "Глибокі знання", text: "Профільне навчання, гуманітарні дисципліни, високий академічний рівень." },
  { icon: Users, title: "Мови та комунікація", text: "Українська, англійська, німецька або французька, латина та культура мовлення." },
  { icon: Microscope, title: "Наука і дослідження", text: "МАН, наукове товариство «Інтелектуал», дослідницькі роботи та конференції." },
  { icon: Sparkles, title: "Критичне мислення", text: "Медіаграмотність, журналістика, цифрові технології та проєктне навчання." },
];
const results = [
  ["100+", "Всеукраїнські перемоги", "Олімпіади, МАН та творчі конкурси різних рівнів"],
  ["6", "Золотих медалей", "Міжнародні виставки «Інноватика в сучасній освіті»"],
  ["21", "Педагог-методист", "Команда висококваліфікованих учителів і науковців"],
  ["163", "Роки традицій", "Одна з найстаріших освітніх історій Миколаєва"],
];
const life = [
  ["Учнівське самоврядування", "Ініціативність, відповідальність і справжній голос учнів."],
  ["Аркасівські читання", "Щорічна конференція та культура самостійного дослідження."],
  ["Творчі колективи", "Хор, «Джерельце», «Краяни», театр, танець і народні інструменти."],
  ["Спорт і здоров’я", "Волейбол, футбол, шахи та звичка дбати про себе."],
];

export default function Home() {
  return <main id="top">
    <div className="topline"><span>Миколаїв · Україна</span><a href="#vstup">Вступ 2026–2027 <ArrowRight size={14}/></a></div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="На початок сторінки"><span className="brand-mark">А</span><span><b>Миколаївський ліцей</b><small>імені Миколи Аркаса</small></span></a>
      <nav aria-label="Головна навігація"><a href="#pro-licei">Про ліцей</a><a href="#osvita">Освіта</a><a href="#rezultaty">Досягнення</a><a href="#zhyttia">Життя ліцею</a><a href="#novyny">Новини</a></nav>
      <a className="header-cta" href="#kontakty">Контакти <ArrowRight size={16}/></a>
      <details className="mobile-menu"><summary aria-label="Відкрити меню"><Menu/></summary><div><a href="#pro-licei">Про ліцей</a><a href="#osvita">Освіта</a><a href="#rezultaty">Досягнення</a><a href="#zhyttia">Життя ліцею</a><a href="#vstup">Вступ</a><a href="#kontakty">Контакти</a></div></details>
    </header>

    <section className="hero">
      <Image className="hero-image" src="/lyceum-hero-day.jpg" alt="Історична будівля Миколаївського ліцею імені Миколи Аркаса" fill priority sizes="100vw"/><div className="hero-overlay"/>
      <div className="hero-copy section-shell"><div className="hero-meta"><span>1863</span><span>Миколаїв · Україна</span></div><p className="hero-name">Миколаївський ліцей імені Миколи Аркаса</p><h1>Традиції, що<br/><em>формують майбутнє</em></h1><p className="hero-lead">Сучасний академічний ліцей із глибокою історією, українською культурною основою та середовищем, у якому знання, творчість і дослідження стають частиною особистості.</p><div className="hero-actions"><a className="button button-accent" href="#vstup">Вступ 2026 <ArrowRight size={18}/></a><a className="button button-glass" href="#osvita">Гуманітарний профіль</a></div></div>
      <div className="hero-foot"><span>163 роки історії</span><span>Освіта · Культура · Ідентичність</span></div>
    </section>

    <section className="quick section-shell"><header className="section-heading horizontal"><div><span>Швидкий доступ</span><h2>Усе важливе — поруч</h2></div><p>Зрозуміла навігація для учнів, батьків і майбутніх ліцеїстів.</p></header><div className="quick-grid">{quickLinks.map(({icon:Icon,title,text,href})=><a className="quick-card" href={href} key={title} target={href.startsWith("http")?"_blank":undefined}><Icon/><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="arrow"/></a>)}</div></section>

    <section className="history section-shell" id="pro-licei"><div className="history-copy"><span className="eyebrow">Ліцей із характером · Історія</span><h2>Місце, де історія продовжується</h2><p className="large-copy">Від Маріїнської жіночої гімназії 1863 року до сучасного ліцею імені Миколи Аркаса — це історія поколінь, які змінювали місто через освіту.</p><p>Сьогодні ліцей поєднує академічну підготовку, українську культурну спадщину та сучасні освітні підходи.</p></div><div className="timeline">{timeline.map(([year,title,text])=><article key={year}><strong>{year}</strong><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="arkas" id="arkas"><div className="arkas-image"><Image src="/mykola-arkas.jpg" alt="Микола Аркас — історик, композитор і просвітник" fill sizes="(max-width:760px) 100vw,40vw"/></div><div className="arkas-copy"><Music2/><span className="eyebrow">Ім’я, яке визначає нашу ідентичність · Спадщина</span><h2>Микола Аркас</h2><p className="large-copy">Історик, композитор, просвітник і громадський діяч, для якого українська культура була справою життя.</p><p>Його ім’я для ліцею — не формальність, а філософія освіти. Тут проводять Аркасівські читання, працюють із музеєм історії закладу, створюють краєзнавчі й науково-дослідницькі проєкти.</p><div className="arkas-tags"><span>Історія України-Русі</span><span>Опера «Катерина»</span><span>Миколаївська «Просвіта»</span></div></div></section>

    <section className="education section-shell" id="osvita"><header className="section-heading horizontal"><div><span>Освітній простір</span><h2>Освіта, яка вчить думати</h2></div><p>Чотири напрямки розвитку особистості — від ґрунтовних знань до вміння самостійно досліджувати світ.</p></header><div className="education-grid">{education.map(({icon:Icon,title,text},i)=><article key={title}><span className="number">0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div><p className="education-note">Традиційно учні ліцею поглиблено вивчають українську та іноземні мови, беруть участь у конкурсах МАН, олімпіадах і творчих проєктах, а також навчаються за авторськими гуманітарними курсами.</p></section>

    <section className="results" id="rezultaty"><div className="section-shell"><header className="section-heading light"><span>Результати</span><h2>Досягнення, які говорять самі за себе</h2><p>Понад три десятиліття педагогічного пошуку, освітніх інновацій і командної праці.</p></header><div className="results-grid">{results.map(([value,title,text])=><article key={title}><strong>{value}</strong><h3>{title}</h3><p>{text}</p></article>)}</div><div className="award-story"><div><Trophy/><span>Професійне визнання</span><h3>Золота медаль «Інноватика в сучасній освіті»</h3><p>У 2024 році ліцей знову відзначили за створення та впровадження інноваційних освітніх проєктів.</p></div><div className="award-image"><Image src="/teacher-award.jpg" alt="Нагородження педагогів Миколаївського ліцею імені Миколи Аркаса" fill sizes="(max-width:760px) 100vw,45vw"/></div></div></div></section>

    <section className="community section-shell"><div><span className="eyebrow">Ліцей — це люди · Спільнота</span><h2>Будівлі створюють простір.<br/><em>Люди створюють школу.</em></h2></div><div className="community-image"><Image src="/lyceum-community.jpg" alt="Учні та педагоги Миколаївського ліцею імені Миколи Аркаса" fill sizes="(max-width:760px) 100vw,52vw"/></div><div className="community-cards"><article><Users/><h3>Учні</h3><p>Творчі, дослідницькі та волонтерські ініціативи.</p></article><article><Sparkles/><h3>Педагоги</h3><p>Команда вчителів-методистів і наставників.</p></article><article><GraduationCap/><h3>Випускники</h3><p>Покоління, які продовжують історію Аркасівської родини.</p></article></div></section>

    <section className="life" id="zhyttia"><div className="section-shell"><header className="section-heading horizontal"><div><span>Ліцейне життя</span><h2>Не лише уроки</h2></div><p>Середовище, у якому хочеться зростати, дружити, творити й брати відповідальність.</p></header><div className="life-layout"><div className="life-image"><Image src="/life-workshop.jpg" alt="Учні ліцею на майстер-класі з виготовлення різдвяної зірки" fill sizes="(max-width:760px) 100vw,50vw"/></div><div className="life-list">{life.map(([title,text],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></div></section>

    <section className="resilience" id="bezpeka"><div className="section-shell resilience-grid"><div><Landmark/><span className="eyebrow">Ліцей, що вистояв · Незламність</span><h2>Історію неможливо зруйнувати</h2></div><div><p className="large-copy">У 2022 році російська ракета зруйнувала центральну частину історичної будівлі ліцею. Та разом зі стінами не зникли пам’ять, традиції й люди.</p><p>Миколаївський ліцей імені Миколи Аркаса продовжує навчати, досліджувати, творити й виховувати нові покоління українців. Саме це і є справжня незламність.</p><div className="resilience-line"><span>Пам’ятаємо</span><i/><span>Навчаємо</span><i/><span>Відновлюємо</span></div></div></div></section>

    <section className="admission section-shell" id="vstup"><div className="admission-copy"><span className="eyebrow">Вступ до ліцею · 2026–2027</span><h2>Станьте частиною Аркасівської спільноти</h2><p>Обираючи ліцей, ви обираєте не лише якісну освіту, а й середовище, де дитина навчається мислити, досліджувати та відчувати відповідальність за майбутнє своєї країни.</p><div className="admission-options"><a href="mailto:arkasgymn1@ukr.net?subject=Умови вступу 2026–2027"><FileText/><span><b>Умови вступу</b><small>Перелік документів та правила прийому</small></span><ArrowRight/></a><a href="mailto:arkasgymn1@ukr.net?subject=День відкритих дверей"><CalendarDays/><span><b>Дні відкритих дверей</b><small>Знайомство з адміністрацією та педагогами</small></span><ArrowRight/></a></div></div><div className="admission-image"><Image src="/admission-2025.jpg" alt="Життя та вступ до Миколаївського ліцею імені Миколи Аркаса" fill sizes="(max-width:760px) 100vw,38vw"/></div></section>

    <section className="news section-shell" id="novyny"><header className="section-heading horizontal"><div><span>Актуальні новини · Життя ліцею</span><h2>Події, досягнення, перемоги</h2></div><a className="text-link" href={sourceNews} target="_blank">Усі новини <ArrowRight/></a></header><div className="news-grid"><article className="news-main"><span>Головна подія · Традиції</span><h3>З днем народження, любий ліцею!</h3><p>Свято пам’яті поколінь, сили спільноти та віри у майбутнє Аркасівської родини.</p><a href={sourceNews} target="_blank">Читати <ArrowRight/></a></article><article><span>Творчість</span><h3>Канікули проводимо весело</h3><p>Майстер-клас із виготовлення різдвяної зірки для учнів 5 класу.</p></article><article><span>Освіта</span><h3>Google for Education</h3><p>Розвиток цифрових компетентностей і безпечної роботи в мережі.</p></article><article><span>Наука</span><h3>Аркасівські читання</h3><p>Щорічна учнівська наукова конференція та презентація досліджень.</p></article></div></section>

    <footer id="kontakty"><div className="footer-main section-shell"><div className="footer-brand"><span className="brand-mark">А</span><h2>Миколаївський ліцей<br/>імені Миколи Аркаса</h2><p>Традиції, що формують майбутнє.</p></div><div><h3>Адреса</h3><p><MapPin/>54006, м. Миколаїв<br/>вул. Вадима Благовісного, 34</p></div><div><h3>Телефони</h3><a href="tel:+380512378606"><Phone/> (0512) 37-86-06</a><a href="tel:+380512378626">37-86-26</a><a href="tel:+380512378617">37-86-17</a></div><div><h3>Електронна пошта</h3><a href="mailto:arkasgymn1@ukr.net"><Mail/> arkasgymn1@ukr.net</a><a href={sourceNews} target="_blank">Архів старого сайту <ArrowRight/></a></div></div><div className="footer-bottom section-shell"><span>© 2026 Миколаївський ліцей імені Миколи Аркаса</span><a href="#top">На початок ↑</a></div></footer>
  </main>;
}
