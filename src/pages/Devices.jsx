import DeviceStatus from '../components/DeviceStatus'

const Devices = () => {
  return (
    <div className="p-6 space-y-6 bg-[#020617] min-h-screen text-white">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Quản lý thiết bị</h1>
        <p className="text-gray-400 mt-1">
          Theo dõi trạng thái thiết bị trong hệ thống nông trại thông minh
        </p>
      </div>

      {/* QUICK STATS */}
      <div className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-lg font-semibold mb-4">📊 Trạng thái thiết bị</h2>

        <DeviceStatus />
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 text-sm">
        Cập nhật realtime • {new Date().toLocaleString('vi-VN')}
      </div>

    </div>
  )
}

export default Devices
