import React from "react";
import './AboutLoader.scss'; // Assuming you're going to use a CSS file for styling

const AboutLoader = () => {
  return (
    <div className="aboutLoaderContainer">
      <ul className="loader">
        <li className="center"></li>
        <li className="item item-1"></li>
        <li className="item item-2"></li>
        <li className="item item-3"></li>
        <li className="item item-4"></li>
        <li className="item item-5"></li>
        <li className="item item-6"></li>
        <li className="item item-7"></li>
        <li className="item item-8"></li>
      </ul>
    </div>
  );
};

export default AboutLoader;
