import Image from "next/image";
import {
  ArrowDownRight, ArrowRight, BookOpen, CalendarDays, FileText,
  GraduationCap, Mail, MapPin, Menu, Music2, ShieldCheck,
  Sparkles, Trophy, Users,
} from "lucide-react";

const quickLinks = [
  { icon: GraduationCap, title: "Вступнику", text: "Умови вступу та необхідні документи", href: "#vstup" },
  { icon: BookOpen, title: "Учням", text: "Освітній процес, розклад і матеріали", href: "#osvita" },
  { icon: Users, title: "Батькам", text: "Навчання, підтримка й комунікація", href: "#kontakty" },
  { icon: FileText, title: "Прозорість", text: "Статут, звіти та офіційні документи", href: "#kontakty" },
  { icon: ShieldCheck, title: "Безпечне середовище", text: "Психологічна підтримка й доброчесність", href: "#seredovyshche" },
  { icon: MapPin, title: "Контакти", text: "Адреса, електронна пошта, маршрут", href: "#kontakty" },
];

const education = [
  { n: "01", title: "Мови та комунікація", text: "Поглиблене вивчення української й англійської мов, культура мовлення та вміння переконливо висловлювати думку." },
  { n: "02", title: "Дослідження", text: "Учнівські проєкти, Мала академія наук, предметні олімпіади та щорічні Аркасівські читання." },
  { n: "03", title: "Культура й творчість", text: "Музика, театр, хореографія та мистецькі практики як повноцінна частина освітнього середовища." },
  { n: "04", title: "Критичне мислення", text: "Медіаграмотність, цифрові навички й робота з інформацією — для відповідальних рішень у сучасному світі." },
];

const timeline = [
  ["1863", "Початок історії Маріїнської жіночої гімназії"],
  ["1993", "Створено Українську педагогічну гімназію"],
  ["1998", "Заклад став Першою українською гімназією"],
  ["2003", "Гімназії присвоєно ім’я Миколи Аркаса"],
  ["2023", "Сучасне ім’я — Миколаївський ліцей імені Миколи Аркаса"],
];

const life = [
  ["Наука", "Дослідницькі проєкти та МАН"],
  ["Творчість", "Хор, театр, танець і музика"],
  ["Спорт", "Командні ігри та активне дозвілля"],
  ["Самоврядування", "Учнівський голос і відповідальність"],
  ["Волонтерство", "Ініціативи на підтримку громади"],
  ["Медіаграмотність", "Свідоме життя в інформаційному світі"],
];

