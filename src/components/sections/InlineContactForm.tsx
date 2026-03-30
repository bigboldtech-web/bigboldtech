'use client'

import { useState } from 'react'

const BLOCKED_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com', 'aol.com', 'icloud.com', 'mail.com', 'protonmail.com', 'ymail.com']

export function InlineContactForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', inquiry: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const domain = form.email.split('@')[1]?.toLowerCase()
    if (BLOCKED_DOMAINS.includes(domain)) {
      setError('Please use your business email address. Personal email addresses are not accepted.')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="inline-form-success">
        <div className="success-icon">
          <svg width="48" height="48" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M12 24l8 8 16-16"/><circle cx="24" cy="24" r="20"/></svg>
        </div>
        <h3>Thank you for reaching out.</h3>
        <p>Our team will review your inquiry and get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form className="inline-form" onSubmit={handleSubmit}>
      <div className="inline-form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Full Name</label>
          <input id="cf-name" name="name" type="text" className="form-input" required value={form.name} onChange={handleChange} placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" type="text" className="form-input" required value={form.company} onChange={handleChange} placeholder="Acme Corp" />
        </div>
      </div>
      <div className="inline-form-row">
        <div className="form-group">
          <label htmlFor="cf-email">Business Email</label>
          <input id="cf-email" name="email" type="email" className="form-input" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
        </div>
        <div className="form-group">
          <label htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={handleChange} placeholder="+91 000 000 0000" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="cf-inquiry">Tell us about your project</label>
        <textarea id="cf-inquiry" name="inquiry" className="form-textarea" required value={form.inquiry} onChange={handleChange} placeholder="Brief description of what you need..." rows={4} />
      </div>
      {error && <div className="form-error">{error}</div>}
      <button type="submit" className="btn-glow" style={{ alignSelf: 'flex-start' }}>
        Get Started
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </button>
    </form>
  )
}
