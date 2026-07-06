import { Check, X } from 'lucide-react'

const rejuvenate = [
  'A fraction of the cost',
  'Done in a single visit, no tear-off',
  'No landfill waste from old shingles',
  'Restores flexibility and water resistance',
  'Minimal disruption to your home',
]

const replace = [
  'Thousands of dollars in materials and labor',
  'Days of noisy, disruptive work',
  'Tons of old shingles sent to landfill',
  'Only needed once shingles truly fail',
  'Heavy foot traffic and debris around your home',
]

export function Compare() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/80">
            Rejuvenate vs replace
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Why replace what you can restore?
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            If your shingles are aging but structurally sound, rejuvenation is the smarter first step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-primary bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-serif text-2xl font-semibold text-primary">Rejuvenation</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {rejuvenate.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-serif text-2xl font-semibold text-muted-foreground">
              Full replacement
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {replace.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
