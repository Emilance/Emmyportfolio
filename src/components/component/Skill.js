import React from 'react';

const Skill = (props) => {
    return (<>
        <div className='progress'>
            <label>{props.label}</label>
            <div className= {props.parentClass}>
            <div className={props.class}>
           </div>
          </div>
        </div>
    </>
    );}
export default Skill
