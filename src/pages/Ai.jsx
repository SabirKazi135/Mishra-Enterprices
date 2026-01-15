import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ChevronRight, Phone, Mail } from 'lucide-react';

import { products, categories as categoryData } from '../data/products.data';
import Footer from '../components/Footer';

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [isLoading, setIsLoading] = useState(true);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const sidebarCategories = useMemo(() => {
    const counts = products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { name: 'All Products', count: products.length },
      ...categoryData.map((c) => ({
        name: c.title,
        count: counts[c.title] || 0,
      })),
    ];
  }, []);

  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      selectedCategory === 'All Products' || p.category === selectedCategory;

    const searchMatch =
      !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  /* ----------------------------------
     HELPERS
  -----------------------------------*/
  const highlight = (text) => {
    if (!searchQuery) return text;
    return text.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="bg-yellow-300 text-black">
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  /* ----------------------------------
     UI
  -----------------------------------*/
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-indigo-500 text-white shadow">
          <div className="container mx-auto flex justify-between px-4 py-4">
            <nav className="flex gap-6">
              {['Home', 'Services', 'About us', 'Contact us'].map((item) => (
                <a key={item} href="#" className="hover:opacity-80">
                  {item}
                </a>
              ))}

              {/* PRODUCTS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                <span className="flex cursor-pointer items-center gap-1">
                  Products <ChevronRight size={16} />
                </span>

                {showProductsDropdown && (
                  <div className="absolute mt-2 w-64 rounded bg-white text-gray-800 shadow">
                    {categoryData.map((c) => (
                      <button
                        key={c.key}
                        onClick={() => setSelectedCategory(c.title)}
                        className="block w-full px-4 py-2 text-left hover:bg-indigo-50"
                      >
                        {c.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} /> +91-8884607600
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} /> info@mishraenterprises.in
              </div>
            </div>
          </div>
        </header>

        {/* BODY */}
        <div className="container mx-auto grid grid-cols-4 gap-6 px-4 py-8">
          {/* SIDEBAR */}
          <aside className="sticky top-24 col-span-1 rounded bg-white p-4 shadow">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded border px-10 py-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="max-h-[500px] space-y-1 overflow-y-auto">
              {sidebarCategories.map((c) => (
                <div
                  key={c.name}
                  onClick={() => setSelectedCategory(c.name)}
                  className={`flex cursor-pointer justify-between rounded px-3 py-2 ${
                    selectedCategory === c.name
                      ? 'bg-indigo-500 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <span>{c.name}</span>
                  <span className="text-xs">{c.count}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* PRODUCTS GRID */}
          <section className="col-span-3">
            <h2 className="mb-6 text-2xl font-bold">
              {selectedCategory}{' '}
              <span className="text-lg text-gray-500">
                ({filteredProducts.length})
              </span>
            </h2>

            <div className="grid grid-cols-3 gap-6">
              {isLoading
                ? Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="animate-pulse rounded bg-white shadow"
                    >
                      <div className="aspect-square bg-gray-200" />
                      <div className="space-y-2 p-4">
                        <div className="h-3 w-1/3 rounded bg-gray-200" />
                        <div className="h-4 w-2/3 rounded bg-gray-200" />
                      </div>
                    </div>
                  ))
                : filteredProducts.map((p, i) => (
                    <div
                      key={i}
                      className="rounded bg-white shadow transition hover:shadow-xl"
                    >
                      <div className="flex aspect-square items-center justify-center bg-gray-100">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <div className="mb-1 text-xs text-gray-500">
                          {p.category}
                        </div>
                        <div className="font-medium">{highlight(p.name)}</div>
                      </div>
                    </div>
                  ))}
            </div>

            {!isLoading && filteredProducts.length === 0 && (
              <div className="py-20 text-center text-gray-500">
                No products found
              </div>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
