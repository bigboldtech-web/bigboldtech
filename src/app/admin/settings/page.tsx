'use client'

import { useState } from 'react'

interface TeamMember {
  name: string
  role: string
  initials: string
  email: string
}

const teamMembers: TeamMember[] = [
  { name: 'Marcus Chen', role: 'Founder & CEO', initials: 'MC', email: 'marcus@bigboldtech.com' },
  { name: 'Sarah Okafor', role: 'CTO', initials: 'SO', email: 'sarah@bigboldtech.com' },
  { name: 'James Rivera', role: 'VP of Engineering', initials: 'JR', email: 'james@bigboldtech.com' },
  { name: 'Priya Sharma', role: 'Head of AI', initials: 'PS', email: 'priya@bigboldtech.com' },
  { name: 'David Kim', role: 'Head of Design', initials: 'DK', email: 'david@bigboldtech.com' },
  { name: 'Elena Novak', role: 'Head of Growth', initials: 'EN', email: 'elena@bigboldtech.com' },
]

export default function SettingsPage() {
  // Company info form state
  const [companyName, setCompanyName] = useState('BigBold Technologies')
  const [companyEmail, setCompanyEmail] = useState('hello@bigboldtech.com')
  const [companyPhone, setCompanyPhone] = useState('+1 (415) 555-0180')
  const [companyAddress, setCompanyAddress] = useState('548 Market Street, Suite 300, San Francisco, CA 94104')

  // Notification preferences
  const [notifyNewLeads, setNotifyNewLeads] = useState(true)
  const [notifyInvoiceReminders, setNotifyInvoiceReminders] = useState(true)
  const [notifyProjectUpdates, setNotifyProjectUpdates] = useState(false)

  return (
    <div>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Settings</h1>
          <p className="admin-page-desc">Manage company information and preferences</p>
        </div>
      </div>

      {/* Company Info */}
      <div className="admin-settings-section">
        <div className="admin-settings-header">
          <h3>Company Information</h3>
          <button className="admin-btn primary small">Save Changes</button>
        </div>
        <div className="admin-settings-body">
          <div className="admin-form-grid">
            <div className="admin-form-group">
              <label className="admin-form-label">Company Name</label>
              <input
                type="text"
                className="admin-form-input"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Email</label>
              <input
                type="email"
                className="admin-form-input"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Phone</label>
              <input
                type="tel"
                className="admin-form-input"
                value={companyPhone}
                onChange={(e) => setCompanyPhone(e.target.value)}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Address</label>
              <input
                type="text"
                className="admin-form-input"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="admin-settings-section">
        <div className="admin-settings-header">
          <h3>Team Members</h3>
          <span className="admin-badge default">{teamMembers.length} members</span>
        </div>
        <div className="admin-settings-body">
          {teamMembers.map((member) => (
            <div key={member.initials} className="admin-team-row">
              <div className="admin-team-avatar">{member.initials}</div>
              <div className="admin-team-info">
                <div className="admin-team-name">{member.name}</div>
                <div className="admin-team-role">{member.role}</div>
              </div>
              <div className="admin-team-email">{member.email}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="admin-settings-section">
        <div className="admin-settings-header">
          <h3>Notification Preferences</h3>
        </div>
        <div className="admin-settings-body">
          <div className="admin-toggle-row">
            <div className="admin-toggle-info">
              <div className="admin-toggle-label">New Lead Notifications</div>
              <div className="admin-toggle-desc">
                Receive an email when a new lead is submitted through the contact form
              </div>
            </div>
            <label className="admin-toggle">
              <input
                type="checkbox"
                checked={notifyNewLeads}
                onChange={(e) => setNotifyNewLeads(e.target.checked)}
              />
              <span className="admin-toggle-track" />
            </label>
          </div>

          <div className="admin-toggle-row">
            <div className="admin-toggle-info">
              <div className="admin-toggle-label">Invoice Reminders</div>
              <div className="admin-toggle-desc">
                Get notified when invoices are approaching due date or become overdue
              </div>
            </div>
            <label className="admin-toggle">
              <input
                type="checkbox"
                checked={notifyInvoiceReminders}
                onChange={(e) => setNotifyInvoiceReminders(e.target.checked)}
              />
              <span className="admin-toggle-track" />
            </label>
          </div>

          <div className="admin-toggle-row">
            <div className="admin-toggle-info">
              <div className="admin-toggle-label">Project Updates</div>
              <div className="admin-toggle-desc">
                Receive email updates when project milestones are completed or status changes
              </div>
            </div>
            <label className="admin-toggle">
              <input
                type="checkbox"
                checked={notifyProjectUpdates}
                onChange={(e) => setNotifyProjectUpdates(e.target.checked)}
              />
              <span className="admin-toggle-track" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
