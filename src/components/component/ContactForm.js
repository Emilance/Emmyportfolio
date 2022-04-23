import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { Fragment, useState } from 'react';
import FormInput from './FormInput';


const initialvalue = [{ name: '', email:'', phone: '',message:'' }]
const ContactForm = () => {
    const [formdata, setFormdata] = useState({initialvalue})


    const formInputs  = [
        [
            {element:'input', type: 'text',  label: 'Name',  name: 'name' },
            {element:'input', type: 'email',  label: 'Email',  name: 'email' },
            {element:'input', type: 'tel',    label:'Phone',  name: 'tel' }
        ],
        [
            {element:'textarea', label:'Message', name:'message'}
        ]
    ]
    return ( 
        <div className='ContactForm'>
            
            <form >
            <h4>Contact Me Here</h4>
                {formInputs.map((element, eindex) => {
                   return(
                       <Fragment key={eindex}>
                         
                          { element.map((v, index) => {
                               console.log(v.name)
                               return(
                                <FormInput {...v} key={index} 
                                 
                                value = {v.name}
                                onChange = {e => {
                                    setFormdata(() =>  e.target.value  )
                                }}
                                />

                               )                                
                          })}
                       </Fragment>
                   )
                })}

                 {/* <h4>Contact Me Here</h4 >
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
                </div> */}
                <input className='submit' type='submit' name='submit' value="SEND"/>
            </form>
        </div>
     );
}
 
export default ContactForm;