import { ClipboardCheck, SprayCan, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Free roof inspection',
    body: 'We assess your shingles and confirm your roof is a good candidate for treatment before any work begins.',
  },
  {
    icon: SprayCan,
    title: 'Nano Armor treatment',
    body: 'We apply our advanced nano-technology, which penetrates and restores flexibility to dry, aging asphalt shingles.',
  },
  {
    icon: ShieldCheck,
    title: 'Protected against the elements',
    body: 'Your shingles regain water resistance and UV protection, built to stand up to sun, rain, wind, and snow.',
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/80">
          How it works
        </p>
        <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
          A simple, three-step process
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Treatment is faster, cleaner, and far less disruptive than a full tear-off. Most roofs are
          done in a single visit.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="absolute right-5 top-5 font-serif text-4xl font-semibold text-secondary">
              {`0${i + 1}`}
            </span>
            <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <step.icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
