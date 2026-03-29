'use client'

import { useState, useMemo } from 'react'
import '@/styles/admin.css'

type ClientStatus = 'Onboarding' | 'Active' | 'Paused' | 'Completed'

interface Client {
  id: number
  name: string
  company: string
  email: string
  phone: string
  services: string[]
  startDate: string
  status: ClientStatus
  monthlyRetainer: number
  totalBilled: number
}

const sampleClients: Client[] = [
  {
    id: 1,
    name: 'Rajesh Mehta',
    company: 'NovaPay Financial',
    email: 'rajesh@novapay.in',
    phone: '+91 98765 43210',
    services: ['AI & Automation', 'DevOps & Cloud'],
    startDate: '2025-08-15',
    status: 'Active',
    monthlyRetainer: 12000,
    totalBilled: 84000,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    company: 'MedConnect Health',
    email: 'sarah@medconnect.com',
    phone: '+1 415-555-0192',
    services: ['Mobile Applications', 'SaaS Development'],
    startDate: '2025-11-01',
    status: 'Active',
    monthlyRetainer: 18500,
    totalBilled: 74000,
  },
  {
    id: 3,
    name: 'David Okafor',
    company: 'Luxe Retail Group',
    email: 'david@luxeretail.com',
    phone: '+44 20 7946 0958',
    services: ['SEO & Growth', 'Performance Marketing'],
    startDate: '2025-06-10',
    status: 'Active',
    monthlyRetainer: 8500,
    totalBilled: 76500,
  },
  {
    id: 4,
    name: 'Priya Patel',
    company: 'UrbanNest Realty',
    email: 'priya@urbannest.in',
    phone: '+91 87654 32109',
    services: ['Web Applications'],
    startDate: '2026-03-01',
    status: 'Onboarding',
    monthlyRetainer: 9000,
    totalBilled: 9000,
  },
  {
    id: 5,
    name: 'Marcus Webb',
    company: 'CloudSync Ltd',
    email: 'marcus@cloudsync.com',
    phone: '+1 212-555-0847',
    services: ['DevOps & Cloud', 'AI & Automation'],
    startDate: '2025-04-20',
    status: 'Completed',
    monthlyRetainer: 0,
    totalBilled: 156000,
  },
  {
    id: 6,
    name: 'Anika Sharma',
    company: 'GreenLeaf Foods',
    email: 'anika@greenleaf.com',
    phone: '+91 99887 76655',
    services: ['Performance Marketing', 'SEO & Growth'],
    startDate: '2025-09-12',
    status: 'Paused',
    monthlyRetainer: 0,
    totalBilled: 42500,
  },
  {
    id: 7,
    name: 'James Liu',
    company: 'TechFlow Inc',
    email: 'james@techflow.io',
    phone: '+1 650-555-0234',
    services: ['SaaS Development', 'Mobile Applications', 'DevOps & Cloud'],
    startDate: '2026-02-15',
    status: 'Onboarding',
    monthlyRetainer: 22000,
    totalBilled: 33000,
  },
  {
    id: 8,
    name: 'Elena Vasquez',
    company: 'Bright Education',
    email: 'elena@brightedu.org',
    phone: '+34 612 345 678',
    services: ['Web Applications', 'AI & Automation'],
    startDate: '2025-10-05',
    status: 'Active',
    monthlyRetainer: 14000,
    totalBilled: 70000,
  },
]

const statusColors: Record<ClientStatus, string> = {
  Onboarding: 'cyan',
  Active: 'green',
  Paused: 'amber',
  Completed: 'violet',
}

const allStatuses: ClientStatus[] = ['Onboarding', 'Active', 'Paused', 'Completed']

const onboardingChecklist = [
  'Welcome email sent',
  'Contract signed',
  'Access credentials shared',
  'Kickoff call completed',
  'Project scope defined',
  'Development started',
]

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount)
}

