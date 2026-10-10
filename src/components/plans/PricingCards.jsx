import Toggle from '../common/Toggle'
import Btn from '../common/Btn'
import PlanCard from './PlanCard'
import { paid } from '../../data/plans'

export default function PricingCards({ annual, setAnnual }) {
  return (
    <section className="bg-tu-bg pb-16 pt-16">
      <div className="mx-auto max-w-[1380px] px-6">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-heading text-4xl font-bold">Find a plan that meets your needs</h1>
          <Toggle annual={annual} set={setAnnual} />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_3fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold leading-tight">Get personal with branded links</h2>
            <p className="mt-6 leading-7">Paid tiers add powerful link branding and customization.</p>
            <p className="mt-5 leading-7">Why settle for being noticed when you can be remembered?</p>
            <p className="mt-10 text-xs italic">* Listed prices exclude any applicable taxes.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {paid.map((p) => <PlanCard key={p.name} p={p} annual={annual} />)}
            <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-heading text-xl font-medium">Enterprise</h3>
              <p className="mt-3 font-heading text-3xl font-bold">Custom</p>
              <p className="mt-1 text-sm">( Starts at $3,999 / yr )</p>
              <p className="mt-6 min-h-[48px] text-sm leading-4">A tailor-made plan for enterprises that need more than our regular plans offer.</p>
              <ul className="mt-12 min-h-[130px] space-y-2 text-sm">
                {['Custom Number of Links', 'Custom Number of Tracked Clicks', 'Custom Number of Branded Domains', '99.9% SLA-backed uptime guarantees', 'Custom Solutions for Compliance Needs'].map((t) => <li key={t} className="flex gap-2"><span className="text-tu-green">✓</span>{t}</li>)}
              </ul>
              <Btn v="green" className="mt-4 w-full">Contact Sales</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
