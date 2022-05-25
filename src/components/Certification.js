import React from 'react';
import { CertificateList } from './component/CertificateList';
import './Certifications.css'


const Certification = ({ setCert }) => {


const nextCert = () => {
    let certContainer =document.querySelector('.certContainer');

    certContainer.scrollLeft +=200;
}
const prevCert = () =>{
    let certContainer =document.querySelector('.certContainer');

 certContainer.scrollLeft -=200;
}
  
    return ( 
        <div className='certParent'>
        
        
        <div className='certContainer'>
              <div onMouseDown={nextCert} className='nextButton'>
                  <h1>{">"}</h1>
              </div>
              <div onMouseDown={prevCert} className='prevButton'>
                  <h1>{"<"} </h1>
              </div>


            {CertificateList.map((cert, index) => {
                return(
                    <div className='sCertContainer' key={index}>
                    <img  src={process.env.PUBLIC_URL +  cert.image}  key={index}/>
    
                  </div>
                )
            })}
        </div>
     
            <button onClick={() => setCert(false)} className='btn'>CLOSE</button>
        </div>)
}
 
export default Certification;