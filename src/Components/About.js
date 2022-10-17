import React from 'react'

export default function About() {
  return (
    <div id="about">
        <div className='main-div about-div'>
        <div className='about-first-flex'>
            <h2 className='about-h2'>My awesome <span className='about-span'>services</span></h2>
            <button className='download-btn' download><a href="https://drive.google.com/file/d/1b_okpUUsA6dwB0FtjRVZqJ3HHkSHpBzF/view?usp=sharing" target="_blank" rel="noreferrer"className='about-a' >Download CV</a></button>
            <p></p>
        </div>
        <div className='about-card'>
            <div className='card'>
            <p className='about-smiley'> &#128526;</p>
            <h4 className='about-h4'>Developer</h4>
            <p>HTML, CSS, Javascript, React, Git, Nodejs</p>
            </div>
        </div>
        </div>
    </div>
  )
}
