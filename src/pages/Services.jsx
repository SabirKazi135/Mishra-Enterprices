import Footer from '../components/Footer';
import bg2 from '../assets/images/Group-1000008877-2.png';
import g1 from '../assets/images/g1.png';
import g2 from '../assets/images/g2.png';
import g3 from '../assets/images/g3.png';
import r1 from '../assets/images/r1.png';
import r2 from '../assets/images/r2.png';
import gi1 from '../assets/images/gi1.png';
import gi2 from '../assets/images/gi2.png';
import gi3 from '../assets/images/gi3.png';
import gi4 from '../assets/images/gi4.png';

import { useEffect, useRef, useState } from 'react';

function Services() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-outfit">
      <section
        className="hidden h-[600px] w-full grid-cols-2 place-items-center items-center bg-cover bg-center px-40 md:block md:grid"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="flex h-[200px] w-[473px] items-center justify-center rounded-[10px] bg-[#141241] px-5 py-16 shadow-md">
          <h2 className="mx-auto flex h-10 items-center justify-center text-[40px] font-bold text-white">
            Services
          </h2>
        </div>
        <div>
          <p className="mb-[14px] text-xl font-light leading-[30px] text-white">
            We turn your packaging vision into reality with innovation, care,
            and excellence. From design to delivery, we create reliable,
            eye-catching, and sustainable solutions that enhance your brand and
            exceed customer expectations.
          </p>
        </div>
      </section>
      <section className="md:hidden">
        <div className="flex items-center justify-center bg-white px-5 py-10">
          <h2 className="mx-auto flex w-full items-center justify-center text-[26px] font-semibold text-[#363636]">
            Services
          </h2>
        </div>
        <div
          className="bg-cover bg-center p-5"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <p className="mb-[14px] text-base font-light leading-[24px] text-white">
            We turn your packaging vision into reality with innovation, care,
            and excellence. From design to delivery, we create reliable,
            eye-catching, and sustainable solutions that enhance your brand and
            exceed customer expectations.
          </p>
        </div>
      </section>

      <section className="bg-white p-5 md:grid md:grid-cols-[55%_45%] md:px-[40px] md:py-[50px]">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-[14px] md:space-y-[18px]">
            <h1 className="text-3xl text-[30px] font-bold leading-[30px] md:text-4xl md:leading-[40px]">
              We treat your products with utmost care as if they were our own.
            </h1>
            <p className="text-base font-light leading-[24px] md:text-xl md:leading-[30px]">
              With precision, passion, and reliability, we deliver packaging
              solutions that enhance quality, sustainability, and customer
              satisfaction.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="w-full space-y-3 md:grid md:grid-cols-[100px_1fr] md:items-center md:gap-[80px] md:space-y-0">
              <div className="mx-auto h-[100px] w-[100px] md:mx-0">
                <img src={g1} alt="" />
              </div>
              <div className="w-full space-y-3 text-center md:space-y-1 md:text-start">
                <h1 className="mx-auto text-[26px] font-medium leading-7 md:mx-0 md:text-3xl md:leading-9">
                  Premium Quality
                </h1>
                <p className="text-base font-light leading-[22px] md:text-lg md:leading-7">
                  Every product is crafted to meet the highest industry
                  standards, ensuring durability, protection, and a flawless
                  finish.
                </p>
              </div>
            </div>

            <div className="w-full space-y-3 md:grid md:grid-cols-[100px_1fr] md:items-center md:gap-[80px] md:space-y-0">
              <div className="mx-auto h-[100px] w-[100px] md:mx-0">
                <img src={g2} alt="" />
              </div>
              <div className="w-full space-y-3 text-center md:space-y-1 md:text-start">
                <h1 className="mx-auto text-[26px] font-medium leading-7 md:mx-0 md:text-3xl md:leading-9">
                  Eco-Friendly Solutions
                </h1>
                <p className="text-base font-light leading-[22px] md:text-lg md:leading-7">
                  We prioritize the planet with sustainable materials and
                  processes that reduce waste while maintaining top-notch
                  performance.
                </p>
              </div>
            </div>

            <div className="w-full space-y-3 md:grid md:grid-cols-[100px_1fr] md:items-center md:gap-[80px] md:space-y-0">
              <div className="mx-auto h-[100px] w-[100px] md:mx-0">
                <img src={g3} alt="" />
              </div>
              <div className="w-full space-y-3 text-center md:space-y-1 md:text-start">
                <h1 className="mx-auto text-[26px] font-medium leading-7 md:mx-0 md:text-3xl md:leading-9">
                  24/7 Dedicated Support
                </h1>
                <p className="text-base font-light leading-[22px] md:text-lg md:leading-7">
                  Our expert team is always available to assist you with quick
                  responses and reliable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative mb-[112px] mt-10 flex w-full justify-center md:mb-[30px] md:mt-0"
        >
          <img src={r1} alt="" />

          <img
            src={r2}
            alt=""
            className={`absolute -bottom-28 right-0 z-10 transition-transform duration-1000 ease-out md:-bottom-8 md:right-[131px] ${
              visible
                ? '-translate-x-[115%] md:-translate-x-[200%]'
                : 'translate-x-0'
            }`}
          />
        </div>
      </section>

      <section className="bg-[#FFF8F0] p-5 md:p-[50px]">
        <div className="place-items-center space-y-7 rounded-[20px] bg-[#0E1524] px-5 py-10 text-white md:grid md:grid-cols-4 md:gap-8 md:space-y-0 md:p-10">
          <div className="space-y-4">
            <h1 className="text-center text-3xl font-bold leading-[30px] md:text-start md:text-[40px] md:leading-[40px]">
              How We Work
            </h1>
            <p className="mb-[14px] text-center font-light leading-7 md:text-start md:text-lg">
              Simplifying packaging from concept to delivery with precision and
              care.
            </p>
          </div>
          <div className="space-y-5">
            <img src={gi1} alt="" className="mx-auto size-[120px]" />
            <div className="">
              <h2 className="mb-[10px] mt-2 text-center text-2xl font-semibold">
                Choose Your packaging
              </h2>
              <p className="text-center text-base font-light leading-7">
                Discover diverse packaging styles, materials, and finishes
                tailored to reflect your brand and products.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <img src={gi2} alt="" className="mx-auto size-[120px]" />
            <div>
              <h2 className="mb-[10px] mt-2 text-center text-2xl font-semibold">
                Packaging In Process
              </h2>
              <p className="text-center text-base font-light leading-7">
                Our skilled team perfects every detail, ensuring flawless
                printing, sealing, and strict quality checks.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <img src={gi3} alt="" className="mx-auto size-[120px]" />
            <div>
              <h2 className="mb-[10px] mt-2 text-center text-2xl font-semibold">
                Packaging Ready to Use
              </h2>
              <p className="text-center text-base font-light leading-7">
                Your packaging is complete, durable, and stylish — ready to
                protect, present, and elevate products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
