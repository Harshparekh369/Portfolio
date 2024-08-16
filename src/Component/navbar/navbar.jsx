import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='desktopmenu'>
                <Link 
                    activeClass='active' 
                    to='intro' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100} 
                    className='menuitem'
                >
                    Home
                </Link>
                <Link 
                    activeClass='active' 
                    to='skills' 
                    spy={true} 
                    smooth={true} 
                    offset={-60} 
                    duration={500} 
                    className='menuitem'
                >
                    Skill
                </Link>
                <Link 
                    activeClass='active' 
                    to='latestproject' 
                    spy={true} 
                    smooth={true} 
                    offset={-60} 
                    duration={500} 
                    className='menuitem'
                >
                    Latest Projects
                </Link>
                <Link 
                    activeClass='active' 
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-60} 
                    duration={500} 
                    className='menuitem'
                >
                    Portfolio
                </Link>
            </div>

            <button 
                className='menubtn' 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
                Contact me
            </button>
        </nav>
    );
}

export default Navbar;
