import React, { useEffect, useState } from "react";
import { navLeftLinks } from ".";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = ({ data }) => {
  const [inputString, setInputString] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredList, setFilteredList] = useState(data);

  useEffect(() => {
    setFilteredList(
      data?.filter((item) =>
        inputString === ""
          ? false
          : item.name.toLowerCase().includes(inputString.toLowerCase())
      )
    );
  }, [inputString, data]);
  return (
    <>
      <div className="px-[12px] bg-bgSecondary sticky top-0 z-[9999999] text-white">
        <div className="max-w-[1440px] relative m-auto text-white flex items-center py-[24px] justify-between">
          <div className="flex items-center gap-[52px] text-[16px]">
            <div className="flex items-center gap-[24px]">
              <Link to="/">
                <h1 className="text-[36px] text-white hidden lg:block font-medium">
                  Offers4Deals
                </h1>
                <h1 className="text-[36px] text-white lg:hidden block font-medium">
                  O4D
                </h1>
              </Link>
              <input
                onChange={(e) => setInputString(e.target.value)}
                className="py-[6px] text-black w-[80%] px-[18px]  block lg:hidden rounded-lg border-[lightgrey] border-[1px]"
                placeholder="Search"
              />
            </div>

            <div
              className={`${
                showDropdown ? "flex" : "lg:flex hidden"
              } rounded-[20px] lg:rounded-0 
            flex-col lg:flex-row p-[12px] top-[75px]
            right-0 lg:p-0 absolute lg:static
            bg-white lg:bg-inherit
            lg:text-inherit text-secondaryC
            lg:items-center gap-[18px] font-semibold`}
            >
              {navLeftLinks.map((item) => (
                <Link to={item.link} onClick={() => setShowDropdown(false)}>
                  {item.title}
                </Link>
              ))}
              <Link
                to="/terms-and-conditions"
                onClick={() => setShowDropdown(false)}
              >
                <p className="underline block lg:hidden">
                  Terms and Conditions
                </p>
              </Link>
              <Link to="/contact-us" onClick={() => setShowDropdown(false)}>
                <p className="underline block lg:hidden">Contact Us</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-[18px]">
            <input
              onChange={(e) => setInputString(e.target.value)}
              className="py-[6px] hidden text-black lg:block px-[18px] rounded-lg border-[lightgrey] border-[1px]"
              placeholder="Search"
            />
            <Link to="/terms-and-conditions">
              <p className="underline lg:block hidden">Terms and Conditions</p>
            </Link>
            <Link to="/contact-us">
              <p className="underline lg:block hidden">Contact Us</p>
            </Link>
            <Icon
              icon="ci:hamburger-md"
              onClick={() => setShowDropdown((prev) => !prev)}
              className="w-8 h-6 lg:hidden cursor-pointer"
              color="white"
            />
          </div>
          {filteredList?.length > 0 && (
            <div className="bg-white  h-[300px] z-[9999999999] overflow-y-scroll flex flex-col gap-[24px] rounded-b-[20px] right-0 w-full md:w-[35%] p-[24px] top-[100%] absolute">
              {filteredList?.map((item) => {
                return (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="p-[12px] cursor-pointer flex items-center gap-[24px] hover:bg-[rgba(0,0,0,0.1)] ">
                      <div>
                        <img
                          src={item.image_url}
                          alt=""
                          className="w-[100px] h-[100px] object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-[2px] text-secondaryC">
                        <h3 className="font-medium text-[24px]">{item.name}</h3>
                        <h3 className="font-medium text-[14px]">
                          {item.category.name}
                        </h3>
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
                  </a>
                );
              })}
              {filteredList?.length > 0 && (
                <div
                  onClick={() => setFilteredList(null)}
                  className="fixed w-[100vw] h-[100vh] z-[-1] left-0 top-0"
                ></div>
              )}
            </div>
          )}
        </div>
      </div>
      {showDropdown && (
        <div
          onClick={() => setShowDropdown(false)}
          className={`bg-neutral-700 opacity-10 block lg:hidden 
              w-[100vw] h-[100vh] z-[999999] top-0 left-0 fixed 
              
            `}
        ></div>
      )}
    </>
  );
};

export default Navbar;
