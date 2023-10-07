import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y50sdeh', 'template_6lf67us', form.current, 'hJ3ev8HFBxLbMtw2Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container container-contact">
      <div className="contact-options">
        <article className='contact-option'>
          <AiOutlineMail className='contact-option-icon' />
          <h4>Email</h4>
          <h5>ghenakakeh@gmail.com</h5>
          <a href='mailto:ghenakakeh@gmail.com'>Send a Message</a>
        </article>

        <article className='contact-option'>
          <RiMessengerLine className='contact-option-icon'  />
          <h4>Messenger</h4>
          <h5>Ghena Ka</h5>
          <a href='https://m.me/' target='_blanck'>Send a Message</a>
        </article>


        <article className='contact-option'>
          <AiOutlineWhatsApp className='contact-option-icon'  />
          <h4>WhatsApp</h4>
          <h5>+963 ....</h5>
          <a href='https://api.whatsapp.com/send?phone=+963'>Send a Message</a>
        </article>
      </div>
      {/* end of contact option */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Your Full Name ' required/>
        <input type="email" name="user_email" placeholder='Your Email' required/>
        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary' value="Send" >Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact
