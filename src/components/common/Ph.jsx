const tones = {
  teal: 'bg-gradient-to-br from-tu-teal to-tu-navy text-white',
  green: 'bg-gradient-to-br from-tu-green to-emerald-900 text-white',
  gold: 'bg-gradient-to-br from-amber-400 to-amber-700 text-white',
  soft: 'bg-slate-200 text-slate-500',
}

// Placeholder for pictures: apni images yahan <img src=... /> se replace kar do
export default function Ph({ icon = '🖼️', label = 'Image here', tone = 'soft', className = 'h-48' }) {
  return (
    <div className={`grid place-items-center rounded-2xl text-center ${tones[tone]} ${className}`}>
      <div>
        <div className="text-5xl">{icon}</div>
        <div className="mt-2 text-xs font-semibold uppercase tracking-wider opacity-80">{label}</div>
      </div>
    </div>
  )
}
