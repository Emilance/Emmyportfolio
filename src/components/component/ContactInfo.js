import React, { Component } from 'react';
import {BsFacebook,BsLinkedin, BsPhone, BsWhatsapp, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'
import {SiFiverr, SiUpwork} from 'react-icons/si'
import {MdCastForEducation, MdAttachEmail} from 'react-icons/md'






class ContactInfo extends Component {
  
    render() { 
        const {email, phone, whatsapp, website }  = this.props

        return(
            <div className='ContactInfo'>
                    <p > 
                    <MdAttachEmail className='cicon' size='25px'/>
                        EMAIL: <span>{email}</span>
                    </p>

                    <p > 
                    <BsPhone className='cicon' size='25px'/>
                        PHONE: <span>{phone}</span>
                    </p>
                    <p > 
                    <BsWhatsapp className='cicon' size='25px'/>
                        WHATSAPP: <span>{whatsapp}</span>
                    </p>

                    <p > 
                    <MdCastForEducation className='cicon' size='25px'/>
                        WEBSITE: <span>{website}</span>
                    </p>
                <div className='socialIcon'>
                <a href='08140711202'>
                    <BsWhatsapp className='icon whatsapp' size='25px'/>
                </a>
                <a href='https://www.instagram.com/eminence.x/'>
                    <BsInstagram className='icon instagram' size='25px'/>
                </a>
                <a href='https://twitter.com/AlabiDamilolaD3'>
                    <BsTwitter className='icon twitter' size='25px'/>
                </a>
                <a href='https://web.facebook.com/damiloladaniel.alabi'>
                    <BsFacebook className='icon facebook' size='25px'/>
                </a>
                <a href='https://www.linkedin.com/in/damilola-daniel-alabi-120036218/'>
                    <BsLinkedin className='icon twitter' size='25px'/>
                </a>
                
                    
                </div>
                
                      <button className='contactButton'>
                          <a href='https://www.fiverr.com/emilance?up_rollout=true'>
                              <span>

                              Contact Me on Fiverr
                              </span>
                              <SiFiverr className='Ficon' size='25px'/>

                          </a>
                      </button>
                      <button className='contactButton'>
                          <a href='upwork.com'>
                              <span>

                              Contact Me on Upwork
                              </span>
                              <SiUpwork className='Ficon' size='25px'/>

                          </a>
                      </button>
            
                  
            </div>
        );
    }
}
 
export default ContactInfo;