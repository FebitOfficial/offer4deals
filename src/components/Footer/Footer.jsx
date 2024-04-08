import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className=" wow fadeInUp section-bg mt-[48px]   pt-16 bg-bgSecondary text-white  md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="m-auto w-[97.5%] md:w-[85%]">
          <div className="flex flex-col flex-wrap items-start md:flex-row md:items-start">
            <div className="w-full md:w-1/2  lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 flex items-center gap-2">
                  <h1 className="text-[48px]  font-bold">Offers4Deals</h1>
                </Link>
                <div className="flex flex-col gap-4 pl-4 md:pl-2">
                  <p className="text-base leading-relaxed text-body-color text-body-color-dark">
                    Call Us At:{" "}
                    <span className="text-[#229e43]">0161 459 4752</span>
                  </p>
                  <p className="text-green-primary font-medium">
                    <span className="text-body-color">Email: </span>{" "}
                    infooffer4deals@gmail.com
                  </p>
                  <p className="font-medium text-body-color">
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/about-us"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      Know More
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold  text-white">Terms</h2>
                <ul>
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      TOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold  text-white">
                  <Link to="/contact-us">Support & Help</Link>
                </h2>
                <ul>
                  <li>
                    <a
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      <Link to="/contact-us">Open Support Ticket</Link>
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary text-body-color-dark hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 py-4 pl-4 md:flex-row md:items-center  md:justify-between md:gap-0 md:pl-0">
            <p className="text-base text-body-color text-white">
              Ⓒ 2024 Offer4Deals All Rights Reserved
            </p>
            <div className="flex flex-col items-start justify-start gap-4 py-4 text-body-color md:flex-row md:items-center md:py-0">
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
