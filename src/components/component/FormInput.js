import React, { Component } from 'react';

class FormInput extends Component {
    
    render() { 
        return (
            <>
            
             { this.props.element ==='input' ?
            <div className='forminput' >
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
            <div className= 'textarea' >
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