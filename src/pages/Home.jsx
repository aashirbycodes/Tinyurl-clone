import Hero from '../components/home/Hero'
import PlansInclude from '../components/home/PlansInclude'
import OneStop from '../components/home/OneStop'
import Stats from '../components/home/Stats'
import Band from '../components/common/Band'
import Btn from '../components/common/Btn'
import Faq from '../components/common/Faq'
import Cta from '../components/common/Cta'
import useGo from '../hooks/useGo'
import { homeFaq } from '../data/home'

export default function Home() {
  const go = useGo()
  return (
    <>
      <Hero />
      <PlansInclude />
      <Band icon="📱" label="Image here" title="Link Shortening Done Quick and Easy"
        image="https://tinyurl.com/build/assets/shortener-video-5-iGTGim.webp"
        paras={['Our URL shortener is among the earliest on the web, and still one of the best.', 'Shorten links for social posts, blogs, SMS, email, ads and nearly anything online or offline.', 'Say goodbye to long, clunky links and give your audience a smoother experience.']}
        buttons={<><Btn v="white" onClick={() => go('plans')}>View Plans</Btn><Btn v="navy">Contact Sales</Btn></>} />
      <OneStop />
      <Stats />
      <Faq items={homeFaq} />
      <Cta />
    </>
  )
}
