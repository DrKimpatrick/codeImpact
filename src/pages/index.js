import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types";
import CallToAction from '../components/callToAction/callToAction';
import Testimonials from '../components/testimonials/layout'
import NewsLetter from '../components/newsletter';
import About from '../components/aboutUs/index';
import TutorialSection from '../components/tutorials/index';
import Hero from '../components/hero/hero';
import Gallery from '../components/gallery/gallery';
import TeamSection from '../components/teamSection/team';

const IndexPage = () => (
  <Layout>
        <Hero/>
        <About/>
        <Gallery/>
        <CallToAction/>
        <Testimonials/>
        <TutorialSection/>
        <TeamSection/>
        <NewsLetter/>
  </Layout>

)

export default IndexPage
