'use client'

import { useState, useMemo } from 'react'
import '@/styles/admin.css'

type ProjectStatus = 'Planning' | 'In Progress' | 'Review' | 'Completed'

interface Project {
  id: number
  client: string
  projectName: string
  service: string
  status: ProjectStatus
  progress: number
  startDate: string
  deadline: string
  assignedTo: string
  budget: number
}

const sampleProjects: Project[] = [
  {
    id: 1,
    client: 'NovaPay Financial',
    projectName: 'AI Fraud Detection v2',
    service: 'AI & Automation',
    status: 'In Progress',
    progress: 75,
    startDate: '2025-12-01',
    deadline: '2026-04-30',
    assignedTo: 'Arjun Desai',
    budget: 48000,
  },
  {
    id: 2,
    client: 'MedConnect Health',
    projectName: 'Patient Portal Mobile App',
    service: 'Mobile Applications',
    status: 'In Progress',
    progress: 45,
    startDate: '2026-01-10',
    deadline: '2026-06-15',
    assignedTo: 'Neha Kapoor',
    budget: 62000,
  },
  {
    id: 3,
    client: 'Luxe Retail Group',
    projectName: 'SEO & Content Strategy',
    service: 'SEO & Growth',
    status: 'Review',
    progress: 90,
    startDate: '2025-10-01',
    deadline: '2026-04-01',
    assignedTo: 'Vikram Singh',
    budget: 24000,
  },
  {
    id: 4,
    client: 'UrbanNest Realty',
    projectName: 'Property Listing Platform',
    service: 'Web Applications',
    status: 'Planning',
    progress: 10,
    startDate: '2026-03-15',
    deadline: '2026-08-30',
    assignedTo: 'Ravi Nair',
    budget: 55000,
  },
  {
    id: 5,
    client: 'TechFlow Inc',
    projectName: 'Multi-tenant SaaS Dashboard',
    service: 'SaaS Development',
    status: 'Planning',
    progress: 15,
    startDate: '2026-03-01',
    deadline: '2026-09-15',
    assignedTo: 'Arjun Desai',
    budget: 95000,
  },
  {
    id: 6,
    client: 'Bright Education',
    projectName: 'AI Tutoring Chatbot',
    service: 'AI & Automation',
    status: 'In Progress',
    progress: 60,
    startDate: '2025-11-15',
    deadline: '2026-05-01',
    assignedTo: 'Priya Menon',
    budget: 38000,
  },
  {
    id: 7,
    client: 'GreenLeaf Foods',
    projectName: 'PPC Campaign Optimization',
    service: 'Performance Marketing',
    status: 'Completed',
    progress: 100,
    startDate: '2025-09-01',
    deadline: '2026-02-28',
    assignedTo: 'Vikram Singh',
    budget: 18000,
  },
  {
    id: 8,
    client: 'CloudSync Ltd',
    projectName: 'Kubernetes Migration',
    service: 'DevOps & Cloud',
    status: 'Completed',
    progress: 100,
    startDate: '2025-06-01',
    deadline: '2025-12-15',
    assignedTo: 'Ravi Nair',
    budget: 72000,
  },
]

const allStatuses: ProjectStatus[] = ['Planning', 'In Progress', 'Review', 'Completed']

const statusColors: Record<ProjectStatus, string> = {
  Planning: 'cyan',
  'In Progress': 'amber',
  Review: 'violet',
  Completed: 'green',
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount)
}

function getProgressColor(progress: number): string {
  if (progress >= 80) return ''
  if (progress >= 40) return 'amber'
  return 'rose'
}

function getDaysUntil(deadline: string): string {
  const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  if (diff < 0) return `${Math.abs(diff)}d overdue`
  if (diff === 0) return 'Due today'
  return `${diff}d left`
}

