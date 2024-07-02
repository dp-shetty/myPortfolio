import React from 'react'
import "../SCSS/Home.scss"
import image from "../assets/images/dps.png"



function Home() {
  return (
    <>
    <div id="profileImgDiv">
    <div id="imageDiv">
    <img src={image} alt="" />
    </div>
    </div>

    <div id="homeContent">
    {/* content */}
    </div>
    </>
  )
}

export default Home