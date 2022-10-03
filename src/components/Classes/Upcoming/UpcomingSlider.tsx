import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import fallBootcamp from "../../../../public/imgs/promos/FallBootcamp22.png";
import discount from "../../../../public/imgs/promos/OctDiscount22.png";
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
  promo: fallBootcamp,
  details:
    "Over 3 weeks of training PLUS customized meal planning that adjusts based on your progress! 👻",
  btnLink: "https://www.instagram.com/p/CjOrKzpjSMp/",
  btnText: "Learn more",
};
slideList.push(E1);
const E2 = {
  promo: discount,
  details: "FALL IN LOVE with FITNESS! 🍁🍂🎃",
  btnLink: "/Memberships",
  btnText: "Sign Up",
};
slideList.push(E2);

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
