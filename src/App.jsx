import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Blog from './components/Blog'
import NavBar from './components/NavBar'
import "./SCSS/App.scss"
import CursorAnimate from './components/CursorAnimate'


function App() {



  
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App