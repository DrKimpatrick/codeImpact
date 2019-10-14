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
import AboutUs from './aboutUs/about';
import Tutorial from './tutorial';
import Tutorials from './tutorials/layout';
import Footer from './footer/footer';
import Hero from './hero/hero';
import Gallery from './gallery/gallery';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='layoutWrapper'>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero/>
      <AboutUs/>
      <Gallery/>
      <CallToAction/>
      <Testimonials/>
      <Tutorials/>
      <NewsLetter/>
      <Footer/> 
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
