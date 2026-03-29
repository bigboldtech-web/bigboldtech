'use client'

import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-info-card reveal" style={{ padding: '48px', textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px' }}>Message Sent</h4>
        <p>We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form reveal">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" className="form-input" required placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" className="form-input" required placeholder="john@company.com" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" className="form-input" placeholder="Company Name" />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget Range</label>
          <select id="budget" name="budget" className="form-select">
            <option value="">Select budget</option>
            <option value="10k-25k">$10K - $25K</option>
            <option value="25k-50k">$25K - $50K</option>
            <option value="50k-100k">$50K - $100K</option>
            <option value="100k+">$100K+</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Needed</label>
        <select id="service" name="service" className="form-select">
          <option value="">Select a service</option>
          <option value="ai">AI & Automation</option>
          <option value="saas">SaaS Development</option>
          <option value="web">Web Applications</option>
          <option value="mobile">Mobile Applications</option>
          <option value="marketing">Performance Marketing</option>
          <option value="seo">SEO & Organic Growth</option>
          <option value="email">Email & CRM Automation</option>
          <option value="devops">DevOps & Cloud</option>
          <option value="analytics">Analytics & Intelligence</option>
          <option value="multiple">Multiple Services</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Project Details</label>
        <textarea id="message" name="message" className="form-textarea" required placeholder="Tell us about your project, goals, and timeline..." />
      </div>
      <button type="submit" className="btn-glow" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </button>
    </form>
  )
}
