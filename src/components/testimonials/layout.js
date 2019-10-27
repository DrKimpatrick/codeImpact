import React from 'react';
import Card from './card';
import './layout.scss';
import profile from '../../images/profile.jpg'
import patrick from '../../images/patrick.jpg'
import alexis from '../../images/mike.jpg'

class Testimonials extends React.Component {
    render(){
        return(
            <div className='testimonialsWrapper' id='testimonials'>
                <Card 
                    image={profile} 
                    name={"Mike"} 
                    company="Google" 
                    color="green-border-card"
                    testimonial="Ultimately, CodeImpact is what really became the driving force behind the career change"
                    />
                <Card 
                    image={patrick} 
                    name={"Patrick"} 
                    company="Facebook" 
                    color="blue-border-card"
                    testimonial="Before CodeImpact, I was working two minimum wage jobs. Now, I have a new job, a new mindset, and new life!"
                    />
                <Card 
                    image={alexis} 
                    name={"Alexis"} 
                    company="IBM" 
                    color="purple-border-card"
                    testimonial="While freelancing as an interior designer, I took the Intro to programing to learn a new set of skills."
                    />
            </div>
        )
    }
}

export default Testimonials;