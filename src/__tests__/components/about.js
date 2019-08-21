import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import About from '../../components/aboutUs/about';
import Image from '../../components/aboutUs/image';
import Description from '../../components/aboutUs/description';

configure({adapter: new Adapter()});
describe('render the About section without fail', () => {
    let wrapper;
    it('should render the about component without failing', () => {
        wrapper = shallow(<About />)
    })

    it('should render the Image component without failing', () => {
        wrapper = shallow(<Image />)
    })

    it('should render the Description component without failing', () => {
        wrapper = shallow(<Description />)
    })
});
