import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

// imgUrl
import imgUrl_1 from "../../assets/images/sponsor/01.png";
import imgUrl_2 from "../../assets/images/sponsor/02.png";
import imgUrl_3 from "../../assets/images/sponsor/03.png";
import imgUrl_4 from "../../assets/images/sponsor/04.png";
import imgUrl_5 from "../../assets/images/sponsor/05.png";
import imgUrl_6 from "../../assets/images/sponsor/06.png";

const sponsorList = [
  {
    imgUrl: imgUrl_1,
  },
  {
    imgUrl: imgUrl_2,
  },
  {
    imgUrl: imgUrl_3,
  },
  {
    imgUrl: imgUrl_4,
  },
  {
    imgUrl: imgUrl_5,
  },
  {
    imgUrl: imgUrl_6,
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={6}
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="mySwiper"
              breakpoints={{
                480: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}
            >
              {sponsorList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-item">
                    <div className="sponsor-thumb">
                      <img src={val.imgUrl} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
