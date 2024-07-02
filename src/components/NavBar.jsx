import React, { createContext, useEffect, useRef } from 'react'
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







function NavBar() {

  let dispatchIconBg = useDispatch()
  let {background,fill,bodyBg,iconHoverBg,iconLeaveBg} = useSelector(state=>state.iconBg)

  let navicon = {fill:"white",fontSize:"1.2rem",background:"#2B2A2A",borderRadius:"100%",padding:"1.1rem",cursor:"pointer",transition:"all ease-in-out 1.4s"}
  let sunicon = {fill:"white",fontSize:"1.2rem",background:"#4B4B4B",borderRadius:"100%",padding:"1.1rem",cursor:"pointer"}
  let moonicon = {fill:"black",fontSize:"1.2rem",background:"#EEEEEE",borderRadius:"100%",padding:"1.1rem",cursor:"pointer"}

  // console.log(iconHoverBg,iconLeaveBg)

  let iconhover= ({target})=>target.style.background=iconHoverBg
  let iconleave= ({target})=>target.style.background=iconLeaveBg
  let sunHover = ({target})=>target.style.background="#646464"
  let sunLeave = ({target})=>target.style.background="#4B4B4B"

  let body = document.body
  body.style.background=bodyBg
  navicon.background=background;
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
    sunRef.current.style.visibility="hidden"
    moonRef.current.style.display="flex";
    toggleBgWhite()
  }


  let switchToLight = ()=>{
    moonRef.current.style.display="none";
    sunRef.current.style.visibility="visible"
    toggleBgBlack()
  }

    

  return (

    <div id='navId'>

    <div id="sun" onClick={switchToDark} ref={sunRef}>
    <WbSunnyIcon style={sunicon} onMouseOver={sunHover} onMouseOut={sunLeave}/>
    </div>

    <div id="moon" ref={moonRef} onClick={switchToLight}>
    <IoMoonOutline style={moonicon}/>
    </div>

    

    <NavLink to="/">
    <FaHome style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    </NavLink>

    <NavLink to={"/about"}>
    <IoPersonSharp style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    </NavLink>


    <NavLink to={"/portfolio"}>
    <MdWork style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    </NavLink>

    <NavLink to={"/contact"}>
    <RiMailOpenFill style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    </NavLink>

    <NavLink to={"/blog"}>
    <IoChatbubblesSharp style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    </NavLink>
    
    </div>
    
  )
}

export default NavBar