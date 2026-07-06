import type { Metadata } from 'next'
import Image from 'next/image'
import { Home, Building2, Search, SprayCan, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { HowItWorks } from '@/components/how-it-works'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'How It Works | Nano Armor',
  description:
    'Nano Armor roof rejuvenation for homes and businesses, plus free roof inspections. Restore and protect aging asphalt shingles for a fraction of replacement cost.',
}

const services = [
  {
    icon: Home,
    title: 'Residential roofs',
    body: 'Protect the roof over your family. We treat aging asphalt shingles on homes to restore flexibility and add years of protection.',
  },
  {
    icon: Building2,
    title: 'Commercial and condo boards',
    body: 'Property managers, business owners, and condo and strata boards can cut roofing budgets by treating sound roofs instead of replacing them.',
  },
  {
    icon: Search,
    title: 'Free roof inspections',
    body: 'Not sure where your roof stands? We inspect your shingles and give you an honest recommendation, no pressure.',
  },
  {
    icon: SprayCan,
    title: 'Nano-technology treatment',
    body: 'Our advanced treatment penetrates aging asphalt shingles to restore flexibility, water resistance, and UV protection.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Roof care that saves you money"
        subtitle="Homes come first, but we also help commercial properties and condo and strata boards. Every job starts with an honest inspection, so you only pay for what your roof actually needs."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <s.icon className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src="/images/technician-real.png"
              alt="A Nano Armor technician applying roof treatment with a backpack sprayer on an asphalt shingle roof"
              width={720}
              height={860}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/80">
              Done right
            </p>
            <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Careful work, on your roof
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every roof is treated using safe application methods and full, even coverage. We treat your
              property with the same care we would give our own.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                'Thorough pre-treatment inspection',
                'Even, complete shingle coverage',
                'Clean, respectful job sites',
                'Built for Canadian weather',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HowItWorks />
      <CtaBand />
    </>
  )
}
