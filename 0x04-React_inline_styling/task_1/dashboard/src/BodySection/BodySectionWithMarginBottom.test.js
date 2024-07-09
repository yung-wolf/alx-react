import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('renders a BodySection component with the correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const bodySection = wrapper.find(BodySection);

    expect(bodySection.length).toBe(1);
    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.prop('children')).toEqual(<p>test children node</p>);
  });

  it('applies the correct CSS class', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('.bodySectionWithMargin').length).toBe(1);
  });
});
