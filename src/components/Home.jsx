import React, { useEffect, useRef } from 'react'
import "../SCSS/Home.scss"
import image from "../assets/images/dpsrbg.png"
import {useSelector } from 'react-redux';






function Home() {

  let {bodyBg} = useSelector(state=>state.iconBg)
  let headContentRef = useRef()
  let bodyContentRef = useRef() 

    useEffect(()=>{

      if(bodyBg==="#111111"){
        headContentRef.current.style.color="white"
        bodyContentRef.current.style.color="white"
      }else if(bodyBg==="#ffffff"){
        headContentRef.current.style.color="black"
        bodyContentRef.current.style.color="black"
      }

    },[bodyBg])


  return (
    <section id="homeSec">
    <div id="profileImgDiv">
    <div id="imageDiv">
    <img id='proImg' src={image} alt="" />
    </div>
    </div>

    <div id="homeContent">
    <p id='headContent' ref={headContentRef} style={{fontSize:"40px",fontWeight:"600"}}>
     <span>
     <hr id='hleId'/>
     I'M DURGA PRASAD SHETTY.
     </span>
     <p id='middleContent'>
     REACT WEB DEVELOPER
     </p>
    </p>
    <br />
    <p id='bodyContent' ref={bodyContentRef}>
    Creative and passionate Frontend React Developer with a knack for crafting seamless and dynamic user experiences.I build modern web applications that delight users and drive engagement.
    </p>
    </div>
    </section>
  )
}

export default Home