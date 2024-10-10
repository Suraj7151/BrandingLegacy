/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Feedback = ({feedbacks}) => {

    return(
        <>
            <div className="feedback-container">
                <div className="feedback-header">
                    <p>TESTIMONIALS</p>
                    <p>Our Clients Feedback & Best Review For Us</p>
                </div>
                <div className="feedbacks">
                    {feedbacks.map((feedback)=>(
                        <div key={feedback.id} className="feedback-box">
                            <img src={feedback.img1} alt="" />
                            <p className='feedbackPara1'><i>{feedback.para}</i></p>
                            <img src={feedback.img2} alt="" />
                            <p className='feedbackPara2'><b>{feedback.name}</b></p>
                            <p className='feedbackPara3'>{feedback.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Feedback