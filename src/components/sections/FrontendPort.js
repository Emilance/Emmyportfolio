import React, { useState } from 'react';
import {AiOutlineArrowRight,  AiOutlineArrowLeft } from 'react-icons/ai'
import { FrontendWEbdata } from '../component/FontendWebdata';


const Portfolio = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length;
 


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
        <div id='portfolio' className='portfolioContainer' >
           <AiOutlineArrowLeft className='leftarrow' size='35px'  onClick={prevslide} />
           <AiOutlineArrowRight className='rightarrow' size='35px' onClick={nextslide}  />

         {FrontendWEbdata.map((data, index) => {
          return(
            <div key={index} className={current === index ? 'slider active': 'slider slide'}>
                    <img  src={process.env.PUBLIC_URL + data.image}  key={index}/>

                  <div className='aboutport'>
                        <h3>{data.title}</h3>
                        <p>{data.subtitle}</p>
                      <div className='portUButtonContainer'>
                         <a href={data.sourceCode}  target="_blank">SOURCE CODE</a  >
                         <a   key={index} className='livebtn' href={data.live} target="_blank">LIVE </a>
                      </div>
                  </div>
              </div>
      
          )
          
         })}
        </div>

      );
}
 
export default Portfolio;