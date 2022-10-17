import React from 'react'
import img from '../images/fd.png'

import twitter from "../images/Twitter Icon.png"
import github from "../images/GitHub Icon.png"
import instagram from "../images/Instagram Icon.png"


export default function Home() {
  return (
    <div className='main-div' id="home">
        <div className='hero-div '>
            <div className='hero-h1-p'>
                <p className='hero-p'>Hi! <span>I am</span></p>
                <p className='hero-name'>Lawal Basit</p>
                <h1>Fullstack <span className='developer'>Developer</span></h1>
                <p className='hero-description'>with some experience in web design and development</p>
                <a href="https://drive.google.com/file/d/1b_okpUUsA6dwB0FtjRVZqJ3HHkSHpBzF/view" target="_blank" rel="noreferrer"  className='hero-btn'>Hire me</a>

                <div className="main foot">
         
          <a href="https://github.com/Leadola1" className="footy" target="-blank"><img className='im' src={github} alt="my alternate"/></a>
          <a href="https://www.instagram.com/leadola/" className="footy" target="-blank"><img className='im' src={instagram} alt="my alternate"/></a>
         <a href="https://twitter.com/Basitlawal7" className="footy" target="-blank"> <img className='im' id="last" src={twitter} alt="my alternate"/></a>
          
        </div>

            </div>
            <img className="hero-img" src={img} alt="main" />
        </div>

    </div>
  )
}
