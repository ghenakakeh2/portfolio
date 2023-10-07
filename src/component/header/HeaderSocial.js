import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'



const HeaderSocial = () => {
  return (
    <div className='header-socials'>
      <a href='https://Linkedin.com' target='_blank'><BsLinkedin/></a>
      <a href='https://Github.com' target='_blank'><FaGithub/></a>
      <a href='https://dribbble.com' target='_blank'><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocial
