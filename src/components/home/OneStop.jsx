import Btn from '../common/Btn'
import useGo from '../../hooks/useGo'

const Card = ({ t, p, hl }) => (
  <div className={`rounded-lg p-6 ${hl ? 'bg-tu-tint' : ''}`}>
    <h3 className="font-heading text-2xl font-bold leading-tight">{t}</h3>
    <p className="mt-5 leading-8 text-slate-700">{p}</p>
  </div>
)

export default function OneStop() {
  const go = useGo()
  return (
    <section className="bg-tu-bg py-20">
      <div className="mx-auto max-w-[1380px] px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold">Your One-Stop Solution for Branding and Managing Links</h2>
          <p className="mt-5">A full set of premium features to help you brand and manage links with confidence.</p>
          <Btn className="mt-6" onClick={() => go('plans')}>View Plans</Btn>
        </div>
        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div className="space-y-8">
            <Card hl t="Unlimited Tracked Clicks" p="No penalty for being successful: track every click you earn on Pro plans." />
            <Card t="Detailed Link Analytics" p="Get actionable insight into traffic from social, email, ads and any other channel where clicks matter." />
            <Card t="Branded Domains" p="Links on your own custom domain look more professional, earn more trust and get more clicks." />
          </div>
          <div className="h-[480px] overflow-hidden rounded-2xl">
            <img
              src="https://tinyurl.com/images/overhauling/card-feature-4.webp"
              alt="Detailed link analytics dashboard"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="space-y-8">
            <Card t="Fully Custom Links" p="Create short links that put your brand front and center. Connecting your domain is quick and simple." />
            <Card t="Bulk Short URLs" p="Need lots of unique links fast? Shorten many at once on the platform or through the API." />
            <Card hl t="Link Management" p="Easily find that one important link among thousands with intuitive management tools." />
          </div>
        </div>
      </div>
    </section>
  )
}
