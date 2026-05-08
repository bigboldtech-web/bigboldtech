import { NextResponse } from 'next/server'

/**
 * Contact form handler.
 *
 * Delivery model:
 *  - PRIMARY: POSTs the lead JSON to BBT_LEAD_WEBHOOK_URL (Slack /
 *    Discord / Zapier / n8n / your own endpoint — anything that
 *    accepts a JSON POST).
 *  - FALLBACK: if the webhook URL is not set OR the call fails,
 *    we log to stdout and still return 200 so the UI works in dev.
 *    Set BBT_REQUIRE_WEBHOOK=1 to make webhook failures hard.
 *
 * Anti-abuse:
 *  - Rejects submissions with the `_honeypot` field filled (bots).
 *  - Rejects messages over 5000 chars.
 *  - Basic email shape check.
 */

type LeadBody = {
  name?: string
  email?: string
  company?: string
  service?: string
  budget?: string
  timeline?: string
  message?: string
  /** Honeypot — should always be empty when a real human submits */
  _honeypot?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: LeadBody
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  // Honeypot — silently succeed so bots don't learn they were caught.
  if (body._honeypot && body._honeypot.trim() !== '') {
    return NextResponse.json({ message: 'Thanks!' }, { status: 200 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 },
    )
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'That email looks invalid.' }, { status: 400 })
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: 'Message is too long (max 5000 characters).' },
      { status: 400 },
    )
  }

  const lead = {
    name,
    email,
    company: body.company?.trim() || null,
    service: body.service || null,
    budget: body.budget || null,
    timeline: body.timeline || null,
    message,
    submittedAt: new Date().toISOString(),
    source: 'bigboldtech.com/contact',
  }

  const webhookUrl = process.env.BBT_LEAD_WEBHOOK_URL
  const webhookRequired = process.env.BBT_REQUIRE_WEBHOOK === '1'

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildWebhookPayload(lead)),
        signal: AbortSignal.timeout(8000),
      })
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        console.error('[contact] webhook returned non-ok', res.status, text)
        if (webhookRequired) {
          return NextResponse.json(
            { error: 'Failed to deliver — please email us directly.' },
            { status: 502 },
          )
        }
      }
    } catch (err) {
      console.error('[contact] webhook delivery failed', err)
      if (webhookRequired) {
        return NextResponse.json(
          { error: 'Failed to deliver — please email us directly.' },
          { status: 502 },
        )
      }
    }
  } else {
    // Dev / pre-config: log the lead so it isn't lost.
    console.log('[contact] new lead (no webhook configured):', lead)
  }

  return NextResponse.json(
    { message: 'Thank you — we will be in touch within 48 business hours.' },
    { status: 200 },
  )
}

type Lead = {
  name: string
  email: string
  company: string | null
  service: string | null
  budget: string | null
  timeline: string | null
  message: string
  submittedAt: string
  source: string
}

/**
 * Format the lead so it renders nicely in Slack and Discord.
 * Both honor the `text` field; generic receivers (Zapier, n8n) read
 * the structured `lead` payload.
 */
function buildWebhookPayload(lead: Lead) {
  const meta = [
    lead.service && `Service: *${lead.service}*`,
    lead.budget && `Budget: *${lead.budget}*`,
    lead.timeline && `Timeline: *${lead.timeline}*`,
  ].filter(Boolean).join(' · ')

  const summary =
    `*New lead from bigboldtech.com*\n` +
    `*${lead.name}* <${lead.email}>` +
    (lead.company ? ` · ${lead.company}` : '') +
    `\n` +
    (meta ? meta + `\n\n` : '\n') +
    lead.message

  return { text: summary, lead }
}
