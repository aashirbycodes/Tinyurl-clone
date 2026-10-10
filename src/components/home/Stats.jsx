export default function Stats() {
  return (
    <section className="bg-tu-navy text-white">
      <div className="mx-auto grid max-w-[1380px] items-center lg:grid-cols-2">
        <div className="px-6 py-14">
          <h2 className="font-heading text-3xl font-bold leading-snug">Transforming the Digital<br />Landscape Since ‘02</h2>
          <p className="mt-5 max-w-lg leading-7">TinyURL has created billions of short links for marketers, creators, small businesses and large companies.</p>
          <div className="mt-8 space-y-6">
            {[['Billions', 'of redirects per month'], ['24 years', 'of shortening URLs'], ['32,819,357,064', 'TinyURLs created']].map(([a, b]) => (
              <div key={a} className="grid grid-cols-[1fr_1.1fr] items-center"><span className="font-heading text-3xl font-bold">{a}</span><span>{b}</span></div>
            ))}
          </div>
        </div>
        <img
          src="https://tinyurl.com/build/assets/platform-highlight-video-D3DEDauT.webp"
          alt="TinyURL platform analytics"
          className="h-72 w-full object-contain lg:h-full lg:min-h-[360px]"
          loading="lazy"
        />
      </div>
    </section>
  )
}
