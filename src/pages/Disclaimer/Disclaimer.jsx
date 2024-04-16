import InfoPage from "components/InfoPage/InfoPage";
import useScrollToTopOnRouteChange from "hooks/useScrollToTop";
import React from "react";

const Disclaimer = ({ data }) => {
  useScrollToTopOnRouteChange();
  return (
    <div>
      <InfoPage
        products={data}
        content={
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[40px] font-semibold">Disclaimer</h1>
            <div className="flex flex-col gap-[48px]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">
                  General Information
                </h2>
                <p className="leading-[160%] pr-[24px]">
                  The information contained on offers4deals.com website (the
                  “Service”) is for general information purposes only.
                  offers4deals assumes no responsibility for errors or omissions
                  in the contents of the Service.
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">
                  Limitation of Liability
                </h2>
                <p className="leading-[160%] pr-[24px]">
                  In no event shall offers4deals.com be liable for any special,
                  direct, indirect, consequential, or incidental damages or any
                  damages whatsoever, whether in an action of contract,
                  negligence, or other torts, arising out of or in connection
                  with the use of the Service or the contents of the Service.
                  offers4deals.com reserves the right to make additions,
                  deletions, or modifications to the contents of the Service at
                  any time without prior notice.
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">
                  External Links Disclaimer
                </h2>
                <p className="leading-[160%] pr-[24px]">
                  offers4deals.com website might contain links to external
                  websites that are not provided or maintained by or in any way
                  affiliated with offers4deals.com. Please note that
                  offers4deals.com doesn’t guarantee the accuracy, relevance,
                  timeliness, or completeness of any information on these
                  external websites.
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">
                  Amazon Affiliate Links
                </h2>
                <p className="leading-[160%] pr-[24px]">
                  offers4deals.com is a participant in the Amazon Services LLC
                  Associates Program, an affiliate advertising program designed
                  to provide a means for website owners to earn fees by linking
                  to Amazon.in and affiliated sites, as well as to other
                  websites that may be affiliated with Amazon Service LLC
                  Associates Program.
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-semibold">
                  Product Affiliate Links
                </h2>
                <p className="leading-[160%] pr-[24px]">
                  If you click a product affiliate link and buy the product,
                  then I will get a percentage of the sale or some other type of
                  compensation. Again, prices are not different if you use these
                  affiliate links. You will not pay more by clicking through to
                  the link. These links are not “pay per click.”
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Disclaimer;
