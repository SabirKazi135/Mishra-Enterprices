import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ImageSlider({ images }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      spaceBetween={20}
      slidesPerGroup={1}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="mx-auto flex h-[250px] w-[392px] items-center justify-center p-4">
            <img
              src={src}
              alt={`slide-${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
