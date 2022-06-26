import React, { useEffect, useState } from 'react';
import Info from '../component/Info';
import {AiOutlineFire} from 'react-icons/ai'
import Certification from '../Certification';
import resume from '../image/Eminence Resume.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css'
import reactSvg  from  '../image/react.svg'
import SkillDisplay from '../component/SkillDisplay';


const About = () => {
 const [cert, setCert]  = useState(false);
          
    useEffect(() => {
        Aos.init({ duration: 2000})
    })


   


   const toggleCert = () =>{
     if(cert=== true){
         setCert(false)
     }else{

         setCert(true)
     }
   }
    return ( 
        <div id='about' className='aboutContainer'>
            <h1 className='sectiontitle'>About</h1>
            <p className='aboutme'>I am Damilola Alabi, a prolific React front end developer with vast curiousity and passion for bridging the gap between
             graphical designs and its technical implementation, I have experience in translating UI/UX designs, wireframes into actual code using web markups, like CSS , HTML, JavaScript, frameworks and libraries like react JS, next JS, bootstrap and also with a proficient understanding of Typescript and client-side scripting</p>         
            <div className='skillAndInfo'>
                  <div className='info' >
                     <img src={reactSvg} className="reactsvg" alt="React svg"/>

                  </div>
                  <div v data-aos="fade-up"
                       data-aos-anchor-placement="center-bottom" 
                     className='skill'>
                    <h3>Skills     <AiOutlineFire className='aicon' size='25px'/>
</h3>
                    <SkillDisplay/>
                  </div>
            </div>
            {cert === true && <Certification   setCert={setCert}/>}
            <div   data-aos="fade-up"
                 data-aos-anchor-placement="center-bottom"
                className='about-btn-container'>
           <a> <button onClick={toggleCert} className='btn'>Certification</button></a>
            <a href={resume} download className='Abutton'> <button className='btn'>Resume</button></a>
            <a href='#portfolio' className='Abutton'>  <button className='btn'>Portfolio</button></a>
            </div>
        </div>
     );
}
 
export default About;