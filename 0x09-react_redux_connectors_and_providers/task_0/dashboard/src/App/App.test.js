import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { fromJS } from 'immutable';

//  using StyleSheetTestUtils.suppressStyleInjection at the top of your test file, to prevent issues with style injections
import { StyleSheetTestUtils } from 'aphrodite';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  // Renders the App without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  })

  // verify that App renders a div with the class App-header
  it('renders a div with the class App-header', () => {
    expect(wrapper.find('div.App-header').length).toEqual(1);
  })

  // verify that App contains a Notifications component
  it('contains Notifications component', () => {
    expect(wrapper.find(Notification).exists()).toBe(true);
  })

  // verify that App contains a Header component
  it('contains Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  })

  // verify that App contains a Login component
  it('contains Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  })

  // verify that App contains a Footer component
  it('contains Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  })

  // Add a test to check that CourseList is not displayed
  it('CourseList is not displayed', () => {
    expect(wrapper.find('CourseList').exists()).toBe(false);
  })

  // When isLoggedIn is true, the first one should verify that the Login component is not included.
  it('Login component is not included when isLoggedIn is true', () => {
    wrapper.setProps({ isLoggedIn: true })
    expect(wrapper.find('Login').exists()).toBe(false);
  })

  // The second one should verify that the CourseList component is included
  it('CourseList component is included when isLoggedIn is true', () => {
    wrapper.setProps({ isLoggedIn: true })
    expect(wrapper.find('CourseList').exists()).toBe(true);

    // Alt way to dive into the BodySectionWithMarginBottom and BodySection to find CourseList
    // expect(wrapper.find(BodySectionWithMarginBottom).dive().find(BodySection).dive().find(CourseList).exists()).toBe(true);
  })

  // verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out
  it('when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
    // Mock the logOut function
    const mockLogOut = jest.fn();

    wrapper.setProps({ logOut: mockLogOut });
    // Mock the global alert function
    // const alert = jest.spyOn(global, 'alert')
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    // mock keydown event with ctrl and h keys
    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true
    });
    window.dispatchEvent(event);

    // check that logOut was called
    expect(mockLogOut).toHaveBeenCalledTimes(1);

    // check that alert was called with msg
    expect(alert).toHaveBeenCalledWith('Logging you out');
  })

  // Verify that the default state for displayDrawer is false
  it('the default state for displayDrawer is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  })

  // Verify that after calling handleDisplayDrawer, the state (displayDrawer) should now be true
  it('after calling handleDisplayDrawer, the state (displayDrawer) should now be true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  })

  // Verify that after calling handleHideDrawer, the state (displayDrawer) should now be false
  it('after calling handleHideDrawer, the state (displayDrawer) should now be false', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  })

  afterEach(() => {
    // Reset the mock functions
    jest.restoreAllMocks();
  })
})

// New test suite for mapStateToProps
describe('mapStateToProps', () => {
  it('returns the right object when passing the state', () => {
    const state = {
      ui: fromJS({
        isUserLoggedIn: true
      })
    };

    const expectedOutput = { isLoggedIn: true };
    expect(mapStateToProps(state)).toEqual(expectedOutput);
  });
});