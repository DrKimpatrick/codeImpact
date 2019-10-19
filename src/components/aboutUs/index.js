import React from 'react';
import './index.scss';

const AboutUs = () => (
    <div className='container'>
        <div className='row text-center text-lg-left top-section d-flex align-items-center row-style'>
            <div className='col-lg-7 col-md-7 col-12 d-flex align-items-center x'>
                <div className='d-block mb-4 h-70 image-container'></div>
            </div>
            <div className='col-lg-5 col-md-5 col-12'>
                <div className='d-block mb-4 h-100 description-wrapper'>
                    <h2 className='h2-style'>About Us</h2>
                    <p className='paragraphly'>CodeImpact is the most affordable full-time, in-person code school,
                        and one of the few programs that includes an internship 
                        with a tech company as well as job search support.  Students 
                        graduate with real-life work experience already on their resumes, 
                        a dedicated team to help land their first job, and a close community of 
                        peers and instructors supporting them along the way.</p>
                    <button className='blue-button'>READ MORE</button>
                </div>
            </div>
        </div>
    </div>
)

export default AboutUs;