'use client'

import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setMessage('Thanks. We will respond within 24 hours.')
      form.reset()
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Email hello@bigboldtech.com.')
    }
  }

  return (
    <form className="v4-form" onSubmit={onSubmit}>
      {!compact && (
        <div className="v4-field-row">
          <div className="v4-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your full name" />
          </div>
          <div className="v4-field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Where you build" />
          </div>
        </div>
      )}
      {compact && (
        <div className="v4-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your full name" />
        </div>
      )}
      <div className="v4-field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="v4-field">
        <label htmlFor="topic">What is the project about</label>
        <select id="topic" name="topic" defaultValue="">
          <option value="" disabled>Pick the closest fit</option>
          <option value="ai">AI agents / automation</option>
          <option value="saas">SaaS platform</option>
          <option value="web">Web application</option>
          <option value="mobile">Mobile application</option>
          <option value="marketing">Performance marketing</option>
          <option value="seo">Organic visibility (SEO / GEO)</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div className="v4-field">
        <label htmlFor="message">Tell us a little</label>
        <textarea id="message" name="message" required placeholder="What you are building, what you have tried, where you want to go next." />
      </div>
      <div className={`v4-form-status ${status === 'success' ? 'is-success' : status === 'error' ? 'is-error' : ''}`}>
        {message}
      </div>
      <button type="submit" className="v4-btn v4-btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send the message'}
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12">
          <path d="M3 9 L9 3 M5 3 H9 V7" />
        </svg>
      </button>
    </form>
  )
}
