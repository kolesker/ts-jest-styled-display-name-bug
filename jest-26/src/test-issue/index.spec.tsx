import React from 'react';
import { mount } from 'enzyme';


import Component from './index';


describe('Component', () => {

  it('it should match mount snapshot', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
