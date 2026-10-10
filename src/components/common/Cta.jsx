import Btn from './Btn'
import useGo from '../../hooks/useGo'

export default function Cta({ plans = true }) {
  const go = useGo()
  return (
    <section className="bg-tu-navy px-6 py-20 text-center text-white">
      <h2 className="font-heading text-3xl font-bold">Ready for Shorter, Smarter Links?</h2>
      <p className="mt-4">Turn a long link into a short, trackable one. Create a free account or pick a paid plan today!</p>
      <div className="mt-6 flex justify-center gap-4">
        {plans && <Btn v="white" onClick={() => go('plans')}>View Plans</Btn>}
        <Btn onClick={() => go('signup')}>Create Free Account</Btn>
      </div>
    </section>
  )
}
