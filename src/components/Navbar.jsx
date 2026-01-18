import icon from '../assets/images/icon.webp';
import { categories } from '../data/products.data';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ selectedCategory, setSelectedCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [printingOpen, setPrintingOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    setIsOpen(false);
    setProductsOpen(false);
    setPrintingOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="flex items-center justify-between bg-[#07062B] px-4 py-2 md:px-5">
        {/* LOGO */}
        <Link to="/" aria-label="Mishra Enterprises Home">
          <img
            src={icon}
            alt="Mishra Enterprises Logo"
            className="h-[127px] w-[127px] md:h-[100px] md:w-[100px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="hidden items-baseline justify-center gap-8 font-medium text-white md:flex"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={`border-box h-20 cursor-pointer p-[30px] text-xl transition-colors hover:text-gray-300 ${isActive('/') ? 'text-gray-300' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`border-box h-20 cursor-pointer p-[30px] text-xl transition-colors hover:text-gray-300 ${isActive('/services') ? 'text-gray-300' : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>

          <div className="group relative inline-block">
            {/* BUTTON */}
            <button className="flex h-20 items-center gap-1 p-[30px] text-xl hover:text-gray-300">
              Products <span className="text-sm">▾</span>
            </button>

            {/* HOVER BUFFER (INVISIBLE) */}
            <div className="pointer-events-auto absolute left-0 top-full h-3 w-full opacity-0"></div>

            <div className="absolute left-0 top-[calc(100%+12px)] hidden w-56 rounded bg-white text-[#07062B] shadow-lg group-hover:block">
              <Link
                to="/products"
                state={{
                  filter: { type: 'category', value: 'Pouch Products' },
                }}
                className="block px-4 py-3 hover:bg-gray-100"
                onClick={closeMenu}
              >
                Pouch Products
              </Link>

              <Link
                to="/products"
                state={{ filter: { type: 'range', value: 'packaging' } }}
                className="block px-4 py-3 hover:bg-gray-100"
                onClick={closeMenu}
              >
                Explore by Range
              </Link>

              <Link
                to="/products"
                state={{
                  filter: {
                    type: 'category',
                    value: 'Aluminium Foil Containers',
                  },
                }}
                className="block px-4 py-3 hover:bg-gray-100"
                onClick={closeMenu}
              >
                Aluminium foil roll
              </Link>

              <Link
                to="/products"
                state={{ filter: { type: 'category', value: 'Raw Materials' } }}
                className="block px-4 py-3 hover:bg-gray-100"
                onClick={closeMenu}
              >
                Raw Materials
              </Link>

              {/* NESTED DROPDOWN */}
              <div className="group/sub relative">
                <div className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-gray-100">
                  Printing and customisation <span>▸</span>
                </div>

                <div className="absolute left-full top-0 hidden w-44 rounded bg-white shadow-lg group-hover/sub:block">
                  <Link
                    to="/gallery"
                    className="block px-4 py-3 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/videos"
                    className="block px-4 py-3 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Videos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className={`border-box h-20 cursor-pointer p-[30px] text-xl transition-colors hover:text-gray-300 ${isActive('/about') ? 'text-gray-300' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`border-box h-20 cursor-pointer p-[30px] text-xl transition-colors hover:text-gray-300 ${isActive('/contact') ? 'text-gray-300' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className={`border-box h-20 cursor-pointer p-[30px] text-xl transition-colors hover:text-gray-300 ${isActive('/faq') ? 'text-gray-300' : ''}`}
            onClick={closeMenu}
          >
            FAQ
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* DESKTOP PHONE */}
          <a
            href="tel:+918884607600"
            className="hidden rounded border border-white px-4 py-2 text-white transition-colors hover:bg-white hover:text-[#07062B] md:inline-flex"
            aria-label="Call us at 88846 07600"
          >
            📞 88846 07600
          </a>

          {/* MOBILE MENU */}
          <button
            className="mr-8 flex w-[45px] flex-col gap-1 rounded border-2 border-white p-2 md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isOpen}
          >
            <span className="block h-[1px] w-6 bg-white"></span>
            <span className="block h-[1px] w-6 bg-white"></span>
            <span className="block h-[1px] w-6 bg-white"></span>
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* SIDEBAR (MOBILE) */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-[350px] transform bg-[#07062B] text-white transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* HEADER */}
        <div className="flex h-[100px] items-center justify-between px-6">
          <img
            src={icon}
            alt="Mishra Enterprises Logo"
            className="h-[60px] w-[60px]"
          />
          <button
            className="flex size-[40px] items-center justify-center rounded border border-white transition-colors hover:bg-white/10"
            onClick={closeMenu}
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>

        {/* SIDEBAR MENU */}
        <nav
          className="mt-6 flex flex-col gap-5 px-6 text-lg"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            className="text-xl transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-xl transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            Services
          </Link>

          {/* MOBILE PRODUCTS DROPDOWN */}

          {/* PRODUCTS (LEVEL 1) */}
          <button
            className="flex items-center justify-between text-2xl"
            onClick={() => setProductsOpen(!productsOpen)}
          >
            Products
            <span
              className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`}
            >
              ▾
            </span>
          </button>

          {productsOpen && (
            <div className="ml-4 flex flex-col gap-3 text-xl text-gray-300">
              <Link
                to="/products"
                state={{
                  filter: { type: 'category', value: 'Pouch Products' },
                }}
                onClick={closeMenu}
              >
                Pouch Products
              </Link>

              <Link
                to="/products"
                state={{ filter: { type: 'range', value: 'packaging' } }}
                onClick={closeMenu}
              >
                Explore by Range
              </Link>

              <Link
                to="/products"
                state={{
                  filter: {
                    type: 'category',
                    value: 'Aluminium Foil Containers',
                  },
                }}
                onClick={closeMenu}
              >
                Aluminium foil roll
              </Link>

              <Link
                to="/products"
                state={{ filter: { type: 'category', value: 'Raw Materials' } }}
                onClick={closeMenu}
              >
                Raw Materials
              </Link>

              {/* PRINTING & CUSTOMISATION */}
              <button
                className="flex items-center justify-between"
                onClick={() => setPrintingOpen(!printingOpen)}
              >
                Printing and customisation
                <span className={`${printingOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>

              {printingOpen && (
                <div className="ml-4 flex flex-col gap-2 text-lg text-gray-400">
                  <Link to="/gallery" onClick={closeMenu}>
                    Gallery
                  </Link>
                  <Link to="/videos" onClick={closeMenu}>
                    Videos
                  </Link>
                </div>
              )}
            </div>
          )}

          <Link
            to="/about"
            className="text-xl transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-xl transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="text-xl transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            FAQ
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
