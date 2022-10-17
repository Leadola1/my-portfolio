import React from 'react'

export default function Contact() {
  return (
    <div className='contact-div' id="contact">
        <h2 className='bla'>CONTACT ME</h2>
        <p className='bla'>send a mail to me and i will respond within 24hours</p>
        <form action="">
            <div>
            <label htmlFor="name">name</label>
            <br/>
            <input type="text" placeholder='enter you name' id="name"/>
            </div>
            <div>
            <label htmlFor="email">email</label>
            <br/>
            <input type="email" name="email" id="email" placeholder='enter your email'/>
            </div>
            <div>
            <label htmlFor="message">message</label>
            <br/>
            <textarea name="comment" form="usrform" placeholder='enter your message'></textarea>            </div>
            <button className='contact-btn' type="submit">submit</button>
        </form>
    </div>
  )
}
