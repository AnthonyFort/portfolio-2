import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)

  const sendEmail = (e) => {
    e.persist()
    e.preventDefault()
    setIsSubmitting(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000)
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000)
        }
      )
    e.target.reset()
  }

  return (
    <div className='contact-container'>
      <h2 className='standard-text-header'>CONTACT</h2>
      <p className='contact-blurb'>Need a website? Let's help the world discover the real you...</p>
      <form className='contact-form' onSubmit={sendEmail}>
        <input type='text' name='user_name' placeholder='Your name' className='form-field'></input>
        <input type='email' name='user_email' placeholder='Your email' className='form-field'></input>
        <textarea type='textarea' name='message' placeholder='Your message' className='form-field' rows={5}></textarea>
        <input type="submit" className='contact-submit' />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
      <div className='contact-links-div'>
        <Link className='contact-links' to='https://github.com/AnthonyFort?tab=repositories'><FaGithub /></Link>
        <Link className='contact-links' to='https://www.linkedin.com/in/anthony-fort-8235721b7/'><FaLinkedin /></Link>
      </div>
    </div>
  )
}