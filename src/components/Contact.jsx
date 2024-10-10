
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'
import rectangle10 from '../assets/Rectangle 10.png'
const Contact = () => {

    return(
        <>
            <div className="contact-section">
                <div className="contact-left">
                    <img src={rectangle10} alt="" />
                </div>
                <div className="contact-right">
                    <p>STAY TUNED</p>
                    <h3>Lets Get In Touch With Our brand Design Team</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="contact-details">
                        <ul>
                            <li><FontAwesomeIcon className='contact-icon' icon={faEnvelope} />Hello@email.com</li>
                            <li><FontAwesomeIcon className='contact-icon' icon={faPhone} />+62 123 456 789</li>
                            <li><FontAwesomeIcon className='contact-icon' icon={faClock} />08 AM - 10 PM</li>
                        </ul>
                        <div className="address">
                            <h5>Head Office Address</h5>
                            <p>Lumbung Hidup St. 425 East <br /> Java Madiun City 1234</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact
