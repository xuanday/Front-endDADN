import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LogOut, Menu, Bell } from 'lucide-react'
import logo from "/logo.jpg"
import {
  LayoutDashboard,
  Settings,
  Cpu,
  AlertTriangle,
  BarChart3,
  Users,
  Wrench
} from 'lucide-react'
import '../styles/layout.css'

export default function MainLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard /> },
  { path: '/devices', label: 'Thiết bị', icon: <Cpu /> },
  { path: '/sensors', label: 'Cảm biến', icon: <Settings /> },
  { path: '/alerts', label: 'Cảnh báo', icon: <AlertTriangle /> },
  { path: '/reports', label: 'Báo cáo', icon: <BarChart3 /> },
]

  const adminItems = [
  { path: '/admin/users', label: 'Người dùng', icon: <Users /> },
  { path: '/admin/settings', label: 'Cài đặt', icon: <Wrench /> },
]

  return (
    <div className="layout">
      {/* Header */}
      <header className="layout-header">
        <div className="header-logo">
            <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }} />
            <span className="logo-text">Smart Farm</span>
        </div>
        <div className="header-actions">
          <button className="header-action-btn">
            <Bell />
          </button>
          <div className="header-user">
            <div className="header-user-avatar">AD</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>Admin</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Quản lý
              </div>
            </div>
          </div>
          <button
            className="header-action-btn"
            onClick={handleLogout}
            title="Đăng xuất"
          >
            <LogOut />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="layout-sidebar">
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.path} className="sidebar-nav-item">
              <Link
                to={item.path}
                className={`sidebar-nav-link ${
                  isActive(item.path) ? 'active' : ''
                }`}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </nav>

        <div className="sidebar-section">
          <div className="sidebar-section-title">Quản trị</div>
          <nav className="sidebar-nav">
            {adminItems.map((item) => (
              <li key={item.path} className="sidebar-nav-item">
                <Link
                  to={item.path}
                  className={`sidebar-nav-link ${
                    isActive(item.path) ? 'active' : ''
                  }`}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="layout-content">{children}</main>
    </div>
  )
}
