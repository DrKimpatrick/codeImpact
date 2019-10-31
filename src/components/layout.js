/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import CallToAction from './callToAction';
import Testimonials from './testimonials/layout'
import NewsLetter from './newsletter';
import "./layout.scss"
import About from './aboutUs/index';
import TutorialSection from './tutorials/index';
import Footer from './footer/footer';
import Hero from './hero/hero';
import Gallery from './gallery/gallery';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

class Layout extends React.Component {
  

  render(){
    return (
      <div className='layoutWrapper'>
        <Header />
        <Hero/>
        <About/>
        <Gallery/>
        <CallToAction/>
        <Testimonials/>
        <TutorialSection/>
        <NewsLetter/>
        <Footer/> 
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
