import React from 'react'
import './servces.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Servces = () => {
  return (
    <section id='servces'>
       <h5>What Skills I Offer </h5>
    <h2>  Services</h2>
    <div className='container services_container'>
      {/* ui/ux */}
          <article className='service'>
            <div className='service-head'>
              <h3>Ui/Ux</h3>
            </div>
              <ul className='service-list'>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 
              </ul>


                </article>
                {/* end ui/ux */}


                   {/* WEB DEVELOPMENT */}
          <article className='service'>
            <div className='service-head'>
              <h3>Web Development </h3>
            </div>
              <ul className='service-list'>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 
              </ul>


                </article>
                {/*  END WEB DEVELOPMENT*/}



                   {/* CONTENT CREATION */}
          <article className='service'>
            <div className='service-head'>
              <h3>Content Creation </h3>
            </div>
              <ul className='service-list'>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 <li> 
                  <AiOutlineCheck className='service-icon'/> 
                  <p>lorem has hsag igd fsffs fsf.</p>
                 </li>
                 
              </ul>


                </article>
                {/*  END CONTENT CREATION */}
           </div>
     

    </section>
  )
}

export default Servces
