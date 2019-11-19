import React from 'react';
import './hero.scss';

const Hero = () => (
    <div className='container-fluid hero-container' id='home'>
        <div className='row'>
            <div className='col-lg-4 col-md-5 col-12 img-col d-none d-lg-flex v'>
                <div className='notes-wrapper'>
                    <div className='my-auto'>
                        <h2>Be in demand</h2>
                        <p>Learn the latest tech skills to propel your career forward</p>
                        <p>Real-world projects from industry experts</p>
                        <p>1-on-1 technical mentor</p>
                        <p>Personal career coach and career services</p>
                        <button className='my-auto'>Register for classes</button>
                    </div>
                </div>
            </div>
            <div className='col-lg-8 col-md-12 col-12 img-col my-auto x'>
                <div className='hero-heading-wrapper'>
                    <h2><span>GET</span> EMPOWERED TO KICK START YOUR TECH CAREER</h2>
                </div>
            </div>
        </div>
    </div>
)

export default Hero;