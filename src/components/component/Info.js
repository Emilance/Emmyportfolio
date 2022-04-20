import React  from 'react';
import {MdCastForEducation, MdAttachEmail} from 'react-icons/md'
import {AiTwotonePhone} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'



const Info = (props) => {
    return ( 
        <>
        <p>Name :  <span>{props.name}</span></p>
        
        <p>
            <MdCastForEducation className='aicon' size='25px'/>
               Education :  <span>{props.education}</span></p>
        <p> <MdAttachEmail className='aicon' size='25px'/>
            Email :  <span>{props.email}</span></p>
        <p>  <AiTwotonePhone className='aicon' size='25px'/>
            Phone:  <span>{props.Phone}</span></p>
        <p> <ImLocation className='aicon' size='25px'/>
            Location :  <span>{props.location}</span></p>

        </>
     );
}
 
export default Info;