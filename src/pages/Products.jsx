import React, { useState, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import { products, categories as categoryData } from '../data/products.data';

function Products() {
  /* ----------------------------------
     STATE
  -----------------------------------*/
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({
    type: 'category',
    value: 'All Products',
  });

  /* ----------------------------------
     ROUTER STATE
  -----------------------------------*/
  const location = useLocation();

  useEffect(() => {
    if (location.state?.filter) {
      setFilter(location.state.filter);
    }
  }, [location.state]);

  /* ----------------------------------
     NORMALIZED SEARCH
  -----------------------------------*/
  const normalizedSearch = searchQuery.trim().toLowerCase();

  /* ----------------------------------
     SIDEBAR CATEGORIES
  -----------------------------------*/
  const sidebarCategories = useMemo(() => {
    const counts = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { title: 'All Products', count: products.length },
      ...categoryData.map((c) => ({
        title: c.title,
        count: counts[c.title] || 0,
      })),
    ];
  }, []);

  /* ----------------------------------
     FILTERED PRODUCTS
  -----------------------------------*/
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filter.type === 'category') {
        if (filter.value === 'All Products') {
          // Show All
        } else if (filter.value === 'Raw Materials') {
          return false;
        } else if (product.category !== filter.value) {
          return false;
        }
      }

      if (filter.type === 'range') {
        const rangeMap = {
          packaging: ['Pouch Products', 'Paper Food Packaging'],
        };

        if (!rangeMap[filter.value]?.includes(product.category)) {
          return false;
        }
      }

      if (
        normalizedSearch &&
        !product.name.toLowerCase().includes(normalizedSearch)
      ) {
        return false;
      }

      return true;
    });
  }, [filter, normalizedSearch]);

  /* ----------------------------------
     SEARCH HIGHLIGHT
  -----------------------------------*/
  const highlightText = (text) => {
    if (!normalizedSearch) return text;

    const regex = new RegExp(`(${normalizedSearch})`, 'gi');

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === normalizedSearch ? (
        <mark key={index} className="bg-yellow-300">
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
      <div className="min-h-screen font-outfit">
        <div className="mx-auto grid w-full gap-6 px-4 py-8 md:grid-cols-[25%_75%]">
          {/* SIDEBAR */}
          <aside className="w-full min-w-0 p-[10px]">
            {/* SEARCH */}
            <div className="mb-6 flex h-[54px] w-full gap-1 border-2 border-[#e6e6e6] bg-[#E6E6E6]">
              <button className="flex w-[68px] items-center justify-center bg-[#E6E6E6]">
                <Search className="" size={18} />
              </button>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full cursor-pointer overflow-clip py-[15px] pl-3 text-base outline-none placeholder:text-lg placeholder:font-medium placeholder:text-gray-900 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-2"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* CATEGORIES */}
            <div className="w-full space-y-1">
              {/* {sidebarCategories.map((c) => (
                <div
                  className="py-[15px] leading-6"
                  key={c.title}
                  onClick={() =>
                    setFilter({ type: 'category', value: c.title })
                  }
                >
                  <span className="cursor-pointer text-xl font-medium leading-6 text-[#4B4B4B] hover:text-[#302f2f]">
                    {c.title}
                  </span>
                  <span className="ml-2 text-base">({c.count})</span>
                </div>
              ))} */}

              {sidebarCategories.map((c) => {
                const isActive =
                  filter.type === 'category' && filter.value === c.title;

                return (
                  <div
                    key={c.title}
                    onClick={() =>
                      setFilter({ type: 'category', value: c.title })
                    }
                    className={`cursor-pointer py-[15px] leading-6 transition-all duration-100 ${
                      isActive
                        ? 'border-l-4 border-[#19299B] pl-4 font-semibold text-[#19299B]'
                        : 'pl-4 text-[#4B4B4B]'
                    } `}
                  >
                    <span className="text-xl leading-6">{c.title}</span>
                    <span className="ml-2 text-base">({c.count})</span>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* PRODUCTS */}
          <section className="grid w-full min-w-0 gap-1 p-[10px]">
            <h2 className="mb-6 text-xl">
              {filter.value} ({filteredProducts.length})
            </h2>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="rounded-[5px] bg-gray-100 p-[15px] transition-all duration-200 ease-in-out hover:scale-105 hover:bg-gray-200 hover:shadow-lg"
                >
                  <div className="mx-auto aspect-square w-[235px] cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="mt-2 w-full space-y-2">
                    <div className="cursor-pointer text-center text-[13px] leading-5 text-[#858585] hover:text-[#19299B]">
                      {product.category}
                    </div>
                    <div className="cursor-pointer text-center text-[15px] leading-5 hover:text-[#19299B]">
                      {highlightText(product.name)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">No products found</div>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
