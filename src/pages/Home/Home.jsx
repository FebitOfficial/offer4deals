import { useEffect } from "react";
import { useState } from "react";
import Carousel from "components/Carousel/Carousel";
import React from "react";
import { motion } from "framer-motion";
import { logo } from ".";

import HomeSwipers from "./_components/HomeSwipers/HomeSwipers";
import useScrollToTopOnRouteChange from "hooks/useScrollToTop";
import Loader from "components/Loader/Loader";
import { FormatDates } from "utils/dates";
const Home = ({ data, setData, loading }) => {
  useScrollToTopOnRouteChange();
  const [showDesc, setShowDesc] = useState(null);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(-1);
  const [animateCards, setAnimateCards] = useState(false); // Add state for card animation
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
  const cardVariant = {
    initial: {
      scale: 0.975,
      x: 50,
      y: 50,
      opacity: 0.9,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  useEffect(() => {
    data && setCategories([...new Set(data.map((item) => item.category.name))]);
  }, [data]);

  // Function to handle category button click
  const handleCategoryClick = (idx) => {
    setCurrentCategory(idx);
  };
  console.log(data);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="overflow-x-hidden">
      {data && <Carousel products={data} />}
      <div className="max-w-[1440px] m-auto">
        <div className="py-[24px] px-[12px] w-[95%] overflow-x-scroll flex md:justify-center items-center gap-[12px]">
          <button
            onClick={() => setCurrentCategory(-1)}
            className={`${
              currentCategory !== -1 ? "bg-bgSecondary" : "bg-white"
            } min-w-[100px] rounded-[30px] py-[8px] px-[16px] ${
              currentCategory !== -1 ? "text-primaryC" : "text-secondaryC"
            }  border-[2px] ${
              currentCategory !== -1 ? " border-primaryC" : "border-secondaryC"
            }`}
          >
            All
          </button>
          {categories.map((item, idx) => {
            return (
              <button
                key={idx}
                onClick={() => handleCategoryClick(idx)} // Call handleCategoryClick function
                className={`${
                  currentCategory !== idx ? "bg-bgSecondary" : "bg-white"
                } min-w-[fit-content] rounded-[30px] py-[8px] px-[16px] ${
                  currentCategory !== idx ? "text-primaryC" : "text-secondaryC"
                }  border-[2px] ${
                  currentCategory !== idx
                    ? " border-primaryC"
                    : "border-secondaryC"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="py-[25px] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[20px]">
          {data
            ?.filter((item) => {
              return currentCategory === -1
                ? true
                : item.category.name === categories[currentCategory];
            })
            .map((item, idx) => {
              return (
                <motion.div
                  // key={idx}
                  variants={cardVariant}
                  initial="initial"
                  animate={animateCards ? "animate" : "initial"} // Animate based on state
                  whileInView={"animate"}
                  className=" relative flex flex-col justify-between overflow-hidden rounded-[20px] p-[20px]  bg-white"
                >
                  <img
                    onMouseOver={() => setShowDesc(idx)}
                    onMouseLeave={() => setShowDesc(null)}
                    className="w-full object-contain h-[220px] lg:h-[320px]  transition duration-300 ease-linear hover:scale-[1.1] cursor-pointer"
                    src={item.image_url}
                    alt={`card-img-${idx}`}
                  />
                  <div className="px-[24px] py-[12px] flex justify-between items-start">
                    <div>
                      <p className="text-[15px] font-medium">{item.name}</p>

                      <p className="text-[14px] font-medium">
                        {item.category.name}
                      </p>
                      <p className="text-[16px] font-semibold">
                        Rs.
                        {Math.random(
                          item.price - item.price * (item.discount / 100)
                        )}
                      </p>
                      <span className="text-[grey] text-[16px]">
                        List Price: <s>Rs. {item.price}</s>
                      </span>
                    </div>
                    <div className="flex  items-end gap-[8px] flex-col">
                      <img
                        src={logo[item.site]}
                        alt="logo"
                        className="w-10 h-10 object-cover "
                      />
                      <div className=" text-gray-800 font-medium text-right text-[12px]">
                        {item.updated === item.created
                          ? `Posted ${FormatDates.getTime(item.created)}`
                          : `Updated ${FormatDates.getTime(item.updated)}`}
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-500 text-white text-[14px] absolute top-[25px] right-[25px] py-[12px] px-[8px]">
                    {item.discount}% off
                  </div>

                  {showDesc === idx && (
                    <motion.div
                      variants={descVariants}
                      initial="initial"
                      animate="animate"
                      className="left-0 text-primaryC gap-[4px] flex flex-col items-start absolute bottom-0 w-full bg-bgSecondary"
                    >
                      <div className="px-[24px] bg-inherit py-[12px]">
                        <p className="bg-inherit text-[18px] font-semibold">
                          {item.name}
                        </p>
                        <p className="text-[16px] font-semibold">
                          Rs.
                          {Math.random(
                            item.price - item.price * (item.discount / 100)
                          )}
                          {"   "}
                          <span className="text-[grey] text-[16px]">
                            List Price: <s>Rs. {item.price}</s>
                          </span>
                        </p>
                        <p className="bg-inherit">{item.category.name}</p>
                        <p className="bg-inherit font-medium text-[14px]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  <a
                    className="block w-full"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="m-auto block w-full py-[4px] px-[12px] bg-white text-secondaryC font-semibold text-[16px] rounded-[28px] border-[2px] border-secondaryC">
                      Buy Now
                    </button>
                  </a>
                </motion.div>
              );
            })}
        </div>
        <HomeSwipers categories={categories} data={data} />
      </div>
    </div>
  );
};

export default Home;
