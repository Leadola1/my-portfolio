import React from 'react'

export default function Nav() {
  return (
    <div className='main-div '>
    <nav>
     <p className='nav-p'>LEADX</p>
     <ul className="nav-ul">
       <li className='nav-li'><a className="a" href="#home" >Home</a></li> 
       <li className='nav-li'><a className="a" href="#about" >About</a></li>
       <li className='nav-li'><a className="a" href="#resume" >Resume</a></li>
       <li className='nav-li'><a className="a" href="#contact">Contact</a></li>
     </ul>
    </nav>
 </div>
  )
}
