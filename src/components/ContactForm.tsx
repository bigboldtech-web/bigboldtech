'use client'

import { useState, FormEvent } from 'react'
import { Button } from './Button'

const services = [
  'AI applications',
  'Custom software',
  'Digital marketing',
  'Brand & design',
  'DevOps & cloud',
  'Multiple / not sure yet',
]

const budgets = [
  'Under $25K',
  '$25K – $75K',
  '$75K – $200K',
  '$200K+',
  'Retainer / not sure',
]

const timelines = [
  'ASAP',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Just exploring',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

const MESSAGE_MAX = 5000

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [messageLen, setMessageLen] = useState(0)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong.')
      }
      setStatus('success')
      form.reset()
      setMessageLen(0)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-icon" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4 M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="h3-bbt">Thanks — we got it.</h3>
        <p>
          One of our team will respond within 48 business hours, often
          sooner. If you need to reach us before then, email{' '}
          <a href="mailto:contact@bigboldtech.com">contact@bigboldtech.com</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form-row">
        <label className="contact-field">
          <span>Your name *</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="contact-field">
          <span>Email *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <div className="contact-form-row">
        <label className="contact-field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label className="contact-field">
          <span>What service do you need?</span>
          <select name="service" defaultValue="">
            <option value="" disabled>Select one</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
      </div>

      <div className="contact-form-row">
        <label className="contact-field">
          <span>Estimated budget</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>Select one</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </label>
        <label className="contact-field">
          <span>Timeline</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>Select one</option>
            {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>

      <label className="contact-field">
        <span>
          Tell us about the project *
          <span className="contact-counter" aria-live="polite">
            {messageLen} / {MESSAGE_MAX}
          </span>
        </span>
        <textarea
          name="message"
          required
          rows={6}
          maxLength={MESSAGE_MAX}
          onChange={(e) => setMessageLen(e.currentTarget.value.length)}
          placeholder="What are you building? What's the problem you're trying to solve? Any deadlines or constraints we should know about?"
        />
      </label>

      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="_honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="contact-honeypot"
      />

      {status === 'error' && error && (
        <p className="contact-form-error" role="alert">{error}</p>
      )}

      <div className="contact-form-actions">
        <Button type="submit" size="lg" arrow disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        <p className="contact-form-meta">
          We&rsquo;ll respond within 48 business hours. NDA available on request.
        </p>
      </div>
    </form>
  )
}
