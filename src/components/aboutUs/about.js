import React from 'react';
import './about.scss';
import Description from './description';
import Image from './image';

class About extends React.Component{
    render(){
        return(
            <div className='about-wrapper'>
                <Image/>
                <Description/>
            </div>
        )
    }
}

export default About;