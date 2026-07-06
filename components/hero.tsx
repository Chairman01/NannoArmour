import Link from 'next/link'
import Image from 'next/image'
import { Phone, Check } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-6 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            Nano-technology roof treatment
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Protect your roof against time and weather
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Nano Armor restores and protects aging asphalt shingles built for Canadian weather, so your
            roof lasts years longer at a fraction of the cost of a full replacement.
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {site.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get a free quote
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/technician-real.png"
              alt="A Nano Armor technician applying roof treatment with a backpack sprayer on an asphalt shingle roof by a lake"
              width={720}
              height={860}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-md md:-left-6">
            <div>
              <p className="font-serif text-2xl font-semibold text-primary">Save thousands</p>
              <p className="text-xs text-muted-foreground">versus a full roof replacement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
