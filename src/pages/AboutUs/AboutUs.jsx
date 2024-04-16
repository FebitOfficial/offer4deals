import InfoPage from "components/InfoPage/InfoPage";
import useScrollToTopOnRouteChange from "hooks/useScrollToTop";
import React from "react";

const AboutUs = ({ data }) => {
  useScrollToTopOnRouteChange();
  return (
    <div>
      <InfoPage
        products={data}
        content={
          <div className="flex flex-col gap-[24px] pt-[48px]">
            <h1 className="text-[40px] font-semibold">About Us</h1>
            <div className="flex flex-col gap-[48px]">
              <p className="leading-[160%] pr-[24px]">
                <span className="text-blue-400 text-[16px] font-medium">
                  https://offers4deals.com
                </span>{" "}
                is an incredible website that offers details about exceptional
                deals, discounts, offers, and coupon codes from nearly all major
                shopping websites and stores, including Amazon India, Flipkart,
                Myntra, MamaEarth, Paytm, Jabong, Freecharge, and more in India.
                offers4deals also provides insightful reviews on various
                products. You can discover the top 10 deals within your budget
                in our blog section. Moreover, you can find loot offers, online
                sales, shopping deals, best discount coupons, and promo codes
                from all online shopping platforms.
              </p>
              <p className="leading-[160%] pr-[24px]">
                https://offers4deals.com discovers/tracks and shares the most
                affordable deals, offers, and discount coupons from nearly all
                online shopping websites in India. offers4deals also alerts
                users about loot deals across a wide array of products including
                Electronics, Pantry Products, Mobile Phones (Cellphones,
                Smartphones, iPhones) & Accessories, TV (Television) &
                Appliances, Clothing & Apparel, Food & Beverages, Beauty
                Products, Luggage & Bags, Backpacks, Computer & Laptop Deals,
                Gift Cards, Kitchen Accessories, Footwear & Shoes, Watches,
                Power Banks, Deodorants & Perfumes, Chocolates, Medicine &
                Healthcare products, Cameras, Baby Products, etc. Additionally,
                we keep track of the best cashback offers from banks (HDFC,
                ICICI, SBI, etc.) and wallets like Paytm, Freecharge, etc.
              </p>
              <p className="leading-[160%] pr-[24px]">
                At offers4deals, our mission is to simplify your online shopping
                experience by bringing you the most lucrative deals and
                discounts all in one place. Whether you're hunting for the
                latest gadgets, fashionable attire, or everyday essentials,
                we've got you covered. Our dedicated team tirelessly scours the
                internet to handpick the best offers, ensuring that you never
                miss out on savings. With our comprehensive platform, you can
                shop smarter and stretch your budget further. Join the
                offers4deals community today and embark on a journey of savings
                and convenience.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default AboutUs;
