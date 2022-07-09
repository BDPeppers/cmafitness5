import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import makeItHappen from "../../../../public/imgs/promos/MakeItHappen.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "@mui/material";
import Link from "next/link";

const slideList: Array<EventPromo> = [];
type EventPromo = {
  promo: any;
  details: string;
  btnText?: string;
  btnLink?: string;
};

const E1 = {
  promo: makeItHappen,
  details: "Vendor space opens at 11 and speakers start at 1",
  btnLink: "https://www.instagram.com/p/Cdjhd2Ggm6k/",
  btnText: "Learn more",
};
slideList.push(E1);

const UpcomingSlider = () => {
  return (
    <>
      <div className="testimonials-header">
        <h1 className="testimonials header-xLarge">Upcoming events</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slideList.map((slide, x) => {
          return (
            <SwiperSlide key={x}>
              <div className="swiper-slide-wrapper promo-slide-wrapper">
                <Image
                  src={slide.promo}
                  alt="CMA Fitness Testimonials"
                  priority={true}
                />
                <div className="promo-box">
                  <p className="promo-details para-small">{slide.details}</p>
                  {slide.btnLink ? (
                    <Link href={slide.btnLink}>
                      <Button size="medium" className="yt-bg para-med btn">
                        {slide.btnText}
                      </Button>
                    </Link>
                  ) : null}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default UpcomingSlider;
