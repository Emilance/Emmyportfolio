const NavLinks = (props) => {
    return(
        <ul>
        <li  onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a  href='#home'>HOME</a></li>
     <li  onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href='#about'>ABOUT</a></li>
        <li>
            <a href='#services'>SERVICES</a></li>
    <li  onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href='#portfolio'>PORTFOLIO</a></li>
    <li  onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href='#contact'>CONTACT</a></li>
     </ul>
    )
}

export  default NavLinks