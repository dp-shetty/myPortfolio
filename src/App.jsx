import React from 'react'
import Nav from './components/Nav'


function App() {

  
  return (
    <>
      <Nav navicon={{fill:"white",fontSize:"1.2rem",background:"#2B2A2A",borderRadius:"100%",padding:"0.8rem",cursor:"pointer"}}  iconhover={({target})=>target.style.background="yellow"} iconleave={({target})=>target.style.background="#2B2A2A"}/>
    </>
  )
}

export default App