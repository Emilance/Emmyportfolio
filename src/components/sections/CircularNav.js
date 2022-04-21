import React, { useState } from 'react';
import {GrMenu} from 'react-icons/gr'
import {ImCross} from 'react-icons/im'
import CircularNavLinks from './CircularNavlinks';




const CircularNav = () => {
    const [open, setOpen] = useState(false)
const OpenMenu =  <GrMenu 
                     className='Hamburger' 
                     size='35px'
                     onClick={() => setOpen(!open)}
                  /> 
const  CloseMenu =  <ImCross 
                      className='Hamburger' 
                       size='35px'
                       onClick={() => setOpen(!open)}
                     />


    return ( 
        <div className='cirularNavContainer' >       
            <CircularNavLinks/>
        </div>
     );
}
 
export default CircularNav;





 