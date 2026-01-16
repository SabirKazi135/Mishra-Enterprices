import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Ai from './pages/Ai';
import Gallery from './pages/Gallery';
import Videos from './pages/Videos';


import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminRoute from './admin/components/AdminRoute';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/Ai" element={<Ai />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          {/* ADMIN ROUTES (HIDDEN) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="*"
            element={
              <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                  <h1 className="mb-4 text-4xl font-bold text-gray-900">
                    404 - Page Not Found
                  </h1>
                  <p className="mb-6 text-gray-600">
                    The page you're looking for doesn't exist.
                  </p>
                  <Link
                    to="/"
                    className="inline-block rounded bg-[#0568A4] px-6 py-3 text-white transition-colors hover:bg-[#045a8c]"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
}
