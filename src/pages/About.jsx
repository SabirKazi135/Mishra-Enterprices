import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bg2 from '../assets/images/Group-1000008877-1.png';
import ImageSlider from '../components/ImageSlider';

import img1 from '../assets/images/Slider/img1.png';
import img2 from '../assets/images/Slider/img2.png';
import img3 from '../assets/images/Slider/img3.png';
import img4 from '../assets/images/Slider/img4.png';

import i1 from '../assets/images/download.png';
import i2 from '../assets/images/download (1).png';
import i3 from '../assets/images/download (2).png';

import icon1 from '../assets/images/download1.png';
import icon2 from '../assets/images/download2.png';
import icon3 from '../assets/images/download3.png';
import icon4 from '../assets/images/download4.png';

import w1 from '../assets/images/w1.png';
import w2 from '../assets/images/w2.png';
import w3 from '../assets/images/w3.png';
function About() {
  const sliderImages = [img1, img2, img3, img4];

  return (
    <>
      <section
        className="hidden h-[600px] w-full grid-cols-2 place-items-center items-center bg-cover bg-center px-40 md:block md:grid"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="flex h-[200px] w-[473px] items-center justify-center rounded-[10px] bg-[#141241] px-5 py-16 shadow-md">
          <h2 className="mx-auto flex h-10 items-center justify-center text-[40px] font-bold text-white">
            About Us
          </h2>
        </div>
        <div>
          <p className="mb-[14px] text-xl font-light leading-[30px] text-white">
            Have a packaging idea or project in mind? We’re here to bring it to
            life. Whether you need innovative designs, sustainable materials, or
            custom packaging solutions, our team is ready to help. Get in touch
            with us today — let’s create packaging that protects, impresses, and
            represents your brand perfectly.
          </p>
        </div>
      </section>

      <section className="md:hidden">
        <div className="flex items-center justify-center bg-white px-5 py-10">
          <h2 className="mx-auto flex w-full items-center justify-center text-[26px] font-semibold text-[#363636]">
            About Us
          </h2>
        </div>
        <div
          className="bg-cover bg-center p-5"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <p className="mb-[14px] text-base font-light leading-[24px] text-white">
            Have a packaging idea or project in mind? We’re here to bring it to
            life. Whether you need innovative designs, sustainable materials, or
            custom packaging solutions, our team is ready to help. Get in touch
            with us today — let’s create packaging that protects, impresses, and
            represents your brand perfectly.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      {/* <section className="bg-[#FEF7EF] px-5">
        <div>
          <div className="">
            <h1>Innovative Food Packaging</h1>
            <p>
              Delivering safe, hygienic, and innovative food packaging solutions
              designed to preserve freshness, extend shelf life, and enhance
              your brand’s presentation.
            </p>
          </div>
          <div className="">
            <ImageSlider images={sliderImages} />
          </div>
          <div className="hidden gap-3 md:grid md:grid-cols-2">
            {[
              'Custom Packaging Design',
              'Premium Quality Materials',
              'Safe & Food-Grade Certified',
              'Fully Recyclable Solutions',
              'Cost-Effective & Flexible Options',
              'Exclusive Membership Benefits',
              '250,000+ Successful Deliveries',
              'Guaranteed Customer Satisfaction',
            ].map((text, index) => (
              <div key={index} className="flex items-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[5px]"
                  style={{ width: '18px', height: '18px', fill: '#008232' }}
                >
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="px-5 md:hidden">
            <div className="pb-[5px] text-base text-[#333]">
              Custom Packaging Design
            </div>
            <div className="pb-[5px] text-base text-[#333]">
              Premium Quality Materials
            </div>
            <div className="pb-[5px] text-base text-[#333]">
              Safe & Food-Grade Certified
            </div>
            <div className="pb-[5px] text-base text-[#333]">
              Fully Recyclable Solutions
            </div>
            <div className="pb-[5px] text-base text-[#333]">
              Cost-Effective & Flexible Options
            </div>
            <div className="pb-[5px] text-base text-[#333]">
              Exclusive Membership Benefits
            </div>
            <div className="pb-[5px] text-base text-[#333]">
              250,000+ Successful Deliveries
            </div>
            <div className="pb-[5px] text-base text-[#333]">
              Guaranteed Customer Satisfaction
            </div>
          </div>

          <p>
            Providing reliable, high-quality food packaging that maintains
            product freshness, ensures safety, and elevates your brand’s image
            with every package.
          </p>
          <div className="">
            <div>
              <img src={i1} alt="" className="size-[70px]" />
              <h1>Top Quality</h1>
              <p>
                Engineered to deliver strength, reliability, and perfection.
              </p>
            </div>
            <div>
              <img src={i2} alt="" className="size-[70px]" />
              <h1>Modern Design</h1>
              <p>Smart, stylish packaging tailored to your brand.</p>
            </div>
            <div>
              <img src={i3} alt="" className="size-[70px]" />
              <h1>Eco Safe</h1>
              <p>Committed to sustainability with recyclable materials.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>What's Included</h1>
            <div>
              <div>
                <img src={icon1} alt="" className="size-6 md:size-[30px]" />
                <p>Precision Cutting</p>
              </div>
              <div>
                <img src={icon2} alt="" className="size-6 md:size-[30px]" />

                <p>On-Time Dispatch</p>
              </div>
              <div>
                <img src={icon3} alt="" className="size-6 md:size-[30px]" />

                <p>High-Quality Printing</p>
              </div>
              <div>
                <img src={icon4} alt="" className="size-6 md:size-[30px]" />

                <p>Bulk Packaging (500 pcs)</p>
              </div>
            </div>
            <button>Book Now</button>
          </div>
          <div
            className="bg-cover bg-center p-5"
            style={{ backgroundImage: `url(${w1})` }}
          >
            <div>
              <h1>We're Here to Help</h1>
              <p>
                Got questions or special requests? Reach out with us anytime
              </p>
            </div>
            <div>
              <div>
                <img src={w2} alt="" className="size-[30px] md:size-[50px]" />
              </div>
              <div>
                <h1>Phone:</h1>
                <p>080-49894644,</p>
                <p>+91-8073344825</p>
              </div>
            </div>
            <div>
              <div>
                <img src={w3} alt="" className="size-[30px] md:size-[50px]" />
              </div>
              <div>
                <h1>Email:</h1>
                <p>mishraenterprisesblr@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 3 */}
      <section className="bg-[#FEF7EF] px-5 py-10 md:p-[50px]">
        <div className="mx-auto grid w-full grid-cols-1 gap-10 md:grid-cols-[60%_35%] md:place-items-center">
          {/* LEFT COLUMN */}
          <div className="w-full">
            <div className="space-y-3">
              <h1 className="text-[28px] font-bold text-[#222] md:text-[40px]">
                Innovative Food Packaging
              </h1>
              <p className="text-base text-[#555] md:text-xl">
                Delivering safe, hygienic, and innovative food packaging
                solutions designed to preserve freshness, extend shelf life, and
                enhance your brand’s presentation.
              </p>
            </div>

            <div className="my-6">
              <ImageSlider images={sliderImages} />
            </div>

            <div className="hidden gap-3 md:grid md:grid-cols-2 md:px-5">
              {[
                'Custom Packaging Design',
                'Premium Quality Materials',
                'Safe & Food-Grade Certified',
                'Fully Recyclable Solutions',
                'Cost-Effective & Flexible Options',
                'Exclusive Membership Benefits',
                '250,000+ Successful Deliveries',
                'Guaranteed Customer Satisfaction',
              ].map((text, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[5px]"
                    style={{ width: '16px', height: '16px', fill: '#008232' }}
                  >
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
                  </svg>
                  <span className="text-xl">{text}</span>
                </div>
              ))}
            </div>

            {/* CHECKLIST */}
            <div className="mt-4 px-5 md:hidden">
              {[
                'Custom Packaging Design',
                'Premium Quality Materials',
                'Safe & Food-Grade Certified',
                'Fully Recyclable Solutions',
                'Cost-Effective & Flexible Options',
                'Exclusive Membership Benefits',
                '250,000+ Successful Deliveries',
                'Guaranteed Customer Satisfaction',
              ].map((text, i) => (
                <div key={i} className="pb-[5px] text-base text-[#333]">
                  {text}
                </div>
              ))}
            </div>

            <p className="mt-4 text-base leading-7 text-[#555] md:text-xl">
              Providing reliable, high-quality food packaging that maintains
              product freshness, ensures safety, and elevates your brand’s image
              with every package.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2 text-center md:text-start">
                <img src={i1} alt="" className="mx-auto size-[70px] md:mx-0" />
                <h1 className="text-lg font-semibold text-[#222] md:text-[26px]">
                  Top Quality
                </h1>
                <p className="text-sm text-[#555] md:text-xl md:font-light">
                  Engineered to deliver strength, reliability, and perfection.
                </p>
              </div>

              <div className="space-y-2 text-center md:text-start">
                <img src={i2} alt="" className="mx-auto size-[70px] md:mx-0" />
                <h1 className="text-lg font-semibold text-[#222]">
                  Modern Design
                </h1>
                <p className="text-sm text-[#555] md:text-xl md:font-light">
                  Smart, stylish packaging tailored to your brand.
                </p>
              </div>

              <div className="space-y-2 text-center md:text-start">
                <img src={i3} alt="" className="mx-auto size-[70px] md:mx-0" />
                <h1 className="text-lg font-semibold text-[#222]">Eco Safe</h1>
                <p className="text-sm text-[#555] md:text-xl md:font-light">
                  Committed to sustainability with recyclable materials.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full max-w-full">
            {/* WHAT'S INCLUDED */}
            <div className="grid items-center rounded bg-white p-6 shadow-md md:h-[385px]">
              <h1 className="mb-4 text-xl font-bold text-[#222] md:text-[26px]">
                What’s Included
              </h1>

              <div className="grid space-y-3 md:space-y-6">
                <div className="flex items-center gap-3 text-sm text-[#333]">
                  <img src={icon1} alt="" className="size-6 md:size-[30px]" />
                  <p className="md:text-[20px]">Precision Cutting</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#333]">
                  <img src={icon2} alt="" className="size-6 md:size-[30px]" />
                  <p className="md:text-[20px]">On-Time Dispatch</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#333]">
                  <img src={icon3} alt="" className="size-6 md:size-[30px]" />
                  <p className="md:text-[20px]">High-Quality Printing</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#333]">
                  <img src={icon4} alt="" className="size-6" />
                  <p>Bulk Packaging (500 pcs)</p>
                </div>
              </div>

              <button className="mt-4 w-full rounded bg-[#0568A4] py-2 text-white transition hover:bg-[#045a8c] md:text-[20px]">
                Book Now
              </button>
            </div>

            {/* HELP CARD */}
            <div
              className="mt-6 flex-col items-start justify-center gap-6 rounded bg-cover bg-center p-5 text-white md:flex md:h-[383px]"
              style={{ backgroundImage: `url(${w1})` }}
            >
              <div>
                <h1 className="text-xl font-bold md:text-[26px]">
                  We’re Here to Help
                </h1>
                <p className="mt-1 text-sm md:text-[16px]">
                  Got questions or special requests? Reach out with us anytime
                </p>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <img src={w2} alt="" className="size-[30px] md:size-[50px]" />
                <div>
                  <h1 className="font-semibold md:text-[26px]">Phone:</h1>
                  <p className="md:text-[16px]">080-49894644,</p>
                  <p className="md:text-[16px]">+91-8073344825</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <img src={w3} alt="" className="size-[30px] md:size-[50px]" />
                <div>
                  <h1 className="font-semibold md:text-[26px]">Email:</h1>
                  <p className="md:text-[16px]">
                    mishraenterprisesblr@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
