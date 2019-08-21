import React from 'react';
import './hero.scss';
import Notes from './notes';
import Heading from './heading';

const Hero = () => (
    <div className='hero-container'>
        <Heading/>
        <Notes/>
    </div>
)

export default Hero;