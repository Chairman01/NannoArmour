import type { Metadata } from 'next'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { QuoteForm } from '@/components/quote-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Nano Armor',
  description:
    'Request a free roof rejuvenation quote or call us directly. Serving homes and businesses across Canada.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get your free quote"
        subtitle="Call us directly or send a request and we will get right back to you. Every quote is free with no obligation."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <a
              href={site.phoneHref}
              className="flex items-center gap-4 rounded-xl border-2 border-primary bg-primary p-6 text-primary-foreground shadow-sm transition-opacity hover:opacity-95"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                <Phone className="size-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-primary-foreground/80">Call for a free quote</span>
                <span className="block font-serif text-2xl font-semibold">{site.phone}</span>
              </span>
            </a>

            <dl className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-foreground">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-foreground">Service area</dt>
                  <dd className="text-sm text-muted-foreground">{site.serviceArea}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-foreground">Hours</dt>
                  <dd className="text-sm text-muted-foreground">Monday to Saturday, 8am to 6pm</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 rounded-xl border border-border bg-secondary p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Prefer to talk it through?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Give us a call and we will answer your questions about whether Nano Armor is right for
                your roof. No pressure, no obligation.
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  )
}
