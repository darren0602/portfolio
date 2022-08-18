import React from 'react'
import '../css/home.css'
import { FaSchool, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import portrait from '../assets/portrait.jpeg'
import resume from '../assets/Darren_Resume_2022.pdf'

export default function Home() {
    return (
        <div name='home' className='home'>
            <div className='home-left'>
                <div className="about">
                    <h1>I'm <mark>Darren</mark> Teoh</h1>
                    <h2>an aspiring Front End Developer.</h2>
                    <p>
                        I'm a self-taught front end React developer and an 
                        <br></br>
                        electrical &#38; computer systems engineer graduate.
                        <br></br>
                        I enjoy building responsive and dynamic web applications.
                    </p>
                </div>
                <div className="icon">
                    <h2><HiMail color='white'/> <a href='mailto: darrenteoh0602@gmail.com'>darrenteoh0602@gmail.com</a></h2>
                    <h2><FaSchool color='white' /> <a href='https://www.monash.edu.my/about'>Monash University</a></h2>
                    <h2><FaGithub color='white' /> <a href='https://github.com/darren0602'>GitHub</a></h2>
                    <h2><FaLinkedin color='white' /> <a href='https://www.linkedin.com/in/darrenteoh0602/'>LinkedIn</a></h2>
                </div>
            </div>

            <div className='home-right'>
                <div className='portrait-container'>
                    <img className="portrait" src={portrait} alt='my-portrait'/>
                </div>
                <a href={resume} download='Darren_Teoh_Resume' className='dl-btn'><FaDownload/> Download Resume</a>
            </div>
        </div>
    )
}