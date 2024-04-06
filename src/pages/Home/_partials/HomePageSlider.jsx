import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomePageSlider.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePageSlider = () => {
  return (
    <div className="homePageSlider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="slider-photo1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-photo3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-photo1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-photo3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-photo1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-photo3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-photo1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-photo3.jpeg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePageSlider;
