import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import Heading from '../../components/hero/heading';
import Hero from '../../components/hero/hero';
import Notes from '../../components/hero/notes';


configure({adapter: new Adapter()});
describe('render the Hero section', () => {
    let wrapper;
    it('should render the hero component without failing', () => {
        wrapper = shallow(<Hero />)
    })
})

describe('render the Header section', () => {
    let wrapper;
    it('should render the header component without failing', () => {
        wrapper = shallow(<Heading />)
    })
})

describe('render the notes section', () => {
    let wrapper;
    it('should render the notes component without failing', () => {
        wrapper = shallow(<Notes />)
    })
})