export default function ClientsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'All' | ClientStatus>('All')
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean[]>>({})

  const filtered = useMemo(() => {
    return sampleClients.filter((c) => {
      const matchesStatus = statusFilter === 'All' || c.status === statusFilter
      const q = search.toLowerCase()
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.services.some((s) => s.toLowerCase().includes(q))
      return matchesStatus && matchesSearch
    })
  }, [search, statusFilter])

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { All: sampleClients.length }
    allStatuses.forEach((s) => {
      counts[s] = sampleClients.filter((c) => c.status === s).length
    })
    return counts
  }, [])

  const toggleCheckItem = (clientId: number, index: number) => {
    setCheckedItems((prev) => {
      const current = prev[clientId] || new Array(onboardingChecklist.length).fill(false)
      const updated = [...current]
      updated[index] = !updated[index]
      return { ...prev, [clientId]: updated }
    })
  }

  return (
    <div>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Clients</h1>
          <p className="admin-page-desc">Manage client accounts and onboarding</p>
        </div>
        <button className="admin-btn primary" onClick={() => setShowAddModal(true)}>
          + Add Client
        </button>
      </div>

      <div className="admin-toolbar">
        <div className="admin-toolbar-left">
          <div className="admin-filter-tabs">
            {['All', ...allStatuses].map((s) => (
              <button
                key={s}
                className={`admin-filter-tab ${statusFilter === s ? 'active' : ''}`}
                onClick={() => setStatusFilter(s as 'All' | ClientStatus)}
              >
                {s}
                <span className="admin-count">{statusCounts[s]}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="admin-toolbar-right">
          <div className="admin-search-wrap">
            <span className="admin-search-icon">&#128269;</span>
            <input
              type="text"
              className="admin-search"
              placeholder="Search clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Services</th>
              <th>Status</th>
              <th>Monthly Retainer</th>
              <th>Total Billed</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <div className="admin-empty">No clients found matching your filters.</div>
                </td>
              </tr>
            ) : (
              filtered.map((client) => (
                <tr key={client.id} className="clickable" onClick={() => setSelectedClient(client)}>
                  <td>
                    <div className="admin-cell-primary">{client.company}</div>
                  </td>
                  <td>
                    <div className="admin-cell-primary">{client.name}</div>
                    <div className="admin-cell-secondary">{client.email}</div>
                  </td>
                  <td>
                    <div className="admin-service-tags">
                      {client.services.map((s) => (
                        <span key={s} className="admin-service-tag">{s}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <span className={`admin-badge ${statusColors[client.status]}`}>{client.status}</span>
                  </td>
                  <td>
                    <span className="admin-cell-primary">{client.monthlyRetainer > 0 ? formatCurrency(client.monthlyRetainer) : '--'}</span>
                  </td>
                  <td>
                    <span className="admin-cell-primary">{formatCurrency(client.totalBilled)}</span>
                  </td>
                  <td>
                    <span className="admin-cell-secondary">{client.startDate}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="admin-modal-backdrop" onClick={() => setSelectedClient(null)}>
          <div className="admin-modal wide" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>{selectedClient.company}</h2>
              <button className="admin-modal-close" onClick={() => setSelectedClient(null)}>&times;</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-section-title">Client Information</div>
              <div className="admin-detail-grid">
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Contact Name</span>
                  <span className="admin-detail-value">{selectedClient.name}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Company</span>
                  <span className="admin-detail-value">{selectedClient.company}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Email</span>
                  <span className="admin-detail-value">{selectedClient.email}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Phone</span>
                  <span className="admin-detail-value">{selectedClient.phone}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Status</span>
                  <span className="admin-detail-value">
                    <span className={`admin-badge ${statusColors[selectedClient.status]}`}>{selectedClient.status}</span>
                  </span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Start Date</span>
                  <span className="admin-detail-value">{selectedClient.startDate}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Monthly Retainer</span>
                  <span className="admin-detail-value mono">
                    {selectedClient.monthlyRetainer > 0 ? formatCurrency(selectedClient.monthlyRetainer) : '--'}
                  </span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Total Billed</span>
                  <span className="admin-detail-value mono">{formatCurrency(selectedClient.totalBilled)}</span>
                </div>
                <div className="admin-detail-item full">
                  <span className="admin-detail-label">Services</span>
                  <div className="admin-service-tags" style={{ marginTop: '4px' }}>
                    {selectedClient.services.map((s) => (
                      <span key={s} className="admin-service-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="admin-section-title">Onboarding Checklist</div>
              <div className="admin-checklist">
                {onboardingChecklist.map((item, i) => {
                  const checks = checkedItems[selectedClient.id] || new Array(onboardingChecklist.length).fill(false)
                  const isChecked = checks[i]
                  return (
                    <div
                      key={item}
                      className={`admin-checklist-item ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggleCheckItem(selectedClient.id, i)}
                    >
                      <div className="admin-checklist-checkbox" />
                      <span className="admin-checklist-label">{item}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn secondary" onClick={() => setSelectedClient(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Client Modal */}
      {showAddModal && (
        <div className="admin-modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="admin-modal wide" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Add New Client</h2>
              <button className="admin-modal-close" onClick={() => setShowAddModal(false)}>&times;</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Contact Name</label>
                  <input type="text" className="admin-form-input" placeholder="Full name" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Company</label>
                  <input type="text" className="admin-form-input" placeholder="Company name" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Email</label>
                  <input type="email" className="admin-form-input" placeholder="email@company.com" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Phone</label>
                  <input type="tel" className="admin-form-input" placeholder="+1 000-000-0000" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Status</label>
                  <select className="admin-form-select">
                    <option value="Onboarding">Onboarding</option>
                    <option value="Active">Active</option>
                    <option value="Paused">Paused</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Start Date</label>
                  <input type="date" className="admin-form-input" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Monthly Retainer</label>
                  <input type="number" className="admin-form-input" placeholder="0" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Total Billed</label>
                  <input type="number" className="admin-form-input" placeholder="0" />
                </div>
                <div className="admin-form-group full">
                  <label className="admin-form-label">Services</label>
                  <input type="text" className="admin-form-input" placeholder="Comma-separated: AI & Automation, SaaS Development" />
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="admin-btn primary" onClick={() => setShowAddModal(false)}>Add Client</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
