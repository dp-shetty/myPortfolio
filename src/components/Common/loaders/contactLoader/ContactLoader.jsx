import React from 'react';
import './ContactLoader.scss';

const ContactLoader = () => {
  return (
    <div className="contact-loader-container">
      <div className="wrapper flex items-center justify-center">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default ContactLoader;
