import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';
import Thumbnail from '../client/src/components/Thumbnail.jsx';

describe('Component Test Suite', () => {
  it('App should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Thumbnail should exist', () => {
    const wrapper = shallow(<Thumbnail />);
    expect(wrapper.exists()).toBe(true);
  });
});
