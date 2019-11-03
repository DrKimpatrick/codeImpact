import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import './header.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import Humburger from './hamburger'

class Header extends React.Component {
  state = {
    hasScroll: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);

  }

  handleScroll = () => {
    // Getting the number of pixels the document has already been scrolled from the top
    const scrollTop = window.pageYOffset;

    if (scrollTop > 520){
      this.setState({hasScroll: true});
    }else{
      this.setState({hasScroll: false});
    }
  }

  render(){
    return(
      <div className={this.state.hasScroll ? 'Header HeaderHasScroll': 'Header'}>
          <div id='humburgerIcon'><Humburger/></div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration= {500}
            id='imageWrapper'><img src="https://lh3.googleusercontent.com/aMc_fBs-tkqQQXPZwIum8oM-DMTt8du-G1OxQsarxmgD1tc3OrPBMZvJJMysh8C8bVNITU9AQgfQLsqr7e7E4tkrZQJvVbeReJJ6BZ27B_tBXi_SCzgtaDzwHuFVW64vyfAtfmJ8dw=w2400" id='logo' alt='company logo'/></Link>
          <div className='HeaderGroup'>
            <Link 
            activeClass="active-class"
            to="about-us"
            spy={true}
            smooth={true}
            offset={-200}
            duration= {500}>ABOUT US</Link>
            <Link 
            activeClass="active-class"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-100}
            duration= {500}>GALLERY</Link>
            <Link 
            activeClass="active-class"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-100}
            duration= {500}>TESTMONIALS</Link>
            <Link 
            activeClass="active-class"
            to="tutorials"
            spy={true}
            smooth={true}
            offset={-100}
            duration= {500}>TUTORIALS</Link>
            <button className='blue-button'>Apply now</button>
            </div>
      </div>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
