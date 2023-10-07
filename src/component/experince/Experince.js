import React from 'react'
import './experince.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experince = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have </h5>
    <h2> My Experience</h2>
    <div className='container experience_container'>
          <div className='basic_skills'>
              <h3>Basic Skills</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_icon' />
                 <div>
                 <h4>Html</h4>
                  <small > Experienced</small>
                 </div>

                </article>


                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_icon'/>
                  <div>
                  <h4>css</h4>
                  <small > Experienced</small>
                    </div>

                </article>



                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small > Intermediate</small>
                  </div>

                </article>



                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_icon'/>
              <div>
              <h4>Bootstrap</h4>
                  <small > Experienced</small>
              </div>

                </article>


                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_icon'/>
                <div>
                <h4>React</h4>
                  <small > Experienced</small>
                </div>

                </article>



              </div>
          </div>



          <div className='extra-skills'>
              <h3>Extra Skills</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_icon'/>
                  <div>
                  <h4>Sass</h4>
                  <small > Experienced</small>
                  </div>

                </article>


                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_icon'/>
                <div>
                <h4>Git && GitHub</h4>
                  <small > Intermediate</small>
                </div>

                </article>



                


          

              </div>
          </div>

    </div>
    </section>
  )
}

export default Experince
