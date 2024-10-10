/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faLayerGroup, faAward } from '@fortawesome/free-solid-svg-icons'
import img1 from '../assets/pen-to-square.png'
import img2 from '../assets/cube.png'
import img3 from '../assets/cog.png'
import img4 from '../assets/ad.png'
import img5 from '../assets/Rectangle 6.png'

const Branding = ({items, services}) => {

    return(
        <>
            <div className="branding-section">
                <div className="branding-top">
                    <p>WHAT WE DO</p>
                    <p>Our Brand Design Agency Service</p>
                </div>
                <div className="branding-bottom">
                    <ul>
                    {services.map((service) => (
                            <li key={service.id}>
                                <img src={service.img} alt={service.title} />
                                <p>{service.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="branding-solution">
                <div className="branding-left">
                    <img src={img5} alt="" />
                </div>

                <div className="branding-right">
                    <h3>HOW ITS WORK</h3>
                    <p className='expert'>Expert Branding Team Solutions Have An Easy Work Proccess</p>
                    <p className='branding-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="solutions-container">
                        {items.map((item) => (
                            <div className="solutions" key={item.id}>
                                <h1>0{item.id}</h1>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Branding