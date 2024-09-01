import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/docs/Dps.pdf";
import { NavLink } from "react-router-dom";
import PortfolioButton from "./Common/Portfolio Button/PortfolioButton";
import AboutLoader from "./Common/loaders/aboutLoader/AboutLoader";

function About() {
  let { bodyBg } = useSelector((state) => state.iconBg);
  const isDarkMode = bodyBg === "#111111";
  const [loading, setLoading] = useState(true);

  let data = [
    {
      FirstName: "DURGA PRASAD",
      LASTNAME: "SHETTY",
      Github: "dp-shetty",
      Phone: "+91-6362405153",
      Skype: "skype@dps",
      Freelance: "Available",
      Nationality: "Indian",
      Address: "Banglore, INDIA",
      Email: "dps2k811@gmail.com",
      Languages: "English,Hindi,Kannada",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <AboutLoader />;
  }

  return (
    <>
      <section
        id="secHead"
        className="flex justify-center items-center my-1.5rem mx-auto mob:w-60 mob:ml-auto"
      >
        <div id="head1" className="absolute -z-1">
          <p
            className={`text-8xl font-extrabold tracking-long mob:text-5xl ${
              isDarkMode ? "text-about-light-1" : "text-about-black-1"
            }`}
          >
            RESUME
          </p>
        </div>
        <div id="head2">
          <p
            className={`text-5xl font-extrabold tracking-long mob:text-2xl ${
              isDarkMode ? "text-white" : "text-about-black-2"
            }`}
          >
            ABOUT <span className="text-pfp-yellow">ME</span>
          </p>
        </div>
      </section>

      <section
        id="secBody"
        className="mt-24 w-92% flex mob:w-98% mob:flex-col mob:mt-6 mob:py-2 mob:px-0 mob:h-69vh mob:overflow-y-auto mob:overflow-x-hidden"
      >
        <section
          id="secBody1"
          className="w-1/2 flex flex-col items-center gap-3 mob:w-full mob:py-6 mob:px-0"
        >
          <div
            id="infoBody"
            className="w-full flex justify-around text-xl mb-1.2rem pl-0.8rem mob:w-full mob:text-xs mob:mb-4 mob:flex-wrap mob:py-0 mob:px-0.1rem mob:gap-3"
          >
            <div
              id="firstName"
              className="w-1/2 flex flex-col gap-1.8rem text-0.85em mob:w-full mob:pl-3 mob:gap-3 mob:text-xs mob:p-1"
            >
              {data.map(({ FirstName, LASTNAME, Github, Phone, Skype }, i) => {
                return (
                  <React.Fragment key={i}>
                    <p
                      className={`mob:pl-3 ${
                        isDarkMode
                          ? "text-about-key-light"
                          : "text-about-key-dark"
                      }`}
                    >
                      First Name :{" "}
                      <p
                        className={`inline-block font-medium ${
                          isDarkMode
                            ? "text-about-value-light"
                            : "text-about-value-dark"
                        }`}
                      >
                        {FirstName}
                      </p>
                    </p>
                    <p
                      className={`mob:pl-3 ${
                        isDarkMode
                          ? "text-about-key-light"
                          : "text-about-key-dark"
                      }`}
                    >
                      LASTNAME :{" "}
                      <p
                        className={`inline-block font-medium ${
                          isDarkMode
                            ? "text-about-value-light"
                            : "text-about-value-dark"
                        }`}
                      >
                        {LASTNAME}
                      </p>
                    </p>
                    <p
                      className={`mob:pl-3 ${
                        isDarkMode
                          ? "text-about-key-light"
                          : "text-about-key-dark"
                      }`}
                    >
                      GITHUB :{" "}
                      <NavLink
                        to={"https://github.com/dp-shetty"}
                        className={`no-underline font-medium ${
                          isDarkMode
                            ? "text-about-value-light"
                            : "text-about-value-dark"
                        }`}
                        target="_blank"
                      >
                        {Github}
                      </NavLink>
                    </p>
                    <p
                      className={`mob:pl-3 ${
                        isDarkMode
                          ? "text-about-key-light"
                          : "text-about-key-dark"
                      }`}
                    >
                      Phone :{" "}
                      <NavLink
                        to={"tel:+916362405153"}
                        className={`no-underline font-medium ${
                          isDarkMode
                            ? "text-about-value-light"
                            : "text-about-value-dark"
                        }`}
                      >
                        {Phone}
                      </NavLink>
                    </p>
                    <p
                      className={`mob:pl-3 ${
                        isDarkMode
                          ? "text-about-key-light"
                          : "text-about-key-dark"
                      }`}
                    >
                      Skype :{" "}
                      <NavLink
                        to="skype:live:.cid.a8c25624fccf1ce3?chat"
                        className={`no-underline font-medium ${
                          isDarkMode
                            ? "text-about-value-light"
                            : "text-about-value-dark"
                        }`}
                      >
                        {Skype}
                      </NavLink>
                    </p>
                  </React.Fragment>
                );
              })}
            </div>
            <div
              id="lastName"
              className="w-1/2 flex flex-col gap-1.8rem text-0.85em mob:w-full mob:pl-3 mob:gap-3 mob:text-xs mob:p-1"
            >
              {data.map(
                ({ Freelance, Nationality, Address, Email, Languages }, i) => {
                  return (
                    <React.Fragment key={i}>
                      <p
                        className={`mob:pl-3 ${
                          isDarkMode
                            ? "text-about-key-light"
                            : "text-about-key-dark"
                        }`}
                      >
                        Freelance :{" "}
                        <p
                          className={`inline-block text-freelance-green font-medium`}
                        >
                          {Freelance}
                        </p>
                      </p>
                      <p
                        className={`mob:pl-3 ${
                          isDarkMode
                            ? "text-about-key-light"
                            : "text-about-key-dark"
                        }`}
                      >
                        Nationality :{" "}
                        <p
                          className={`inline-block font-medium ${
                            isDarkMode
                              ? "text-about-value-light"
                              : "text-about-value-dark"
                          }`}
                        >
                          {Nationality}
                        </p>
                      </p>
                      <p
                        className={`mob:pl-3 ${
                          isDarkMode
                            ? "text-about-key-light"
                            : "text-about-key-dark"
                        }`}
                      >
                        Address :{" "}
                        <p
                          className={`inline-block font-medium ${
                            isDarkMode
                              ? "text-about-value-light"
                              : "text-about-value-dark"
                          }`}
                        >
                          {Address}
                        </p>
                      </p>
                      <p
                        className={`mob:pl-3 ${
                          isDarkMode
                            ? "text-about-key-light"
                            : "text-about-key-dark"
                        }`}
                      >
                        Email :{" "}
                        <NavLink
                          to={"mailto:dps2k811@gmail.com"}
                          className={`no-underline font-medium ${
                            isDarkMode
                              ? "text-about-value-light"
                              : "text-about-value-dark"
                          }`}
                        >
                          {Email}
                        </NavLink>
                      </p>
                      <p
                        className={`mob:pl-3 ${
                          isDarkMode
                            ? "text-about-key-light"
                            : "text-about-key-dark"
                        }`}
                      >
                        Languages :{" "}
                        <p
                          className={`inline-block font-medium ${
                            isDarkMode
                              ? "text-about-value-light"
                              : "text-about-value-dark"
                          }`}
                        >
                          {Languages}
                        </p>
                      </p>
                    </React.Fragment>
                  );
                }
              )}
            </div>
          </div>

          <PortfolioButton
            text="DOWNLOAD CV"
            icon={FaDownload}
            href={resume}
            target="_blank"
            className={`no-underline font-medium border-2 border-solid border-pfp-yellow inline-flex w-48 h-10 items-center justify-between rounded-1.7rem pl-3 hover:bg-bgpfp-yellow hover:transition-all hover:duration-bg-transition ${
              isDarkMode ? "text-about-value-light" : "text-about-value-dark"
            }`}
            iconClassName={`${isDarkMode ? "text-white" : "text-white"}`}
          />
        </section>

        <section
          id="secBody2"
          className="w-48% flex flex-wrap gap-3 justify-center text-xl mob:w-95% mob:my-0 mob:mx-auto mob:text-xs mob:py-5 mob:px-0"
        >
          <div
            id=""
            className={`w-45% rounded-lg flex flex-col items-center justify-center mob:w-45% mob:p-1 border border-solid ${
              isDarkMode
                ? "text-about-value-light border-aboutCard-lightBorder"
                : "text-aboutCard-darkText border-aboutCard-darkBorder"
            }`}
          >
            <p>
              <span className="text-pfp-yellow text-5xl font-extrabold mob:text-3xl">
                2+
              </span>
            </p>
            <p className="flex items-center justify-center w-95% gap-1 text-lg font-light">
              <hr className="w-8% border border-solid border-boulder " />
              Years Of Experiance
            </p>
          </div>
          <div
            id="projectDiv"
            className={`w-45% rounded-lg flex flex-col items-center justify-center mob:w-45% mob:p-1 border border-solid ${
              isDarkMode
                ? "text-about-value-light border-aboutCard-lightBorder"
                : "text-aboutCard-darkText border-aboutCard-darkBorder"
            }`}
          >
            <p>
              <span className="text-pfp-yellow text-5xl font-extrabold mob:text-3xl">
                30+
              </span>
            </p>
            <p className="details flex items-center justify-center w-95% gap-1 text-lg font-light">
              <hr className="w-8% border border-solid border-boulder" />
              COMPLETED PROJECTS
            </p>
          </div>
          <div
            id="customerDiv"
            className={`w-45% rounded-lg flex flex-col items-center justify-center mob:w-45% mob:p-1 border border-solid ${
              isDarkMode
                ? "text-about-value-light border-aboutCard-lightBorder"
                : "text-aboutCard-darkText border-aboutCard-darkBorder"
            }`}
          >
            <p>
              <span className="text-pfp-yellow text-5xl font-extrabold mob:text-3xl">
                0+
              </span>
            </p>
            <p className="details flex items-center justify-center w-95% gap-1 text-lg font-light">
              <hr className="w-8% border border-solid border-boulder" />
              HAPPY CUSTOMERS
            </p>
          </div>
          <div
            id="awardDiv"
            className={`w-45% rounded-lg flex flex-col items-center justify-center mob:w-45% mob:p-1 border border-solid ${
              isDarkMode
                ? "text-about-value-light border-aboutCard-lightBorder"
                : "text-aboutCard-darkText border-aboutCard-darkBorder"
            }`}
          >
            <p>
              <span className="text-pfp-yellow text-5xl font-extrabold mob:text-3xl">
                0+
              </span>
            </p>
            <p className="details flex items-center justify-center w-95% gap-1 text-lg font-light">
              <hr className="w-8% border border-solid border-boulder" />
              AWARDS WON
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
