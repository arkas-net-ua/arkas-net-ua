import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowRight, BookOpen, Landmark, Sprout, Users } from 'lucide-react'

export function ReferenceHero() {
  const host = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const fit = () => { if (host.current) setScale(Math.min(host.current.clientWidth / 1672, host.current.clientHeight / 941)) }
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(host.current!)
    return () => observer.disconnect()
  }, [])
  return (
    <div className="arkas-intro" ref={host}>
      <div className="arkas-design arkas-design-no-head" style={{ '--art-scale': scale } as React.CSSProperties}>
        <div className="arkas-kicker">1993 — СЬОГОДНІ</div>
        <h1 className="arkas-title"><em>Більше,</em><span>НІЖ ШКОЛА</span></h1>
        <p className="arkas-lead">Люди. Ідеї. Можливості.<br />Тут народжується покоління,<br />що змінює Україну.</p>
        <div className="arkas-actions"><a className="arkas-button" href="#vstup">Вступ 2026 <ArrowRight /></a><a className="arkas-story" href="#pro-licei"><i>▶</i><span>Дивитися історію</span></a></div>
        <aside className="arkas-signature"><em>Микола Аркас</em><p>СПАДЩИНА,<br />ЩО НАДИХАЄ</p></aside>
        <div className="arkas-pillars">
          {([[BookOpen, 'Освіта', 'з характером', 'osvita'], [Landmark, 'Сучасні', 'можливості', 'osvita'], [Sprout, 'Активне', 'учнівське життя', 'zhyttia'], [Users, 'Сильна', 'спільнота', 'spilnota']] as const).map(([Icon, a, b, id], i) => (
            <a href={`#${id}`} key={i}><Icon /><span>{a}<br />{b}</span></a>
          ))}
        </div>
        <div className="arkas-numbers"><div><strong>1993</strong><span>ПОЧАТОК ГІМНАЗІЇ</span></div><div><strong>1994</strong><span>ПЕРШІ АРКАСІВСЬКІ ЧИТАННЯ</span></div><div><span>СУЧАСНА<br />ОСВІТА</span></div><div><span>АКТИВНЕ<br />ЛІЦЕЙСЬКЕ ЖИТТЯ</span></div><blockquote>Традиції. Знання.<br />Люди. Майбутнє.</blockquote></div>
      </div>
    </div>
  )
}