export default function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState<'All' | ProjectStatus>('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = useMemo(() => {
    if (statusFilter === 'All') return sampleProjects
    return sampleProjects.filter((p) => p.status === statusFilter)
  }, [statusFilter])

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { All: sampleProjects.length }
    allStatuses.forEach((s) => {
      counts[s] = sampleProjects.filter((p) => p.status === s).length
    })
    return counts
  }, [])

  return (
    <div>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Projects</h1>
          <p className="admin-page-desc">Track project progress and deadlines</p>
        </div>
        <button className="admin-btn primary" onClick={() => setShowAddModal(true)}>
          + Add Project
        </button>
      </div>

      <div className="admin-toolbar">
        <div className="admin-toolbar-left">
          <div className="admin-filter-tabs">
            {['All', ...allStatuses].map((s) => (
              <button
                key={s}
                className={`admin-filter-tab ${statusFilter === s ? 'active' : ''}`}
                onClick={() => setStatusFilter(s as 'All' | ProjectStatus)}
              >
                {s}
                <span className="admin-count">{statusCounts[s]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Service</th>
              <th>Assigned To</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <div className="admin-empty">No projects found matching this filter.</div>
                </td>
              </tr>
            ) : (
              filtered.map((project) => (
                <tr key={project.id}>
                  <td>
                    <div className="admin-cell-primary">{project.projectName}</div>
                    <div className="admin-cell-secondary">{formatCurrency(project.budget)} budget</div>
                  </td>
                  <td>
                    <div className="admin-cell-primary">{project.client}</div>
                  </td>
                  <td>
                    <span className="admin-service-tag">{project.service}</span>
                  </td>
                  <td>
                    <div className="admin-cell-primary">{project.assignedTo}</div>
                  </td>
                  <td>
                    <div className="admin-progress-inline">
                      <div className="admin-progress-bar">
                        <div
                          className={`admin-progress-fill ${getProgressColor(project.progress)}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="admin-progress-pct">{project.progress}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={`admin-badge ${statusColors[project.status]}`}>{project.status}</span>
                  </td>
                  <td>
                    <div className="admin-cell-primary">{project.deadline}</div>
                    <div className="admin-cell-secondary">{getDaysUntil(project.deadline)}</div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="admin-modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="admin-modal wide" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Add New Project</h2>
              <button className="admin-modal-close" onClick={() => setShowAddModal(false)}>&times;</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form-grid">
                <div className="admin-form-group full">
                  <label className="admin-form-label">Project Name</label>
                  <input type="text" className="admin-form-input" placeholder="e.g. AI Fraud Detection v2" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Client</label>
                  <select className="admin-form-select">
                    <option value="">Select client...</option>
                    <option value="NovaPay Financial">NovaPay Financial</option>
                    <option value="MedConnect Health">MedConnect Health</option>
                    <option value="Luxe Retail Group">Luxe Retail Group</option>
                    <option value="UrbanNest Realty">UrbanNest Realty</option>
                    <option value="TechFlow Inc">TechFlow Inc</option>
                    <option value="Bright Education">Bright Education</option>
                    <option value="GreenLeaf Foods">GreenLeaf Foods</option>
                    <option value="CloudSync Ltd">CloudSync Ltd</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Service</label>
                  <select className="admin-form-select">
                    <option value="">Select service...</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="Mobile Applications">Mobile Applications</option>
                    <option value="Web Applications">Web Applications</option>
                    <option value="DevOps & Cloud">DevOps & Cloud</option>
                    <option value="SEO & Growth">SEO & Growth</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Status</label>
                  <select className="admin-form-select">
                    <option value="Planning">Planning</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Progress (%)</label>
                  <input type="number" className="admin-form-input" placeholder="0" min="0" max="100" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Assigned To</label>
                  <input type="text" className="admin-form-input" placeholder="Team member name" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Start Date</label>
                  <input type="date" className="admin-form-input" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Deadline</label>
                  <input type="date" className="admin-form-input" />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Budget (USD)</label>
                  <input type="number" className="admin-form-input" placeholder="0" />
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="admin-btn primary" onClick={() => setShowAddModal(false)}>Create Project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
