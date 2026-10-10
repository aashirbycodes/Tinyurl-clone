import { Y, N } from '../../data/plans'

export default function Cell({ v }) {
  const [a, b] = Array.isArray(v) ? v : [v]
  return (
    <div className="flex flex-col items-center justify-center px-1 text-center text-sm">
      {a === Y ? <span className="text-lg font-bold text-tu-green">✓</span> : a === N ? <span className="text-slate-500">✕</span> : <span>{a}</span>}
      {b && <span className="mt-1 text-[11px] leading-3 text-slate-500">{b}</span>}
    </div>
  )
}
