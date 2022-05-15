import React, { useEffect, useState} from 'react';
import Portfolio from './Portfolio';
import {Portfoliodata} from '../component/Portfoliodata';
import FrontendPort from './FrontendPort';
import { FrontendWEbdata} from '../component/FontendWebdata';
import FigmaPort from './FigmaPort';
import {FaWordpressSimple, FaReact, FaFigma} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css'


const PortSpace = () => {
    const [Display, setDisplay] = useState("front")


    useEffect(() => {
        Aos.init({ duration: 1000})
    })

    const  DisplayWebDesignPort = () =>{
        setDisplay("web")
    }

    const  DisplayFrontEndPort = () =>{
        setDisplay("front")
    }
    const  DisplayFigmaPort = () =>{
        setDisplay("figma")
    }

    return ( 
        <div className='portspace'>
           <h1  className='sectiontitle port'>Portfolio</h1>

            <div className='port-btn-container'>
        <button  data-aos="fade-right" className={Display == "web" ? 'btn1active': 'btn1'} onClick={DisplayWebDesignPort}>WEB DESIGN<FaWordpressSimple className='portbtnicon' size='25px'/></button>
        <button className={Display == "front" ? 'btn1active': 'btn1'} onClick={DisplayFrontEndPort}>FRONT END DEV<FaReact className='portbtnicon' size='25px'/></button>
        <button  data-aos="fade-left" className={Display == "figma" ? 'btn1active': 'btn1'} onClick={DisplayFigmaPort}>FIGMA DESIGN<FaFigma className='portbtnicon' size='25px'/></button>

            </div>
         {Display == "web" && <Portfolio  slides={Portfoliodata}/>}
         {Display == "front" && <FrontendPort slides={FrontendWEbdata}/>}
         {Display == "figma" && <FigmaPort/>}

        </div>
     );
}
 
export default PortSpace;