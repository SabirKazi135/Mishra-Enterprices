function ProductSection({ title, subtitle, products }) {
  return (
    <section className="p-[50px]">
      {/* HEADER */}
      <div className="mb-8 text-center">
        <h1 className="text-[27px] font-bold text-[#363636]">{title}</h1>

        {subtitle && (
          <p className="mt-1 text-[13px] font-light text-[#858585]">
            {subtitle}
          </p>
        )}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {products.map((product, index) => (
          <article
            key={`${product.title}-${index}`}
            className="rounded-xl bg-gray-100 p-[15px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              className="mx-auto h-[220px] cursor-pointer object-contain"
              loading="lazy"
            />

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-3 text-center">
              <button
                type="button"
                className="text-[#858585] transition-colors hover:text-[#F57B7C]"
                aria-label="View all products"
              >
                All Products
              </button>

              <h3 className="cursor-pointer text-lg font-semibold text-[#101010] transition-colors hover:text-[#002BA9]">
                {product.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="flex h-[36px] cursor-pointer items-center justify-end rounded-[5px] bg-[#0568a4] px-14 text-[20px] text-white transition-colors hover:bg-[#045a8c] md:h-[48px] md:px-[30px] md:py-[14px]"
          aria-label="View all products"
        >
          View All
        </button>
      </div>
    </section>
  );
}

export default ProductSection;
