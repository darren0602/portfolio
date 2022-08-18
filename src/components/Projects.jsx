import React from 'react'
import '../css/projects.css'
import tenzies from '../assets/tenzies.png'
import tenziesGIF from '../assets/tenzies.gif'
import quiz from '../assets/trivia-quiz.png'
import quizGIF from '../assets/trivia-quiz.gif'
import budget from '../assets/budget-app.png'
import budgetGIF from '../assets/budget-app.gif'
import weather from '../assets/weather-app.png'
import weatherGIF from '../assets/weather-app.gif'
import { FaGithub, FaEye, FaInfoCircle, FaTimes, FaReact, FaBootstrap } from 'react-icons/fa'
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'

export default function Projects() {
    const [tenziesHovered, setTenziesHovered] = React.useState(false)
    const [tenziesInfo, setTenziesInfo] = React.useState(false)

    const [quizHovered, setQuizHovered] = React.useState(false)
    const [quizInfo, setQuizInfo] = React.useState(false)

    const [budgetHovered, setBudgetHovered] = React.useState(false)
    const [budgetInfo, setBudgetInfo] = React.useState(false)

    const [weatherHovered, setWeatherHovered] = React.useState(false)
    const [weatherInfo, setWeatherInfo] = React.useState(false)

    return (
        <div name='projects' className='projects'>
            <div className='projects-heading'>
                <h1>Projects</h1>
                <p>Check out some of my recent projects</p>
            </div>

            <div className="projects-section">
                <div className="projects-container" style={{backgroundImage:`url(${tenzies})`}} onMouseOver={()=>setTenziesHovered(true)} onMouseOut={()=>setTenziesHovered(false)}>
                    {/* Tenzies Hover Effect */}
                    {tenziesHovered ? 
                    <div className='projects-hovered'>
                        <h1>Tenzies</h1>
                        <div className='buttons'>
                            <a href='https://github.com/darren0602/tenzies' target='_blank' rel="noreferrer" className='git-btn'><FaGithub/> GitHub</a>
                            <a href='https://darren0602.github.io/tenzies' target='_blank' rel="noreferrer" className='demo-btn'><FaEye/> Demo</a>
                            <div className='info-btn' onClick={() => setTenziesInfo(true)}><FaInfoCircle /> Info</div>
                        </div>
                    </div> :
                    null
                    }
                </div>
                {/* Display Tenzies additional info */}
                {tenziesInfo ? 
                <div className="info-box">
                    <div className='info-left' style={{backgroundImage:`url(${tenziesGIF})`}}></div>
                    <div className='info-right'>
                        <div className='info-close' onClick={() => setTenziesInfo(false)}><FaTimes /></div>
                        <h1>Tenzies</h1>
                        <div className='info-tech'>
                        <p className='html-logo'><IoLogoHtml5 /> HTML</p>
                            <p className='css-logo'><IoLogoCss3/> CSS</p>
                            <p className='js-logo'><SiJavascript/> JavaScript</p>
                            <p className='react-logo'><FaReact/> ReactJS</p>
                        </div>
                        <h2>About</h2>
                        <p>
                            A simple game of tenzies.<br/><br/>

                            Some features added worth noting:<br/>
                            1. Roll counter utilizing a simple state counter each time roll button is clicked.<br/>
                            2. Best roll record utilizing localStorage to show the lowest number of rolls to achieve tenzies across browser sessions.
                        </p>
                    </div>
                </div> :
                null
                }
                <div className="projects-container" style={{backgroundImage:`url(${quiz})`}} onMouseOver={()=>setQuizHovered(true)} onMouseOut={()=>setQuizHovered(false)}>
                    {/* Quiz Hover Effect */}
                    {quizHovered ? 
                        <div className='projects-hovered'>
                            <h1>Quizzical</h1>
                            <div className='buttons'>
                                <a href='https://github.com/darren0602/trivia-quiz' target='_blank' rel="noreferrer" className='git-btn'><FaGithub/> GitHub</a>
                                <a href='https://darren0602.github.io/trivia-quiz' target='_blank' rel="noreferrer" className='demo-btn'><FaEye/> Demo</a>
                                <div className='info-btn' onClick={() => setQuizInfo(true)}><FaInfoCircle /> Info</div>
                            </div>
                        </div> :
                        null
                    }
                </div>
                {/* Display Quiz additional info */}
                {quizInfo ? 
                <div className="info-box">
                    <div className='info-left' style={{backgroundImage:`url(${quizGIF})`}}></div>
                    <div className='info-right'>
                        <div className='info-close' onClick={() => setQuizInfo(false)}><FaTimes /></div>
                        <h1>Quizzical</h1>
                        <div className='info-tech'>
                            <p className='html-logo'><IoLogoHtml5 /> HTML</p>
                            <p className='css-logo'><IoLogoCss3/> CSS</p>
                            <p className='js-logo'><SiJavascript/> JavaScript</p>
                            <p className='react-logo'><FaReact/> ReactJS</p>
                        </div>
                        <h2>About</h2>
                        <p>
                            Trivia quiz app named Quizzical made using React.<br/><br/>
                            The app utilizes the Open Trivia Database which provides a completely free JSON API for use in programming projects.<br/>
                            Allows user to select number of questions, categories &#38; difficulty for the trivia quiz.
                        </p>
                    </div>
                </div> :
                null
                }
                <div className="projects-container" style={{backgroundImage:`url(${budget})`}} onMouseOver={()=>setBudgetHovered(true)} onMouseOut={()=>setBudgetHovered(false)}>
                    {/* Budget Hover Effect */}
                    {budgetHovered ? 
                        <div className='projects-hovered'>
                            <h1>Budget Planner</h1>
                            <div className='buttons'>
                                <a href='https://github.com/darren0602/budget-app' target='_blank' rel="noreferrer" className='git-btn'><FaGithub/> GitHub</a>
                                <a href='https://darren0602.github.io/budget-app' target='_blank' rel="noreferrer"  className='demo-btn'><FaEye/> Demo</a>
                                <div className='info-btn' onClick={() => setBudgetInfo(true)}><FaInfoCircle /> Info</div>
                            </div>
                        </div> :
                        null
                    }
                </div>
                {/* Display Budget additional info */}
                {budgetInfo ? 
                <div className="info-box">
                    <div className='info-left' style={{backgroundImage:`url(${budgetGIF})`}}></div>
                    <div className='info-right'>
                        <div className='info-close' onClick={() => setBudgetInfo(false)}><FaTimes/></div>
                        <h1>Budget Planner</h1>
                        <div className='info-tech'>
                            <p className='html-logo'><IoLogoHtml5 /> HTML</p>
                            <p className='bs-logo'><FaBootstrap/> Bootstrap</p>
                            <p className='js-logo'><SiJavascript/> JavaScript</p>
                            <p className='react-logo'><FaReact/> ReactJS</p>
                        </div>
                        <h2>About</h2>
                        <p>
                            A basic budget planner app.<br/><br/>
                            This app was styled with CSS Bootstrap to allow quick Mobile first designs.<br/>
                            The container element allows contents to be wrapped dynamically to accomodate mobile device viewport.<br/><br/>
                            React Hooks used:<br/>
                            1. useState for local state<br/>
                            2. useContext for global state<br/>
                            3. useReducer for various custom state logic <br/>
                            4. useEffect for displaying filtered data items &#38; utilize local storage to save data across browser sessions
                        </p>
                    </div>
                </div> :
                null
                }
                <div className="projects-container" style={{backgroundImage:`url(${weather})`}} onMouseOver={()=>setWeatherHovered(true)} onMouseOut={()=>setWeatherHovered(false)}>
                    {/* Weather Hover Effect */}
                    {weatherHovered ? 
                        <div className='projects-hovered'>
                            <h1>Weather App</h1>
                            <div className='buttons'>
                                <a href='https://github.com/darren0602/weather-app' target='_blank' rel="noreferrer" className='git-btn'><FaGithub/> GitHub</a>
                                <a href='https://darren0602.github.io/weather-app' target='_blank' rel="noreferrer" className='demo-btn'><FaEye/> Demo</a>
                                <div className='info-btn' onClick={() => setWeatherInfo(true)}><FaInfoCircle /> Info</div>
                            </div>
                        </div> :
                        null
                    }
                </div>
                {/* Display Weather additional info */}
                {weatherInfo ? 
                <div className="info-box">
                    <div className='info-left' style={{backgroundImage:`url(${weatherGIF})`}}></div>
                    <div className='info-right'>
                        <div className='info-close' onClick={() => setWeatherInfo(false)}><FaTimes /></div>
                        <h1>Weather App</h1>
                        <div className='info-tech'>
                            <p className='html-logo'><IoLogoHtml5 /> HTML</p>
                            <p className='css-logo'><IoLogoCss3/> CSS</p>
                            <p className='js-logo'><SiJavascript/> JavaScript</p>
                            <p className='react-logo'><FaReact/> ReactJS</p>
                        </div>
                        <h2>About</h2>
                        <p>
                            A city-based weather app made with React.<br/><br/>
                            The app utilizes the free OpenWeatherMap API which provides global current weather data for any location including over 200,000 cities.<br/>
                            The API is fetched via Axios.<br/>
                            Allows user to check a city's current weather data.<br/>
                            Background also changes depending if it is day or night at the city.<br/>
                            Note: Only certain cities will be suggested on autocomplete.
                        </p>
                    </div>
                </div> :
                null
                }
            </div>
        </div>
    )
    
}