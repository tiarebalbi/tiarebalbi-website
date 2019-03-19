import React from 'react';
import Home from '../home';
import { mount } from 'enzyme';

describe('home', () => {
  const wrapper = mount(<Home />);
  it('should be stateless', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should move image on MouseMove under image container', () => {
    const target = wrapper.find('div.card1');

    target.simulate('mouseMove', { clientX: 0, clientY: 0 });

    expect(target.prop('style').transform).toBe('translate3d(0px,0px,0)');
  });

  it('should move image on MouseMove under content container', () => {
    const target = wrapper.find('div.contentContainer');

    target.simulate('mouseMove', { clientX: 0, clientY: 0 });

    expect(wrapper.find('div.card1').prop('style').transform).toBe('translate3d(0px,0px,0)');
  });
});
