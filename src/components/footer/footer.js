import React from 'react';
import logo from '../../images/logo3.jpg';
import './footer.scss';

const Footer = () => (
    <div className='footer-wrapper'>
        <div className='footer-top-section'>
            <ul>
                <li>Company</li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
            <ul>
                <li>Follow</li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Medium</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
            <ul>
                <li>Information</li>
                <li><a href="#">How we work</a></li>
                <li><a href="#">Outcomes</a></li>
                <li><a href="#">Responsible Disclosure</a></li>
                <li><a href="#">Course Catalog</a></li>
                <li><a href="#">Learning Center</a></li>
            </ul>
            <ul>
                <li>Recent Blog Post</li>
                <li>About CodeImpact <span>09 Jun 2019</span></li>
                <li>HOW to learn to learn <span>09 Jun 2019</span></li>
            </ul>
        </div>

        <div className='footer-bottom-section'>
            <img src={logo} id='footer-logo' alt='company logo'/>
            <span>Copyright @ 2019 CodeImpact. All rights reserved</span>
        </div>
    </div>
);

export default Footer;