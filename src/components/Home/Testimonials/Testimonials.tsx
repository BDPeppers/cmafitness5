import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Debi from "../../../../public/imgs/testimonials/Debi.png";
import justinBefore from "../../../../public/imgs/testimonials/justinBefore.png";
import levelUp from "../../../../public/imgs/testimonials/levelup.png";
import sam1 from "../../../../public/imgs/testimonials/sam1.png";
import sam2 from "../../../../public/imgs/testimonials/sam2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export class Testimonial {
  constructor(public quote: string, public before: any) {}
}

const slideList: Array<Testimonial> = [];

const T1 = new Testimonial(
  `Over 15lbs down in 3 months and best of all - blood pressure no longer high!! 
Nurse said my blood pressure is better than hers!! Sugar levels were back to normal! 
So happy because I&rsquo;ve been dealing with this my entire adult life!!`,
  Debi
);
slideList.push(T1);

const T2 = new Testimonial(
  `Coach Chanda changed my life. 
Doctors told me it would be impossible to be where I am today and that I needed to be realistic in my overall goals. 
Well, thanks to her I just competed in my 4th men&rsquo;s physique competition and it&rsquo;s only up from here. 
She&rsquo;s constantly teaching me how to improve as an athlete and in doing so has helped me improve in life. 
Over 100 pounds of fat lost!!!! No surgery!!!! Just a great coach and some work. Love her to death and can&rsquo;t wait to see what the future holds.`,
  justinBefore
);
slideList.push(T2);

const T3 = new Testimonial(
  `Dreams do come true! Health and physical fitness have always been important to me. 
I lifted weights and ran track in high school, ran 5ks, and I've trained for Disney's half marathon. After baby #3, I was unable to get my health and fitness
back on track despite my best efforts. That's when I decided to reach out to Chanda at CMA Fitness. I told her I was interested in competing
in a body building competition as a way to get my physical fitness back on track. My goal was to compete in a show before I turned 40. Fast forward 2 years, and not only
have I regained control over my health, but I've also competed in 3 body building competitions! Chanda has been a God-sen helping me every step of the way.`,
  levelUp
);
slideList.push(T3);
const T4 = new Testimonial(
  `I am bikini doll Sam. A NPC bikini athlete that has recently started training for competition after turning forty. 
  I&rsquo;ve been an athlete all my life playing sports, lifting weights, but never entering such an extreme sport like now. In 8 weeks I have lost 18 pounds from, 
158 to 140 and lost 7% body fat from, 25% to 18%.`,
  sam1
);
slideList.push(T4);
const T5 = new Testimonial(
  `Look for me show ready this fall and nationally qualified by 2023!!`,
  sam2
);
slideList.push(T5);

const Testimonials = () => {
  return (
    <>
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
              <div className="swiper-slide-wrapper">
                <Image src={slide.before} alt="CMA Fitness Testimonials" />
                <p>{slide.quote}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
