import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiMailOpenFill } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";




function Nav({navicon,iconhover,iconleave}) {

  return (
    <div>
    <FaHome style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    <IoPersonSharp style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    <MdWork style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    <RiMailOpenFill style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    <IoChatbubblesSharp style={navicon} onMouseOver={iconhover} onMouseOut={iconleave}/>
    </div>
  )
}

export default Nav