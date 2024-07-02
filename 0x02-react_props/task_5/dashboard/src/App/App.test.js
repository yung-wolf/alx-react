import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

// Renders the App without crashing
it('renders without crashing', () => {
  shallow(<App />);
})

// verify that App renders a div with the class App-header
it('renders a div with the class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-header').length).toEqual(1);
})

// verify that App renders a div with the class App-body
it('renders a div with the class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-body').length).toEqual(1);
})

// verify that App renders a div with the class App-footer
it('renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-footer').length).toEqual(1);
})

// verify that App contains a Notifications component
it('contains Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Notification).exists()).toBe(true);
})

// verify that App contains a Header component
it('contains Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).exists()).toBe(true);
})

// verify that App contains a Login component
it('contains Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Login).exists()).toBe(true);
})

// verify that App contains a Footer component
it('contains Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer).exists()).toBe(true);
})

// Add a test to check that CourseList is not displayed
it('CourseList is not displayed', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('CourseList').exists()).toBe(false);
})

// When isLoggedIn is true, the first one should verify that the Login component is not included.
it('Login component is not included when isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.find('Login').exists()).toBe(false);
})

// The second one should verify that the CourseList component is included
it('CourseList component is included when isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.find('CourseList').exists()).toBe(true);
})
