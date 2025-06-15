import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { MdFastfood } from "react-icons/md";

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin', { replace: true });
  };

  const menuItems = [
    {
      label: 'Phòng',
      icon: FaHome,
      path: '/home-admin/admin-room',
      animationClass: 'group-hover:animate-wiggle-strong',
    },
    {
      label: 'Món ăn',
      icon: MdFastfood,
      path: '/home-admin/admin-food',
      animationClass: 'group-hover:animate-wiggle-strong',
    },
    {
      label: 'Cài đặt',
      icon: FaCog,
      path: '/home-admin/admin-settings',
      animationClass: 'group-hover:animate-spin-slow',
    },
  ];

  const MenuList = () => (
    <ul>
      {menuItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <li key={idx} className="mb-2">
            <button
              onClick={() => navigate(item.path)}
              className="group flex items-center gap-3 px-4 py-2 rounded-md w-full text-left 
                         transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-[1.03]"
            >
              <Icon className={`text-lg transition-transform duration-300 ${item.animationClass}`} />
              <span>{item.label}</span>
            </button>
          </li>
        );
      })}
      <li className="mt-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 w-full text-left text-red-300 
                     hover:text-red-500 transition-colors duration-300"
        >
          <FaSignOutAlt />
          <span>Đăng xuất</span>
        </button>
      </li>
    </ul>
  );

  const glassStyle = {
    backgroundColor: 'rgba(75, 95, 75, 0.88)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black bg-opacity-50 transition-opacity duration-300
          ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      >
        <aside
          className={`fixed left-0 top-0 bottom-0 w-64 p-4 z-50 text-white transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-xl`}
          style={glassStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Admin</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-2xl"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
          <MenuList />
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 p-4 text-white shadow-xl" style={glassStyle}>
        <h2 className="text-xl font-bold mb-6">Admin</h2>
        <MenuList />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <header className="bg-white shadow p-4 flex justify-between items-center md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-800 text-2xl"
            aria-label="Open sidebar"
          >
            ☰
          </button>
          <span className="font-bold">Admin</span>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
