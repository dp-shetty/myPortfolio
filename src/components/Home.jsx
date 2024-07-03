import React, { useEffect, useRef } from 'react'
import "../SCSS/Home.scss"
import image from "../assets/images/dps.png"
import {useSelector } from 'react-redux';





function Home() {

  let {bodyBg} = useSelector(state=>state.iconBg)
  let middleContentRef = useRef()
  let bodyContentRef = useRef() 


    useEffect(()=>{

      if(bodyBg==="#111111"){
        middleContentRef.current.style.color="white"
        bodyContentRef.current.style.color="white"
      }else if(bodyBg==="#ffffff"){
        middleContentRef.current.style.color="black"
        bodyContentRef.current.style.color="black"
      }

    },[bodyBg])


  return (
    <section id="homeSec">
    <div id="profileImgDiv">
    <div id="imageDiv">
    <img src={image} alt="" />
    </div>
    </div>

    <div id="homeContent">
    <p id='headContent' ref={middleContentRef} style={{fontSize:"40px",fontWeight:"600"}}>
     <span>
     <hr id='hleId'/>
     I'M DURGA PRASAD SHETTY.
     <br />
     </span>
     <p id='middleContent' style={{marginLeft:"2.8rem"}}>
     REACT WEB DEVELOPER
     </p>
    </p>
    <br />
    <p id='bodyContent' ref={bodyContentRef} style={{marginLeft:"2.8rem",fontSize:"20px"}}>
    Creative and passionate Frontend React Developer with a knack for crafting seamless
    <br />
    and dynamic user experiences. Skilled in turning complex problems into intuitive and responsive designs,
    I build modern web applications that delight users and drive
    <br />
     engagement.
    </p>
    </div>
    </section>
  )
}

export default Home