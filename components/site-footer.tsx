import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              width={44}
              height={44}
              className="size-10 object-contain"
            />
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.slogan}. {site.serviceArea}, restoring and protecting asphalt shingle roofs with
            advanced nano-technology.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Pages</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a free quote
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>
            {`\u00A9 ${new Date().getFullYear()} ${site.name}. All rights reserved.`}
          </p>
          <p>{site.slogan}</p>
        </div>
      </div>
    </footer>
  )
}
