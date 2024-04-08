import InfoPage from "components/InfoPage/InfoPage";
import React from "react";
import ContactForm from "./_components/ContactForm/ContactForm";
import useScrollToTopOnRouteChange from "hooks/useScrollToTop";

const ContactUs = ({ data }) => {
  useScrollToTopOnRouteChange();
  return (
    <div>
      <InfoPage content={<ContactForm />} products={data} />
    </div>
  );
};

export default ContactUs;
