import Amazon from "assets/Images/Logos/amazon.svg";
import Flipkart from "assets/Images/Logos/flipkart.svg";
import Meesho from "assets/Images/Logos/meesho.avif";
import Myntra from "assets/Images/Logos/myntra.png";
export const logo = {
  amazon: Amazon,
  flipkart: Flipkart,
  meesho: Meesho,
  myntra: Myntra,
};
export const breakpoints = {
  0: {
    slidesPerView: 1,
    slidesPerGrpeoup: 1,
    delay: 1000,
    spaceBetween: 10,
  },

  1024: {
    slidesPerView: 3,
    slidesPerGroup: 1,
    delay: 1000,
    spaceBetween: 20,
  },
  1224: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    delay: 1000,
    spaceBetween: 20,
  },
};
export const duplicateArrayItems = (arr, length) => {
  const duplicatedArray = [...arr];
  while (duplicatedArray.length < length) {
    duplicatedArray.push(...arr);
  }
  return duplicatedArray.slice(0, length);
};
