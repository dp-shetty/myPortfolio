import React, { useEffect, useRef } from "react";
import image from "../assets/images/dpsrbg.png";
import { useSelector } from "react-redux";
import TypeWriter from "./Common/TypeWriter";

function Home() {
  let { bodyBg } = useSelector((state) => state.iconBg);
  let headContentRef = useRef();

  useEffect(() => {
    if (bodyBg === "#111111") {
      headContentRef.current.style.color = "white";
    } else if (bodyBg === "#ffffff") {
      headContentRef.current.style.color = "#666666";
    }
  }, [bodyBg]);

  const textColor = bodyBg === "#111111" ? "white" : "#949494";

  return (
    <section
      id="homeSec"
      className="h-h100vh flex items-center font-poppins mob:flex-col mob:w-full"
    >
      <div
        id="profileImgDiv"
        className="w-40% h-full flex justify-center bg-image-gradient mob:h-40% mob:w-99% mob:bg-none mob:flex mob:items-center mob:justify-center"
      >
        <div
          id="imageDiv"
          className="w-80% h-80% mt-10% mr-auto mb-0 ml-auto bg-Midnight-Moss rounded-1.7rem overflow-hidden"
        >
          <img
            id="proImg"
            className="h-full rounded-1.7rem"
            src={image}
            alt=""
          />
        </div>
      </div>

      <div
        id="homeContent"
        className="w-60% flex flex-col mob:py-1.5rem mob:px-0 mob:w-full"
      >
        <p
          id="headContent"
          ref={headContentRef}
          style={{ fontSize: "40px", fontWeight: "600" }}
        >
          <span className="text-2xl text-pfp-yellow flex items-center gap-1.3rem mb-1.2rem mob:text-xl mob:justify-center">
            <hr
              id="hleId"
              className="border border-solid border-defaultYellow w-3% h-0.35vh bg-bgpfp-yellow rounded-3rem mob:hidden"
            />
            I'M DURGA PRASAD SHETTY.👋
          </span>
          <p
            id="middleContent"
            className="text-2xl mob:flex mob:justify-center"
          >
            REACT WEB DEVELOPER ⚛️
          </p>
        </p>
        <br />
        <div
          id="bodyContent"
          className="w-78% text-lg mob:max-h-56 mob:overflow-y-auto mob:overflow-x-hidden mob:m-auto mob:text-center mob:w-95% h-36"
        >
          <TypeWriter
            texts={[
              `Creative and passionate Frontend React Developer 💡 with a knack for crafting seamless and dynamic user experiences. 🌟 I build modern web applications 🚀 that delight users and drive engagement. 💻✨ Your one-stop solution for intuitive and visually stunning web designs! 🎨🖌️`,
            ]}
            delays={[20]}
            loop={true}
            color={textColor}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
