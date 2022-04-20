import React from 'react'
import SingleService from '../component/SingleService';
import serviceimg1 from '../image/domenico-loia-hGV2TfOh0ns-unsplash.jpg';
import serviceimg2 from '../image/fabian-irsara-67l-QujB14w-unsplash.jpg';
import serviceimg3 from '../image/igor-miske-Px3iBXV-4TU-unsplash.jpg';




const Services = () => {
const services = [
    { title: 'FRONT END DEVELOPER', image:serviceimg1, 
    subtitle:'As a developer who is motivated  to combine  the art of design with art of programming, I will  translate your  UI/UX design wireframes to actual code that will produce visual elements of your aplication or website',
     buttonText: "CONTACT NOW", icon: ""},
     { title: 'CMS WEB DESIGN', image:serviceimg2, 
     subtitle:'I will help you design  a responsive,  user friendly, easily navigable, attractive and a professional website for your brand on  CMS platform like Wordpress, Squarespace, Webflow, Shopify, wix and other great platform that will make you stand out among the competitors  ' ,
      buttonText: "CONTACT NOW", icon: ""},
      { title: 'FIGMA UI/UX DESIGN', image: serviceimg3 , 
      subtitle:'Having gleaned vast knowlegde in  information architecture, wireframing and prototyping, I will implement my creativity and proficiency in designing  aethetic elements of your website using tools like figma, adobe XD, Photoshop e.t.c',
       buttonText: "CONTACT NOW", icon: ""}

]

    return (  
        <div id='services' className='serviceContainer'>
            <h1  className='sectiontitle'>Services</h1>
         <div className='allservicecontainer'>
         {services.map((service, index) => {
             return <SingleService {...service} key={index}/>
        })}
            </div>
        </div>
     );
}
 
export default Services;