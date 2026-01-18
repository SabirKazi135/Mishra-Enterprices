// src/admin/pages/AdminLogin.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin, isAdminLoggedIn } from '../utils/adminAuth';

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // If already logged in, redirect to dashboard
  if (isAdminLoggedIn()) {
    navigate('/admin/dashboard', { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // HARD-CODED ADMIN CREDENTIALS
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'admin123';

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      loginAdmin();
      navigate('/admin/dashboard', { replace: true });
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
        {/* HEADER */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-[#07062B]">Admin Login</h1>
          <p className="mt-1 text-sm text-gray-600">
            Restricted access — administrators only
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#0568A4]"
              placeholder="Enter admin username"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#0568A4]"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded bg-[#0568A4] py-2 text-sm font-medium text-white transition-colors hover:bg-[#045a8c]"
          >
            Login
          </button>
        </form>

        {/* FOOT NOTE */}
        <p className="mt-6 text-center text-xs text-gray-500">
          This admin panel uses frontend-only authentication.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
