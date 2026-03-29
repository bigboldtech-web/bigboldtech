'use client'

import { useState } from 'react'

interface LineItem {
  description: string
  amount: number
}

interface Invoice {
  id: number
  invoiceNumber: string
  client: string
  amount: number
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue'
  issueDate: string
  dueDate: string
  services: LineItem[]
}

const invoicesData: Invoice[] = [
  {
    id: 1,
    invoiceNumber: 'INV-2026-001',
    client: 'NovaPay Financial',
    amount: 42000,
    status: 'Paid',
    issueDate: '2026-02-01',
    dueDate: '2026-03-01',
    services: [
      { description: 'AI Fraud Detection System - Phase 2', amount: 35000 },
      { description: 'Model training & optimization', amount: 7000 },
    ],
  },
  {
    id: 2,
    invoiceNumber: 'INV-2026-002',
    client: 'MedConnect Health',
    amount: 28500,
    status: 'Sent',
    issueDate: '2026-03-01',
    dueDate: '2026-04-01',
    services: [
      { description: 'Patient Portal - Mobile App Development', amount: 22000 },
      { description: 'API integration & testing', amount: 6500 },
    ],
  },
  {
    id: 3,
    invoiceNumber: 'INV-2026-003',
    client: 'Luxe Retail',
    amount: 15000,
    status: 'Paid',
    issueDate: '2026-02-15',
    dueDate: '2026-03-15',
    services: [
      { description: 'SEO audit & content strategy', amount: 8500 },
      { description: 'Technical SEO implementation', amount: 6500 },
    ],
  },
  {
    id: 4,
    invoiceNumber: 'INV-2026-004',
    client: 'CloudSync Ltd',
    amount: 38000,
    status: 'Overdue',
    issueDate: '2026-01-15',
    dueDate: '2026-02-15',
    services: [
      { description: 'DevOps infrastructure setup - AWS', amount: 25000 },
      { description: 'CI/CD pipeline automation', amount: 8000 },
      { description: 'Monitoring & alerting setup', amount: 5000 },
    ],
  },
  {
    id: 5,
    invoiceNumber: 'INV-2026-005',
    client: 'GreenLeaf Foods',
    amount: 18500,
    status: 'Draft',
    issueDate: '2026-03-25',
    dueDate: '2026-04-25',
    services: [
      { description: 'Google Ads campaign management - Q2', amount: 12000 },
      { description: 'Landing page design & CRO', amount: 6500 },
    ],
  },
  {
    id: 6,
    invoiceNumber: 'INV-2026-006',
    client: 'UrbanNest Realty',
    amount: 32000,
    status: 'Sent',
    issueDate: '2026-03-10',
    dueDate: '2026-04-10',
    services: [
      { description: 'Property listing web application', amount: 24000 },
      { description: 'Admin dashboard & CMS', amount: 8000 },
    ],
  },
  {
    id: 7,
    invoiceNumber: 'INV-2026-007',
    client: 'TechFlow Inc',
    amount: 55000,
    status: 'Paid',
    issueDate: '2026-01-20',
    dueDate: '2026-02-20',
    services: [
      { description: 'SaaS platform MVP development', amount: 40000 },
      { description: 'Stripe billing integration', amount: 10000 },
      { description: 'User auth & RBAC setup', amount: 5000 },
    ],
  },
  {
    id: 8,
    invoiceNumber: 'INV-2026-008',
    client: 'Acme Corp',
    amount: 22000,
    status: 'Overdue',
    issueDate: '2026-02-01',
    dueDate: '2026-03-01',
    services: [
      { description: 'AI chatbot development', amount: 16000 },
      { description: 'Knowledge base & RAG pipeline', amount: 6000 },
    ],
  },
  {
    id: 9,
    invoiceNumber: 'INV-2026-009',
    client: 'Pinnacle Logistics',
    amount: 12000,
    status: 'Draft',
    issueDate: '2026-03-28',
    dueDate: '2026-04-28',
    services: [
      { description: 'Email automation flows - HubSpot', amount: 8000 },
      { description: 'CRM data migration', amount: 4000 },
    ],
  },
  {
    id: 10,
    invoiceNumber: 'INV-2026-010',
    client: 'Vantage Media',
    amount: 9500,
    status: 'Paid',
    issueDate: '2026-03-05',
    dueDate: '2026-04-05',
    services: [
      { description: 'GA4 advanced implementation', amount: 5500 },
      { description: 'Looker Studio dashboards', amount: 4000 },
    ],
  },
]

