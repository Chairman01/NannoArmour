export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
