import React from 'react'
import'./about.css'
import me_img from '../../assets/undraw_my_code_snippets_re_4adu.svg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me </h2>
      <div className='container about_container'>


          <div className='about_me'>
            <div className='about_me_img'>
               <img  src={me_img} alt='About Image'/>
            </div>

          </div>

          <div className='about_content'>
                <div className='about_cards'>

                       <article className='about_card'>
                        <FaAward  className='about_icon'/>
                         <h5>Eperince</h5>
                         <small>+3 Years Working</small>
                       </article>


                       <article className='about_card'>
                        <FiUsers  className='about_icon'/>
                         <h5>Client</h5>
                         <small>200+ WoridWide</small>
                       </article>


                       <article className='about_card'>
                        <VscFolderOpened  className='about_icon'/>
                         <h5>Projects</h5>
                         <small>50+ Completed</small>
                       </article>
                </div>


                <p>
                  this is a test and lorem text just 
                </p>
                <a href='#contact' className='btn btn btn-primary'>
                  Let's Talk
                </a>
          </div>



      </div>
    </section>
  )
}

export default About
