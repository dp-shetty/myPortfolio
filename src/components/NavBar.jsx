import React, { createContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiMailOpenFill } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { IoMoonOutline } from "react-icons/io5";
import "../SCSS/NavBar.scss"
import { useDispatch, useSelector } from 'react-redux';
import { iconBgActions } from '../store';
import { LensTwoTone } from '@mui/icons-material';





function NavBar() {


  let dispatchIconBg = useDispatch()
  let {background,fill,bodyBg,iconHoverBg,iconLeaveBg} = useSelector(state=>state.iconBg)


  let navicon = {fill:"white",fontSize:"1.2rem",borderRadius:"100%",padding:"1.1rem",cursor:"pointer",transition:"all ease-in-out 0.9s"}
  let sunicon = {fill:"white",fontSize:"1.2rem",background:"#4B4B4B",borderRadius:"100%",padding:"1.1rem",cursor:"pointer"}
  let moonicon = {fill:"black",fontSize:"1.2rem",background:"#EEEEEE",borderRadius:"100%",padding:"1.1rem",cursor:"pointer"}

  // let iconhover= ({target})=>target.innerText=""
  let iconleave= ({target})=>target.style.background=iconLeaveBg
  let sunHover = ({target})=>target.style.background="#646464"
  let sunLeave = ({target})=>target.style.background="#4B4B4B"
  let navIcons = document.querySelectorAll(".navIcons")
  let anchors = document.getElementsByTagName('a')


  useEffect(()=>{
    if(bodyBg==="#111111"){
      for (let anchor of anchors) {
        anchor.style.color="white"
      }
    }else if(bodyBg==="#ffffff"){
      for (let anchor of anchors) {
        anchor.style.color="black"
      }
    }
  },[bodyBg])



  let body = document.body
  body.style.background=bodyBg
  navicon.fill=fill;

  let sunRef = useRef()
  let moonRef = useRef()

  let toggleBgWhite = ()=>{
    dispatchIconBg(iconBgActions.toggleBgWhite())
  }

  let toggleBgBlack = ()=>{
    dispatchIconBg(iconBgActions.toggleBgBlack())
  }

  
  let switchToDark = ()=>{
    // sunRef.current.style.visibility="hidden"
    moonRef.current.style.display="flex";
    toggleBgWhite()
  }


  let switchToLight = ()=>{
    moonRef.current.style.display="none";
    sunRef.current.style.visibility="visible"
    toggleBgBlack()
  }


  useEffect(() => {
    const navContents = document.querySelectorAll(".navContent");

    function handleMediaQueryChange(event) {
      if (event.matches) {
        navContents.forEach(navContent => {
          navContent.style.display = "none";
        });
      }else {
        navContents.forEach(navContent => {
          navContent.style.display = "";
        });
      }
    }

    const mediaQueryList = window.matchMedia('(min-width: 320px) and (max-width: 480px)');
    mediaQueryList.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQueryList);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);





  return (

    <div id='navId'>

    <div id="sun" onClick={switchToDark} ref={sunRef}>
    <WbSunnyIcon style={sunicon} onMouseOver={sunHover} onMouseOut={sunLeave}/>
    </div>
    <div id="moon" ref={moonRef} onClick={switchToLight}>
    <IoMoonOutline style={moonicon}/>
    </div>
    {/* onMouseOver={iconhover} onMouseOut={iconleave} */}
  
    <NavLink to={"/"}>
    <p className='navContent'>HOME</p>
    <FaHome className='navIcons'  style={navicon} />
    </NavLink>

    <NavLink to={"/about"}>
    <p className='navContent'>ABOUT</p>
    <IoPersonSharp className='navIcons' style={navicon}/>
    </NavLink>

    <NavLink to={"/portfolio"}>
    <p className='navContent'>PORTFOLIO</p>
    <MdWork className='navIcons'  style={navicon}/>
    </NavLink>

    <NavLink to={"/contact"}>
    <p className='navContent'>CONTACT</p>
    <RiMailOpenFill className='navIcons'  style={navicon}/>
    </NavLink>

    <NavLink to={"/blog"}>
    <p className='navContent'>BLOG</p>
    <IoChatbubblesSharp className='navIcons'  style={navicon}/>
    </NavLink>
    
    </div>
    
  )
}

export default NavBar