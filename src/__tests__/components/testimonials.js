import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import Layout from '../../components/testimonials/layout';
import Card from '../../components/testimonials/card';

configure({adapter: new Adapter()});
describe('render the Home section', () => {
    let wrapper;
    it('should render the home component without failing', () => {
        wrapper = shallow(<Layout />)
    })
})

describe('render the Home section', () => {
    let wrapper;
    it('should render the home component without failing', () => {
        wrapper = shallow(<Card />)
    })
})