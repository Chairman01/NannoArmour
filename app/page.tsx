import { Hero } from '@/components/hero'
import { Trust } from '@/components/trust'
import { HowItWorks } from '@/components/how-it-works'
import { BeforeAfter } from '@/components/before-after'
import { Compare } from '@/components/compare'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <HowItWorks />
      <BeforeAfter />
      <Compare />
      <CtaBand />
    </>
  )
}
