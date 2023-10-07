import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import me from '../../assets/undraw_dev_focus_re_6iwt.svg'
import './header.css'

const Header = () => {
  return (
    <header>
       <div className='container header_container'>
        <h5>Hello I 'm</h5>
        <h1>Ghena Kakeh</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA />


        <div className='me'>
          <img src={me} alt='me'/>
        </div>

        <a href='#contact' className='Scroll-down'>Scroll Down</a>
        <HeaderSocial />
       </div>
    </header>
  )
}

export default Header
