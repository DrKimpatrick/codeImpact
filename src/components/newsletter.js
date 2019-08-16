import React from 'react';
import './newsletter.scss';

const newsLetter = () => (
    <div className='letter-wrapper'>
        <div className='left-letter-div'>
            <h3>Stay up to date on our latest news and events.</h3>
            <form>
                <input type='email' placeholder='Enter your email' className='email-input'/><br/>
                <input type='checkbox' className='checkbox-accept'/><span className='accept-parent'>I accept  the <span className='blue-accept'>Privacy Policy</span> and  the <span className='blue-accept'>Terms of use</span></span><br/>
            </form>
        </div>
        <div className='right-letter-div'>
            <button>Get Updates</button>
        </div>
    </div>
)

export default newsLetter;