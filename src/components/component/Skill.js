import React from 'react';

const Skill = (props) => {
    return (<>
        <div className='progress'>
            <label>{props.label}</label>
            <progress className={props.class} max={props.max} value={props.value}></progress>
        </div>
    </>
    );}
export default Skill
