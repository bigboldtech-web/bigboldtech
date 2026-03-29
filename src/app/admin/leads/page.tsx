'use client'

import { useState } from 'react'

interface Lead {
  id: number
  name: string
  company: string
  email: string
  phone: string
  service: string
  budget: string
  source: string
  notes: string
  date: string
}

type LeadStatus = 'New' | 'Attempted' | 'Connected' | 'Interested' | 'Converted' | 'Lost' | 'Disqualified'

const initialLeads: Record<LeadStatus, Lead[]> = {
  New: [
    { id: 1, name: 'John Smith', company: 'Acme Corp', email: 'john@acme.com', phone: '+1 555-0101', service: 'AI & Automation', budget: '$50K-$100K', source: 'Website', notes: '', date: '2026-03-28' },
    { id: 2, name: 'Priya Patel', company: 'UrbanNest Realty', email: 'priya@urbannest.in', phone: '+91 98765 43210', service: 'Web Applications', budget: '$25K-$50K', source: 'Referral', notes: '', date: '2026-03-27' },
    { id: 3, name: 'Alex Turner', company: 'DataBridge Analytics', email: 'alex@databridge.io', phone: '+1 555-0202', service: 'Analytics & BI', budget: '$10K-$25K', source: 'LinkedIn', notes: '', date: '2026-03-26' },
  ],
  Attempted: [
    { id: 4, name: 'Sarah Lee', company: 'TechFlow Inc', email: 'sarah@techflow.io', phone: '+1 555-0303', service: 'SaaS Development', budget: '$100K+', source: 'Website', notes: 'Called twice, no response', date: '2026-03-25' },
  ],
  Connected: [
    { id: 5, name: 'Mike Chen', company: 'GreenLeaf Foods', email: 'mike@greenleaf.com', phone: '+1 555-0404', service: 'Performance Marketing', budget: '$25K-$50K', source: 'Google Ads', notes: 'Scheduled call for Friday', date: '2026-03-24' },
  ],
  Interested: [
    { id: 6, name: 'Anita Desai', company: 'FinPro Solutions', email: 'anita@finpro.in', phone: '+91 87654 32109', service: 'SaaS Development', budget: '$100K+', source: 'Website', notes: 'Wants proposal by next week', date: '2026-03-22' },
    { id: 7, name: 'Robert Kim', company: 'KimCo Industries', email: 'robert@kimco.com', phone: '+1 555-0505', service: 'DevOps & Cloud', budget: '$50K-$100K', source: 'Referral', notes: 'Very interested, needs SOW', date: '2026-03-20' },
  ],
  Converted: [
    { id: 8, name: 'David Park', company: 'CloudSync Ltd', email: 'david@cloudsync.com', phone: '+1 555-0606', service: 'DevOps & Cloud', budget: '$50K-$100K', source: 'Website', notes: 'Contract signed!', date: '2026-03-18' },
  ],
  Lost: [
    { id: 9, name: 'Mithilesh Verma', company: 'Verma Traders', email: 'mithilesh@verma.in', phone: '+91 76543 21098', service: 'Web Applications', budget: '$10K-$25K', source: 'Website', notes: 'Went with competitor', date: '2026-03-15' },
  ],
  Disqualified: [
    { id: 10, name: 'Test User', company: 'Test Co', email: 'test@test.com', phone: '', service: 'SEO', budget: '', source: 'Website', notes: 'Spam inquiry', date: '2026-03-10' },
  ],
}

const statusColors: Record<LeadStatus, string> = {
  New: 'cyan',
  Attempted: 'amber',
  Connected: 'blue',
  Interested: 'green',
  Converted: 'green',
  Lost: 'red',
  Disqualified: 'red',
}

const allStatuses: LeadStatus[] = ['New', 'Attempted', 'Connected', 'Interested', 'Converted', 'Lost', 'Disqualified']

