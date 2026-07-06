import type { Metadata } from 'next'
import { Heart, Handshake, Recycle } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About | Nano Armor',
  description:
    'Nano Armor is a Canadian roof rejuvenation company helping homeowners and businesses get more life out of their roofs with advanced nano-technology.',
}

const values = [
  {
    icon: Handshake,
    title: 'Honest recommendations',
    body: 'If your roof needs replacing, we will tell you. We only recommend treatment when it genuinely makes sense for you.',
  },
  {
    icon: Heart,
    title: 'Homeowners first',
    body: 'We treat every roof like it belongs to family, because for many of our neighbours, it does.',
  },
  {
    icon: Recycle,
    title: 'Less waste',
    body: 'Every roof we treat keeps usable shingles out of the landfill and money in your pocket.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Protecting your roof against time and weather"
        subtitle="Nano Armor was founded on a simple idea: most aging roofs can be protected instead of replaced. We help homeowners and businesses across Canada protect their roofs and their budgets."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <div className="prose-lg space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Too many people are told they need a full, expensive roof replacement when their shingles
            still have years of life left in them. We started Nano Armor to offer a smarter first step:
            an advanced treatment that restores and protects aging asphalt shingles instead of tearing
            them off.
          </p>
          <p>
            Our nano-technology penetrates and revitalizes the shingles you already have, restoring
            flexibility and water resistance. When shingles dry out they become brittle, lose granules,
            and start to fail. Nano Armor helps bring them back, extending the useful life of a roof for
            a fraction of what replacement costs.
          </p>
          <p>
            Built for the demanding conditions of Canadian weather, Nano Armor delivers durable
            protection against sun, rain, wind, snow, and temperature extremes. Whether you own a single
            home or manage a commercial building or condo board, we are here to help you get the most out
            of the roof you already have.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <v.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
