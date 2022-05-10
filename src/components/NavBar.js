import React, { useState } from 'react';
import {BsFacebook,BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'


import './NavBar.css'
import MobileNavigation from './Navigation/MobileNavigation';
import Navigation from './Navigation/Navigation';

function NavBar() {
    return ( <div className='NavBarContainer'>
                 <h1 className='logo'>EMI<span>LANCE</span></h1>
                 <div className='HsocialIcon'>
                 <a  target="_blank" href='https://github.com/emilance'>
                      <BsGithub className='Hicon' size='20px'/>
                 </a>
                <a target='_blank' href='https://twitter.com/AlabiDamilolaD3'>
                    <BsTwitter className='Hicon ' size='20px'/>
                </a>
                <a target='_blank'  href='https://web.facebook.com/damiloladaniel.alabi'>
                    <BsFacebook className='Hicon ' size='20px'/>
                </a>
                <a target='_blank'  href='https://www.linkedin.com/in/damilola-daniel-alabi-120036218/'>
                    <BsLinkedin className='Hicon ' size='20px'/>
                </a>
                
                    
             </div>
                 <div className='navContainer'>
                   <Navigation/>
                   <MobileNavigation/>
                 </div>
                 <button><a href='#portfolio'>PROJECTS</a></button>
            
    </div> );
}

export default NavBar;