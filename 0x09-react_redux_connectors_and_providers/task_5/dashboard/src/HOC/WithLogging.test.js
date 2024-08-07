import React from 'react';
import { JSDOM } from 'jsdom';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

// steup jsdom
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

// function copyProps(src, target) {
//   if (src && target) {
//     Object.defineProperties(target, {
//       ...Object.getOwnPropertyDescriptors(src),
//       ...Object.getOwnPropertyDescriptors(target),
//     });
//   } else {
//     throw new Error('Source or target is null');
//   }
// }

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};

// copyProps(window, global);

// test for WithLogging HOC
describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs messages when wrapping a pure HTML component', () => {
    const WrappedComponent = WithLogging(() => <p>Hello, World!</p>);
    const wrapper = mount(<WrappedComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs messages when wrapping the Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
