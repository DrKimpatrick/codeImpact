import React from 'react';
import './callToAction.scss';
import { Link } from 'gatsby';

const CallToAction = () => (
    <div className='actionWrapper' id='apply'>
        <div className='innerWrapper'>
            <h2>Ready to begin ?</h2>
            <p>Enroll in the codeImpact program and build your best future today</p>
            <Link to='/register' className='button'>Register for our classes</Link>
        </div>
    </div>
)

export default CallToAction;