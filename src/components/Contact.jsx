import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "../SCSS/Contact.scss";
import { FaMap } from "react-icons/fa";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CallIcon from "@mui/icons-material/Call";
import { NavLink } from "react-router-dom";

function Contact() {
  let { bodyBg } = useSelector((state) => state.iconBg);

  let contactHeadPara1 = useRef();
  let contactHeadPara2 = useRef();

  useEffect(() => {
    if (bodyBg === "#111111") {
      contactHeadPara1.current.style.color = "#4b4b4b";
      contactHeadPara2.current.style.color = "white";
    } else if (bodyBg === "#ffffff") {
      contactHeadPara1.current.style.color = "#d7d7d7";
      contactHeadPara2.current.style.color = "black";
    }
  }, [bodyBg]);

  return (
    <>
      <section id="contactHead" className="flex items-center justify-center">
        <div id="head1" className="absolute">
          <p
            ref={contactHeadPara1}
            style={{ fontWeight: "bolder" }}
            className="text-8xl font-extrabold"
          >
            CONTACT
          </p>
        </div>
        <div id="head2">
          <p
            ref={contactHeadPara2}
            style={{ fontWeight: "bolder" }}
            className="text-5xl font-extrabold"
          >
            GET IN <span>TOUCH</span>
          </p>
        </div>
      </section>

      <section className="contactBody flex">
        <div className="addressBody">
          <div className="communicationHead">
            <h2>DON'T BE SHY !!!</h2>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          <div className="contact-details">
            <div className="location flex items-center">
              <div className="map-icon">
                <FaMap />
              </div>
              <div>
                <p className="uppercase">Address Point</p>
                <p>Basavanagudi, Banglore, INDIA 560019.</p>
              </div>
            </div>

            <div className="contact-mail flex items-center">
              <div className="mail-icon">
                <ContactMailIcon />
              </div>
              <div>
                <p className="uppercase">mail me : </p>
                <NavLink
                  to="mailto:dps2k811@gmail.com"
                  className={"no-underline"}
                >
                  {" "}
                  dps2k811@gmail.com
                </NavLink>
              </div>
            </div>

            <div className="contact-phone flex items-center">
              <div className="call-icon">
                <CallIcon />
              </div>
              <div>
                <p className="uppercase">call me : </p>
                <NavLink to="tel:+916362405153" className={"no-underline"}>
                  {" "}
                  +91-6362405153
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="formBody">form</div>
      </section>
    </>
  );
}

export default Contact;
