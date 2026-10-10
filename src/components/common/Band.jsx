import Ph from './Ph'

export default function Band({ icon, label, title, paras, buttons, image }) {
  return (
    <section className="bg-tu-band">
      <div className="mx-auto grid max-w-[1300px] items-center lg:grid-cols-2">
        {image ? (
          <img src={image} alt={title} className="h-72 w-full object-contain lg:h-full lg:min-h-[320px]" loading="lazy" />
        ) : (
          <Ph icon={icon} label={label} tone="green" className="h-72 !rounded-none lg:h-full lg:min-h-[320px]" />
        )}
        <div className="px-8 py-14 text-white lg:px-16">
          <h2 className="font-heading text-3xl font-bold leading-snug">{title}</h2>
          {paras.map((t) => <p key={t} className="mt-4 leading-7">{t}</p>)}
          <div className="mt-6 flex gap-4">{buttons}</div>
        </div>
      </div>
    </section>
  )
}
