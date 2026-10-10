import Ph from '../common/Ph'
import { how } from '../../data/domains'

export default function HowBranded() {
  return (
    <section className="bg-tu-bg py-16">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="text-center font-heading text-2xl font-bold">How You Can Use Branded Domains on TinyURL</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {how.map(([t, p, i, l], index) => (
            <div key={t}>
              <h3 className="font-heading font-bold">{t}</h3>
              <p className="mt-4 min-h-[110px] text-sm leading-6 text-slate-700">{p}</p>
              {index < 3 ? (
                <img
                  src={`https://tinyurl.com/images/overhauling/domains/figure-${index + 2}.webp`}
                  alt={t}
                  className="mt-4 h-36 w-full rounded-2xl object-contain"
                  loading="lazy"
                />
              ) : (
                <Ph icon={i} label={l} tone="teal" className="mt-4 h-36" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
