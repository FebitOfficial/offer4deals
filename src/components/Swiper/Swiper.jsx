import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PrevButton from "assets/Icons/Global/PrevButton";
import NextButton from "assets/Icons/Global/NextButton";

const CustomSwiper = ({
  showButton,
  swiperSlideContent,
  breakpoints,
  paginated,
  delay,
}) => (
  <div className="inventory-wrapper h-full bg-inherit">
    <div id="" className="relative h-full bg-inherit">
      <Swiper
        className="flex items-center bg-inherit"
        id="testimonials"
        style={{
          display: "flex !important",
          alignItems: "center !important",
          "--swiper-pagination-color": "#e76589",
          "--swiper-pagination-bullet-inactive-color": "#e76589",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-width": "9px",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "2px",
        }}
        loop
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          Scrollbar,
          A11y,
          EffectFade,
        ]}
        navigation={{
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
        autoplay={{
          delay: delay || 3000,
          disableOnInteraction: false,
        }}
        pagination={paginated && { clickable: true }}
        breakpoints={breakpoints}
      >
        <div className="flex justify-center items-center">
          {swiperSlideContent}
          {showButton && (
            <>
              {" "}
              <button className="arrow-left absolute  top-[50%] translate-y-[-50%] left-[5px] z-[999999999]">
                <PrevButton />
              </button>
              <button className="arrow-right absolute top-[50%] translate-y-[-50%] right-[5px] z-[999999999]">
                <NextButton />
              </button>
            </>
          )}
        </div>
      </Swiper>
    </div>
  </div>
);

export default CustomSwiper;
