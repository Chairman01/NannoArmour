import { Snowflake, Leaf, PiggyBank, Clock } from 'lucide-react'

const points = [
  { icon: Snowflake, title: 'Built for Canadian weather', body: 'Protection against sun, rain, wind, snow, and temperature extremes.' },
  { icon: PiggyBank, title: 'Real savings', body: 'A fraction of the cost of a full roof replacement.' },
  { icon: Clock, title: 'Fast, single-visit', body: 'Most roofs are treated in one appointment.' },
  { icon: Leaf, title: 'Less waste', body: 'Keeps usable shingles out of the landfill.' },
]

export function Trust() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="flex flex-col items-start">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
