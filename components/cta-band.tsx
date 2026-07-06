import Link from 'next/link'
import { Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between md:px-6 md:py-16">
        <div className="max-w-xl">
          <h2 className="text-balance font-serif text-3xl font-semibold md:text-4xl">
            Find out if your roof is a candidate
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/80">
            Get a free, no-obligation inspection and quote. We will tell you honestly whether
            rejuvenation is right for your roof.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get a free quote
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 px-6 py-3 text-base font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
