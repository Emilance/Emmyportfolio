import React, { useEffect, useState } from 'react';
import {Portfoliodata} from '../component/Portfoliodata';
import {AiOutlineArrowRight,  AiOutlineArrowLeft } from 'react-icons/ai'
import Aos from 'aos';
import 'aos/dist/aos.css'



const Portfolio = ({slides}) => {
  const [current, setCurrent] = useState(2)
  const length = slides.length;
 
  useEffect(() => {
    Aos.init({ duration: 2000})
})

  const nextslide = ()=>{
    setCurrent(current === length -1 ? 0 : current + 1)
  
  }

  const prevslide = ()=>{
    setCurrent(current !== 0 ? current - 1 : length -1)
 
  }

  if((!Array.isArray(slides))  || (slides.length <= 0 )){
    return null;
  }


   
    return (
        <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        id='portfolio' className='portfolioContainer' >
           <AiOutlineArrowLeft className='leftarrow' size='35px'  onClick={prevslide} />
           <AiOutlineArrowRight className='rightarrow' size='35px' onClick={nextslide}  />

         {Portfoliodata.map((data, index) => {
          return(
            <div key={index} className={current === index ? 'slider active': 'slider slide'}>
                    <img  src={process.env.PUBLIC_URL + data.image}  key={index}/>

                  <div className='aboutport'>
                        <h3>{data.title}</h3>
                        <p>{data.subtitle}</p>
                        <div className='portUButtonContainer'>
                       
                         <a className='livebtn' target="_blank" href={data.live} >LIVE </a>
                      </div>
                  </div>
              </div>
      
          )
          
         })}
        </div>

      );
}
 
export default Portfolio;