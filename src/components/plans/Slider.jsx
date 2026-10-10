import { short } from '../../utils/format'

export default function Slider({ steps, v, set }) {
  return (
    <div className="mt-8">
      <div className="flex justify-between text-sm font-semibold"><span>{short(steps[0])}</span><span>{short(steps[steps.length - 1])}</span></div>
      <input type="range" min="0" max={steps.length - 1} value={v} onChange={(e) => set(+e.target.value)} className="mt-1 w-full accent-tu-green" />
    </div>
  )
}
