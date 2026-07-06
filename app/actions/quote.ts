'use server'

import { Resend } from 'resend'
import { site } from '@/lib/site'

export type QuoteState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitQuote(
  _prevState: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const address = String(formData.get('address') ?? '').trim()
  const propertyType = String(formData.get('propertyType') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // Honeypot for spam bots.
  if (String(formData.get('company') ?? '').trim() !== '') {
    return { status: 'success', message: 'Thanks! We will be in touch shortly.' }
  }

  if (!name || !phone) {
    return { status: 'error', message: 'Please provide at least your name and phone number.' }
  }

  const to = process.env.CONTACT_EMAIL
  const apiKey = process.env.RESEND_API_KEY

  const summary = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    address ? `Address: ${address}` : null,
    propertyType ? `Property type: ${propertyType}` : null,
    '',
    'Message:',
    message || '(none)',
  ]
    .filter(Boolean)
    .join('\n')

  // If email is not configured yet, log the lead so nothing is lost and still confirm to the user.
  if (!apiKey || !to) {
    console.log('[v0] New quote request (email not configured):\n' + summary)
    return {
      status: 'success',
      message: 'Thanks! Your request was received. We will reach out shortly.',
    }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? 'Nano Armor <onboarding@resend.dev>',
      to,
      replyTo: email || undefined,
      subject: `New quote request from ${name}`,
      text: summary,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return {
        status: 'error',
        message: `Something went wrong sending your request. Please call us at ${site.phone}.`,
      }
    }

    return {
      status: 'success',
      message: 'Thanks! Your request was sent. We will reach out shortly.',
    }
  } catch (err) {
    console.log('[v0] Quote submission failed:', err)
    return {
      status: 'error',
      message: `Something went wrong. Please call us at ${site.phone}.`,
    }
  }
}
