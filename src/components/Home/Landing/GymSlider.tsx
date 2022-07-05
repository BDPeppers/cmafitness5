import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import Image from "next/image";
import gym1 from "../../../../public/imgs/gym/gym1.png";
import gym2 from "../../../../public/imgs/gym/gym2.png";
import gym3 from "../../../../public/imgs/gym/gym3.png";
import gym4 from "../../../../public/imgs/gym/gym4.png";
import gym5 from "../../../../public/imgs/gym/gym5.png";
import gym6 from "../../../../public/imgs/gym/gym6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slideList: Array<any> = [];
slideList.push(gym1);
slideList.push(gym2);
slideList.push(gym3);
slideList.push(gym4);
slideList.push(gym5);
slideList.push(gym6);

const GymSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.25}
        spaceBetween={0}
        loop={true}
        scrollbar={{
          hide: true,
        }}
        navigation={true}
        modules={[Scrollbar, Navigation]}
        className="mySwiper gym-slider"
      >
        {slideList.map((slide, x) => {
          return (
            <SwiperSlide key={x}>
              <div className="swiper-slide-wrapper">
                <Image src={slide} alt="CMA Fitness - Warner Robins Gym" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default GymSlider;
