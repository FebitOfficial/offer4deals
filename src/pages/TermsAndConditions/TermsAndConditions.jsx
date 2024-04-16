import InfoPage from "components/InfoPage/InfoPage";
import useScrollToTopOnRouteChange from "hooks/useScrollToTop";
import React from "react";

const TermsAndConditions = ({ data }) => {
  useScrollToTopOnRouteChange();
  return (
    <div>
      <InfoPage
        products={data}
        content={
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[40px] font-semibold">Terms and Conditions</h1>
            <div className="flex flex-col gap-[48px]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">Website Usage</h2>
                <p className="leading-[160%] pr-[24px]">
                  By accessing and using offers4deals.com website, you agree to
                  comply with these terms and conditions. If you disagree with
                  any part of these terms and conditions, please do not use our
                  website.
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">
                  Intellectual Property Rights
                </h2>
                <p className="leading-[160%] pr-[24px]">
                  All content included on this website, such as text, graphics,
                  logos, button icons, images, audio clips, digital downloads,
                  data compilations, and software, is the property of
                  offers4deals or its content suppliers and protected by
                  international copyright laws. The compilation of all content
                  on this site is the exclusive property of offers4deals, with
                  copyright authorship for this collection by offers4deals, and
                  protected by international copyright laws.
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">
                  Limitation of Liability
                </h2>
                <p className="leading-[160%] pr-[24px]">
                  offers4deals shall not be liable for any special or
                  consequential damages that result from the use of, or the
                  inability to use, the materials on this site or the
                  performance of the products, even if offers4deals has been
                  advised of the possibility of such damages.
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">Changes to Terms</h2>
                <p className="leading-[160%] pr-[24px]">
                  offers4deals reserves the right, in its sole discretion, to
                  change the Terms under which offers4deals.com is offered. The
                  most current version of the Terms will supersede all previous
                  versions. offers4deals encourages you to periodically review
                  the Terms to stay informed of our updates.
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TermsAndConditions;
