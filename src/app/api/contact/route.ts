import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, budget, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (SendGrid, Resend, etc.) or CRM
    console.log('Contact form submission:', {
      name,
      email,
      company,
      budget,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Thank you! We will be in touch within 24 hours.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
