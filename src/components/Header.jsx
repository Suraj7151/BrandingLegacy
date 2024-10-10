/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone, faBars } from '@fortawesome/free-solid-svg-icons'
import logo1 from '../assets/logoipsum-281.png';
import logo2 from '../assets/logoipsum-280 (1) 2.png';
import logo3 from '../assets/logoipsum-282 (2) 1.png';
import logo4 from '../assets/logoipsum-284 (1) 1.png';
const Header = () =>{

    return(
        <>
            <header>
            <div className='head'>
                <div className="contact-info">
                    <div className='location'>
                        <span><FontAwesomeIcon className='contactIcon' icon={faLocationDot} />Metro City, Global </span>
                        <span><FontAwesomeIcon className='contactIcon' icon={faPhone} />Phone: +123 456 789</span>
                    </div>
                    <div>
                        <ul className='socials'>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            <li><FontAwesomeIcon icon={faTiktok} /></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <nav className='navbar'>
                    <h1>Brand</h1>
                    <ul className='navlist'>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#services">OUR SERVCIES</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>

                    <ul className='buttons'>
                        <li><button>BUTTON</button></li>
                        <li><FontAwesomeIcon icon={faBars} /></li>
                    </ul>
                </nav>
            </div>

            <div className="left">
                <p>BRAND AGENCY</p>

                <p className='expertise-para'>We Have Expertise For Scaleup Your Brand Awarness</p>
                <p className='third-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                <div className="left-buttons">
                    <button>GET STARTED</button>
                    <button>OUR PROJECTS</button>
                </div>
            </div>

            
        </header>
            <div className="logos-ipsum">
                <ul className='logos-list'>
                    <li><img src={logo1} alt="" /></li>
                    <li><img src={logo2} alt="" /></li>
                    <li><img src={logo3} alt="" /></li>
                    <li><img src={logo4} alt="" /></li>
                    <li><img src={logo2} alt="" /></li>
                </ul>
            </div>
        </>
        
    );
}
export default Header