/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../assets/Left2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faLayerGroup, faAward } from '@fortawesome/free-solid-svg-icons'
const About = ()=>{

    return(
        <div className="about-section">
            <div className="left-about">
                <img src={img} alt="" />
            </div>
            <div className="right-about">
                <p className='right-para1'>ABOUT US</p>
                <p className='right-para2'>
                    We are excited to Give You Best Brand Design Services
                </p>
                <p className='right-para3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <ul className='rightList'>
                    <li>
                        <div className='right-list'>
                            <p className='right-icon'><FontAwesomeIcon icon={faAward} /></p>
                            <p> <b> We Are Have Winnings Award </b><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> 
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                        </div>
                    </li>
                    <li>
                        <div className='right-list'>
                            <p className='right-icon'><FontAwesomeIcon icon={faTrophy} /></p>
                            <p> <b>Realize Client Goals</b> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </li>
                    <li>
                        <div className='right-list'>
                            <p className='right-icon'><FontAwesomeIcon icon={faLayerGroup} /></p>
                            <p> <b>Great Work Proccess</b> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About