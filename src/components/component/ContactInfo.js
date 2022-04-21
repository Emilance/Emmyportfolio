import React, { Component } from 'react';
import {BsFacebook,BsPhone, BsWhatsapp, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'
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
                <a href='fb.com'>
                    <BsWhatsapp className='icon whatsapp' size='25px'/>
                </a>
                <a href='fb.com'>
                    <BsInstagram className='icon instagram' size='25px'/>
                </a>
                <a href='fb.com'>
                    <BsTwitter className='icon twitter' size='25px'/>
                </a>
                <a href='fb.com'>
                    <BsFacebook className='icon facebook' size='25px'/>
                </a>
                    
                </div>
                
                      <button className='contactButton'>
                          <a href='fiverr.com'>
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
