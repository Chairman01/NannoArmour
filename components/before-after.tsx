import Image from 'next/image'

export function BeforeAfter() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/80">
          The difference
        </p>
        <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Tired shingles, brought back to life
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Dry, brittle shingles lose the flexibility that keeps them weatherproof. Nano Armor penetrates
          and restores them so they can keep protecting your home.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="relative">
            <Image
              src="/images/shingles-before.png"
              alt="Close-up of dry, cracked, weathered asphalt shingles with granule loss"
              width={720}
              height={480}
              className="h-64 w-full object-cover md:h-72"
            />
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
              Before
            </span>
          </div>
          <figcaption className="p-5 text-sm leading-relaxed text-muted-foreground">
            Aged shingles that are dry, faded, and losing granules.
          </figcaption>
        </figure>

        <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="relative">
            <Image
              src="/images/shingles-after.png"
              alt="Close-up of restored, flexible, richly colored asphalt shingles"
              width={720}
              height={480}
              className="h-64 w-full object-cover md:h-72"
            />
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              After
            </span>
          </div>
          <figcaption className="p-5 text-sm leading-relaxed text-muted-foreground">
            Treated shingles with restored flexibility and protection.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
