import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: 'Anmol Patil',
    text: 'The team delivered exceptional packaging that perfectly matched our brand’s identity. From design to delivery, everything was smooth, professional, and on time. We’re truly impressed with the quality, finishing, and attention to detail throughout the entire process.',
  },
  {
    name: 'Sanjay Kumar',
    text: 'Outstanding service and craftsmanship from start to finish. The packaging looked premium, durable, and exactly as promised. Communication was clear, timelines were respected, and the final output exceeded our expectations. Highly reliable and professional team.',
  },
  {
    name: 'Akash Gupta',
    text: 'We needed custom packaging with tight deadlines, and the team delivered flawlessly. The material quality was top-notch, the design was well executed, and delivery was timely. A dependable partner who understands both quality and business needs.',
  },
];

/* ⭐ STAR RATING */
function StarRating({ count = 5 }) {
  return (
    <ul className="mb-3 flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i}>
          <svg
            viewBox="0 0 576 512"
            className="h-[30px] w-[20px] fill-[#0568A4]"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

/* 💬 QUOTE ICON */
function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      className="absolute bottom-8 right-7 h-[50px] w-[50px] fill-[#0568A4] md:bottom-[110px] md:right-14 md:h-[60px] md:w-[60px]"
    >
      <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
    </svg>
  );
}

/* 🔁 SLIDER */
export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      spaceBetween={15}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 1 },
      }}
    >
      {testimonials.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="relative flex h-[368px] flex-col justify-center bg-[#0E1524] p-[30px] md:h-[500px] md:px-[50px]">
            <div className="">
              <StarRating />
              <QuoteIcon />
              <div className="mt-8">
                <p className="h-[200px] text-justify text-xl font-light text-white">
                  “{item.text} ”
                </p>
              </div>

              <p className="font-semibold text-white md:text-[20px]">
                {item.name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
