
/* eslint-disable no-unused-vars */
import React from 'react';
import img from "../assets/Rectangle 7.png"
import check from '../assets/Check.png'
const Assessment = () => {

    return(
        <>
            <div className="assessment">
                <div className="assessment-header">
                    <p>OUR RISK ASSESSMENT</p>
                    <p>We Offer A Range Of Branding And Design Services Meet The Specific Needs</p>
                </div>
                <div className="assessment-content">
                    <div className="assessment-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="assessment-para">
                        <p><i>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor “</i></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <ul>
                            <li><img src={check} alt="" />Best Choicing Agency</li>
                            <li><img src={check} alt="" />BestGreat Certification Team Work</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Assessment