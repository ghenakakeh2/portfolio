import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "../../../node_modules/swiper/swiper.css";
// import "../../../node_modules/swiper/css/pagination";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  const data=[
    {
       avatar:avatar1,
       name:"ghena kakeh",
       review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas suscipit molestiae aspernatur distinctio debitis reprehenderit atque error sed? Animi tempore recusandae perspiciatis eligendi maiores magni molestiae incidunt obcaecati non!"
    },
    {
      avatar:avatar2,
      name:"ghena kakeh",
      review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas suscipit molestiae aspernatur distinctio debitis reprehenderit atque error sed? Animi tempore recusandae perspiciatis eligendi maiores magni molestiae incidunt obcaecati non!"
   }, 
    {
    avatar:avatar3,
    name:"ghena kakeh",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas suscipit molestiae aspernatur distinctio debitis reprehenderit atque error sed? Animi tempore recusandae perspiciatis eligendi maiores magni molestiae incidunt obcaecati non!"
 }, 
  {
  avatar:avatar4,
  name:"ghena kakeh",
  review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas suscipit molestiae aspernatur distinctio debitis reprehenderit atque error sed? Animi tempore recusandae perspiciatis eligendi maiores magni molestiae incidunt obcaecati non!"
},

  ]
  return (
  
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonalis-container"  modules={[Pagination]} slidesPerView={1} spaceBetween={40} pagination={{ clickable: true }}>
     
     
  
     
      

      {
      data.map(({avatar,name,review},index) => {
        return(
          <SwiperSlide className='testimonial' key={index}>
          <div className="client-avatar">
            <img src= {avatar} alt="" />

          </div>
          <h5 className='client-name'> {name}</h5>
            <small className='client-review'>{review}</small>
        </SwiperSlide>
        )
      }
      )
    }
       

     


       


        

       


      


        
      </Swiper>
    </section>
  )
}

export default Testimonials
