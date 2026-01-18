function InfoSection({
  title,
  description,
  items,
  image,
  imageAlt = '',
  imagePosition = 'right', // 'left' | 'right'
  buttonText = 'Explore',
  buttonLink = '#',
}) {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="grid grid-cols-1 bg-[#FFF8F0] p-5 md:grid-cols-2 md:p-10">
      {/* IMAGE — MOBILE (TOP) */}
      <div className="md:hidden">
        <img
          src={image}
          alt={imageAlt}
          className="mx-auto h-[410px] w-[579px] max-w-full"
          loading="lazy"
        />
      </div>

      {/* TEXT CONTENT */}
      <div
        className={`mt-4 space-y-5 ${
          isImageLeft ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <div>
          <h1 className="text-4xl font-bold text-[#363636]">{title}</h1>
          <p className="mt-4 pb-[14px] text-[#363636]">{description}</p>
        </div>

        {/* BULLET ITEMS */}
        <div className="grid grid-cols-2 gap-y-4">
          {items.map((text, i) => (
            <div key={i} className="inline-flex items-center gap-2 text-2xl">
              <span className="text-[#138A40]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M18 6H9M18 6V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-[367] text-[#363636]">{text}</span>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div>
          <a
            href={buttonLink}
            className="inline-flex items-center gap-2 rounded-md bg-[#0568A4] px-[30px] py-3 text-xl text-white transition-colors hover:bg-[#045a8c]"
            aria-label={buttonText}
          >
            <span className="font-medium">{buttonText}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 18L18 6M18 6H9M18 6V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* IMAGE — DESKTOP */}
      <div
        className={`mx-auto hidden md:block ${
          isImageLeft ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-[410px] w-[579px] max-w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default InfoSection;
