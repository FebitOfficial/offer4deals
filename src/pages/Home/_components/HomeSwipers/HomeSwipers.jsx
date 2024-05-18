import CustomSwiper from "components/Swiper/Swiper";
import { breakpoints, duplicateArrayItems, logo } from "pages/Home";
import React from "react";
import { SwiperSlide } from "swiper/react";
const HomeSwipers = ({ categories, data }) => {
  return categories.map((item, idx) => {
    return (
      <div className="flex flex-col gap-[22px] mt-[30px] ">
        <h1 className="text-[32px] px-[18px] text-secondaryC font-medium">
          {item}
        </h1>
        <CustomSwiper
          delay={(idx + 1) * 1000}
          breakpoints={breakpoints}
          swiperSlideContent={duplicateArrayItems(
            data?.filter((product) => product.category.name === item),
            5
          ).map((productMapped) => {
            return (
              <SwiperSlide>
                <div className="flex flex-col relative gap-[12px] justify-center">
                  <img
                    className="max-h-[330px] object-contain"
                    src={productMapped.image_url}
                  />
                  <div className="bg-red-500 text-white text-[14px] absolute top-[1%] right-[2%] py-[12px] px-[8px]">
                    {productMapped.discount}% off
                  </div>
                  <div className="px-[24px] py-[12px] flex justify-between items-center">
                    <div>
                      <p className="text-[18px] font-medium">
                        {productMapped.name}
                      </p>

                      <p className="text-[14px] font-medium">
                        {productMapped.category.name}
                      </p>
                      <p className="text-[16px] font-semibold">
                        Rs.
                        {Math.random(
                          productMapped.price -
                            productMapped.price * (productMapped.discount / 100)
                        )}
                        <span className="text-[grey] text-[16px]">
                          List Price: <s>Rs. {productMapped.price}</s>
                        </span>
                      </p>
                    </div>
                    <div className="flex items-end gap-[8px] flex-col">
                      <img
                        src={logo[productMapped.site]}
                        alt="logo"
                        className="w-10 h-10 object-cover mr-[10px]"
                      />
                    </div>
                  </div>
                  <a
                    className="block w-full"
                    href={productMapped.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="block w-[95%] m-auto py-[4px] px-[12px] bg-white text-secondaryC font-semibold text-[16px] rounded-[28px] border-[2px] border-secondaryC">
                      Buy Now
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        />
      </div>
    );
  });
};

export default HomeSwipers;
