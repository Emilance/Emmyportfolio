import React, { useEffect }  from 'react';
import {MdCastForEducation, MdAttachEmail} from 'react-icons/md'
import {AiTwotonePhone} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import Aos from 'aos';
import 'aos/dist/aos.css'



const Info = (props) => {
   
    useEffect(() => {
        Aos.init({ duration: 1000})
    })

    return ( 
        <>
        <p   data-aos="fade-up">Name:  <span>{props.name}</span></p>
        
        <p  data-aos="fade-up">
            <MdCastForEducation className='aicon' size='25px'/>
               Education:  <span>{props.education}</span></p>
        <p   data-aos="fade-up"> <MdAttachEmail className='aicon' size='25px'/>
            Email:  <span>{props.email}</span></p>
        <p   data-aos="fade-up">  <AiTwotonePhone className='aicon' size='25px'/>
            Phone:  <span>{props.Phone}</span></p>
        <p   data-aos="fade-up"> <ImLocation className='aicon' size='25px'/>
            Location:  <span>{props.location}</span></p>

        </>
     );
}
 
export default Info;