import React from 'react'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactJS from '../assets/react.png'
import C from '../assets/c.png'
import '../css/skills.css'

export default function Skills() {
    return (
        <div name='skills' className="skills">
            <div className='skills-heading'>
                <h1>Skills</h1>
                <p>These are the technologies that I've worked with</p>
            </div>
            
            <div className='icons-section'>
                <div className='icons-container'>
                    <img className="icons" src={HTML} alt='HTML icon'/>
                    <p>HTML</p>
                </div>
                <div className='icons-container'>
                    <img className="icons" src={CSS} alt='CSS icon'/>
                    <p>CSS</p>
                </div>
                <div className='icons-container'>
                    <img className="icons" src={JavaScript} alt='JavaScript icon'/>
                    <p>JavaScript</p>
                </div>
                <div className='icons-container'>
                    <img className="icons" src={ReactJS} alt='ReactJS icon'/>
                    <p>ReactJS</p>
                </div>
                <div className='icons-container'>
                    <img className="icons" src={GitHub} alt='GitHub icon'/>
                    <p>GitHub</p>
                </div>
                <div className='icons-container'>
                    <img className="icons" src={C} alt='C icon'/>
                    <p>C</p>
                </div>
            </div>

        </div>
    )
}