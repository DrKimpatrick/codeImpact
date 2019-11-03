/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.scss"
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => (
  <div className='layoutWrapper'>
        <Header />
          <main>{children}</main>
        <Footer/>
      </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
