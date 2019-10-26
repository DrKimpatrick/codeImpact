import React from 'react';
import './index.scss';

const AboutUs = () => (
    <div className='container about-us-container'>
        <div className='row text-center text-lg-left d-flex align-items-center row-style'>
            <div className='col-lg-7 col-md-5 col-12 align-items-center img-col d-none d-md-flex'>
                <div className='d-block mb-4 h-70 image-container'></div>
            </div>
            <div className='col-lg-5 col-md-7 col-12 text-center new-description-wrapper'>
                <div className='d-block mb-4 h-100'>
                    <h2 className='font-weight-bold h2 heading-style'>About Us</h2>
                    <p className='new-paragraphly'>CodeImpact is the most affordable full-time, in-person code school,
                        and one of the few programs that includes an internship 
                        with a tech company as well as job search support.  Students 
                        graduate with real-life work experience already on their resumes, 
                        a dedicated team to help land their first job, and a close community of 
                        peers and instructors supporting them along the way.</p>
                    <button className='btn new-blue-button'>READ MORE</button>
                </div>
            </div>
        </div>
    </div>
)

export default AboutUs;