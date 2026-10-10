import Ph from '../common/Ph'
import { rows } from '../../data/domains'

export default function BrandRows() {
  return (
    <>
      {rows.map(([t, p, i, l], k) => (
        <section key={t} className={k % 2 ? 'bg-tu-bg' : 'bg-white'}>
          <div className={`mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-14 lg:grid-cols-2 ${k % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            {l === 'Branded link' || l === 'Image here' || l === 'Top referrer' || l === 'Link list' ? (
              <img
                src={
                  l === 'Top referrer' || l === 'Link list'
                    ? `https://tinyurl.com/images/overhauling/short-url-tracking/figure-${l === 'Top referrer' ? 7 : 8}.webp`
                    : `https://tinyurl.com/images/overhauling/domains/figure-${l === 'Branded link' ? 5 : 6}.webp`
                }
                alt={t}
                className="h-60 w-full rounded-lg object-contain"
                loading="lazy"
              />
            ) : (
              <Ph icon={i} label={l} tone={k % 2 ? 'gold' : 'green'} className="h-60" />
            )}
            <div>
              <h3 className="font-heading text-2xl font-bold leading-snug">{t}</h3>
              <p className="mt-5 text-sm leading-6 text-slate-700">{p}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
