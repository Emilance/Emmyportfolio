
import React from 'react';
import { FaReact,FaGitAlt, FaHtml5, FaNodeJs, FaCss3Alt }  from 'react-icons/fa'
import { SiTypescript , SiJavascript, SiExpress , SiMongodb }  from 'react-icons/si'


     
const Skills = [

        {icon: FaReact,  title :"React JS"}
   ]

const SkillDisplay = (props) => {
    
    return (<div className='skillCon'>

        <div className='sSkill'>
            <FaReact className="technology"  size="50"/>     
                  <p>React Js</p>
        </div>
        <div className='sSkill'>
            <FaHtml5 className="technology"  size="50"/>     
                  <p>HTML5</p>
        </div>
        <div className='sSkill'>
            <FaCss3Alt className="technology"  size="50"/>     
                  <p>CSS3</p>
        </div>
        <div className='sSkill'>
            <SiJavascript className="technology"  size="50"/>     
                  <p>JavaScript</p>
        </div>
        <div className='sSkill'>
            <SiTypescript className="technology"  size="50"/>     
                  <p>Typescript</p>
        </div>
        
        <div className='sSkill'>
            <FaNodeJs className="technology"  size="50"/>     
                  <p>NodeJs</p>
        </div>
        <div className='sSkill'>
            <SiMongodb className= "technology"  size="50"/>     
                  <p>MongoDB</p>
        </div>
        <div className='sSkill'>
            <SiExpress className="technology"  size="50"/>     
                  <p>ExpressJs</p>
        </div>
        <div className='sSkill'>
            <FaGitAlt className="technology"  size="50"/>     
                  <p>Git</p>
        </div>
        </div>
        
    );}
export default SkillDisplay
