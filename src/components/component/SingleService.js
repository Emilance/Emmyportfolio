import React, { Component, useEffect } from 'react';
import {IoMdPerson} from 'react-icons/io'
import Aos from 'aos';
import 'aos/dist/aos.css'


const SingleService = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000})
    })

    return (  
        <div data-aos="fade-right" className='sServiceContainer'>
            <div className='serviceDisplayArea'>
                  <img className='serviceimg' src = {props.image} alt="service image"/>
            </div>
            <div className='aboutService'>
                  <h5 className='sServiceTitle'>{props.title}</h5>
                  <p className='sServiceSubtitle'>{props.subtitle}</p>
                <button className='sbtn'><a href='#contact'>{props.buttonText}<IoMdPerson size='20px' className='sServiceIcon'/></a></button>
            </div>
        </div>
     );
}
 
export default SingleService;