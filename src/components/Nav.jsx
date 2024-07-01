import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiMailOpenFill } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";




function Nav({navicon}) {

  return (
    <div>
    <FaHome style={navicon}/>
    <IoPersonSharp style={navicon}/>
    <MdWork style={navicon}/>
    <RiMailOpenFill style={navicon}/>
    <IoChatbubblesSharp style={navicon}/>
    </div>
  )
}

export default Nav