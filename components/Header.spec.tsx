import * as React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/Header';

describe('Header', () => {
  it('should exist', () => {
    expect(Header).toBeDefined();
  });

  it('should render', () => {
    const wrapper = shallow(<Header text="Hello React!"/>);
    expect(wrapper.find('h1').contains('Hello React!')).toEqual(true);
  });
});
