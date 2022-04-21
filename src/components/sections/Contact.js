import React from 'react';
import ContactForm from '../component/ContactForm';
import ContactInfo from '../component/ContactInfo';

const Contact = () => {
    return ( 
        <div className='contactcontainer'>
               <h1 className='sectiontitle'>Contact</h1>
               <div className='contactBook'>
                   <ContactInfo
                     email = 'Emmyfedev@gmail.com'
                     phone = '08122077565'
                     whatsapp ='08140711202'
                     website= 'Emmyfedev.com'
                   />
                   <ContactForm/>
               </div>

        </div>
     );
}
 
export default Contact;