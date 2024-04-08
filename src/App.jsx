import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "pages/AboutUs/AboutUs";
import Disclaimer from "pages/Disclaimer/Disclaimer";
import TermsAndConditions from "pages/TermsAndConditions/TermsAndConditions";
import Footer from "components/Footer/Footer";
import ContactUs from "pages/ContactUs/ContactUs";
import { useEffect, useState } from "react";
import { getProducts } from "firebaseConfig/firebase";
// import Home from "pages/Home/Home";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      console.log(res);
      setData(res);
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-between w-full h-[100vh] bg-bgPrimary">
      <button className="bg-white rounded-tl-[16px] shadow-2 rounded-bl-[16px] pl-[5px] right-0 top-[50%] translate-y-[-50%] fixed z-[99999999]">
        <a
          href="https://wa.me/8904458815"
          className="contact-data-info"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[42px] h-[42px] object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
            alt="whatsapp"
          />
        </a>
      </button>
      <button className="bg-white rounded-tl-[16px] py-[6px] shadow-2 rounded-bl-[16px] pl-[5px] right-0 top-[40%] translate-y-[-50%] fixed z-[99999999]">
        <a
          href="https://t.me/"
          className="contact-data-info"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="telegram"
            className="w-[42px] h-[42px] object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"
          />
        </a>
      </button>

      <div className="w-full">
        <Navbar data={data} />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about-us" element={<AboutUs data={data} />} />

          <Route path="/disclaimer" element={<Disclaimer data={data} />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions data={data} />}
          />
          <Route path="/contact-us" element={<ContactUs data={data} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
