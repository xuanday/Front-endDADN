import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import FarmManagement from './pages/FarmManagement'
import ReportManagement from './pages/report'
import UserProfile from './pages/UserProfile'
import './styles/theme.css'
import './styles/components.css'
import './styles/layout.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Placeholder routes for future pages */}
        <Route
          path="/monitoring"
          element={
            <ProtectedRoute>
              <MainLayout>
                <div className="card">
                  <h2>Giám sát</h2>
                  <p>Trang này sẽ được phát triển sớm...</p>
                </div>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/devices"
          element={
            <ProtectedRoute>
              <MainLayout>
                <div className="card">
                  <h2>Thiết bị</h2>
                  <p>Trang này sẽ được phát triển sớm...</p>
                </div>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/automation"
          element={
            <ProtectedRoute>
              <MainLayout>
                <div className="card">
                  <h2>Tự động hóa</h2>
                  <p>Trang này sẽ được phát triển sớm...</p>
                </div>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/farm"
          element={
            <ProtectedRoute>
              <MainLayout>
                <FarmManagement />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <MainLayout>
                <ReportManagement></ReportManagement>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <UserProfile />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <MainLayout>
               <UserProfile></UserProfile>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Default route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  )
}

export default App
