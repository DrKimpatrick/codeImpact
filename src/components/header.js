import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import './header.scss';
import logo from '../images/logo3.jpg'
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
          <div id='imageWrapper'><img src={logo} id='logo' alt='company logo'/></div>
          <div className='HeaderGroup'>
            <Link to='/home'>HOME</Link>
            <Link to='/about'>ABOUT US</Link>
            <Link to='/courses'>COURSE</Link>
            <Link to='/learning'>LEARNING</Link>
            <Link to='/apply'><button className='blue-button'>Apply now</button></Link>
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