export default function Home() {
  return (
    <main>
      <div className="topline">
        <p>Миколаїв · ліцей продовжує навчання, історичну будівлю відновлюють</p>
        <a href="#vidnovlennia">Про відновлення <ArrowRight size={14} /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="На початок сторінки">
          <span className="brand-mark">А</span>
          <span><b>Ліцей імені Миколи Аркаса</b><small>Миколаївська міська рада</small></span>
        </a>
        <nav aria-label="Головна навігація">
          <a href="#pro-licei">Про ліцей</a><a href="#osvita">Освіта</a>
          <a href="#dosiahnennia">Досягнення</a><a href="#zhyttia">Життя ліцею</a>
          <a href="#kontakty">Контакти</a>
        </nav>
        <a className="header-cta" href="#vstup">Вступ до ліцею <ArrowDownRight size={17} /></a>
        <details className="mobile-menu">
          <summary aria-label="Відкрити меню"><Menu /></summary>
          <div><a href="#pro-licei">Про ліцей</a><a href="#osvita">Освіта</a><a href="#dosiahnennia">Досягнення</a><a href="#zhyttia">Життя ліцею</a><a href="#kontakty">Контакти</a></div>
        </details>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src="/lyceum-building.jpg" alt="Історична будівля ліцею імені Миколи Аркаса в Аркасівському сквері" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-kicker"><span>Засновано 1863</span><span>Миколаїв · Україна</span></div>
          <h1>Ліцей, у якого<br />є минуле.<br /><em>Ліцей, який створює майбутнє.</em></h1>
          <p>Миколаївський ліцей імені Миколи Аркаса — академічне середовище, де знання, культура й дослідження допомагають кожній особистості знайти власний голос.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#vstup">Дізнатися про вступ <ArrowRight size={18} /></a>
            <a className="button button-ghost" href="#pro-licei">Відкрити історію</a>
          </div>
        </div>
        <div className="hero-stats">
          <div><strong>163</strong><span>роки освітньої історії</span></div>
          <div><strong>30+</strong><span>років Аркасівських читань</span></div>
          <div><strong>ІІ–ІІІ</strong><span>ступені освіти</span></div>
        </div>
      </section>

      <section className="quick section-shell" aria-labelledby="quick-title">
        <div className="section-intro compact"><span>Швидкий доступ</span><h2 id="quick-title">Найважливіше — поруч</h2></div>
        <div className="quick-grid">
          {quickLinks.map(({ icon: Icon, title, text, href }) => (
            <a className="quick-card" href={href} key={title}>
              <Icon size={23} strokeWidth={1.6} /><div><h3>{title}</h3><p>{text}</p></div><ArrowDownRight className="quick-arrow" size={20} />
            </a>
          ))}
        </div>
      </section>

      <section className="history section-shell" id="pro-licei">
        <div className="history-copy">
          <div className="section-intro"><span>Ліцей із характером</span><h2>Місце, де історія продовжується</h2></div>
          <p className="lead">Змінювалися назви, покоління й освітні системи. Незмінним залишалося головне — прагнення до знань, культури та розвитку особистості.</p>
          <p>Ліцей продовжує історію Маріїнської жіночої гімназії, що бере початок у 1863 році. У 1993-му тут постала Українська педагогічна гімназія, а згодом — Перша українська гімназія. Сьогодні ця спадщина живе у сучасному ліцеї імені Миколи Аркаса.</p>
          <a className="text-link" href="#arkas">Ім’я, яке визначає нас <ArrowRight size={16} /></a>
        </div>
        <div className="timeline">{timeline.map(([year, text]) => <div className="timeline-row" key={year}><strong>{year}</strong><p>{text}</p></div>)}</div>
      </section>

      <section className="arkas" id="arkas">
        <div className="arkas-portrait"><Image src="/mykola-arkas.jpg" alt="Портрет Миколи Аркаса" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
        <div className="arkas-copy">
          <Music2 size={28} /><span className="eyebrow">Микола Аркас · 1853–1909</span>
          <h2>Ім’я, яке звучить у культурі міста</h2>
          <p>Історик, композитор, письменник, засновник миколаївської «Просвіти». Для Миколи Аркаса українська освіта й культура були справою життя.</p>
          <blockquote>«Аркасівська традиція — це не пам’ять заради минулого. Це допитливість, гідність і відповідальність у сьогоденні».</blockquote>
          <div className="arkas-notes"><span>Історія України-Русі</span><span>Опера «Катерина»</span><span>Товариство «Просвіта»</span></div>
        </div>
      </section>

      <section className="education section-shell" id="osvita">
        <div className="education-heading">
          <div className="section-intro"><span>Освітній простір</span><h2>Освіта, яка вчить думати</h2></div>
          <p>Ліцей поєднує сильну гуманітарну основу з дослідницьким підходом, творчістю та навичками, потрібними для життя.</p>
        </div>
        <div className="education-grid">{education.map((item) => <article key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="achievements" id="dosiahnennia">
        <div className="section-shell achievement-shell">
          <div className="achievement-main"><Trophy size={31} /><span className="eyebrow">Наші результати</span><h2>Досягнення, за якими стоїть щоденна праця</h2><p>Олімпіади, дослідницькі роботи, творчі конкурси та освітні інновації — це спільна робота учнів, педагогів і родин.</p></div>
          <div className="achievement-cards">
            <article><strong>Золота медаль</strong><span>«Інноватика в сучасній освіті» · 2024</span></article>
            <article><strong>Аркасівські читання</strong><span>Щорічна учнівська дослідницька традиція з 1994 року</span></article>
            <article><strong>Всеукраїнські олімпіади</strong><span>Призові місця з української мови, літератури та історії</span></article>
          </div>
        </div>
      </section>

      <section className="people section-shell">
        <div className="people-quote"><span>Ліцей — це люди</span><h2>Будівлі створюють простір.<br /><em>Люди створюють школу.</em></h2></div>
        <div className="people-links">
          <a href="#kontakty"><Users /><span><b>Наші учні</b><small>Ідеї, відкриття, перемоги</small></span><ArrowRight /></a>
          <a href="#kontakty"><Sparkles /><span><b>Наші вчителі</b><small>Досвід, підтримка, натхнення</small></span><ArrowRight /></a>
          <a href="#kontakty"><GraduationCap /><span><b>Наші випускники</b><small>Історії, що продовжуються</small></span><ArrowRight /></a>
        </div>
      </section>

      <section className="life section-shell" id="zhyttia">
        <div className="section-intro"><span>Не лише уроки</span><h2>Середовище, у якому хочеться зростати</h2></div>
        <div className="life-grid">{life.map(([title, text], i) => <article key={title} id={i === 5 ? "seredovyshche" : undefined}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="resilience" id="vidnovlennia">
        <Image src="/lyceum-history.jpg" alt="Будівля ліцею після російського ракетного удару 2022 року" fill sizes="100vw" />
        <div className="resilience-overlay" />
        <div className="resilience-copy"><span>Наш дім. Наша пам’ять.</span><h2>Історію не зруйнувати</h2><p>У 2022 році російська ракета зруйнувала центральну частину історичної будівлі. Та навчання, традиції й спільнота продовжили жити. У 2026 році триває реставрація збереженої пам’ятки та облаштування безпечного освітнього простору.</p><div className="restoration-line"><span>Вистояли</span><i /><span>Відновлюємо</span><i /><span>Повернемося</span></div></div>
      </section>

      <section className="news section-shell">
        <div className="section-intro"><span>Життя ліцею</span><h2>Події, якими пишаємося</h2></div>
        <div className="news-grid">
          <article className="news-featured"><span className="news-date">Жовтень 2024</span><h3>Золото міжнародної виставки «Інноватика в сучасній освіті»</h3><p>Ліцей відзначено за створення та впровадження інноваційних освітніх проєктів.</p><a href="https://sites.google.com/arkasgymn1.com.ua/arkasgymn1/%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8">Читати на старому сайті <ArrowRight size={16} /></a></article>
          <article><CalendarDays /><span className="news-date">Традиція з 1994 року</span><h3>Аркасівські читання: учнівська наука має власний голос</h3></article>
          <article><GraduationCap /><span className="news-date">Березень 2024</span><h3>Призові місця на всеукраїнській олімпіаді з української мови</h3></article>
        </div>
      </section>

      <section className="admission section-shell" id="vstup">
        <div><span className="eyebrow">Вступ до ліцею</span><h2>Станьте частиною спільноти Аркаса</h2><p>Дізнайтеся про освітні можливості, актуальні умови вступу та перелік необхідних документів безпосередньо в адміністрації ліцею.</p></div>
        <a className="button button-gold" href="mailto:arkasgymn1@ukr.net?subject=%D0%92%D1%81%D1%82%D1%83%D0%BF%20%D0%B4%D0%BE%20%D0%BB%D1%96%D1%86%D0%B5%D1%8E">Запитати про вступ <Mail size={18} /></a>
      </section>

      <footer id="kontakty">
        <div className="footer-main section-shell">
          <div className="footer-brand"><span className="brand-mark">А</span><h2>Миколаївський ліцей<br />імені Миколи Аркаса</h2><p>Традиції, що формують майбутнє.</p></div>
          <div><h3>Про ліцей</h3><a href="#pro-licei">Історія</a><a href="#arkas">Микола Аркас</a><a href="#dosiahnennia">Досягнення</a><a href="#vidnovlennia">Відновлення</a></div>
          <div><h3>Освіта</h3><a href="#osvita">Освітні напрями</a><a href="#zhyttia">Ліцейне життя</a><a href="#vstup">Вступ</a><a href="#top">На початок</a></div>
          <div><h3>Зв’язок</h3><p><MapPin size={16} /> вул. Вадима Благовісного, 34<br />Миколаїв, Україна</p><a href="mailto:arkasgymn1@ukr.net"><Mail size={16} /> arkasgymn1@ukr.net</a></div>
        </div>
        <div className="footer-bottom section-shell"><span>© 2026 Миколаївський ліцей імені Миколи Аркаса</span><span>Концепт нової офіційної вебсторінки</span></div>
      </footer>
    </main>
  );
}
