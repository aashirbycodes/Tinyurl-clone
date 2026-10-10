import { useState } from 'react'
import Toggle from '../common/Toggle'
import Btn from '../common/Btn'
import Cell from './Cell'
import { sections } from '../../data/plans'

const cols = 'grid grid-cols-[1.6fr_repeat(4,1fr)]'

export default function FeatureBreakdown({ annual, setAnnual }) {
  const [tab, setTab] = useState(sections[0][0])
  const jump = (t) => { setTab(t); document.getElementById(t)?.scrollIntoView({ behavior: 'smooth' }) }
  const mini = [['Free', '$0', '/ mo', 'Sign Up'], ['Pro', annual ? '$108' : '$9', annual ? '/ yr *' : '/ mo *', 'Subscribe Now'], ['Bulk 50K', annual ? '$828' : '$69', annual ? '/ yr *' : '/ mo *', 'Subscribe Now'], ['Enterprise', 'Custom', '', 'Contact Sales']]
  return (
    <section className="bg-tu-bg pb-16">
      <div className="mx-auto max-w-[1380px] px-6">
        <h2 className="font-heading text-3xl font-bold">Feature Breakdown</h2>
        <p className="mt-4">Compare everything included in each subscription plan to find the right fit.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-[310px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-5">
              <Toggle annual={annual} set={setAnnual} />
              <div className="space-y-5 pt-10">
                {sections.map(([t]) => (
                  <button key={t} onClick={() => jump(t)} className={`block w-full rounded px-3 py-3.5 text-lg ${tab === t ? 'bg-tu-navy font-medium text-white' : 'bg-white'}`}>{t}</button>
                ))}
              </div>
            </div>
          </aside>
          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <div className={`${cols} sticky top-0 z-10 items-end bg-tu-bg`}>
                <p className="pb-2 text-xs italic">* Listed prices exclude any applicable taxes.</p>
                {mini.map(([n, pr, u, b]) => (
                  <div key={n} className="m-px rounded-t border border-slate-200 bg-white p-3">
                    <p className="text-xs">{n}</p>
                    <p className="mt-1 font-heading"><span className="text-xl font-bold">{pr}</span> <span className="text-[10px] text-slate-500">{u}</span></p>
                    <Btn v="green" className="mt-3 w-full !px-1 !py-2 text-xs">{b}</Btn>
                  </div>
                ))}
              </div>
              {sections.map(([t, rows]) => (
                <div key={t} id={t} className="mt-8 scroll-mt-36 first:mt-0">
                  <div className="rounded-t bg-tu-navy py-2.5 text-center text-lg text-white">{t}</div>
                  <div className="bg-white">
                    {rows.map(([l, vals]) => (
                      <div key={l} className={`${cols} items-center border-b border-slate-100 py-4`}>
                        <span className="px-3 text-sm font-bold">{l} <span className="text-slate-400">ⓘ</span></span>
                        {vals.map((v, i) => <Cell key={i} v={v} />)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
