import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../SCSS/Contact.scss";
import { FaMap } from "react-icons/fa";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CallIcon from "@mui/icons-material/Call";
import { NavLink } from "react-router-dom";
import UserForm from "./UserForm";
import ContactLoader from "./Common/loaders/contactLoader/ContactLoader";

function Contact() {
  let { bodyBg } = useSelector((state) => state.iconBg);
  const isDarkMode = bodyBg === "#111111";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <ContactLoader />;
  }

  return (
    <>
      <section className="contact-section">
        <section
          id="contactHead"
          className="flex items-center justify-center my-1.5rem mx-auto"
        >
          <div className="absolute -z-1">
            <p
              className={`text-8xl font-extrabold tracking-long mob:text-5xl ${
                isDarkMode ? "text-about-light-1" : "text-about-black-1"
              }`}
            >
              CONTACT
            </p>
          </div>
          <div id="head2">
            <p
              className={`text-5xl font-extrabold tracking-long mob:text-xl ${
                isDarkMode ? "text-white" : "text-about-black-2"
              }`}
            >
              GET IN <span className="text-pfp-yellow">TOUCH</span>
            </p>
          </div>
        </section>

        <section className="contactBody flex w-93% mt-2.8rem mr-0 mb-0 ml-1.3rem mob:h-75vh mob:overflow-y-auto mob:overflow-x-hidden mob:flex-col mob:m-auto mob:gap-2">
          <div className="addressBody w-40% mob:w-full">
            <div className="communicationHead p-2 flex flex-col gap-0.8rem mob:gap-2">
              <h2
                className={`mob:text-lg mob:text-center ${
                  isDarkMode ? "text-white" : "text-about-black-2"
                }`}
              >
                DON'T BE SHY !!!
              </h2>
              <p
                className={`mob:text-xs text-justify ${
                  isDarkMode
                    ? "text-about-value-light"
                    : "text-aboutCard-darkText"
                }`}
              >
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>
            <div className="contact-details">
              <div className="location flex items-center p-0.8rem gap-4">
                <div className="map-icon">
                  <FaMap />
                </div>
                <div
                  className={`
                  uppercase 
                  mob:text-xs`}
                >
                  <p
                    className={`${
                      isDarkMode
                        ? "text-about-key-light"
                        : "text-about-key-dark"
                    }`}
                  >
                    Address Point
                  </p>
                  <p
                    className={`${
                      isDarkMode
                        ? "text-about-value-light"
                        : "text-aboutCard-darkText"
                    }`}
                  >
                    Basavanagudi, Banglore, INDIA 560019.
                  </p>
                </div>
              </div>

              <div className="contact-mail flex items-center p-0.8rem gap-4">
                <div className="mail-icon">
                  <ContactMailIcon />
                </div>
                <div
                  className={`
                  uppercase 
                  mob:text-xs`}
                >
                  <p
                    className={`uppercase ${
                      isDarkMode
                        ? "text-about-key-light"
                        : "text-about-key-dark"
                    }`}
                  >
                    mail me
                  </p>
                  <NavLink
                    to="mailto:dps2k811@gmail.com"
                    className={`no-underline font-medium ${
                      isDarkMode
                        ? "text-about-value-light"
                        : "text-about-value-dark"
                    }`}
                  >
                    dps2k811@gmail.com
                  </NavLink>
                </div>
              </div>

              <div className="contact-phone flex items-center p-0.8rem gap-4">
                <div className="call-icon">
                  <CallIcon />
                </div>
                <div
                  className={`
                  uppercase 
                  mob:text-xs`}
                >
                  <p
                    className={`uppercase ${
                      isDarkMode
                        ? "text-about-key-light"
                        : "text-about-key-dark"
                    }`}
                  >
                    call me
                  </p>
                  <NavLink
                    to="tel:+916362405153"
                    className={`no-underline font-medium ${
                      isDarkMode
                        ? "text-about-value-light"
                        : "text-about-value-dark"
                    }`}
                  >
                    +91-6362405153
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="formBody w-60% mob:w-full">
            <UserForm />
          </div>
        </section>
      </section>
    </>
  );
}
export default Contact;
