import React from 'react';
import { CertificateList } from './component/CertificateList';
import './Certifications.css'


const Certification = ({ setCert }) => {

let certContainer =document.querySelector('.certContainer');

const nextCert = () => {
    certContainer.scrollLeft +=100
}
const prevCert = () =>{

 certContainer.scrollLeft -=100
}
  
    return ( 
        <div className='certParent'>
        
        
        <div className='certContainer'>
              <div onClick={nextCert} className='nextButton'>
                  <h1>{">"}</h1>
              </div>
              <div onClick={prevCert} className='prevButton'>
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