import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App', () => {
  it('should exist', () => {
    expect(App).toBeDefined();
  });

  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').contains('Hello React!')).toEqual(true);
  });
});
