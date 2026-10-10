import Btn from '../common/Btn'
import useGo from '../../hooks/useGo'

export default function DomainsHero() {
  const go = useGo()
  return (
    <section className="bg-tu-navy text-white">
      <div className="mx-auto grid max-w-[1100px] items-center gap-8 px-6 py-14 lg:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-bold leading-snug">Custom Domains:<br />Your Links, Your Branding</h1>
          <p className="mt-6 leading-7">Branded domains create short, appealing links that put your brand or core message front and center.</p>
          <p className="mt-4 leading-7">Subscribers can buy domains right on the platform. Give it a try!</p>
          <Btn className="mt-6 !py-2.5 text-sm" onClick={() => go('plans')}>Get Started</Btn>
        </div>
        <img
          src="https://tinyurl.com/images/overhauling/domains/figure-1.webp"
          alt="Branded custom domain links"
          className="h-72 w-full rounded-2xl object-contain"
          loading="lazy"
        />
      </div>
    </section>
  )
}
