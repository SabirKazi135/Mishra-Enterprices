// src/admin/pages/AdminDashboard.jsx

import { useNavigate } from 'react-router-dom';
import { logoutAdmin } from '../utils/adminAuth';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#07062B]">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Manage internal content and monitor site overview
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="w-fit rounded bg-[#0568A4] px-5 py-2 text-white transition-colors hover:bg-[#045a8c]"
          >
            Logout
          </button>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Products" value="128" />
          <StatCard title="Categories" value="6" />
          <StatCard title="Gallery Images" value="13" />
          <StatCard title="Videos" value="7" />
        </div>

        {/* MAIN PANELS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* LEFT PANEL */}
          <div className="rounded bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-[#07062B]">
              Quick Actions
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ActionButton label="Manage Products" />
              <ActionButton label="Update Gallery" />
              <ActionButton label="Upload Videos" />
              <ActionButton label="View Enquiries" />
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="rounded bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-[#07062B]">
              System Status
            </h2>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center justify-between">
                <span>Frontend Status</span>
                <span className="font-medium text-green-600">Active</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Admin Auth</span>
                <span className="font-medium text-green-600">Enabled</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Storage</span>
                <span className="font-medium text-green-600">Local</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="rounded bg-white p-6 text-sm text-gray-500 shadow-md">
          This admin panel is frontend-only and uses local storage for session
          management.
        </div>
      </div>
    </div>
  );
}

/* ---------------- SMALL REUSABLE PIECES ---------------- */

function StatCard({ title, value }) {
  return (
    <div className="rounded bg-white p-6 shadow-md">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-[#07062B]">{value}</p>
    </div>
  );
}

function ActionButton({ label }) {
  return (
    <button className="rounded border border-[#0568A4] px-4 py-3 text-sm font-medium text-[#0568A4] transition-colors hover:bg-[#0568A4] hover:text-white">
      {label}
    </button>
  );
}

export default AdminDashboard;
