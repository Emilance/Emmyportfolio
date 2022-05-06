import React, { useState} from 'react';
import Portfolio from './Portfolio';
import {Portfoliodata} from '../component/Portfoliodata';
import FrontendPort from './FrontendPort';
import { FrontendWEbdata} from '../component/FontendWebdata';
import FigmaPort from './FigmaPort';
import {FaWordpressSimple, FaReact, FaFigma} from 'react-icons/fa';


const PortSpace = () => {
    const [Display, setDisplay] = useState("front")

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
        <button className={Display == "web" ? 'btn1active': 'btn1'} onClick={DisplayWebDesignPort}>WEB DESIGN<FaWordpressSimple className='portbtnicon' size='25px'/></button>
        <button className={Display == "front" ? 'btn1active': 'btn1'} onClick={DisplayFrontEndPort}>FRONT END DEV<FaReact className='portbtnicon' size='25px'/></button>
        <button className={Display == "figma" ? 'btn1active': 'btn1'} onClick={DisplayFigmaPort}>FIGMA DESIGN<FaFigma className='portbtnicon' size='25px'/></button>

            </div>
         {Display == "web" && <Portfolio  slides={Portfoliodata}/>}
         {Display == "front" && <FrontendPort slides={FrontendWEbdata}/>}
         {Display == "figma" && <FigmaPort/>}

        </div>
     );
}
 
export default PortSpace;