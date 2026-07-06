'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { submitQuote, type QuoteState } from '@/app/actions/quote'

const initialState: QuoteState = { status: 'idle', message: '' }

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30'
const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? 'Sending...' : 'Request my free quote'}
    </button>
  )
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuote, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-xl border border-primary/30 bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">Request received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <h2 className="font-serif text-2xl font-semibold text-foreground">Request a free quote</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Tell us about your roof and we will get back to you.
      </p>

      {state.status === 'error' && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-destructive">*</span>
          </label>
          <input id="name" name="name" required className={inputClass} autoComplete="name" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-destructive">*</span>
          </label>
          <input id="phone" name="phone" required type="tel" className={inputClass} autoComplete="tel" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" className={inputClass} autoComplete="email" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelClass}>
            Property address
          </label>
          <input id="address" name="address" className={inputClass} autoComplete="street-address" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="propertyType" className={labelClass}>
            Property type
          </label>
          <select id="propertyType" name="propertyType" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Home</option>
            <option>Condo / strata board</option>
            <option>Multi-unit / rental</option>
            <option>Commercial</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Tell us about your roof
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClass}
            placeholder="Roof age, any concerns, when you would like service..."
          />
        </div>
      </div>

      {/* Honeypot field, hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <SubmitButton />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          No obligation. We respond to every request.
        </p>
      </div>
    </form>
  )
}
