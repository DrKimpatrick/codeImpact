import React from 'react';
import './card.scss';

const Card = ({name, image, company, color, testimonial}) => (
    <div className={`card ${color}`}>
        <div className='upperSection'>
            <h2>{name}</h2>
            <p>{testimonial}</p>
            <img src={image}/>
        </div>
        <div className='lowerSection'>
            <h2>Now AT</h2>
            <h3>{company}</h3>
        </div>
    </div>
)

export default Card;