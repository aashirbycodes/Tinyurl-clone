import Ph from '../common/Ph'
import { include } from '../../data/home'

export default function PlansInclude() {
  return (
    <section className="bg-tu-bg py-20">
      <h2 className="text-center font-heading text-3xl font-bold">TinyURL Plans Include:</h2>
      <div className="mx-auto mt-14 grid max-w-[1380px] gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {include.map(([t, p, i, l]) => (
          <div key={t}>
            <h3 className="font-heading text-2xl font-bold leading-tight">{t}</h3>
            <p className="mt-6 min-h-[120px] leading-7 text-slate-700">{p}</p>
            {t === 'Detailed Link Analytics' || t === 'Fully Branded Domains' || t === 'Bulk Short URLs' || t === 'Link Management' ? (
              <img
                src={
                  t === 'Detailed Link Analytics'
                    ? 'https://tinyurl.com/build/assets/feature-1-DBj-yszF.webp'
                    : t === 'Fully Branded Domains'
                      ? 'https://tinyurl.com/build/assets/feature-2-CK8gMGGN.webp'
                      : t === 'Bulk Short URLs'
                        ? 'https://tinyurl.com/build/assets/feature-3-DxHuNqyl.webp'
                        : 'https://tinyurl.com/build/assets/feature-4-B9Ltz0dA.webp'
                }
                alt={t}
                className="mt-4 h-44 w-full rounded-2xl object-contain"
                loading="lazy"
              />
            ) : (
              <Ph icon={i} label={l} tone="teal" className="mt-4 h-44" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
