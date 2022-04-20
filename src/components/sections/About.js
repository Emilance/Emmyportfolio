import React from 'react';
import Info from '../component/Info';
import Skill from '../component/Skill';
import {AiOutlineFire} from 'react-icons/ai'

const About = () => {
   const Skills = [
       {label : 'HTML', max : '100',  value : '90' , class:'html'},
       {label : 'CSS', max : '100',  value : '90' , class:'css'},
       {label : 'JAVASCRIPT', max : '100',  value : '79' , class:'javascript'},
       {label : 'JQUERY', max : '100',  value : '69' , class:'jquery'},
       {label : 'REACT', max : '100',  value : '70' , class:'react'},
       {label : 'PHP', max : '100',  value : '60' , class:'php'}

   ]

    return ( 
        <div id='about' className='aboutContainer'>
            <h1 className='sectiontitle'>About</h1>
            <p className='aboutme'>Emilance is a prolific front end developer 
            with vast knowledge in bilding a responsive, user friendly easily navigable and a professonal website, having 
            completed several courses on Responsive web desgning web development, computer science and some technological tools like HTML, CSS , 
            Javascript, React, PHP and Jquery he has been able to complete diverse project that divulge his proficiency in front end  web  development</p>
            <div className='skillAndInfo' >
                <div className='info'>
                     <Info
                       name= "Alabi Daniel"
                       education= "Undergraduate "
                        email= "Emmyfedev@gmail.com"
                        Phone = "08140711202"
                        location= "Ile-ife, Osun state, Nigeria"
                     />
                </div>
                <div className='skill'>
                    <h3>Skills     <AiOutlineFire className='aicon' size='25px'/>
</h3>
                    {Skills.map((skill, index) => {
                        return (
                            <Skill {...skill}  key={index} />
                    )
                         } ) }
                </div>
            </div>
            <div className='about-btn-container'>
            <button className='btn'><a href='#'>Certification</a></button>
            <button className='btn'><a href='#'>Resume</a></button>
            <button className='btn'><a href='#'>Portfolio</a></button>
            </div>
        </div>
     );
}
 
export default About;