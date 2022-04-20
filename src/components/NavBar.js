import React, { useState } from 'react';
import './NavBar.css'
import MobileNavigation from './Navigation/MobileNavigation';
import Navigation from './Navigation/Navigation';

function NavBar() {
    return ( <div className='NavBarContainer'>
                 <h1 className='logo'>EMI<span>LANCE</span></h1>
                 <div className='navContainer'>
                   <Navigation/>
                   <MobileNavigation/>
                 </div>
                 <button>HIRE</button>
            
    </div> );
}

export default NavBar;