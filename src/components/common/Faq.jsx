import { useState } from 'react'

export default function Faq({ items }) {
  const [o, setO] = useState(null)
  return (
    <section className="bg-tu-bg py-20">
      <div className="mx-auto grid max-w-[1380px] gap-8 px-6 lg:grid-cols-[1fr_2.2fr]">
        <h2 className="self-center font-heading text-3xl font-bold leading-tight">Frequently<br />Asked<br />Questions</h2>
        <div className="border-t border-slate-300">
          {items.map(([q, a], i) => (
            <div key={q} className="border-b border-slate-300">
              <button onClick={() => setO(o === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left font-heading text-sm font-bold">
                {q}<span className={`transition ${o === i ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              {o === i && <p className="px-6 pb-5 text-sm leading-6 text-slate-600">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
