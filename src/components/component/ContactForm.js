import React, { useState } from 'react';


const ContactForm = () => {
    return ( 
        <div className='ContactForm'>
            <form >
                <h4>Contact Me Here</h4 >
                <div className='forminput' >
                    <label>Name</label>
                    <input type='text' name='name' id='name'/>
                </div>
                <div className='forminput' >
                    <label>phone</label>
                    <input type='tel' name='tel' id='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'/>
                </div>
                <div className='forminput' >
                    <label>Email</label>
                    <input type='email' name='email' id='email'/>
                </div>
                <div className=' textarea' >
                    <label>Message</label>
                    <textarea name='message'id='message'/>
                </div>
                <input className='submit' type='submit' name='submit' value="SEND"/>
            </form>
        </div>
     );
}
 
export default ContactForm;