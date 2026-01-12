import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const img = {
  desktop: [
    { alt: 'cover1', src: '/image1.png' },
    { alt: 'cover2', src: '/image2.png' },
    { alt: 'cover3', src: '/image3.png' },
  ],
  mobile: [
    { alt: 'cover1', src: '/mobile/mobile-img1.png' },
    { alt: 'cover2', src: '/mobile/mobile-img2.png' },
    { alt: 'cover3', src: '/mobile/mobile-img3.png' },
  ],
};

// const mobileImg = [];

export default function Hero() {
  return (
    <div className="w-full h-[330px] md:h-[500px] lg:h-[600px] xl:h-[75vh] cursor-pointer">
      <Swiper
        speed={700}
        dir="rtl"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        className="w-full h-full"
        style={
          {
            ['--swiper-pagination-color']: '#5a3519',
            ['--swiper-pagination-bullet-inactive-color']: '#ffffff',
            ['--swiper-pagination-bullet-inactive-opacity']: '1',
            ['--swiper-pagination-bullet-horizontal-gap']: '1.5px',
          } as React.CSSProperties
        }
      >
        {img.desktop.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full ">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-fill object-center hidden md:block"
              />
              <Image
                src={img.mobile[index].src}
                alt={img.mobile[index].alt}
                fill
                className="object-fill md:hidden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
