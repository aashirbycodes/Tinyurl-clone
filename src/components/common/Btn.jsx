export default function Btn({ v = 'teal', className = '', ...p }) {
  const c = { teal: 'bg-tu-teal text-white', white: 'bg-white text-slate-900', navy: 'bg-tu-navy text-white', green: 'bg-tu-green text-white' }[v]
  return <button className={`rounded px-4 py-3 text-base font-medium transition hover:opacity-90 ${c} ${className}`} {...p} />
}
