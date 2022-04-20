import React, { useState, useEffect } from 'react';
import './page.css'
import image from '../image/alesia-kazantceva-VWcPlbHglYc-unsplash.jpg';
import emmyImage from '../image/re51.png'


const headerSubtitle = 'Proficient Frontend developer, Web designer, Digital marketer';
const Header = () => {
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
        <div className='Emilanceimage'>
            <img className='emmyimg' src= {emmyImage} alt ="image"/>
        </div>

    </div>
     );
}
 
export default Header;