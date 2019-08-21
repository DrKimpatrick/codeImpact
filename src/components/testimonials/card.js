import React from 'react';
import './card.scss';

const Card = ({name, image, company, color, testimonial}) => (
    <div className={`card ${color}`}>
        <div className='upperSection'>
            <h2 className='h2-style'>{name}</h2>
            <p className='paragraphly'>{testimonial}</p>
            <img src={image}/>
        </div>
        <div className='lowerSection'>
            <h2 className='h2-card-lower'>Now AT</h2>
            <h3 className='h3-card-lower'>{company}</h3>
        </div>
    </div>
)

export default Card;