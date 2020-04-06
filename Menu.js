import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { useState, useCallback, useRef, useEffect, useComponentVisible } from 'react'

import HomeIcon from '@material-ui/icons/Home';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import './styles/Menu.css'


const EMAIL = `${process.env.REACT_APP_EMAIL}`

function Nav() {

    const [condition, setCondition] = useState(false);
    const useComponentVisible = (initialIsVisible) => {
        const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
        const ref = useRef(null);
    
        const handleClickOutside = (event) => {
            if (condition) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
                setCondition(!condition)  
            }
        }
        };
    
        useEffect(() => {
            document.addEventListener('click', handleClickOutside, true);
            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        });
    
        return { ref, isComponentVisible, setIsComponentVisible };
        }
        const { ref, isComponentVisible } = useComponentVisible(true);

        const body = document.body;

        body.className = condition ? "menu-open" : "menu-closed"

    return <div  id={condition ? "menu_toggled" : "not-toggled"}> 


    <div className="menu" ref={ref}>
        <div className='nav-bar'>
            
            <div className='nav_links'>
                  <div className={condition ? "tag-popout_toggled" : "tag-popout"}>
                    
                      <Link to="/"  className='link' rel="noopener noreferrer" onClick={() => setCondition(!condition)}>
                      <span className="icon-ani"><HomeIcon /></span> Home
                      </Link>
                    
                    
                      <Link to="/developer-portfolio" className='link' rel="noopener noreferrer" onClick={() => setCondition(!condition)}>
                      <span className="icon-ani"><CodeIcon /></span> Dev Portfolio
                      </Link>
                    
                    
                      <Link to="/photography-portfolio"  className='link' rel="noopener noreferrer" onClick={() => setCondition(!condition)}>
                      <span className="icon-ani"><CameraAltIcon /></span> Photography
                      </Link>
                        <div class="menu-button-container">
                            <div class="menu-dropdown">
                                <button class="menu-dropbtn" className="link email-link"><EmailIcon /> Contact Me <span id="menu-dropdown-arrow">&#9660;</span></button>
                                <div class="menu-dropdown-content" id="contact-dropdown">
                                    <ul id="contact-menu">
                                    <li><a href={`mailto: ${EMAIL}`} target="_blank"><EmailIcon /></a></li>
                                    <li><a href="https://github.com/SteveR92" target="_blank"><GitHubIcon /></a></li>
                                    <li><a href="https://www.linkedin.com/in/steve-roe-93a1a1197/" target="_blank"><LinkedInIcon /></a></li>
                                    <li><a href="https://www.instagram.com/steveroe_/" target="_blank"><InstagramIcon /></a></li>
                                    </ul>
                                    </div>
                            </div>
                        </div>
                      </div>
                  </div>
      
                  <div 
                        onMouseEnter={() => setCondition(!condition)}
                        onClick={() => setCondition(!condition)}
                        className={condition ? "burger_toggled" : "burger"}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
            </div>
    </div>
    <div className={condition ? "shadow-content-container" : "no-shadow"}>
    </div>
    </div>
}

export default Nav