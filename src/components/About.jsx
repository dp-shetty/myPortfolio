import React, { useEffect, useRef } from "react";
import "../SCSS/About.scss";
import { useSelector } from "react-redux";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/docs/Dps.pdf";

function About() {
  let { bodyBg } = useSelector((state) => state.iconBg);

  let p1ref = useRef();
  let p2ref = useRef();
  let p3ref = useRef();
  let p4ref = useRef();
  let secBody2Ref = useRef();

  useEffect(() => {
    if (bodyBg === "#111111") {
      p2ref.current.style.color = "white";
      p1ref.current.style.color = "#4b4b4b";
      p3ref.current.style.color = "white";
      p4ref.current.style.color = "white";
      secBody2Ref.current.style.color = "white";
    } else if (bodyBg === "#ffffff") {
      p2ref.current.style.color = "black";
      p1ref.current.style.color = "#d7d7d7";
      p3ref.current.style.color = "black";
      p4ref.current.style.color = "black";
      secBody2Ref.current.style.color = "black";
    }
  }, [bodyBg]);

  let data = [
    {
      FirstName: "DURGA PRASAD",
      Age: "23 Years",
      Freelance: "Available",
      Phone: "+91-6362405153",
      Skype: "live:.cid.a8c25624fccf1ce3",
      LastName: "T D",
      Nationality: "Indian",
      Address: "Banglore, INDIA",
      Email: "dps2k811@gmail.com",
      Languages: "English,Hindi,Kannada",
    },
  ];

  return (
    <>
      <section id="secHead">
        <div id="head1">
          <p ref={p1ref} style={{ fontWeight: "bolder" }}>
            RESUME
          </p>
        </div>
        <div id="head2">
          <p ref={p2ref} style={{ fontWeight: "bolder" }}>
            ABOUT <span>ME</span>
          </p>
        </div>
      </section>

      <section id="secBody">
        <section id="secBody1">
          <div id="infoBody" ref={p3ref}>
            {/* FIRST NAME COLUMN */}
            <div id="firstName">
              {data.map(({ FirstName, Age, Freelance, Phone, Skype }, i) => {
                return (
                  <React.Fragment key={i}>
                    <p>First Name : {FirstName}</p>
                    <p>Age : {Age}</p>
                    <p>
                      Freelance :{" "}
                      <span style={{ color: "rgb(8, 189, 8)" }}>
                        {Freelance}
                      </span>
                    </p>
                    <p>Phone : {Phone}</p>
                    <p>Skype : {Skype}</p>
                  </React.Fragment>
                );
              })}
            </div>

            {/* LAST NAME COLUMN */}
            <div id="lastName">
              {data.map(
                ({ LastName, Nationality, Address, Email, Languages }, i) => {
                  return (
                    <React.Fragment key={i}>
                      <p>Last Name : {LastName}</p>
                      <p>Nationality : {Nationality}</p>
                      <p>Address : {Address}</p>
                      <p>Email : {Email}</p>
                      <p>Languages : {Languages}</p>
                    </React.Fragment>
                  );
                }
              )}
            </div>
          </div>

          <div id="download">
            <p ref={p4ref}>DOWNLOAD CV</p>
            <a id="Dsvg" href={resume} target="_blank">
              <FaDownload />
            </a>
          </div>
        </section>

        <section id="secBody2" ref={secBody2Ref}>
          <div id="yopDiv">
            <p>
              <span>2+</span>
            </p>
            <p className="details">
              <hr />
              Years Of Experiance
            </p>
          </div>
          <div id="projectDiv">
            <p>
              <span>30+</span>
            </p>
            <p className="details">
              <hr />
              COMPLETED PROJECTS
            </p>
          </div>
          <div id="customerDiv">
            <p>
              <span>0+</span>
            </p>
            <p className="details">
              <hr />
              HAPPY CUSTOMERS
            </p>
          </div>
          <div id="awardDiv">
            <p>
              <span>0+</span>
            </p>
            <p className="details">
              <hr />
              AWARDS WON
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
