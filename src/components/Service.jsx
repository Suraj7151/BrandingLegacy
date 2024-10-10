/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faLayerGroup, faAward } from '@fortawesome/free-solid-svg-icons'
import img from '../assets/Right.png'
import check from '../assets/Check.png'
const Service = () => {

    return (
        
        <div className="service-section">
            <div className="service-left">
                <h1>
                    Our brand strategy services will help you develop a clear and concise brand message
                </h1>
                <p className='service-paras'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </p>
                <ul>
                    <li><img src={check} alt="" /> Best Team Work & Choicing</li>
                    <li><img src={check} alt="" /> Exclusive Brand Awarness Strategy</li>
                </ul>
            </div>
            <div className="service-right">
                <img src={img} alt="" />
            </div>

            
        </div>
    );
};

export default Service