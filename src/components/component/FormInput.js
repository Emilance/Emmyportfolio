import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


class FormInput extends Component {
    componentDidMount(){
        Aos.init({ duration: 1000})

    }
    render() { 
        return (
            <>
            
             { this.props.element ==='input' ?
            <div  data-aos="fade-up" className='forminput' >
                <label>{this.props.label}</label>
                 <input
                type={this.props.type} 
                 name={this.props.name} 
                 id={this.props.name}
                 value={this.props.value}
                 onChange= {e => this.props.onChange(e)}
                 />
                </div>
                :
            <div data-aos="fade-up" className= 'textarea' >
              <label>{this.props.label}</label>
               <textarea 
                 name={this.props.name} 
                id={this.props.name}
                value={this.props.value}
                onChange= {e => this.props.onChange(e)}
            />
        </div>
             }  
            </>
        );
    }
}
 
export default FormInput;