import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact () {

  
  return (
    <div className='contact-container'>
      <h2 className='standard-text-header'>CONTACT</h2>
      <p className='contact-blurb'>Need a website? Let's help the world discover the real you...</p>
      <form className='contact-form'>
        <input type='text' name='name' placeholder='Your name' className='form-field'></input>
        <input type='email' name='email' placeholder='Your email' className='form-field'></input>
        <textarea type='textarea' name='message' placeholder='Your message' className='form-field' rows={5}></textarea>
        <input type="submit" className='contact-submit' />
      </form>
    </div>
  )
}