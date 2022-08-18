import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../css/navbar.css'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [openBurger, setOpenBurger] = React.useState(false)
    let handleBurger = () => setOpenBurger(!openBurger) 

    return(
        <div className='navbar'>
            <Link className='navbar-home' to='home' smooth={true} duration={500}>Darren Teoh</Link>

            {/* Menu */}
            <div className='navbar-menu'>
                <Link className='navbar-line' to='skills' smooth={true} duration={500}>Skills</Link>
                <Link className='navbar-line' to='projects' smooth={true} duration={500}>Projects</Link>
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </div>

            {/* Hamburger or Close button*/}
            <div className='navbar-burger' onClick={handleBurger}>
                {openBurger ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            {openBurger ? 
            <div className='navbar-mobile-menu'>
                <Link to='skills' onClick={handleBurger} smooth={true} duration={500}>Skills</Link>
                <Link to='projects' onClick={handleBurger} smooth={true} duration={500}>Projects</Link>
                <Link to='contact' onClick={handleBurger} smooth={true} duration={500}>Contact</Link>
            </div> : 
            null}
        </div>
    )
}