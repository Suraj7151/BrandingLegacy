/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faClock, faCaretRight} from '@fortawesome/free-solid-svg-icons'

const Footer = ({links, usefulLinks}) => {

    return(
        <>
            <div className="footer-container">
                <div className="footer-brand">
                    <h1>Brand</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul>
                            <li className='links'><FontAwesomeIcon className='footer-links' icon={faEnvelope} />Hello@email.com</li>
                            <li className='links'><FontAwesomeIcon className='footer-links' icon={faPhone} />+62 123 456 789</li>
                        </ul>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        {links.map((link)=>(
                            <li className='links' key={link.id}><FontAwesomeIcon className='footer-links' icon={faCaretRight} rotate={270} />{link.name}</li>
                        ))}
                    </ul>

                </div>
                <div className="useful-links">
                    <h3>Useful Links</h3>
                    <ul>
                        {usefulLinks.map((usefulLink)=>(
                            <li className='links' key={usefulLink.name}><FontAwesomeIcon className='footer-links' icon={faCaretRight} rotate={270} />{usefulLink.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="footer-socials">
                        <h3>Follow Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul className='footer-social-icon'>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            <li><FontAwesomeIcon icon={faTiktok} /></li>
                        </ul>
                </div>
            </div>
        </>
    );
}
export default Footer