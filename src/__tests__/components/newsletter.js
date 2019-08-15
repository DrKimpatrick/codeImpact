import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import NewsLetter from '../../components/newsletter';

configure({adapter: new Adapter()});
describe('render the Home section', () => {
    let wrapper;
    it('should render the home component without failing', () => {
        wrapper = shallow(<NewsLetter />)
    })
})