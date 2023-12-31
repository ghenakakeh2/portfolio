import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'





const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer_logo'>Ghena </a>
    
     
     
       
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experince">Experince</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>


        </ul>
      
     <div className="footer_socials">
      <a href="https://facebook.com"> <FaFacebook/></a>
      <a href="https://instagram.com"> <FiInstagram/></a>
      <a href="https://twitter.com"> <FaTwitter /></a>

     </div>
     <div className="footer_copyright">
        <small>
          &copy;Ghena Tutoriles . All rights reserved  
        </small>
     </div>
    
  
</footer>
  )
}

export default Footer
