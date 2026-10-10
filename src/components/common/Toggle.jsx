export default function Toggle({ annual, set }) {
  return (
    <div className="inline-flex rounded-full bg-tu-teal p-1 text-xs font-bold">
      <button onClick={() => set(false)} className={`rounded-full px-3 py-1.5 ${!annual ? 'bg-white text-slate-900' : 'text-white'}`}>Monthly</button>
      <button onClick={() => set(true)} className={`rounded-full px-3 py-1.5 ${annual ? 'bg-white text-slate-900' : 'text-white'}`}>Annually</button>
    </div>
  )
}
