import { shallow, mount, render } from 'enzyme';
import React from 'react';

import Button from '../src/components/Button.jsx';

describe('Button Component', () => {
    it('it should render the Button Component without crashing', () => {
        shallow(<Button />);
    });
    
    it('should have a button with a onClick prop', () => {
        const wrapper = shallow(<Button />);
        const button = wrapper.find('button');
        expect(button.prop('onClick')).toBeDefined();
    });
})