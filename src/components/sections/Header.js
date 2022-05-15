import React, { useState, useEffect } from 'react';
import './page.css'
import emmyImage from '../image/Emilance.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const headerSubtitle = 'Proficient  React Js Frontend developer, Web designer';

const Header = () => {
    
    useEffect(() => {
        Aos.init({ duration: 1000})
    })


   const [typingWord, setTypingWord] = useState('')
   useEffect( () => {
      const timeOut = setTimeout(() => {
           setTypingWord(headerSubtitle.slice(0, typingWord.length + 1))
       }, 50)

       return () => clearTimeout(timeOut);
   }, [typingWord])
    return ( 

    <div id='home' className='headerContainer' >
        <div className='titleContainer'>
            <h1 className='title'>I am a</h1>
            <h3 className='subTitle  blinking-cursor'> {typingWord}</h3>
        </div>
        <div  data-aos="fade-left"
               data-aos-anchor="#example-anchor"
                data-aos-offset="500"
             className='Emilanceimage'>
            <img className='emmyimg' src= {emmyImage} alt ="image"/>
        </div>

    </div>
     );
}
 
export default Header;