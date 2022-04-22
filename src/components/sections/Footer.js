import React from 'react';
import {BsFacebook,BsLinkedin, BsPhone, BsWhatsapp, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'


const Footer = () => {
    return ( 
        <div className='footer'>
             <div className='footertop'></div>


            <div className='footerbottom'>


               <h3><a href='#'>Github Account <BsGithub className='Licon github' size='15px'/></a></h3>
             <div className='LsocialIcon'>
                <a href='08140711202'>
                    <BsWhatsapp className='Licon whatsapp' size='20px'/>
                </a>
                <a href='https://www.instagram.com/eminence.x/'>
                    <BsInstagram className='Licon instagram' size='20px'/>
                </a>
                <a href='https://twitter.com/AlabiDamilolaD3'>
                    <BsTwitter className='Licon twitter' size='20px'/>
                </a>
                <a href='https://web.facebook.com/damiloladaniel.alabi'>
                    <BsFacebook className='Licon facebook' size='20px'/>
                </a>
                <a href='https://www.linkedin.com/in/damilola-daniel-alabi-120036218/'>
                    <BsLinkedin className='Licon twitter' size='20px'/>
                </a>
                
                    
             </div>
                <p>Webs<span>ite</span> fully <span>desi</span>gned <span>by</span> EMI<span>LANCE</span></p>
             </div>
        </div>
     );
}
 
export default Footer;
