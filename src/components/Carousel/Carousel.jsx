import React, { useEffect, useState } from "react";
import CustomSwiper from "../Swiper/Swiper";
import { bannerItems } from ".";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { logo } from "pages/Home";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { getImages } from "firebaseConfig/firebase";

const Carousel = ({ products }) => {
  const [bannerImages, setBannerImages] = useState([]);
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
  const fetchImages = () => {
    getImages().then((res) => setBannerImages(res));
  };
  useEffect(() => {
    fetchImages();
  }, []);
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div className="w-full bg-inherit py-[8px] rounded-b-[50px]">
      <div className=" max-w-[100%] md:max-w-[95%] lg:max-w-[1440px] bg-inherit m-auto flex flex-col lg:flex-row items-end gap-[56px] md:py-[26px]">
        <div className="w-[100%] lg:w-[65%] bg-inherit">
          <h1 className="text-center md:text-left md:px-[12px] text-[20px] md:text-[32px] lg:text-[38px] py-[24px] font-semibold">
            Heavy Discounts On All Your Favorites
          </h1>
          <CustomSwiper
            swiperSlideContent={bannerImages.map((item) => {
              return (
                <SwiperSlide>
                  <div
                    className="max-h-[60vh] bg-inherit
                   w-full shadow-lg overflow-hidden"
                  >
                    <img
                      src={item}
                      alt="banner"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          />
        </div>
        <div className="w-[100%] lg:w-[calc(35%-56px)] bg-inherit">
          <h1 className="text-[32px] px-[12px] font-medium text-secondaryC">
            Deal of the day
          </h1>
          <CustomSwiper
            delay={5000}
            swiperSlideContent={products
              ?.filter((item) => item.deal_of_the_day)
              .map((item) => {
                return (
                  <SwiperSlide>
                    <div className="flex-col rounded-[20px] relative cursor-pointer flex justify-start  w-full overflow-hidden">
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
                          <p className="bg-inherit">
                            {" "}
                            Rs.{" "}
                            {item.price - item.price * (item.discount / 100)}/-
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
                          <button className="block w-[95%] m-auto py-[4px] px-[12px] bg-white text-secondaryC font-semibold text-[16px] rounded-[28px] border-[2px] border-secondaryC">
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

export default Carousel;
