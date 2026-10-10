import { useState } from 'react'
import PricingCards from '../components/plans/PricingCards'
import FeatureBreakdown from '../components/plans/FeatureBreakdown'
import Band from '../components/common/Band'
import Btn from '../components/common/Btn'
import Faq from '../components/common/Faq'
import Cta from '../components/common/Cta'
import { plansFaq } from '../data/plans'

export default function Plans() {
  const [annual, setAnnual] = useState(false)
  return (
    <>
      <PricingCards annual={annual} setAnnual={setAnnual} />
      <FeatureBreakdown annual={annual} setAnnual={setAnnual} />
      <Band icon="👥" label="Image here" title="The URL Shortener Trusted by 4,501,286 Users"
        image="https://tinyurl.com/build/assets/user-highlight-video-CTCkzCUV.webp"
        paras={['TinyURL has created billions of short links for marketers, creators, small businesses and large companies. Teams around the world use it to manage links and grow their brands.']}
        buttons={<><Btn v="white">Create Free Account</Btn><Btn v="navy">Contact Sales</Btn></>} />
      <Faq items={plansFaq} />
      <Cta plans={false} />
    </>
  )
}
