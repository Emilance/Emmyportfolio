import React, { useState } from 'react';

import NavLinks from './NavLinks'
import {GrMenu} from 'react-icons/gr'
import {ImCross} from 'react-icons/im'


const MobileNavigation = () => {
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
 const closeMobileMenu = () => setOpen(false)
    return ( 
        <nav className="MobileNavigation">
           {open ? CloseMenu : OpenMenu }
           { open && <NavLinks  isMobile={true}  closeMobileMenu={closeMobileMenu}/>}

        </nav>
     );
}
 
export default MobileNavigation;