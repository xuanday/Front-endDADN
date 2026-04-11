import { useState } from 'react'
import AutomationItem from '../components/AutomationItem'
import { Plus } from 'lucide-react'

const Automation = () => {
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: 'Tưới nước tự động',
      condition: 'Độ ẩm < 40%',
      action: 'Bật bơm nước',
      status: 'active',
      lastRun: '5 phút trước',
      color: '#3b82f6',
    },
    {
      id: 2,
      name: 'Chiếu sáng nhà kính',
      condition: 'Ánh sáng < 300 Lux',
      action: 'Bật đèn LED',
      status: 'active',
      lastRun: '12 phút trước',
      color: '#f59e0b',
    },
  ])

  const toggle = (id) => {
    setAutomations((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: a.status === 'active' ? 'paused' : 'active' }
          : a
      )
    )
  }

  const remove = (id) => {
    setAutomations((prev) => prev.filter((a) => a.id !== id))
  }

  return (
    <div className="card">

      {/* HEADER */}
      <div className="card-header">
        <div className="card-title">Automation</div>

        <button className="btn btn-primary btn-sm">
          <Plus size={16} />
          Add rule
        </button>
      </div>

      {/* DESCRIPTION*/}
      <div
        style={{
          marginBottom: 'var(--spacing-md)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}
      >
        Quản lý kịch bản tự động trong hệ thống nông trại thông minh.
      </div>

      {/* LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {automations.map((item) => (
          <AutomationItem
            key={item.id}
            item={item}
            onToggle={toggle}
            onDelete={remove}
          />
        ))}
      </div>
    </div>
  )
}

export default Automation
