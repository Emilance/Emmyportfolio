import React, { useRef } from 'react';
import { CertificateList } from './component/CertificateList';
import './Certifications.css'



const Certification = ({ setCert }) => {
    const  certCon = useRef(null)



const nextCert = () => {

    certCon.current.scrollLeft +=200;
}
const prevCert = () =>{
 certCon.current.scrollLeft -=200;
}
  
    return ( 
        <div className='certParent'>
        
        
        <div ref={certCon} className='certContainer'>
              <div   onMouseDown={nextCert} className='nextButton'>
                  <h1>{">"}</h1>
              </div>
              <div  onMouseDown={prevCert} className='prevButton'>
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