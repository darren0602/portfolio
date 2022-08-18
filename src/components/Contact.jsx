import React from 'react'
import '../css/contact.css'

export default function Contact() {
  return (
    <div name='contact' className='contact'>
        {/* Heading */}
        <div className='contact-heading'>
            <h1>Contact</h1>
            <p>Feel free to contact me</p>
        </div>

        {/* Form */}
        <form method="POST" action='https://getform.io/f/5996d8dc-6c16-465b-aab9-b93e97b5cd5d' className='contact-form'>
            <input className='contact-name' type='text' name='name' placeholder='Full name'></input>
            <input className='contact-email' type='email' name='email' placeholder='Email'></input>
            <textarea className='contact-message' name='message' placeholder='Message' rows='10' cols='53'></textarea>
            <button type='submit' className='contact-send'>Send</button>
        </form>
    </div>
  )
}