const clients = [
  'NovaPay Financial',
  'MedConnect Health',
  'Luxe Retail',
  'CloudSync Ltd',
  'GreenLeaf Foods',
  'UrbanNest Realty',
  'TechFlow Inc',
  'Acme Corp',
  'Pinnacle Logistics',
  'Vantage Media',
]

type StatusFilter = 'All' | 'Draft' | 'Sent' | 'Paid' | 'Overdue'

const statusBadgeClass: Record<Invoice['status'], string> = {
  Draft: 'default',
  Sent: 'cyan',
  Paid: 'green',
  Overdue: 'rose',
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount)
}

export default function InvoicesPage() {
  const [invoices] = useState<Invoice[]>(invoicesData)
  const [activeFilter, setActiveFilter] = useState<StatusFilter>('All')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)

  // Create form state
  const [newClient, setNewClient] = useState('')
  const [newDueDate, setNewDueDate] = useState('')
  const [newNotes, setNewNotes] = useState('')
  const [newLineItems, setNewLineItems] = useState<LineItem[]>([
    { description: '', amount: 0 },
  ])

  const filtered = activeFilter === 'All'
    ? invoices
    : invoices.filter((inv) => inv.status === activeFilter)

  const totalOutstanding = invoices
    .filter((i) => i.status === 'Sent' || i.status === 'Overdue')
    .reduce((sum, i) => sum + i.amount, 0)

  const paidThisMonth = invoices
    .filter((i) => i.status === 'Paid' && i.issueDate >= '2026-03-01')
    .reduce((sum, i) => sum + i.amount, 0)

  const overdueTotal = invoices
    .filter((i) => i.status === 'Overdue')
    .reduce((sum, i) => sum + i.amount, 0)

  const draftCount = invoices.filter((i) => i.status === 'Draft').length

  const filters: StatusFilter[] = ['All', 'Draft', 'Sent', 'Paid', 'Overdue']

  const getFilterCount = (f: StatusFilter) =>
    f === 'All' ? invoices.length : invoices.filter((i) => i.status === f).length

  const addLineItem = () => {
    setNewLineItems([...newLineItems, { description: '', amount: 0 }])
  }

  const removeLineItem = (index: number) => {
    if (newLineItems.length > 1) {
      setNewLineItems(newLineItems.filter((_, i) => i !== index))
    }
  }

  const updateLineItem = (index: number, field: keyof LineItem, value: string | number) => {
    const updated = [...newLineItems]
    if (field === 'amount') {
      updated[index] = { ...updated[index], amount: Number(value) || 0 }
    } else {
      updated[index] = { ...updated[index], description: value as string }
    }
    setNewLineItems(updated)
  }

  const resetCreateForm = () => {
    setNewClient('')
    setNewDueDate('')
    setNewNotes('')
    setNewLineItems([{ description: '', amount: 0 }])
    setShowCreateModal(false)
  }

  return (
    <div>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Invoices</h1>
          <p className="admin-page-desc">Manage billing and payment tracking</p>
        </div>
        <button className="admin-btn primary" onClick={() => setShowCreateModal(true)}>
          + Create Invoice
        </button>
      </div>

      {/* Stats Row */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-value">{formatCurrency(totalOutstanding)}</div>
          <div className="admin-stat-label">Total Outstanding</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-value">{formatCurrency(paidThisMonth)}</div>
          <div className="admin-stat-label">Paid This Month</div>
          <div className="admin-stat-change up">Collected in March</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-value">{formatCurrency(overdueTotal)}</div>
          <div className="admin-stat-label">Overdue</div>
          <div className="admin-stat-change down">Requires follow-up</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-value">{draftCount}</div>
          <div className="admin-stat-label">Draft Invoices</div>
          <div className="admin-stat-change neutral">Pending review</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="admin-toolbar" style={{ marginTop: '24px' }}>
        <div className="admin-filter-tabs">
          {filters.map((f) => (
            <button
              key={f}
              className={`admin-filter-tab ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
              <span className="admin-count">{getFilterCount(f)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Invoice Table */}
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Issue Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inv) => (
              <tr
                key={inv.id}
                className="clickable"
                onClick={() => setSelectedInvoice(inv)}
              >
                <td>
                  <span className="admin-cell-primary" style={{ fontFamily: 'var(--font-mono)' }}>
                    {inv.invoiceNumber}
                  </span>
                </td>
                <td className="admin-cell-primary">{inv.client}</td>
                <td className="admin-cell-primary">{formatCurrency(inv.amount)}</td>
                <td>
                  <span className={`admin-badge ${statusBadgeClass[inv.status]}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="admin-cell-secondary">{inv.issueDate}</td>
                <td className="admin-cell-secondary">{inv.dueDate}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6}>
                  <div className="admin-empty">No invoices found for this filter.</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Create Invoice Modal */}
      {showCreateModal && (
        <div className="admin-modal-backdrop" onClick={() => resetCreateForm()}>
          <div className="admin-modal wide" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Create Invoice</h2>
              <button className="admin-modal-close" onClick={() => resetCreateForm()}>
                &times;
              </button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Client</label>
                  <select
                    className="admin-form-select"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                  >
                    <option value="">Select a client</option>
                    {clients.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Due Date</label>
                  <input
                    type="date"
                    className="admin-form-input"
                    value={newDueDate}
                    onChange={(e) => setNewDueDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="admin-form-group" style={{ marginTop: '20px' }}>
                <label className="admin-form-label">Line Items</label>
                <div className="admin-line-items">
                  {newLineItems.map((item, index) => (
                    <div key={index} className="admin-line-item-row">
                      <input
                        type="text"
                        className="admin-form-input"
                        placeholder="Service description"
                        value={item.description}
                        onChange={(e) => updateLineItem(index, 'description', e.target.value)}
                      />
                      <input
                        type="number"
                        className="admin-form-input"
                        placeholder="Amount"
                        value={item.amount || ''}
                        onChange={(e) => updateLineItem(index, 'amount', e.target.value)}
                      />
                      <button
                        className="admin-line-item-remove"
                        onClick={() => removeLineItem(index)}
                        disabled={newLineItems.length === 1}
                        style={{ opacity: newLineItems.length === 1 ? 0.3 : 1 }}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                <button className="admin-add-line" onClick={addLineItem}>
                  + Add Line Item
                </button>
              </div>

              <div className="admin-form-group" style={{ marginTop: '20px' }}>
                <label className="admin-form-label">Notes</label>
                <textarea
                  className="admin-form-textarea"
                  placeholder="Additional notes or payment terms..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                />
              </div>

              {newLineItems.some((item) => item.amount > 0) && (
                <div className="admin-invoice-total">
                  <span className="admin-invoice-total-label">Total</span>
                  <span className="admin-invoice-total-value">
                    {formatCurrency(newLineItems.reduce((sum, item) => sum + item.amount, 0))}
                  </span>
                </div>
              )}
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn secondary" onClick={() => resetCreateForm()}>
                Cancel
              </button>
              <button className="admin-btn primary">
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="admin-modal-backdrop" onClick={() => setSelectedInvoice(null)}>
          <div className="admin-modal wide" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>{selectedInvoice.invoiceNumber}</h2>
              <button className="admin-modal-close" onClick={() => setSelectedInvoice(null)}>
                &times;
              </button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-invoice-meta">
                <div className="admin-invoice-meta-item">
                  <label>Client</label>
                  <span>{selectedInvoice.client}</span>
                </div>
                <div className="admin-invoice-meta-item">
                  <label>Status</label>
                  <span>
                    <span className={`admin-badge ${statusBadgeClass[selectedInvoice.status]}`}>
                      {selectedInvoice.status}
                    </span>
                  </span>
                </div>
                <div className="admin-invoice-meta-item">
                  <label>Issue Date</label>
                  <span>{selectedInvoice.issueDate}</span>
                </div>
                <div className="admin-invoice-meta-item">
                  <label>Due Date</label>
                  <span>{selectedInvoice.dueDate}</span>
                </div>
              </div>

              <div className="admin-section-title">Line Items</div>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th style={{ textAlign: 'right' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.services.map((item, i) => (
                    <tr key={i}>
                      <td className="admin-cell-primary">{item.description}</td>
                      <td style={{ textAlign: 'right' }} className="admin-cell-primary">
                        {formatCurrency(item.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="admin-invoice-total">
                <span className="admin-invoice-total-label">Total Amount</span>
                <span className="admin-invoice-total-value">
                  {formatCurrency(selectedInvoice.amount)}
                </span>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn secondary" onClick={() => setSelectedInvoice(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
