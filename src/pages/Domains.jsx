import DomainsHero from '../components/domains/DomainsHero'
import HowBranded from '../components/domains/HowBranded'
import BrandRows from '../components/domains/BrandRows'
import Band from '../components/common/Band'
import Btn from '../components/common/Btn'
import Faq from '../components/common/Faq'
import Cta from '../components/common/Cta'
import useGo from '../hooks/useGo'
import { domFaq } from '../data/domains'

export default function Domains() {
  const go = useGo()
  return (
    <>
      <DomainsHero />
      <HowBranded />
      <Band icon="💻" label="Image here" title="Get the First Year Free for Certain Domains"
        image="https://tinyurl.com/build/assets/domains-video-DrpfVwXW.webp"
        paras={['To get you started, selected .life, .live and .info domains are free for the first year.', 'Standard billing applies after the free year.']}
        buttons={<><Btn v="white" onClick={() => go('plans')}>View Plans</Btn><Btn v="navy">Contact Sales</Btn></>} />
      <BrandRows />
      <Faq items={domFaq} />
      <Cta />
    </>
  )
}
