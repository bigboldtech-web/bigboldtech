'use client'

import Link from 'next/link'

const stats = [
  { label: 'Total Leads', value: '47', change: '+12 this month', trend: 'up' },
  { label: 'Active Clients', value: '18', change: '+3 this month', trend: 'up' },
  { label: 'Active Projects', value: '12', change: '2 completing soon', trend: 'neutral' },
  { label: 'Revenue (MTD)', value: '$84,500', change: '+22% vs last month', trend: 'up' },
]

const recentLeads = [
  { id: 1, name: 'Acme Corp', contact: 'John Smith', email: 'john@acme.com', service: 'AI & Automation', status: 'New', date: '2026-03-28' },
  { id: 2, name: 'TechFlow Inc', contact: 'Sarah Lee', email: 'sarah@techflow.io', service: 'SaaS Development', status: 'Contacted', date: '2026-03-27' },
  { id: 3, name: 'GreenLeaf Foods', contact: 'Mike Chen', email: 'mike@greenleaf.com', service: 'Performance Marketing', status: 'Interested', date: '2026-03-26' },
  { id: 4, name: 'UrbanNest Realty', contact: 'Priya Patel', email: 'priya@urbannest.in', service: 'Web Applications', status: 'New', date: '2026-03-25' },
  { id: 5, name: 'CloudSync Ltd', contact: 'David Kim', email: 'david@cloudsync.com', service: 'DevOps & Cloud', status: 'Converted', date: '2026-03-24' },
]

const activeProjects = [
  { id: 1, client: 'NovaPay Financial', project: 'AI Fraud Detection v2', service: 'AI & Automation', progress: 75, status: 'In Progress' },
  { id: 2, client: 'MedConnect Health', project: 'Patient Portal Mobile', service: 'Mobile Applications', progress: 45, status: 'In Progress' },
  { id: 3, client: 'Luxe Retail', project: 'SEO & Content Strategy', service: 'SEO & Growth', progress: 90, status: 'Completing' },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Dashboard</h1>
          <p className="admin-page-desc">Overview of BigBold Technologies operations</p>
        </div>
      </div>

      <div className="admin-stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-stat-card">
            <div className="admin-stat-value">{stat.value}</div>
            <div className="admin-stat-label">{stat.label}</div>
            <div className={`admin-stat-change ${stat.trend}`}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Recent Leads</h3>
            <Link href="/admin/leads" className="admin-btn secondary small">View All</Link>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Service</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <div className="admin-cell-primary">{lead.name}</div>
                    <div className="admin-cell-secondary">{lead.contact}</div>
                  </td>
                  <td>{lead.service}</td>
                  <td><span className={`admin-badge ${lead.status === 'New' ? 'cyan' : lead.status === 'Converted' ? 'green' : lead.status === 'Interested' ? 'amber' : 'default'}`}>{lead.status}</span></td>
                  <td className="admin-cell-secondary">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Active Projects</h3>
            <Link href="/admin/projects" className="admin-btn secondary small">View All</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
            {activeProjects.map((project) => (
              <div key={project.id} className="admin-project-row">
                <div>
                  <div className="admin-cell-primary">{project.project}</div>
                  <div className="admin-cell-secondary">{project.client} · {project.service}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '160px' }}>
                  <div className="admin-progress-bar">
                    <div className="admin-progress-fill" style={{ width: `${project.progress}%` }} />
                  </div>
                  <span className="admin-cell-secondary">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
