'use client'

interface ServiceClient {
  name: string
}

interface ServiceData {
  name: string
  activeProjects: number
  totalRevenue: string
  activeClients: number
  clients: ServiceClient[]
}

const servicesData: ServiceData[] = [
  {
    name: 'AI & Automation',
    activeProjects: 3,
    totalRevenue: '$245K',
    activeClients: 4,
    clients: [
      { name: 'NovaPay Financial' },
      { name: 'Acme Corp' },
      { name: 'TechFlow Inc' },
      { name: 'Pinnacle Logistics' },
    ],
  },
  {
    name: 'SaaS Development',
    activeProjects: 2,
    totalRevenue: '$380K',
    activeClients: 3,
    clients: [
      { name: 'TechFlow Inc' },
      { name: 'CloudSync Ltd' },
      { name: 'Vantage Media' },
    ],
  },
  {
    name: 'Web Applications',
    activeProjects: 4,
    totalRevenue: '$195K',
    activeClients: 5,
    clients: [
      { name: 'UrbanNest Realty' },
      { name: 'Luxe Retail' },
      { name: 'GreenLeaf Foods' },
      { name: 'Pinnacle Logistics' },
      { name: 'Vantage Media' },
    ],
  },
  {
    name: 'Mobile Applications',
    activeProjects: 2,
    totalRevenue: '$160K',
    activeClients: 2,
    clients: [
      { name: 'MedConnect Health' },
      { name: 'UrbanNest Realty' },
    ],
  },
  {
    name: 'Performance Marketing',
    activeProjects: 3,
    totalRevenue: '$120K',
    activeClients: 4,
    clients: [
      { name: 'GreenLeaf Foods' },
      { name: 'Luxe Retail' },
      { name: 'Acme Corp' },
      { name: 'Vantage Media' },
    ],
  },
  {
    name: 'SEO & Organic Growth',
    activeProjects: 3,
    totalRevenue: '$85K',
    activeClients: 5,
    clients: [
      { name: 'Luxe Retail' },
      { name: 'GreenLeaf Foods' },
      { name: 'UrbanNest Realty' },
      { name: 'Pinnacle Logistics' },
      { name: 'Acme Corp' },
    ],
  },
  {
    name: 'Email & CRM',
    activeProjects: 1,
    totalRevenue: '$45K',
    activeClients: 2,
    clients: [
      { name: 'Pinnacle Logistics' },
      { name: 'GreenLeaf Foods' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    activeProjects: 2,
    totalRevenue: '$130K',
    activeClients: 3,
    clients: [
      { name: 'CloudSync Ltd' },
      { name: 'TechFlow Inc' },
      { name: 'NovaPay Financial' },
    ],
  },
  {
    name: 'Analytics & BI',
    activeProjects: 1,
    totalRevenue: '$55K',
    activeClients: 2,
    clients: [
      { name: 'Vantage Media' },
      { name: 'Luxe Retail' },
    ],
  },
]

export default function ServicesPage() {
  const totalProjects = servicesData.reduce((sum, s) => sum + s.activeProjects, 0)
  const totalClients = new Set(servicesData.flatMap((s) => s.clients.map((c) => c.name))).size

  return (
    <div>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Services</h1>
          <p className="admin-page-desc">
            {servicesData.length} services -- {totalProjects} active projects -- {totalClients} unique clients
          </p>
        </div>
      </div>

      <div className="admin-services-grid">
        {servicesData.map((service) => (
          <div key={service.name} className="admin-service-card">
            <div className="admin-service-name">{service.name}</div>

            <div className="admin-service-stats">
              <div>
                <div className="admin-service-stat-val">{service.activeProjects}</div>
                <div className="admin-service-stat-lbl">Projects</div>
              </div>
              <div>
                <div className="admin-service-stat-val">{service.totalRevenue}</div>
                <div className="admin-service-stat-lbl">Revenue</div>
              </div>
              <div>
                <div className="admin-service-stat-val">{service.activeClients}</div>
                <div className="admin-service-stat-lbl">Clients</div>
              </div>
            </div>

            <div className="admin-service-clients-title">Active Clients</div>
            <div className="admin-service-client-list">
              {service.clients.map((client) => (
                <div key={client.name} className="admin-service-client-item">
                  <span className="admin-service-client-dot" />
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
