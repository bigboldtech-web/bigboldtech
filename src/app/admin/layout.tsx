'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '@/styles/admin.css'

const navSections = [
  {
    label: 'OVERVIEW',
    items: [
      { label: 'Dashboard', href: '/admin', icon: '◫' },
    ],
  },
  {
    label: 'SALES',
    items: [
      { label: 'Leads', href: '/admin/leads', icon: '◉' },
      { label: 'Clients', href: '/admin/clients', icon: '◎' },
    ],
  },
  {
    label: 'OPERATIONS',
    items: [
      { label: 'Projects', href: '/admin/projects', icon: '▦' },
      { label: 'Services', href: '/admin/services', icon: '◈' },
    ],
  },
  {
    label: 'FINANCE',
    items: [
      { label: 'Invoices', href: '/admin/invoices', icon: '▤' },
    ],
  },
  {
    label: 'SETTINGS',
    items: [
      { label: 'Settings', href: '/admin/settings', icon: '⚙' },
    ],
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="admin-layout">
      {/* Mobile overlay */}
      <div
        className={`admin-sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <Link href="/admin" className="admin-logo">
            <span className="admin-logo-icon">BBT</span>
            <span className="admin-logo-text">Admin Panel</span>
          </Link>
        </div>
        <nav className="admin-sidebar-nav">
          {navSections.map((section) => (
            <div key={section.label}>
              <div className="admin-sidebar-section">{section.label}</div>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`admin-nav-item ${pathname === item.href ? 'active' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="admin-nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="admin-main">
        {children}
      </main>

      {/* Mobile toggle */}
      <button
        className="admin-mobile-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>
    </div>
  )
}
