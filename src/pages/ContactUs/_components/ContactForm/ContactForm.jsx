import NewsLatterBox from "./_legos/NewsLatterBox/NewsLatterBox";

const ContactForm = () => {
  return (
    <section id="ContactForm" className="overflow-hidden w-full">
      <div className="w-full">
        <div className="-mx-4 flex flex-wrap full">
          <div className="w-full px-4 ">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-secondaryC text-2xl font-bold  sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-secondaryC"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="rounded-md border-[1px] outline-none w-full p-[12px] border-neutral-300"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-secondaryC"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-md border-[1px] outline-none w-full p-[12px] border-neutral-300"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-secondaryC"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="rounded-md border-[1px] outline-none w-full p-[12px] border-neutral-300"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4 mt-[12px]">
                    <button className="w-1/2 rounded-[36px] border-[2px] py-[12px] border-secondaryC text-secondaryC">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
