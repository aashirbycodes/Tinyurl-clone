import { useState } from 'react'
import Btn from '../common/Btn'
import Slider from './Slider'

export default function PlanCard({ p, annual }) {
  const [i, setI] = useState(0)
  const n = p.steps[i].toLocaleString()
  const Perk = ({ t, s }) => <li className="flex gap-2"><span className="text-tu-green">✓</span><span><span className="font-medium">{t}</span>{s && <span className="block text-xs text-slate-500">{s}</span>}</span></li>
  return (
    <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-6">
      <h3 className="font-heading text-xl font-medium">{p.name}</h3>
      <p className="mt-3 font-heading"><span className="text-3xl font-bold">${annual ? p.yr : p.mo}</span> <span className="text-lg text-slate-500">/ {annual ? 'yr' : 'mo'} *</span></p>
      <p className="mt-1 text-sm">( ${annual ? p.mo + ' / mo' : p.yr + ' / yr'} )</p>
      <p className="mt-6 min-h-[48px] text-sm leading-4">{p.desc}</p>
      <Slider steps={p.steps} v={i} set={setI} />
      <ul className="mt-5 min-h-[130px] space-y-3 text-sm">
        <Perk t={`${n} Links / mo`} s={p.extra} />
        {p.bulk ? <Perk t={`${n} Tracked Clicks / mo`} s="+$0.60 per 1000 additional clicks*" /> : <Perk t={p.clicks} />}
        <Perk t={p.domains} />
      </ul>
      <Btn v="green" className="mt-4 w-full">Subscribe Now</Btn>
    </div>
  )
}
