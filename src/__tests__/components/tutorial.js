import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import Tutorial from '../../components/tutorial';

configure({adapter: new Adapter()});
describe('render the Tutorial section', () => {
    let wrapper;
    it('should render the tutorial component without failing', () => {
        wrapper = shallow(<Tutorial />)
    })
})