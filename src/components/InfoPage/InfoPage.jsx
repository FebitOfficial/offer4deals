import ProgressBar from "components/ProgressBar/ProgressBar";
import CustomSwiper from "components/Swiper/Swiper";
import { getProducts } from "firebaseConfig/firebase";
import { logo } from "pages/Home";
import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import useScrollToTopOnRouteChange from "hooks/useScrollToTop";

const InfoPage = ({ products, content }) => {
  useScrollToTopOnRouteChange();
  const descVariants = {
    initial: {
      opacity: 0.8,
      y: 50,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="max-w-[1440px] m-auto py-[24px]">
      <div className="flex lg:flex-row flex-col gap-[52px]">
        <div className="w-[95%] m-auto lg:w-[65%] flex flex-col gap-[24px] px-[24px]">
          {content}
        </div>

        <div className="w-[95%]   lg:w-[calc(35%-56px)] bg-inherit">
          <h1 className="text-[32px] py-[12px] px-[22px] font-medium text-secondaryC">
            Deal of the day
          </h1>
          <CustomSwiper
            delay={5000}
            swiperSlideContent={products
              ?.filter((item) => item.deal_of_the_day)
              .map((item) => {
                return (
                  <SwiperSlide>
                    <div className="flex-col rounded-[20px] pt-[12px] relative cursor-pointer flex justify-start  w-full overflow-hidden">
                      <img
                        onMouseOver={() => setShowDesc(true)}
                        onMouseLeave={() => setShowDesc(false)}
                        src={item.image_url}
                        alt="banner"
                        className="w-full h-[300px] object-contain"
                      />
                      <div className="text-secondaryC px-[24px] py-[12px] flex justify-between items-center">
                        <div>
                          <p className="text-[18px] font-medium">{item.name}</p>

                          <p className="text-[14px] font-medium">
                            {item.category.name}
                          </p>
                        </div>
                        <div className="flex items-end gap-[8px] flex-col">
                          <img
                            src={logo[item.site]}
                            alt="logo"
                            className="w-10 h-10 object-cover mr-[10px]"
                          />
                          <p className="text-[16px] font-semibold">
                            Rs.
                            {item.price - item.price * (item.discount / 100)}
                            {"   "}
                            <span className="text-[grey] text-[16px]">
                              List Price: <s>Rs. {item.price}</s>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="bg-red-500 text-white text-[14px] absolute top-[25px] right-[25px] py-[12px] px-[8px]">
                        {item.discount}% off
                      </div>
                      {showDesc && (
                        <motion.div
                          variants={descVariants}
                          initial="initial"
                          animate="animate"
                          className="px-[44px] z-[99] text-primaryC gap-[4px] flex flex-col items-start absolute bottom-0 py-[12px] w-full bg-bgSecondary"
                        >
                          <p className="bg-inherit text-[18px] font-semibold">
                            {item.name}
                          </p>
                          <p className="text-[16px] font-semibold">
                            Rs.
                            {item.price - item.price * (item.discount / 100)}
                            {"   "}
                            <span className="text-[grey] text-[16px]">
                              List Price: <s>Rs. {item.price}</s>
                            </span>
                          </p>
                          <p className="bg-inherit">{item.category.name}</p>
                          <p className="text-[14px] font-medium">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                      <div className="flex flex-col gap-[16px]">
                        <ProgressBar
                          progress={item.total_sold}
                          total={item.total_items}
                        />
                        <a
                          className="block w-full"
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="block w-[95%] block m-auto py-[4px] px-[12px] bg-white text-secondaryC font-semibold text-[16px] rounded-[28px] border-[2px] border-secondaryC">
                            Buy Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