export default function LeadsPage() {
  const [leads, setLeads] = useState(initialLeads)
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [draggedLead, setDraggedLead] = useState<{ lead: Lead; from: LeadStatus } | null>(null)

  function handleDragStart(lead: Lead, from: LeadStatus) {
    setDraggedLead({ lead, from })
  }

  function handleDrop(to: LeadStatus) {
    if (!draggedLead || draggedLead.from === to) return
    setLeads((prev) => {
      const updated = { ...prev }
      updated[draggedLead.from] = prev[draggedLead.from].filter((l) => l.id !== draggedLead.lead.id)
      updated[to] = [...prev[to], draggedLead.lead]
      return updated
    })
    setDraggedLead(null)
  }

  function handleAddLead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const newLead: Lead = {
      id: Date.now(),
      name: form.get('name') as string,
      company: form.get('company') as string,
      email: form.get('email') as string,
      phone: form.get('phone') as string,
      service: form.get('service') as string,
      budget: form.get('budget') as string,
      source: form.get('source') as string,
      notes: form.get('notes') as string,
      date: new Date().toISOString().split('T')[0],
    }
    setLeads((prev) => ({ ...prev, New: [newLead, ...prev.New] }))
    setShowAddModal(false)
  }

  return (
    <div>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Leads</h1>
          <p className="admin-page-desc">Manage and track all incoming business leads</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="admin-btn primary" onClick={() => setShowAddModal(true)}>+ Add Lead</button>
        </div>
      </div>

      <div className="admin-kanban">
        {allStatuses.map((status) => (
          <div
            key={status}
            className="admin-kanban-col"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(status)}
          >
            <div className="admin-kanban-header">
              <span>{status}</span>
              <span className={`admin-badge ${statusColors[status]}`}>{leads[status].length}</span>
            </div>
            <div className="admin-kanban-cards">
              {leads[status].map((lead) => (
                <div
                  key={lead.id}
                  className="admin-kanban-card"
                  draggable
                  onDragStart={() => handleDragStart(lead, status)}
                  onClick={() => setSelectedLead(lead)}
                >
                  <div className="admin-kanban-card-name">{lead.name}</div>
                  <div className="admin-kanban-card-company">{lead.company}</div>
                  <div className="admin-kanban-card-meta">{lead.service}</div>
                  {lead.notes && <div className="admin-kanban-card-notes">{lead.notes}</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Lead Modal */}
      {showAddModal && (
        <div className="admin-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Add New Lead</h2>
              <button className="admin-modal-close" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <form onSubmit={handleAddLead} className="admin-modal-body">
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Contact Name</label>
                  <input name="name" className="admin-input" required placeholder="John Doe" />
                </div>
                <div className="admin-form-group">
                  <label>Company</label>
                  <input name="company" className="admin-input" required placeholder="Acme Corp" />
                </div>
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Email</label>
                  <input name="email" type="email" className="admin-input" required placeholder="john@acme.com" />
                </div>
                <div className="admin-form-group">
                  <label>Phone</label>
                  <input name="phone" className="admin-input" placeholder="+1 555-0000" />
                </div>
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Service Interested</label>
                  <select name="service" className="admin-select" required>
                    <option value="">Select service</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="Web Applications">Web Applications</option>
                    <option value="Mobile Applications">Mobile Applications</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="SEO & Growth">SEO & Growth</option>
                    <option value="Email & CRM">Email & CRM</option>
                    <option value="DevOps & Cloud">DevOps & Cloud</option>
                    <option value="Analytics & BI">Analytics & BI</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>Budget Range</label>
                  <select name="budget" className="admin-select">
                    <option value="">Select budget</option>
                    <option value="$10K-$25K">$10K - $25K</option>
                    <option value="$25K-$50K">$25K - $50K</option>
                    <option value="$50K-$100K">$50K - $100K</option>
                    <option value="$100K+">$100K+</option>
                  </select>
                </div>
              </div>
              <div className="admin-form-group">
                <label>Source</label>
                <select name="source" className="admin-select">
                  <option value="Website">Website</option>
                  <option value="Referral">Referral</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Google Ads">Google Ads</option>
                  <option value="Cold Outreach">Cold Outreach</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="admin-form-group">
                <label>Notes</label>
                <textarea name="notes" className="admin-textarea" placeholder="Any additional notes..." />
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="admin-btn secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="admin-btn primary">Add Lead</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="admin-modal-overlay" onClick={() => setSelectedLead(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>{selectedLead.name}</h2>
              <button className="admin-modal-close" onClick={() => setSelectedLead(null)}>×</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-detail-grid">
                <div className="admin-detail-item"><label>Company</label><p>{selectedLead.company}</p></div>
                <div className="admin-detail-item"><label>Email</label><p>{selectedLead.email}</p></div>
                <div className="admin-detail-item"><label>Phone</label><p>{selectedLead.phone || '—'}</p></div>
                <div className="admin-detail-item"><label>Service</label><p>{selectedLead.service}</p></div>
                <div className="admin-detail-item"><label>Budget</label><p>{selectedLead.budget || '—'}</p></div>
                <div className="admin-detail-item"><label>Source</label><p>{selectedLead.source}</p></div>
                <div className="admin-detail-item"><label>Date</label><p>{selectedLead.date}</p></div>
                <div className="admin-detail-item"><label>Notes</label><p>{selectedLead.notes || '—'}</p></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
