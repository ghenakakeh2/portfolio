import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  const data=[
    {
      id:1,
      image:IMG1,
      title:"",
      github:"https://github.com",
      demo:""
    },
    {
      id:2,
      image:IMG2,
      title:"",
      github:"https://github.com",
      demo:""
    },
    {
      id:3,
      image:IMG3,
      title:"",
      github:"https://github.com",
      demo:""
    },
    {
      id:4,
      image:IMG4,
      title:"",
      github:"https://github.com",
      demo:""
    },
    {
      id:5,
      image:IMG5,
      title:"",
      github:"https://github.com",
      demo:""
    },
    {
      id:6,
      image:IMG6,
      title:"",
      github:"https://github.com",
      demo:""
    },
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
      {data.map(({id,image,title,github,demo}) => {
        return(
          <article className='portfolio_item' key={id}>
          <div className="portfolio_item_image">
           <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className='portfolio-item-cta'>
         <a href={github}className='btn '>GitHub</a>
          <a href={demo}className='btn btn-primary '  target='_blank'>Live Demo</a>
         </div>


        </article>
        )
      }
      )}

    



       




    




     



       
      </div>
    </section>
  )
}

export default Portfolio
