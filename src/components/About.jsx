import React, { useEffect, useRef } from "react";
import "../SCSS/About.scss";
import { useSelector } from "react-redux";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/docs/Dps.pdf";
import { NavLink } from "react-router-dom";
import PortfolioButton from "./Common/Portfolio Button/PortfolioButton";

function About() {
  let { bodyBg } = useSelector((state) => state.iconBg);

  let p1ref = useRef();
  let p2ref = useRef();
  let p3ref = useRef();
  let p4ref = useRef();
  let secBody2Ref = useRef();
  let dwdAnchorRef = useRef();

  useEffect(() => {
    if (bodyBg === "#111111") {
      p2ref.current.style.color = "white";
      p1ref.current.style.color = "#4b4b4b";
      p3ref.current.style.color = "white";
      p4ref.current.style.color = "white";
      secBody2Ref.current.style.color = "white";
      dwdAnchorRef.current.style.color = "white";
    } else if (bodyBg === "#ffffff") {
      p2ref.current.style.color = "black";
      p1ref.current.style.color = "#d7d7d7";
      p3ref.current.style.color = "black";
      p4ref.current.style.color = "black";
      secBody2Ref.current.style.color = "black";
      dwdAnchorRef.current.style.color = "black";
    }
  }, [bodyBg]);

  let data = [
    {
      FirstName: "DURGA PRASAD",
      Age: "23 Years",
      Github: "dp-shetty",
      Phone: "+91-6362405153",
      Skype: "skype@dps",
      LastName: "T D",
      Nationality: "Indian",
      Address: "Banglore, INDIA",
      Email: "dps2k811@gmail.com",
      Languages: "English,Hindi,Kannada",
    },
  ];

  return (
    <>
      <section
        id="secHead"
        className="flex justify-center items-center my-1.5rem mx-auto mob:w-60 mob:ml-auto"
      >
        <div id="head1" className="absolute -z-1">
          <p
            ref={p1ref}
            className="text-8xl font-extrabold tracking-long mob:text-4xl"
          >
            RESUME
          </p>
        </div>
        <div id="head2">
          <p
            ref={p2ref}
            className="text-5xl font-extrabold tracking-long mob:text-2xl"
          >
            ABOUT <span className="text-pfp-yellow">ME</span>
          </p>
        </div>
      </section>

      <section
        id="secBody"
        className="mt-24 w-92% flex mob:w-98% mob:flex-col mob:mt-6 mob:py-2 mob:px-0 mob:h-69vh mob:overflow-y-auto mob:overflow-x-hidden"
      >
        <section id="secBody1" className="w-1/2 mob:w-full mob:py-6 mob:px-0">
          <div
            id="infoBody"
            ref={p3ref}
            className="w-full flex justify-around text-xl mb-1.2rem pl-0.8rem mob:w-full mob:text-xs mob:mb-4 mob:flex-wrap mob:py-0 mob:px-0.1rem mob:gap-3"
          >
            <div
              id="firstName"
              className="w-1/2 flex flex-col gap-1.8rem text-0.85em mob:w-full mob:pl-3 mob:gap-3 mob:text-xs mob:p-1"
            >
              {data.map(({ FirstName, Age, Github, Phone, Skype }, i) => {
                return (
                  <React.Fragment key={i}>
                    <p className="mob:pl-3">First Name : {FirstName}</p>
                    <p className="mob:pl-3">Age : {Age}</p>
                    <p className="mob:pl-3">
                      GITHUB :{" "}
                      <NavLink
                        to={"https://github.com/dp-shetty"}
                        className={"no-underline text-current"}
                        target="_blank"
                      >
                        {Github}
                      </NavLink>
                    </p>
                    <p className="mob:pl-3">
                      Phone :{" "}
                      <NavLink
                        to={"tel:+916362405153"}
                        className={"no-underline text-current"}
                      >
                        {Phone}
                      </NavLink>
                    </p>
                    <p className="mob:pl-3">
                      Skype :{" "}
                      <NavLink
                        to="skype:live:.cid.a8c25624fccf1ce3?chat"
                        className={"no-underline text-current"}
                      >
                        {Skype}
                      </NavLink>
                    </p>
                  </React.Fragment>
                );
              })}
            </div>

            {/* LAST NAME COLUMN */}
            <div
              id="lastName"
              className="w-1/2 flex flex-col gap-1.8rem text-0.85em mob:w-full mob:pl-3 mob:gap-3 mob:text-xs mob:p-1"
            >
              {data.map(
                ({ LastName, Nationality, Address, Email, Languages }, i) => {
                  return (
                    <React.Fragment key={i}>
                      <p className="mob:pl-3">Last Name : {LastName}</p>
                      <p className="mob:pl-3">Nationality : {Nationality}</p>
                      <p className="mob:pl-3">Address : {Address}</p>
                      <p className="mob:pl-3">
                        Email :{" "}
                        <NavLink
                          to={"mailto:dps2k811@gmail.com"}
                          className={"no-underline text-current"}
                        >
                          {Email}
                        </NavLink>
                      </p>
                      <p className="mob:pl-3">Languages : {Languages}</p>
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
            pRef={p4ref}
            aRef={dwdAnchorRef}
          />
        </section>

        <section
          id="secBody2"
          ref={secBody2Ref}
          className="w-48% flex flex-wrap gap-3 justify-center text-xl mob:w-95% mob:my-0 mob:mx-auto mob:text-xs mob:py-5 mob:px-0"
        >
          <div
            id="yopDiv"
            className="w-45% rounded-lg shadow-about-cards flex flex-col items-center justify-center mob:w-45% mob:p-1"
          >
            <p>
              <span className="text-pfp-yellow text-5xl font-extrabold mob:text-3xl">
                2+
              </span>
            </p>
            <p className="details flex items-center justify-center w-95% gap-1">
              <hr className="w-8% border border-solid border-boulder" />
              Years Of Experiance
            </p>
          </div>
          <div
            id="projectDiv"
            className="w-45% rounded-lg shadow-about-cards flex flex-col items-center justify-center mob:w-45% mob:p-1"
          >
            <p>
              <span className="text-pfp-yellow text-5xl font-extrabold mob:text-3xl">
                30+
              </span>
            </p>
            <p className="details flex items-center justify-center w-95% gap-1">
              <hr className="w-8% border border-solid border-boulder" />
              COMPLETED PROJECTS
            </p>
          </div>
          <div
            id="customerDiv"
            className="w-45% rounded-lg shadow-about-cards flex flex-col items-center justify-center mob:w-45% mob:p-1"
          >
            <p>
              <span className="text-pfp-yellow text-5xl font-extrabold mob:text-3xl">
                0+
              </span>
            </p>
            <p className="details flex items-center justify-center w-95% gap-1">
              <hr className="w-8% border border-solid border-boulder" />
              HAPPY CUSTOMERS
            </p>
          </div>
          <div
            id="awardDiv"
            className="w-45% rounded-lg shadow-about-cards flex flex-col items-center justify-center mob:w-45% mob:p-1"
          >
            <p>
              <span className="text-pfp-yellow text-5xl font-extrabold mob:text-3xl">
                0+
              </span>
            </p>
            <p className="details flex items-center justify-center w-95% gap-1">
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
